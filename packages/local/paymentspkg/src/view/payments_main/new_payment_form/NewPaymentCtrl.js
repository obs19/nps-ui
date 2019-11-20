Ext.define('payments.view.payments_main.new_payment_form.NewPaymentCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.new_payment-ctrl',

    onCancelClick: function () {
        var form = this.getView().getForm();
        form.reset();
    },

    onPayClick: function (cmp) {
        let me = this;
        let form = this.getView().getForm();
        //TODO uncomment
        // if (!form.isValid()) return;
        let msg = '';
        if (this.getView().getComponent('addToBasketId').lastValue === 'true'){
            msg = Translation.newPaymentFormMsgConfirmAddToBasket;
        } else {
            msg = Translation.newPaymentFormMsgConfirmPay;
        }
        Ext.Msg.confirm('', msg,
            function (choice) {
                if (choice === 'yes') {
                    form.submit({
                        success: function (form, response) {
                            Ext.Msg.alert('', response.result.msg);
                            form.reset();
                            // let container = cmp.up('[compGoal="paymentCreateAndHistoryForm"]');
                            // let lastHistStore = container.down('[itemId="paymentsLastHistForm"]').getView().getStore();
                            // lastHistStore.reload();
                            let fn = me.getView().getConfigParams().callbackAfterSuccessCommit;
                            fn.call(me);
                        },
                        failure: function (form, response) {
                            Ext.Msg.alert('Error', Translation.newPaymentFormMsgError);
                        }
                    });
                }
            }
        );
    },

    onAddInBasketCheck: function(){
        var btnPay = this.getView().lookupReference('payBtn');
        if (btnPay.getText() === Translation.newPaymentFormBtnPay){
            btnPay.setText(Translation.newPaymentFormBtnAddToBasket);
            btnPay.setIconCls('x-fa fa-shopping-basket');
            this.getView().getComponent('addToBasketId').setValue(true);
        } else {
            btnPay.setText(Translation.newPaymentFormBtnPay);
            this.getView().getComponent('addToBasketId').setValue(false);
            btnPay.setIconCls('x-fa fa-check');
        }
    },

    calcFinalSum: function (elem, isDirty) {
        if (elem.isDirty()){
            this.getView().getComponent('amountTotal').setValue(this.calculateAmountTotal(elem.getValue()));
        }
    },

    calculateAmountTotal: function (val) {
        return val + Translation.newPaymentFormGrivna;
    },

    onPaymentTypeComboChange: function (comp, newVal) {
        this.loadComboStore('registerNameComboId');
    },

    onRegisterNameComboChange: function(comp, newVal){
        this.loadComboStore('paymentActionComboId');
    },

    onPaymentActionComboChange: function (comp, newVal) {
        this.loadComboStore('countryRegionComboId');
    },

    lockCombo: function(compId){
    },

    loadComboStore: function(compId){
        let combo = this.getView().getComponent(compId);
        combo.clearValue();
        combo.setDisabled(false);
        let store = combo.getStore();
        // store.getProxy().setExtraParams({typeOfDict : newVal});
        store.load();
    }

});
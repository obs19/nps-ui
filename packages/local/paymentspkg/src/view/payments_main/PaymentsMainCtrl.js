Ext.define('payments.view.payments_main.PaymentsMainCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.payments-main-ctrl',
    // mixins:['TopCall.view.common.CommonFormEditMixin']

    fnAfterRenderer: function(comp){
        let newPaymentForm = this.getView().getReferences().newPaymentFormRef;
        let lastHistForm = this.getView().getReferences().paymentLastHistRef;
        let npfConfigParams = newPaymentForm.getConfigParams();
        npfConfigParams.callbackAfterSuccessCommit = function () {
            let lastHistStore = lastHistForm.getView().getStore();
            lastHistStore.reload();
        };
    }

});
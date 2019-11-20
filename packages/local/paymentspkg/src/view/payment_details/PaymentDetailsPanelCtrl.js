Ext.define('payments.view.payment_details.PaymentDetailsPanelCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.payment_detail_form-ctrl',
    mixins:['payments.view.common.CommonFormEditMixin'],


    onConfigParamsChangeListener: function(view, params){
        let me = this;
        Ext.Ajax.request({
            url: PaymentsConfig.restAPIUrl + '/payment',
            method: 'GET',
            params: {
                id: params
            },
            success: function (response) {
                me.getViewModel().set('rec', Ext.decode(response.responseText));
            },
            failure: function (response) {
                Ext.Msg.alert('Error', response.responseText);
            }
        });
    },


    paymentDetailPanelDateRenderer: function(val){
        return Ext.util.Format.date(new Date(val), PaymentsConfig.dateTimeFormat)
    },


});
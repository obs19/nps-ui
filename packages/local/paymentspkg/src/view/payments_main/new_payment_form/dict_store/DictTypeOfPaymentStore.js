Ext.define('payments.view.payments_main.new_payment_form.dict_store.DictTypeOfPaymentStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dict_typeofpayment_store',
    model: 'payments.model.Dictionary',
    requires: [
        'payments.model.Dictionary'
    ],
    pageSize: 0,
    proxy: {
        type: 'ajax',
        url: PaymentsConfig.restAPIUrl + '/dictionary',
        reader: {
            type: 'json'
        },
        extraParams: {
            dictType: 'DictTypeOfPayment'
        }
    },
    autoLoad: true
});
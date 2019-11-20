Ext.define('payments.view.payments_main.new_payment_form.PaymentLastHistoryStore', {
    extend: 'Ext.data.Store',
    alias: 'store.payment-last-history-store',
    model: 'payments.model.PaymentLastHistory',
    requires: [
        'payments.model.PaymentLastHistory'
    ],
    pageSize: 0,
    proxy: {
        type: 'ajax',
        url: PaymentsConfig.restAPIUrl + '/payment/last-history',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
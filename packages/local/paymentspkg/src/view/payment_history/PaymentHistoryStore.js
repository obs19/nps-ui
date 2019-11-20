Ext.define('payments.view.payment_history.PaymentHistoryStore', {
    extend: 'Ext.data.Store',
    alias: 'store.payment-history-store',
    model: 'payments.model.PaymentHistory',
    requires: [
        'payments.model.PaymentHistory'
    ],
    pageSize: 13,
    proxy: {
        type: 'ajax',
        // url: PaymentsConfig.restAPIUrl + '/payment/getHistoryPaging',
        url: PaymentsConfig.restAPIUrl + '/payment/history',
        reader: {
            type: 'json',
            // rootProperty: 'payments',
            rootProperty: 'items',
            totalProperty: 'totalCount'
        }
    },
    // autoLoad: {start: 0, limit: 11},
});
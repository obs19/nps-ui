Ext.define('payments.model.PaymentLastHistory', {
    extend: 'payments.model.Base',
    entityName: 'payment-last-history',

    fields: [
        {
            name: 'id',
            critical: true
        },
        {
            name: 'clientName',
            type: 'string'
        },
        {
            name: 'recipient',
            type: 'string'
        },
        {
            name: 'completedDate',
            type: 'string'
        },
        {
            name: 'amount',
            type: 'string'
        }
    ]
});
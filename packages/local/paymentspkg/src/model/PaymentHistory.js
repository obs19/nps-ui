Ext.define('payments.model.PaymentHistory', {
    extend: 'payments.model.Base',
    entityName: 'payment-history',

    fields: [
        {
            name: 'id',
            critical: true
        },
        {
            name: 'recipientFullName',
            type: 'string'
        },
        {
            name: 'clientName',
            type: 'string'
        },
        {
            name: 'creationDate',
            type: 'date'
        },
        {
            name: 'completedDate',
            type: 'date'
        },
        {
            name: 'status',
            type: 'string'
        },
        {
            name: 'amount',
            type: 'number'
        }
    ]
});
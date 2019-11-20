Ext.define('payments.model.PaymentDictionary', {
    extend: 'payments.model.Base',
    entityName: 'payment-dictionary',

    fields: [
        {
            name: 'id',
            critical: true
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'extId',
            type: 'string'
        },
        {
            name: 'ordinal',
            type: 'integer'
        },
        {
            name: 'description',
            type: 'string'
        }
    ]
});

Ext.define('payments.model.Dictionary', {
    extend: 'payments.model.Base',
    entityName: 'dictionary',

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
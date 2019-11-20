Ext.define('payments.model.User', {
    extend: 'payments.model.Base',
    entityName: 'user',

    fields: [
        {
            name: 'id',
            critical: true
        },
        {
            name: 'login',
            type: 'string'
        },
        {
            name: 'pass',
            type: 'string'
        },
        {
            name: 'fullName',
            type: 'string'
        },
        {
            name: 'status',
            type: 'string'
        }
        // TODO add: List<Roles>, Enum Status(active, inactive, deleted)

        // {
        //     name: 'amount',
        //     type: 'number'
        // },
        // {
        //     name: 'completedDate',
        //     type: 'date'
        // }
    ]
});
Ext.define('payments.model.Payment', {
    extend: 'payments.model.Base',
    entityName: 'payment',

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
            name: 'clientITN',
            type: 'string'
        },
        {
            name: 'dictTypeOfPayment',
            type: 'string'
        },
        {
            name: 'dictRegisterName',
            type: 'string'
        },
        {
            name: 'dictPaymentAction',
            type: 'string'
        },
        {
            name: 'dictCountryRegion',
            type: 'string'
        },
        {
            name: 'customPayeeDetails',
            type: 'string'
        },
        {
            name: 'recipient',
            type: 'string'
        },
        {
            name: 'amount',
            type: 'number'
        },
        //payment info
        {
            name: 'creationDate',
            type: 'date'
        },
        {
            name: 'postponedDate',
            type: 'date'
        },
        {
            name: 'completedDate',
            type: 'date'
        }
    ]
});
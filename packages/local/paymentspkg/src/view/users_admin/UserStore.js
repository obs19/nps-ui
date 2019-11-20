Ext.define('payments.view.users_admin.UserStore', {
    extend: 'Ext.data.Store',
    alias: 'store.user-store',
    model: 'payments.model.User',
    requires: [
        'payments.model.User'
    ],
    pageSize: 13,
    proxy: {
        type: 'ajax',
        url: PaymentsConfig.restAPIUrl + '/user/list',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'totalCount'
        }
    },
    // autoLoad: {start: 0, limit: 11},
});
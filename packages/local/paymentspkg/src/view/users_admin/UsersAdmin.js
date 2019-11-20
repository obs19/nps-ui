Ext.define('payments.view.users_admin.UsersAdmin', {
    extend: 'Ext.grid.Panel',
    xtype: 'users-admin',
    controller: 'users_admin-ctrl',
    viewModel: 'users_admin-model',
    // bodyPadding: 25,
// html: '<b>Some text for ytest</b>'
// title: 'Container Panel',


    // extend: 'Ext.grid.Panel',
    // xtype: 'payment-history',
    // controller: 'payment_history-ctrl',
    // viewModel: {type: 'payment_history-model'},
    // bodyPadding: 5,
    // scrollable: false,
    requires: [
        // 'Ext.grid.column.Widget',
        'Ext.form.field.Date',
        'payments.view.users_admin.UserStore',
        'Ext.toolbar.Paging',
        'Common.view.AppLinkButton'
    ],

    autoLoad: true,
    store: {type: 'user-store'},

    columns: [
        {
            // hidden: true,
            text: 'id',
            dataIndex: 'id',
            width: 60
        },
        {
            text: Translation.userPanelHeaderFullName,
            dataIndex: 'fullName',
            flex: 1,
            titleAlign: 'center',
            renderer: 'onFullNameRenderer'
        },
        {
            text: Translation.userPanelHeaderLogin,
            dataIndex: 'login',
            align: 'center',

            width: 250
        },
        {
            text: Translation.userPanelHeaderPassword,
            dataIndex: 'pass',
            align: 'center',

            width: 250
        },
        {
            text: Translation.userPanelHeaderStatus,
            dataIndex: 'status',
            align: 'center',
            width: 150,
            renderer: 'onStatusRenderer'

        },
        // {
        //     text: '',
        //     tooltip: 'block/unblock current user',
        //     sortable: false,
        //     width: 120,
        //     xtype: 'widgetcolumn',
        //     widget: {
        //         xtype: 'linkbutton',
        //         textAlign: 'center',
        //         bind: {
        //             text: '(Un)Block',
        //             // text: '{record.title}',
        //             payload: '{record}'
        //         },
        //         handler: 'onButtonBlockClick'
        //     }
        // },
        // {
        //     text: Translation.paymentsHistoryPanelClientName,
        //     dataIndex: 'clientName',
        //     reference: 'clientNameField',
        //     flex: 1
        // },
        //
        // {
        //     text: Translation.paymentsHistoryPanelCompletedDate,
        //     width: 150,
        //     dataIndex: 'completedDate',
        //     formatter: 'date("d/m/Y H:i")'
        // },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-lock',
                    tooltip: Translation.userPanelTooltipChangeStatusBtn,
                    handler: 'onButtonChangeStatusClick',
                    scope: this.controller
                }
            ]
        },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-cut',
                    tooltip: Translation.userPanelTooltipDeleteBtn,
                    handler: 'onBtnUserDeleteClick',
                    scope: this.controller
                }
            ]
        },
        {
            xtype: 'actioncolumn',
            width: 80,
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-edit',
                    tooltip: Translation.userPanelTooltipUpdateBtn,
                    handler: 'onBtnUserUpdateClick'
                }
            ]
        },
        {
            xtype: 'actioncolumn',
            width: 80,
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-info-circle',
                    tooltip: Translation.userPanelTooltipInfoBtn,
                    handler: 'onBtnUserInfoClick',
                    scope: this.controller
                }
            ]
        },

    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [ '->',
                {
                    iconCls: 'x-fa fa-plus',
                    text: Translation.userPanelCreateUserBtn,
                    scope: this.controller,
                    handler: 'onBtnAddUserClick'
                },
                // {
                //     iconCls: 'x-fa fa-cut',
                //     text: 'Delete',
                //     disabled: true,
                //     itemId: 'delete',
                //     scope: this.controller,
                //     // handler: this.onDeleteClick
                // }
            ]
        },

        {
            xtype: 'pagingtoolbar',
            dock: 'bottom'
        }
    ],
    listeners: {
        // rowmousedown: 'showToolTip' OK
        // cellclick: 'showToolTip'
    }

});
Ext.define('payments.view.payment_history.PaymentHistory', {
    extend: 'Ext.grid.Panel',
    xtype: 'payment-history',
    controller: 'payment_history-ctrl',
    viewModel: {type: 'payment_history-model'},
    // bodyPadding: 5,
    // scrollable: false,
    requires: [
        // 'Ext.grid.column.Widget',
        'Ext.form.field.Date',
        'payments.view.payment_history.PaymentHistoryStore',
        'Ext.toolbar.Paging'
    ],

    autoLoad: true,
    store: {type: 'payment-history-store'},

    columns: [
        {
            // hidden: true,
            text: 'id',
            dataIndex: 'id',
            width: 40
        },
        {
            text: Translation.paymentsHistoryPanelRecipientFullName,
            dataIndex: 'recipientFullName',
            flex: 2,
            titleAlign: 'center',
            reference: 'recipientFullNameField'
        },
        {
            text: Translation.paymentsHistoryPanelCreationDate,
            width: 150,
            dataIndex: 'creationDate',
            formatter: 'date("d/m/Y H:i")'
        },
        {
            text: Translation.paymentsHistoryPanelClientName,
            dataIndex: 'clientName',
            reference: 'clientNameField',
            flex: 1
        },
        {
            text: Translation.paymentsHistoryPanelAmount,
            dataIndex: 'amount',
            width: 120,
            align: 'right',
            componentCls: 'bold-input'
        },
        {
            text: Translation.paymentsHistoryPanelCompletedDate,
            width: 150,
            dataIndex: 'completedDate',
            formatter: 'date("d/m/Y H:i")'
        },
        {
            // text: Translation.paymentsHistoryPanelActionInfo,
            xtype: 'actioncolumn',
            width: 50,
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-info-circle',
                    tooltip: 'info about payment',
                    handler: 'onBtnInfoClick'
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom'
        }
    ],
    listeners: {
        // rowmousedown: 'showToolTip' OK
        cellclick: 'showToolTip'
    }

});
Ext.define('payments.view.payments_main.payments_history_form.PaymentLastHistory', {
    extend: 'Ext.grid.Panel',
    xtype: 'payment-last-history-grid',
    controller: 'payment-last-history-ctrl',
    viewModel: 'payment-last-history-model',
    title: Translation.lastPaymentHistoryPanelTitle,
    titleAlign: 'center',
    padding: '0 0 0 10',
    requires:[],

    store: {
        type: 'payment-last-history-store'
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id',
            hidden: true
        },
        {
            text: Translation.lastPaymentHistoryPanelCustomerName,
            width: 150,
            dataIndex: 'clientName'
        },
        {
            text: Translation.lastPaymentHistoryPanelDate,
            width: 150,
            dataIndex: 'completedDate',
            formatter: 'date("d/m/Y H:i")'
        },
        {
            text: Translation.lastPaymentHistoryPanelAmount,
            width: 120,
            dataIndex: 'amount',
            sortable: true
        },
        {
            text: Translation.lastPaymentHistoryPanelRecipient,
            flex: 1,
            dataIndex: 'recipient'
        }
    ]

});
Ext.define('payments.view.payments_main.PaymentsMain', {
    extend: 'Ext.panel.Panel',
    xtype: 'payments-main',
    controller: 'payments-main-ctrl',
    viewModel: 'payments-main-model',
    bodyPadding: 25,
    scrollable: true,

    // html: '<b>Some text for ytest</b>'
    // title: 'Container Panel',

    requires: [
        'payments.view.payments_main.new_payment_form.NewPayment'
    ],
    compGoal: 'paymentCreateAndHistoryForm',
    layout: 'column',
    items: [
        {
            xtype: 'new-payment_form',
            reference: 'newPaymentFormRef',
            bodyPadding: 5,
            columnWidth: 0.5
        },
        {
            xtype: 'payment-last-history-grid',
            reference: 'paymentLastHistRef',
            itemId: 'paymentsLastHistForm',
            bodyPadding: 5,
            columnWidth: 0.5
        },

        // {
        //     xtype: 'panel',
        //     title: Translation.historyPaymentsFormTitle,
        //     // height: 100,
        //     bodyPadding: 10,
        //     columnWidth: 0.5,
        //     items: [
        //         {
        //             xtype: 'payment-last-history-grid'
        //         }
        //     ]
        // },
        // {
        //
        // }

    ],
    listeners: {
        afterrender: 'fnAfterRenderer',
        scope: this.controller
    }
});
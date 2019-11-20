Ext.define('payments.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    controller: 'main-ctrl',
    viewModel: {type: 'main-model'},

    requires: [
        'payments.view.payments_main.PaymentsMain',
        'payments.view.basket.BasketMain',
        'payments.view.users_admin.UsersAdmin',
        'payments.view.payments_main.new_payment_form.PaymentLastHistoryStore',
        'payments.view.payments_main.new_payment_form.dict_store.DictTypeOfPaymentStore',
        'payments.view.payments_main.new_payment_form.dict_store.DictRegisterNameStore',
        'payments.view.payments_main.new_payment_form.dict_store.DictPaymentActionStore',
        'payments.view.payments_main.new_payment_form.dict_store.DictCountryRegionStore',
        'Ext.plugin.LazyItems'
    ],

    layout: 'border',
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            items: [
                {
                    disabled: true,
                    iconCls: 'x-fa fa-home'
                }, {
                    xtype: 'component',
                    html: 'Notary Payment System',
                    tooltip: 'v 6.123'
                },
                '->',
                {
                    iconCls: 'x-fa fa-user',
                    menu: [
                        {
                            xtype: 'button',
                            text: 'Logout'
                        }
                    ]
                }
            ]
        }, {
            xtype: 'tabpanel',
            region: 'center',
            reference: 'mainTabPanel',
            items: [
                {
                    title: Translation.newPaymentFormTitle,
                    iconCls: 'x-fa fa-check',
                    itemId: 'newPaymentTab',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'payments-main'
                        }
                    ],
                    listeners:{
                        activate: 'onActivateNewPaymentTab',
                        scope: this.controller
                    }
                },
                {
                    title: Translation.basketTabTitle,
                    iconCls: 'x-fa fa-shopping-cart',
                    itemId: 'basketTab',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'basket-main'
                        }
                    ],
                    listeners:{
                        activate: 'onActivateBasketTab',
                        scope: this.controller
                    }
                },
                {
                    title: Translation.paymentsHistoryTabTitle,
                    iconCls: 'x-fa fa-list',
                    itemId: 'historyTab',
                    layout: 'fit',
                    plugins: {
                        lazyitems: {
                            items: [{
                                xtype: 'payment-history'
                            }]
                        }
                    },
                    listeners:{
                        activate: 'onActivateHistoryTab',
                        scope: this.controller
                    }
                },
                //************************************
                {
                    title: Translation.userTabTitle,
                    iconCls: 'x-fa fa-users',
                    itemId: 'usersTab',
                    layout: 'fit',
                    plugins: {
                        lazyitems: {
                            items: [{
                                xtype: 'users-admin'
                            }]
                        }
                    },
                    // listeners:{
                    //     activate: 'onActivateHistoryTab',
                    //     scope: this.controller
                    // }
                }
            ]
        }
    ]
});
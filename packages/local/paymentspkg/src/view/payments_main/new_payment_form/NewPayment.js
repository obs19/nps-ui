Ext.define('payments.view.payments_main.new_payment_form.NewPayment', {
    extend: 'Ext.form.Panel',
    xtype: 'new-payment_form',
    controller: 'new_payment-ctrl',
    viewModel: {
        type:'new_payment-model'
    },
    bodyPadding: 10,
    title: Translation.newPaymentFormTitle,
    titleAlign: 'center',
    url: PaymentsConfig.restAPIUrl + '/payment/save' + PaymentsConfig.locale,
    requires:[],
    config: {
      configParams: {
          callbackAfterSuccessCommit: null
      }
    },

    items: [
        // --------------- Client ---------------
        {
            xtype: 'label',
            style: {'font-weight':'bold'},
            html: Translation.newPaymentFormClientLabel
        },
        {
            xtype: 'textfield',
            name: 'clientName',
            fieldLabel: Translation.newPaymentFormClientName,
            allowBlank: false,
            width: '99%'
        },
        {
            xtype: 'textfield',
            name: 'clientITN',
            fieldLabel: Translation.newPaymentFormClientITN,
            allowBlank: false,
            width: '99%'
        },
        {
            xtype: 'label',
            html: '</br><hr/></br>'
        },
        // --------------- Recipient ---------------
        {
            xtype: 'label',
            style: {'font-weight':'bold'},
            html: Translation.newPaymentFormRecipientLabel
        },
        {
            xtype: 'combobox',
            fieldLabel: Translation.newPaymentFormDictTypeOfPayment,
            itemId:'typeOfPaymentComboId',
            publishes: 'value',
            editable: false,
            forceSelection: true,
            valueField: 'id',
            displayField: 'name',
            anchor: '100% -15',
            store: {
                type: 'dict_typeofpayment_store'
            },
            minChars: 0,
            queryMode: 'local',
            listeners: {
                change: 'onPaymentTypeComboChange'
            },
            name: 'dictTypeOfPayment',
            allowBlank: false

        },
        {
            xtype: 'combobox',
            fieldLabel: Translation.newPaymentFormDictRegisterName,
            itemId:'registerNameComboId',
            publishes: 'value',
            editable: false,
            forceSelection: true,
            disabled: true,
            valueField: 'id',
            displayField: 'name',
            anchor: '100% -15',
            store: {
                type: 'dict_registername_store'
            },
            minChars: 0,
            queryMode: 'local',
            listeners: {
                change: 'onRegisterNameComboChange'
            },
            name: 'dictRegisterName'
        },
        {
            xtype: 'combobox',
            fieldLabel: Translation.newPaymentFormDictPaymentAction,
            itemId:'paymentActionComboId',
            publishes: 'value',
            editable: false,
            forceSelection: true,
            disabled: true,
            valueField: 'id',
            displayField: 'name',
            anchor: '100% -15',
            store: {
                type: 'dict-paymentaction-store'
            },
            minChars: 0,
            queryMode: 'local',
            listeners: {
                change: 'onPaymentActionComboChange'
                // select: 'onPaymentTypeComboChose',
            },
            name: 'dictPaymentAction'
        },
        {
            xtype: 'combobox',
            fieldLabel: Translation.newPaymentFormDictCountryRegion,
            itemId:'countryRegionComboId',
            publishes: 'value',
            editable: false,
            forceSelection: true,
            disabled: true,
            valueField: 'id',
            displayField: 'name',
            anchor: '100% -15',
            store: {
                type: 'dict-countryregion-store'
            },
            minChars: 0,
            queryMode: 'local',
            listeners: {
                // change: 'onCountryRegionComboChange'
            },
            name: 'dictCountryRegion'
        },
        {
            xtype: 'textfield',
            name: 'recipient',
            fieldLabel: Translation.newPaymentFormRecipient,
            allowBlank: false,
            width: '99%'
        },
        {
            xtype: 'fieldset',
            flex: 1,
            title: Translation.newPaymentFormCustomPayeeDetailsHeader,
            checkboxToggle: true,
            // defaultType: 'checkbox',
            collapsed: true,
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                // hideEmptyLabel: false
            },
            items: [{
                xtype: 'textareafield',
                name: 'customPayeeDetails',
                // fieldLabel: 'Payee Details'
            }]
        },

        // --------------- Amount -------------------
        {
            xtype: 'label',
            html: '</br><hr/></br>',
            // style: 'color: red; padding-top: 35px'
        },
        {
            xtype: 'label',
            style: {'font-weight':'bold'},
            html: Translation.newPaymentFormAmountLabel
        },
        {
            xtype: 'numberfield',
            name: 'amount',
            allowBlank: false,
            fieldLabel: Translation.newPaymentFormAmount,
            width: '50%',
            fieldStyle: 'font-size: 1.5em; font-weight: bold; letter-spacing: 2px; ',

            listeners: {
                focusleave: 'calcFinalSum'
                // dirtychange : 'calcSum'
            }
            // allowBlank: false
        },
        {
            xtype: 'displayfield',
            itemId: 'amountTotal',
            style: {'font-weight':'bold'},
            fieldLabel: Translation.newPaymentFormAmountTotal,
            value: ''
        },

        //  ---------------  Confirm action ---------------
        {
            xtype: 'label',
            style: {'font-weight':'bold'},
            html: Translation.newPaymentFormConfirmLabel
        },
        {
            xtype: 'label',
            html: '<hr/>'
        },
        {
            xtype: 'checkbox',
            name : 'inBasket',
            fieldLabel: Translation.newPaymentFormAddToBasket,
            listeners: {
                change: 'onAddInBasketCheck'
            }
        },
        {
            xtype: 'hiddenfield',
            itemId: 'addToBasketId',
            name: 'addToBasket',
            value: false
        }
    ],
    buttonAlign: 'center',
    buttons: [
        {
            text: Translation.newPaymentFormBtnClearForm,
            iconCls: 'x-fa fa-undo',
            handler: 'onCancelClick'
        },
        {
            reference: 'payBtn',
            text: Translation.newPaymentFormBtnPay,
            iconCls: 'x-fa fa-check',
            handler: 'onPayClick'
        }
    ]
});
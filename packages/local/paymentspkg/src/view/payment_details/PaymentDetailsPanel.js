Ext.define("payments.view.payment_details.PaymentDetailsPanel", {
    extend: 'Ext.form.Panel',
    // xtype: 'script_ic_form',
    xtype: 'payment_detail_form',
    controller: 'payment_detail_form-ctrl',
    viewModel: {
        type: 'payment_detail_form-model'
    },
    // reference: 'script_ic_form-panel',
    config:{
        configParams:{
            //id:null,
        }
    },
    updateConfigParams:function(newVal, oldVal){
        this.fireEvent('configparamschange', this, newVal, oldVal);
    },
    reference: 'payment_details_panel',
    width: 600,
    bodyPadding: 10,
    // modal: true,
    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            bind: '{rec.id}'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelClientName,
            name: 'clientName',
            bind: {
                hidden: '{!rec.clientName}',
                value: '{rec.clientName}'
            },
            // anchor: '100%',
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelClientITN,
            name: 'clientITN',
            bind: {
                hidden: '{!rec.clientITN}',
                value: '{rec.clientITN}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelDictTypeOfPayment,
            name: 'dictTypeOfPayment',
            bind: {
                hidden: '{!rec.dictTypeOfPayment}',
                value: '{rec.dictTypeOfPayment}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelDictRegisterName,
            name: 'dictRegisterName',
            bind: {
                hidden: '{!rec.dictRegisterName}',
                value: '{rec.dictRegisterName}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelDictPaymentAction,
            name: 'dictPaymentAction',
            bind: {
                hidden: '{!rec.dictPaymentAction}',
                value: '{rec.dictPaymentAction}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelDictCountryRegion,
            name: 'dictCountryRegion',
            bind: {
                hidden: '{!rec.dictCountryRegion}',
                value: '{rec.dictCountryRegion}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.newPaymentFormCustomPayeeDetailsLabel,
            name: 'customPayeeDetails',
            bind: {
                hidden: '{!rec.customPayeeDetails}',
                value: '{rec.customPayeeDetails}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelRecipient,
            name: 'recipient',
            bind: {
                hidden: '{!rec.recipient}',
                value: '{rec.recipient}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelAmount,
            name: 'amount',
            bind: {
                hidden: '{!rec.amount}',
                value: '{rec.amount}'
            },
            // anchor: '100% -50'
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelCreationDate,
            name: 'creationDate',
            bind: {
                hidden: '{!rec.creationDate}',
                value: '{rec.creationDate}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label',
            renderer: 'paymentDetailPanelDateRenderer'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelPostponedDate,
            name: 'postponedDate',
            bind: {
                hidden: '{!rec.postponedDate}',
                value: '{rec.postponedDate}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label',
            renderer: 'paymentDetailPanelDateRenderer'
        },
        {
            xtype: 'displayfield',
            fieldLabel: Translation.paymentInfoPanelCompletedDate,
            name: 'completedDate',
            bind: {
                hidden: '{!rec.completedDate}',
                value: '{rec.completedDate}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label',
            renderer: 'paymentDetailPanelDateRenderer'
        }

    ],
    dockedItems:[
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: { pack: 'end' },
            items: [
                {
                    xtype: 'button',
                    text: 'Close',
                    iconCls: 'x-fa fa-close',
                    handler: 'onBtCancelListener'
                }
            ]
        }
    ],
    listeners:{
        configparamschange: 'onConfigParamsChangeListener'
    }
});
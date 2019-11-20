Ext.define("payments.view.users_admin.user_update.UserUpdateForm", {
    extend: 'Ext.form.Panel',
    xtype: 'user_create_update_form',
    controller: 'user_update_form-ctrl',
    viewModel: {
        type: 'user_update_form-model'
    },
    url: PaymentsConfig.restAPIUrl + '/user/update',
    method: 'POST',

    config:{
        configParams:{
            callbackAfterSuccessSubmit: null,
            isUpdateForm: null
        }
    },
    updateConfigParams:function(newVal, oldVal){
        this.fireEvent('configparamschange', this, newVal, oldVal);
    },
    width: 600,
    bodyPadding: 10,
    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            bind: {
                hidden: '{!rec.id}',
                value: '{rec.id}'
            }
        },
        // {
        //     xtype: 'textfield',
        //     fieldLabel: 'ID',
        //     name: 'id',
        //     bind: {
        //         hidden: '{!rec.id}',
        //         value: '{rec.id}'
        //     },
        //     labelWidth: '250',
        //     labelCls: 'window-info-label',
        // },
        {
            xtype: 'textfield',
            fieldLabel: Translation.userPanelUpdateWndLogin,
            name: 'login',
            bind: {
                hidden: '{!rec.login}',
                value: '{rec.login}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'textfield',
            fieldLabel: Translation.userPanelUpdateWndPassword,
            name: 'pass',
            bind: {
                hidden: '{!rec.pass}',
                value: '{rec.pass}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },
        {
            xtype: 'textfield',
            fieldLabel: Translation.userPanelUpdateWndFullName,
            name: 'fullName',
            bind: {
                hidden: '{!rec.fullName}',
                value: '{rec.fullName}'
            },
            labelWidth: '250',
            labelCls: 'window-info-label'
        },

    ],
    dockedItems:[
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: { pack: 'end' },
            items: [
                {
                    reference: 'updateUserBtn',
                    text: Translation.commonSave,
                    iconCls: 'x-fa fa-edit',
                    handler: 'onUpdateUserClick',
                    scope: this.controller
                },
                {
                    xtype: 'button',
                    text: Translation.commonCancel,
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
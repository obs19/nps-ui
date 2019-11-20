Ext.define("payments.view.users_admin.user_info.UserInfoPanel", {
    extend: 'Ext.form.Panel',
    xtype: 'user_info_panel',
    controller: 'user_info_panel-ctrl',
    viewModel: {
        type: 'user_info_panel-model'
    },
    config:{
        configParams:{
        }
    },
    updateConfigParams:function(newVal, oldVal){
        this.fireEvent('configparamschange', this, newVal, oldVal);
    },
    // reference: 'user_info_panel',
    width: 600,
    bodyPadding: 10,
    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            bind: '{rec.id}'
        },
        {
            xtype: 'displayfield',
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
            xtype: 'displayfield',
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
            xtype: 'displayfield',
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
                    xtype: 'button',
                    text: Translation.commonClose,
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
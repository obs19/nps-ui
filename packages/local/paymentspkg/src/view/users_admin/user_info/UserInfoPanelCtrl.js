Ext.define('payments.view.users_admin.user_info.UserInfoPanelCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user_info_panel-ctrl',
    mixins:['payments.view.common.CommonFormEditMixin'],


    onConfigParamsChangeListener: function(view, params){
        let me = this;
        Ext.Ajax.request({
            url: PaymentsConfig.restAPIUrl + '/user',
            method: 'GET',
            params: {
                id: params
            },
            success: function (response) {
                me.getViewModel().set('rec', Ext.decode(response.responseText));
            },
            failure: function (response) {
                Ext.Msg.alert('Error', response.responseText);
            }
        });
    },



});
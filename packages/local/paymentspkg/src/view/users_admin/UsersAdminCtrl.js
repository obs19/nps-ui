Ext.define('payments.view.users_admin.UsersAdminCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users_admin-ctrl',

    fnAfterRenderer: function(comp){
    },

    onButtonChangeStatusClick: function(){
        let params = arguments[5].id;
        // let params = btn.getPayload().get('id');
        let me = this;
        Ext.Msg.confirm('', Translation.userPanelChangeStatusMsg,
            function (choice) {
                if (choice === 'yes') {
                    me.fnLockUnlockUser(params);
                }
            }
        );
    },

    fnLockUnlockUser: function(id){
        let me = this;
        Ext.Ajax.request({
            url: PaymentsConfig.restAPIUrl + '/user/changeStatus',
            method: 'POST',
            params: {
                id: id
            },
            scope: this,
            success: this.fnReloadStore,
            failure: this.fnUserFailureMsg
        });
    },


    onFullNameRenderer: function(val,elem,obj){
        let cellVal = '';
        let status = obj.data.status;
        switch (status){
            case 'active' :
                cellVal = val;
                break;
            case 'blocked' :
                cellVal = '<b><span style="color:darkred;">'
                    + '('
                    + Translation.enumUserActivityStatusBlocked
                    + ') '
                    + val
                    + '</span></b>';
                break;
            default:
                cellVal = status;
                break;
        }
        return cellVal;
    },

    onStatusRenderer: function(status){
        let cellVal = '';
        switch (status){
            case 'active' :
                cellVal = Translation.enumUserActivityStatusActive;
                break;
            case 'blocked' :
                cellVal = '<span style="color:darkred;">'
                    + Translation.enumUserActivityStatusBlocked
                    + '</span>';
                break;
            default:
                cellVal = status;
                break;
        }
        return cellVal;
    },

    onBtnAddUserClick: function () {
        let fnOnCancel = function(){
            if (fnOnCancel.wnd){
                fnOnCancel.wnd.close();
            }
        };

        let me = this;
        let fnAfterSubmitForm = function () {
            me.fnReloadStore();
        };

        let createUserForm = Ext.create({
            xtype: 'user_create_update_form',
            title: false,
            configParams:{
                callbackAfterSuccessSubmit: fnAfterSubmitForm,
                isUpdateForm: false
            }});
        createUserForm.getViewModel().setCallbackOnClose(fnOnCancel);

        let panelWindow = new Ext.window.Window({
            title: Translation.userPanelCreateWndTitle,
            titleAlign: 'center',
            header: true,
            scrollable: true,
            resizable: false,
            modal: true,
            closeAction: 'destroy',
            items:[
                createUserForm
            ]
        });
        fnOnCancel.wnd = panelWindow;
        panelWindow.show();

    },

    onBtnUserInfoClick: function () {
        let elem = arguments[5];

        let fnOnCancel = function(){
            if (fnOnCancel.wnd){
                fnOnCancel.wnd.close();
            }
        };

        let editForm = Ext.create({
            xtype: 'user_info_panel',
            title: false,
            configParams:{
                formid: elem.id
            }});
        editForm.getViewModel().setCallbackOnClose(fnOnCancel);

        let panelWindow = new Ext.window.Window({
            title: Translation.userPanelInfoWndTitle,
            titleAlign: 'center',
            header: true,
            scrollable: true,
            resizable: false,
            modal: true,
            closeAction: 'destroy',
            items:[
                editForm
            ]
        });
        fnOnCancel.wnd = panelWindow;
        panelWindow.show();
    },

    onBtnUserUpdateClick: function () {
        let elem = arguments[5];

        let fnOnCancel = function(){
            if (fnOnCancel.wnd){
                fnOnCancel.wnd.close();
            }
        };

        let me = this;
        let fnAfterSubmitForm = function () {
            me.fnReloadStore();
        };

        let editForm = Ext.create({
            xtype: 'user_create_update_form',
            title: false,
            configParams:{
                formid: elem.id,
                callbackAfterSuccessSubmit: fnAfterSubmitForm,
                isUpdateForm: true
            }
        });
        editForm.getViewModel().setCallbackOnClose(fnOnCancel);

        let panelWindow = new Ext.window.Window({
            title: Translation.userPanelUpdateWndTitle,
            titleAlign: 'center',
            header: true,
            scrollable: true,
            resizable: false,
            modal: true,
            closeAction: 'destroy',
            items:[
                editForm
            ]
        });
        fnOnCancel.wnd = panelWindow;
        panelWindow.show();
    },


    onBtnUserDeleteClick: function(){
        let elem = arguments[5];
        let me = this;

        Ext.Msg.confirm('', Translation.userPanelDeleteMsg,
            function (choice) {
                if (choice === 'yes') {
                    Ext.Ajax.request({
                        url: PaymentsConfig.restAPIUrl + '/user/delete',
                        method: 'DELETE',
                        params: {
                            id: elem.id
                        },
                        scope: me,
                        success: me.fnSuccessDeleteUser,
                        failure: me.fnUserFailureMsg
                    });

                }
            }
        );


    },

    fnSuccessDeleteUser: function () {
        console.log('<---- fnSuccessDeleteUser');
        this.fnReloadStore();
    },

    fnUserFailureMsg: function () {
        Ext.Msg.alert('', Translation.userPanelProcessingErrorMsg);
    },

    fnReloadStore: function () {
        this.getView().getStore().reload();

    }

});
Ext.define('payments.view.users_admin.user_update.UserUpdateFormCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user_update_form-ctrl',
    mixins:['payments.view.common.CommonFormEditMixin'],

    onConfigParamsChangeListener: function(view, params){
        let me = this;
        if (params.isUpdateForm){
            Ext.Ajax.request({
                url: PaymentsConfig.restAPIUrl + '/user',
                method: 'GET',
                params: {
                    id: params.formid
                },
                success: function (response) {
                    me.getViewModel().set('rec', Ext.decode(response.responseText));
                },
                failure: function (response) {
                    Ext.Msg.alert('Error', response.responseText);
                }
            });
        } else {
            // some actions when we create user
        }
    },


    onUpdateUserClick: function(){
        let me = this;
        let form = this.getView().getForm();

        Ext.Msg.confirm('', Translation.commonChange,
            function (choice) {
                if (choice === 'yes') {
                    form.submit({
                        success: function (form, response) {
                            let fn = me.getView().getConfigParams().callbackAfterSuccessSubmit;
                            fn.call(me);

                            let callbackOnClose = me.getViewModel().getCallbackOnClose();
                            if (callbackOnClose) {
                                callbackOnClose.call(me);
                            } else {
                                me.getView().destroy();
                            }



                            //***********************
                            // Ext.Msg.alert('', response.result.msg);
                            // form.reset();
                            // let container = cmp.up('[compGoal="paymentCreateAndHistoryForm"]');
                            // let lastHistStore = container.down('[itemId="paymentsLastHistForm"]').getView().getStore();
                            // lastHistStore.reload();
                            // let fn = me.getView().getConfigParams().callbackAfterSuccessCommit;
                            // fn.call(me);
                        },
                        failure: function (form, response) {
                            Ext.Msg.alert('Error', Translation.commonErrorMsg);
                        }
                    });
                }
            }
        );


    },



});
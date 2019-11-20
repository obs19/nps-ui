Ext.define("payments.view.common.CommonFormEditMixin", {
    extend: 'Ext.Mixin',

    onBtSaveListener: function () {
        // var callbackSuccess = this.getViewModel().getCallbackOnSave();
        // var fnClose = this.onBtCancelListener;
        // var glController = this;
        // let rec = this.getViewModel().getEditedRecord();
        // rec.save({
        //     success: function (record, operation) {
        //         if (callbackSuccess) {
        //             callbackSuccess.call(this, record);
        //         }
        //         fnClose.call(glController);
        //     },
        //     failure: function (record, operation) {
        //         Ext.Msg.alert('Error', operation.error.response.responseText);
        //     }
        // });
    },

    onBtCancelListener: function () {
        // console.log('<--- lunch from SUPERCLASS');
        let callbackOnClose = this.getViewModel().getCallbackOnClose();
        if (callbackOnClose) {
            callbackOnClose.call(this);
        } else {
            this.getView().destroy();
        }
    }



});
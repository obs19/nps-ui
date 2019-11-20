Ext.define("payments.view.common.CommonFormEditModelMixin", {
    extend: 'Ext.Mixin',

    setEditedRecord: function (rec) {
        this.set("rec", rec);
    },

    getEditedRecord: function () {
        return this.get("rec");
    },

    setCallbackOnSave: function (fnCallback) {
        this.set("callbackOnSave", fnCallback);
    },

    getCallbackOnSave: function () {
        return this.get("callbackOnSave");
    },

    setCallbackOnClose: function (fnCallback) {
        this.set("callbackOnClose", fnCallback);
    },

    getCallbackOnClose: function () {
        return this.get("callbackOnClose");
    },

    setDisabled: function (disabled) {
        this.set('disabled', disabled);
    },

    getDisabled: function () {
        return this.data.disabled ? this.data.disabled : false;
    },


});
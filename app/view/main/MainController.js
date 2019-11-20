Ext.define('payments.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-ctrl',

    onActivateBasketTab: function (elem) {
        let store = elem.items.items[0].getView().getStore();
        store.reload();
    },

    onActivateHistoryTab: function (elem) {
        let store = elem.items.items[0].getView().getStore();
        store.reload();
    },

    onActivateNewPaymentTab: function (elem) {
      let store = elem.items.items[0].items.items[1].getView().getStore();
      store.reload();
    }
});
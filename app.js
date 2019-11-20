/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'payments',

    requires: [
        'Ext.window.MessageBox',
        'Ext.plugin.Viewport',
        'payments.view.main.Main'
    ],

    mainView: 'payments.view.main.Main',

    init: function () {
        // Ext.enableAriaPanels = false;
        Ext.ariaWarn = Ext.emptyFn;

        // Common.Config.version = "1.0.0.1";
        // Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider({
        //     prefix: 'IPMDASHBOARDSTATE-'
        // }));
        // Ext.Date.firstDayOfWeek = 1;
        // Ext.form.field.Date.prototype.startDay = 1;
    },

    launch: function () {
        // Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
    }
});

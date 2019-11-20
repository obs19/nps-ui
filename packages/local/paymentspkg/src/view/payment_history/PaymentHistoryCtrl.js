Ext.define('payments.view.payment_history.PaymentHistoryCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.payment_history-ctrl',
    mixins:['payments.view.common.CommonFormEditMixin'],


    onBtnInfoClick: function () {
        let elem = arguments[5];

        let fnOnCancel = function(){
            if (fnOnCancel.wnd){
                fnOnCancel.wnd.close();
            }
        };

        let editForm = Ext.create({xtype: 'payment_detail_form',
            title: false, configParams:{formid: elem.id}});
        editForm.getViewModel().setCallbackOnClose(fnOnCancel);

        let panelWindow = new Ext.window.Window({
            title: Translation.paymentInfoPanelTitle,
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

    // showToolTip: function (elem, record, tr, rowIndex, e, eOpts) {
    showToolTip: function (elem, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        let me = this;
        Ext.create('Ext.tip.ToolTip', {
            target: elem.el,
            delegate: elem.itemSelector,
            trackMouse: true,
            renderTo: Ext.getBody(),
            listeners: {
                beforeshow: function updateTipBody(tip) {
                    tip.update(me.formatToolTipText(record));
                }
            }
        });
    },

    formatToolTipText: function(record){
        return  '<p><b>' + Translation.paymentInfoPanelRecipient + ':  </b><br/>'
            + record.data.recipientFullName + '</p>' +
            '<p><b>' + Translation.paymentInfoPanelClientName + ':  </b><br/>'
            + record.data.clientName + '</p>';
    }

});


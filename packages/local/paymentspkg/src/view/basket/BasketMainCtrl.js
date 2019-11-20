Ext.define('payments.view.basket.BasketMainCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.basket-main-ctrl',


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

    onButtonPayClick: function (btn) {
        let params = btn.getPayload().get('id');
        let arr = [];
        arr.push(params);
        let me = this;
        Ext.Msg.confirm('', Translation.basketPanelMsgSaveConfirm,
            function (choice) {
                if (choice === 'yes') {
                    me.fnSubmitPaymentsList(arr);
                }
            }
        );
    },

    fnSubmitPaymentsList: function (items) {
        Ext.Ajax.request({
            url: PaymentsConfig.restAPIUrl + '/payment/basket/save',
            method: 'POST',
            params: {
                idList: items
            },
            scope: this,
            success: this.fnSucessSavedPayments,
            failure: this.fnPayFailureMsg
        });
    },

    fnSucessSavedPayments: function (response) {
        this.fnPaySuccessMsg();
        this.fnReloadGridStore();
    },

    fnPaySuccessMsg: function () {
        Ext.Msg.alert('', Translation.basketPanelMsgSaveSuccess);
    },

    fnPayFailureMsg: function () {
        Ext.Msg.alert('', Translation.basketPanelMsgSaveError);
    },

    onBtnPaySelectedClick: function () {
        let selectedItems = this.fnGetSelectedItemsIDs();
        if (selectedItems.length < 1) {
            Ext.Msg.alert('', Translation.basketPanelMsgSelectPayment);
        } else {
            let me = this;
            Ext.Msg.confirm('', Translation.basketPanelMsgSelectPaymentConfirm,
                function (choice) {
                    if (choice === 'yes') {
                        me.fnSubmitPaymentsList(selectedItems);
                    }
                }
            );
        }
    },

    fnGetSelectedItemsIDs: function () {
        let storeIds = [];
        let selectedItems = this.getView().getSelection();
        Ext.Array.each(selectedItems, function (item, index, srcArray) {
            storeIds.push(item.id);
        });
        return storeIds;
    },

    onBtnSubmitAll: function () {
        let idList = this.fnGetAllStoreItemsId();
        if (idList.length < 1) {
            Ext.Msg.alert('', Translation.basketPanelMsgAllPaymentNothingToSubmit);
        } else {
            let me = this;
            Ext.Msg.confirm('', Translation.basketPanelMsgAllPaymentConfirmSubmit,
                function (choice) {
                    if (choice === 'yes') {
                        me.fnSubmitPaymentsList(idList);
                    }
                }
            );
        }
    },

    fnGetAllStoreItemsId: function () {
        let storeIds = [];
        let store = this.getViewModel().getGridStore();
        store.each(function (record) {
            storeIds.push(record.id);
        });
        return storeIds;
    },

    fnReloadGridStore: function () {
        this.getViewModel().getGridStore().reload();
    },

    onBtnDeleteClick: function () {
        let elem = arguments[5].id;
        let me = this;
        Ext.Msg.confirm('', Translation.basketPanelMsgDelete,
            function (choice) {
                if (choice === 'yes') {
                    me.fnDeletePayment(elem);
                }
            }
        );
    },

    fnDeletePayment: function (elemId) {
        Ext.Ajax.request({
            url: PaymentsConfig.restAPIUrl + '/payment/delete',
            method: 'DELETE',
            params: {
                id: elemId
            },
            scope: this,
            success: this.fnSucessDeletePayment,
            failure: this.fnPayFailureMsg
        });
    },

    fnSucessDeletePayment: function (response) {
        this.fnPaySuccessMsg(response);
        this.fnReloadGridStore();
    },

    afterStoreLoad: function (store, rows) {
        this.getViewModel().set('rowsEnabled', rows && rows.length);
    },

    onBtnClearSelectionClick: function () {
        let view = this.getView();
        view.getSelectionModel().deselectAll();
        view.getSelectionModel().clearSelections();
    },

    fnRenderFullNameCell: function(){
        return this.fnComposeFullName(arguments[2].data);
    },

    fnComposeFullName: function(data){
        let res = '<b>';
        if(data.dictTypeOfPayment){
            res = res + data.dictTypeOfPayment + '; '
        }
        if(data.dictRegisterName){
            res = res + data.dictRegisterName + '; '
        }
        if(data.dictPaymentAction){
            res = res + data.dictPaymentAction + '; '
        }
        if(data.dictCountryRegion){
            res = res + data.dictCountryRegion + '; '
        }
        if(data.customPayeeDetails){
            res = res + data.customPayeeDetails + '; '
        }
        if(data.recipient){
            res = res + data.recipient + '; '
        }
        res = res + '</b>';

        if (res.length < 60){
            return res;
        } else {
            let br = '<br/>';
            let position = res.length/2;
            return [res.slice(0, position), br, res.slice(position)].join('');
        }

    },

    // showToolTipForRow: function (elem, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    //     let me = this;
    //     Ext.create('Ext.tip.ToolTip', {
    //         target: elem.el,
    //         delegate: elem.itemSelector,
    //         trackMouse: true,
    //         renderTo: Ext.getBody(),
    //         listeners: {
    //             beforeshow: function updateTipBody(tip) {
    //                 tip.update(me.fnComposeFullName(record.data));
    //             }
    //         }
    //     });
    // },


    //*********************************  DELETE *********************************
    //TEST

    fnBeforeEditCell: function(editor, context , opts){
        // console.log('<<==== fnBeforeEditCell')
    },

    onCellEdit: function (editor, context) {
        if (context.field === 'activeItem'){
            // DO NOTHING when select checkbox
        } else {
            let fld = context.field;
            let prevValue = context.originalValue;
            let idRecord = context.record.id;

            let store = this.getViewModel().getGridStore();
            let row = store.getById(idRecord);

            //TODO understand how cancel Editing
            // var grid = this.getView();
            // let rowEditor = grid.editingPlugin;
            // if (rowEditor) {
            //     rowEditor.cancelEdit();
            // }

            let id = context.record.id;
            console.log('<-----ID= ' + id);
            let postponedDate = null;
            let name = null;
            let text = null;

            switch (context.field) {
                case 'postponedDate':
                    postponedDate = context.value;
                    break;
                case 'name':
                    name = context.value;
                    break;
                case 'text':
                    text = context.value;
                    break;
            }
            let me = this;
            Ext.Ajax.request({
                url: PaymentsConfig.restAPIUrl + '/payment/update',
                method: 'PUT',
                params : {
                    id: id,
                    postponedDate: postponedDate,
                    name: name,
                    text: text
                },
                scope: this,
                success: function () {
                    store.reload();
                },
                failure: function () {
                    me.fnFailureActionMsg();
                    store.reload();
                }
            });
        }
    },

    fnFailureActionMsg: function () {
        Ext.Msg.alert('Error', 'ERROR TO SAVE');
    },

//***********************************************************

    // formatToolTipText: function(record){
    //     return  '<p><b>' + Translation.paymentInfoPanelRecipient + ':  </b><br/>'
    //         + record.data.clientName + '</p>' +
    //         '<p><b>' + Translation.paymentInfoPanelClientName + ':  </b><br/>'
    //         + record.data.recipient + '</p>';
    // }

    // fnGetGridStoreSize: function () {
    //     return this.getViewModel().getGridStore().getTotalCount();
    // },

    // isBtnSubmitDisabled: function (elem) {
    //     if (this.fnGetGridStoreSize() < 1){
    //         elem.setDisabled(true);
    //     }
    // },

    // fnRemoveItemFromGridStore: function (item) {
    //     let store = this.getViewModel().getGridStore();
    //     store.remove(store.getById(item));
    // },

    // fnRemoveItemListFromGridStore: function (items) {
    //     let decoded = Ext.decode(items);
    //     let store = this.getViewModel().getGridStore();
    //     Ext.Array.each(decoded, function (item, index, srcArray) {
    //         store.remove(store.getById(item));
    //     });
    // },

});
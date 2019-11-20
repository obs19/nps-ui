Ext.define('payments.view.basket.BasketMainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.basket-main-model',

    data: [{
        // selectedRecords: null,
        // scriptStageId: null,
    }],

    // formulas:{
    //     isRowEnabled: function(get){
    //         debugger;
    //         return !!this.getView().getStore().getTotalCount();
    //     }
    // },

    stores: {
        gridStore: {
            model: 'payments.model.Payment',
            pageSize: 0,
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                },
                url: PaymentsConfig.restAPIUrl + '/payment/basket'
            },
            autoLoad: true,
            listeners:{
                load:'afterStoreLoad'
            }
        }
    },

    setEditedRecord: function (rec) {
        this.set("rec", rec);
    },

    getEditedRecord: function () {
        return this.get("rec");
    },

    getGridStore: function () {
        return this.getStore('gridStore');
    },

    // getSelectedRecord: function(){
    //     return this.data.selectedRecords;
    // },



    // clearEditedRowsStore: function(){
    //     this.selectedRows = Ext.Array.erase(this.selectedRows, 0, 9999);
    // },
    //
    // removeFromEditedRowsStore: function (val) {
    //     Ext.Array.remove(this.getSelectedRows(), val);
    // },
    //
    // putInEditedRowsStore: function (val) {
    //     this.getSelectedRows().push(val);
    // }


});
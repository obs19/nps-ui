Ext.define('payments.view.basket.BasketMain', {
    extend: 'Ext.grid.Panel',
    xtype: 'basket-main',
    controller: 'basket-main-ctrl',
    viewModel: {
        type: 'basket-main-model'
    },
    // bodyPadding: 10,
    // padding: 44,
    // frame: true,
    scrollable: true,

    // config: {
    //     rec: null,
    // },

    requires: [
        'Ext.grid.column.Action',
        'Ext.grid.plugin.CellEditing',        // 'Ext.selection.CellModel',
        'Ext.grid.column.Widget',
        'Common.view.AppLinkButton',
        'Ext.form.field.Date'
    ],
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1,
        listeners: {
            edit: {
                fn: 'onCellEdit',
                scope: this.controller
            },
            beforeedit: {
                fn: 'fnBeforeEditCell',
                scope: this.controller
            }
        }
    },

    bind: {
        store: '{gridStore}'
        //selection:'{selectedRecord}'
    },
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id',
            width: 40,
            // hidden: true
        },
        // {
        //     xtype: 'checkcolumn',
        //     // header: 'Select All',
        //     dataIndex: 'activeItem',
        //     width: 90,
        //     editor: {
        //         xtype: 'checkbox',
        //         // cls: 'x-grid-checkheader-editor'
        //     },
        //     headerCheckbox: true,
        //     sortable: true,
        //     listeners: {
        //         checkchange: 'onCheckChange'
        //     }
        // },
        {
            text: Translation.basketPanelHeaderRecipient,
            flex: 2,
            renderer: 'fnRenderFullNameCell'
        },
        {
            text: Translation.basketPanelHeaderCreationDate,
            width: 150,
            dataIndex: 'creationDate',
            formatter: 'date("d/m/Y H:i")'
        },
        {
            text: Translation.basketPanelHeaderClientName,
            dataIndex: 'clientName',
            // editor: 'textfield'
            flex: 1,
            align: 'right',
            renderer: function (val) {
                return '<span class="grid-clientName-font">' + val + '</span>';
            }
        },
        {
            text: Translation.basketPanelHeaderAmount,
            dataIndex: 'amount',
            width: 150,
            align: 'right',
            renderer: function (val) {
                return '<span class="grid-amount-bold">' + val + '</span>';
            }
        },
        {
            text: Translation.basketPanelHeaderPostponedDate,
            width: 150,
            dataIndex: 'postponedDate',
            formatter: 'date("d/m/Y")',
            align: 'center',
            // minValue: new Date(),
            editor: 'datefield'
        },
        {
            text: '',
            tooltip: Translation.basketPanelTooltipPayBtn,
            sortable: false,
            // dataIndex: 'name',
            width: 120,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'linkbutton',
                // cls: 'link-btn-custom',
                // style: 'background-color: green; margin-top: 8px; border-radius: 4px; border-color: white;',
                textAlign: 'center',
                bind: {
                    text: Translation.basketPanelBtnPayCurrent,
                    // text: '{record.title}',
                    payload: '{record}'
                },
                handler: 'onButtonPayClick'
            }
        },
        {
            xtype: 'actioncolumn',
            width: 70,
            align: 'center',
            text: Translation.basketPanelHeaderInfo,
            items: [
                {
                    iconCls: 'x-fa fa-info-circle',
                    tooltip: Translation.basketPanelTooltipInfoBtn,
                    handler: 'onBtnInfoClick'
                }
            ]
        },
        {
            xtype: 'actioncolumn',
            align: 'center',
            width: 70,
            text: Translation.basketPanelHeaderDelete,
            items: [
                {
                    iconCls: 'x-fa fa-times-circle',
                    tooltip: Translation.basketPanelTooltipDeleteBtn,
                    handler: 'onBtnDeleteClick'
                }
            ]
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: ['->', {
            iconCls: 'x-fa fa-check',
            text: Translation.basketPanelBtnPaySelected,
            scope: this.controller,
            handler: 'onBtnPaySelectedClick',
            disabled: true,
            bind: {
                disabled: '{!rowsEnabled}'
            }
        }, {
            iconCls: 'x-fa fa-undo',
            text: Translation.basketPanelBtnClearSelected,
            scope: this.controller,
            handler: 'onBtnClearSelectionClick'
        }, {
            iconCls: 'x-fa fa-asterisk',
            text: Translation.basketPanelBtnPayAll,
            scope: this.controller,
            handler: 'onBtnSubmitAll',
            bind: {
                disabled: '{!rowsEnabled}'
            }
        }
        ]
    }],
    // listeners: {
    //     cellclick: 'showToolTipForRow',
    //     scope: this.controller,
    // }

});

Ext.define('Common.view.AppLinkButton', {
    extend: "Ext.button.Button",
    alias: "widget.linkbutton",

    config:{
        payload: null,
    },

    // cls: "link-btn-custom",
    // componentCls: 'link-btn-custom',
    style: 'background-color: grey; margin-top: 6px; border-radius: 4px; border-color: darkgrey;',


    constructor: function(config) {
        this.callParent([config]);
    }
});
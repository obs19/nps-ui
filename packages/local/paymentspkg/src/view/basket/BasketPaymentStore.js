// Ext.define('payments.view.payments_main.new_payment_form.BasketPaymentStore', {
//     extend: 'Ext.data.Store',
//     alias: 'store.basketpaymentstore',
//     // storeId: 'paymenttypestore',
//     model: 'payments.model.BasketPayment',
//     requires: [
//         'payments.model.BasketPayment'
//     ],
//     pageSize: 0,
//     proxy: {
//         type: 'ajax',
//         url: PaymentsConfig.restAPIUrl + '/payment/getBasketPayments',
//         reader: {
//             type: 'json'
//         },
//         // extraParams: {
//         //     typeOfDict: '33'
//         // }
//     },
//     autoLoad: true
// });
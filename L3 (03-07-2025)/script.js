/*
let cart = ["shoes", "shirt", "wallets"];

function orderDetail(cart) {
    // 1. Total no of products
    let totalProducts = cart.length;
    // 2. Total Amount of Products nos * 1000
    let totalAmount = totalProducts * 1000;
    return {
        totalProducts: totalProducts,
        totalAmount: totalAmount,
    };
}

function orderSummary() {
    // total price and total product
    let orderDetails = orderDetail(cart);
    // then generated orderId
    let orderId = Math.floor(Math.random() * 1000000);
    return {
        orderId: orderId,
        totalProducts: orderDetails.totalProducts,
        totalAmount: orderDetails.totalAmount,
    };
}

function paymentGateway() {
    // orderId, product details and price .. Payment is successful
    let orderSummaryDetails = orderSummary();
    let paymentDetails = {
        orderId: orderSummaryDetails.orderId,
        totalProducts: orderSummaryDetails.totalProducts,
        totalAmount: orderSummaryDetails.totalAmount,
        paymentStatus: "successful",
    };
    return paymentDetails;
}

function successfulOrder() {
    // it will give all the details about the payment product name and everything
    let paymentDetails = paymentGateway();
    return {
        message: "Order placed successfully",
        orderId: paymentDetails.orderId,
        totalProducts: paymentDetails.totalProducts,
        totalAmount: paymentDetails.totalAmount,
        paymentStatus: paymentDetails.paymentStatus,
    };
}

console.log(successfulOrder());

let arr = [1, 2, 3, 4, 5];

Array.prototype.filter = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (logic(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

function logic(num) {
    return num % 2 == 0;
}

console.log(arr.filter(arr));
*/

let array1 = [0, 1, 2, 3, 4];

Array.prototype.reduce = function(callback, initialValue) {
    let result = initialValue;
    let startIndex = 0;
    
    for (let i = startIndex; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    
    return result;
};

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial);

const sumofAll = array1.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
});

console.log(sumofAll);

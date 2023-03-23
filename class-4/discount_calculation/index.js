"use strict";
function calculateDiscount(productPrice, discountPercentage) {
    if (discountPercentage >= 50) {
        console.error("Invalid discount percentage! Discount percentage must be less than 50.");
        return;
    }
    let discountAmount = productPrice * (discountPercentage / 100);
    let finalPrice = productPrice - discountAmount;
    console.log(`Product price: $${productPrice}`);
    console.log(`Discount percentage: ${discountPercentage}%`);
    console.log(`Discount amount: $${discountAmount}`);
    console.log(`Final price: $${finalPrice}`);
}
calculateDiscount(100, 10);
calculateDiscount(50, 60);
calculateDiscount(75, 25);

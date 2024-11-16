"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookie = exports.Entity = void 0;
class Entity {
    constructor(price, cookiesValue, priceScale) {
        this.price = price;
        this.price5 = price;
        this.priceScale = priceScale;
        this.quantity = 0;
        this.cookiesValue = cookiesValue;
        this.cookiesPerSecond = 0;
    }
    cost5() {
        this.price5 = this.price;
        for (let i = 0; i < 5; i++) {
            this.price5 = Math.round(this.price5 * this.priceScale);
        }
        return this.price5;
    }
    buy1() {
        if (exports.cookie.quantity >= this.price) {
            exports.cookie.quantity -= this.price;
            this.price = Math.round(this.price * this.priceScale);
            this.quantity++;
            exports.cookie.cookiesPerSecond += this.cookiesValue;
        }
    }
    buy5() {
        if (exports.cookie.quantity >= this.cost5()) {
            exports.cookie.quantity -= this.price5;
            this.price = this.price5;
            this.quantity += 5;
            exports.cookie.cookiesPerSecond += (this.cookiesValue * 5);
            this.cost5();
        }
    }
    getPrice() { return this.price; }
    getQuantity() { return this.quantity; }
    getCookiesValue() { return this.cookiesValue; }
    getCookiesPerSecond() { return this.cookiesPerSecond; }
    setPrice(price) { this.price = price; }
    setQuantity(quantity) { this.quantity = quantity; }
    setCookiesValue(cookiesValue) { this.cookiesValue = cookiesValue; }
    setCookiesPerSecond(cookiesPerSecond) { this.cookiesPerSecond = cookiesPerSecond; }
}
exports.Entity = Entity;
exports.cookie = new Entity(0, 0, 0);

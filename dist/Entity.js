export class Entity {
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
        if (cookie.getQuantity() >= this.price) {
            cookie.setQuantity(cookie.getQuantity() - this.price);
            this.price = Math.round(this.price * this.priceScale);
            this.quantity++;
            cookie.setCookiesPerSecond(cookie.getCookiesPerSecond() + this.cookiesValue);
        }
    }
    buy5() {
        if (cookie.getQuantity() >= this.cost5()) {
            cookie.setQuantity(cookie.getQuantity() - this.price5);
            this.price = this.price5;
            this.quantity += 5;
            cookie.setCookiesPerSecond(cookie.getCookiesPerSecond() + (this.cookiesValue * 5));
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
export const cookie = new Entity(0, 0, 0);

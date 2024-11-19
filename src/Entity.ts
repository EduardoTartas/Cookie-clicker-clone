export class Entity {
    private price: number;
    private price5: number;
    private priceScale: number;
    private quantity: number;
    private cookiesValue: number;
    private cookiesPerSecond: number;

    constructor(price: number, cookiesValue: number, priceScale: number) {
        this.price = price;
        this.price5 = price;
        this.priceScale = priceScale;
        this.quantity = 0;
        this.cookiesValue = cookiesValue;
        this.cookiesPerSecond = 0;
    }

    cost5(): number {
        this.price5 = this.price;
        for (let i = 0; i < 5; i++) {
            this.price5 = Math.round(this.price5 * this.priceScale);
        }
        return this.price5;
    }

    buy1(): void {
        if (cookie.getQuantity() >= this.price) {
            cookie.setQuantity(cookie.getQuantity() - this.price);
            this.price = Math.round(this.price * this.priceScale);
            this.quantity++;
            cookie.setCookiesPerSecond(cookie.getCookiesPerSecond() + this.cookiesValue);
        }
    }

    buy5(): void {
        if (cookie.getQuantity() >= this.cost5()) {
            cookie.setQuantity(cookie.getQuantity() - this.price5);
            this.price = this.price5;
            this.quantity += 5;
            cookie.setCookiesPerSecond(cookie.getCookiesPerSecond() + (this.cookiesValue * 5));
            this.cost5();
        }
    }

    public getPrice(): number { return this.price; }

    public getQuantity(): number { return this.quantity; }

    public getCookiesValue(): number { return this.cookiesValue; }

    public getCookiesPerSecond(): number { return this.cookiesPerSecond; }

    public setPrice(price: number): void { this.price = price; }

    public setQuantity(quantity: number): void { this.quantity = quantity; }

    public setCookiesValue(cookiesValue: number): void { this.cookiesValue = cookiesValue; }

    public setCookiesPerSecond(cookiesPerSecond: number): void { this.cookiesPerSecond = cookiesPerSecond; }
}

export const cookie  = new Entity(0, 0, 0);
export const grandma = new Entity(50, 5, 1.05);
export const farm    = new Entity(200, 10, 1.10);
export const mine    = new Entity(500, 20, 1.25);
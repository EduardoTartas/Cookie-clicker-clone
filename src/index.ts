document.addEventListener('DOMContentLoaded', () => {

    class Entity {
        private price:number;
        private quantity:number;
        private cookiesValue:number;
        private cookiesPerSecond:number;

        constructor(price:number, cookiesValue:number){
            this.price = price;
            this.quantity = 0;
            this.cookiesValue = cookiesValue;
            this.cookiesPerSecond = 0;
        }

        buy1() : void{
            if(cookie.quantity>=this.price){
                cookie.quantity -=this.price
                this.price = Math.round(this.price* 1.15);
                this.quantity ++;
                this.cookiesPerSecond += this.cookiesValue;
            }
        }


        buy5() : void{
            if (cookie.quantity >= (this.price * 5)) {
                cookie.quantity -= (this.price * 5);
                for (let i = 0; i < 5; i++) {
                    this.price = Math.round(this.price * 1.15);
                }
                this.quantity += 5;
                this.cookiesPerSecond += (this.cookiesValue * 5);
            }
        }
    

        public getPrice(): number {return this.price;}

        public setPrice(price: number): void {this.price = price;}

        public getQuantity(): number {return this.quantity;}

        public setQuantity(quantity: number): void {this.quantity = quantity;}

        public getCookiesValue(): number {return this.cookiesValue;}

        public setCookiesValue(cookiesValue: number): void {this.cookiesValue = cookiesValue;}

        public getCookiesPerSecond(): number {return this.cookiesPerSecond;}

        public setCookiesPerSecond(cookiesPerSecond: number): void {this.cookiesPerSecond = cookiesPerSecond;}

    }




    const cookie = new Entity(0,0)
    cookie.setQuantity(10000000);

    const grandma = new Entity(50, 2);
    console.log(grandma);

        //contador e cookie principal
        const counter = document.querySelector('#counter')!;
        const cookieImage = document.querySelector('#cookieImage')!;

        //grandma preço quantidade=>
        const grandmaCounter = document.querySelector('#grandma-quantity')!;
        const grdBuy1 = document.querySelector('#buy-1-grandma')!;
        const grdBuy5 = document.querySelector('#buy-5-grandma')!;
        const grdPrice = document.querySelector('#grandma-price')!;

        function update(){
            counter.innerHTML = `${cookie.getQuantity()}`;
            grandmaCounter.innerHTML = `${grandma.getQuantity()}`;
            grdPrice.innerHTML = `${grandma.getPrice()}`;
        }
        
        //função de gerar cookie clicando

        cookieImage.addEventListener('click', () =>{
            cookie.buy1();
            update();
        });
        
        grdBuy1.addEventListener('click', ()=>{
            grandma.buy1();
            update()});

        grdBuy5.addEventListener('click', ()=>{
            grandma.buy5();
            update()});
    

            
});

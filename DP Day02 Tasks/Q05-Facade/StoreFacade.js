import { ShippingManager, OrderManager, PaymentManager } from "./Managers.js"

export class StoreFacade {
    constructor() {
        this.payment = new PaymentManager();
        this.order = new OrderManager();
        this.ship = new ShippingManager();

    }

    placeOrder() {
        this.payment.pay();
        this.order.CreateOrder();
        this.ship.ship();
    }
}
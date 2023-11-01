export default class Product{
    constructor({ name, price, tmpProperty, activePromoId }){
        this.name = name
        this.price = price
        this.tmpProperty = tmpProperty
        this.activePromoId = activePromoId ?? 0
    }
}
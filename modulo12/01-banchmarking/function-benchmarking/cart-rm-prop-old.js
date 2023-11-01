import { randomUUID as v4 } from "crypto"
import Product from "../src/entities/products.js"



export default class Cart{
    constructor({ products }){
        this.products = this.removeUndefinedPropos(products)
    }
    removeUndefinedPropos(products){
        const productsEntities = products
            //Remove os objetos avisos "{}"
            .filter(product => !!Reflect.ownKeys(product).length)
            .map(product => new Product(product))
               //Remove os campos que estão com undefined { a: undefined, b = 2}
               //const data = { "a": undefined, "b": 2}
               // JSON.stringify(data) '{"b":2}'
        return JSON.parse(JSON.stringify(productsEntities))
    }
}
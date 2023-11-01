import { randomUUID as v4 } from "crypto"
import Product from "../src/entities/products.js"



export default class Cart{
    constructor({ products }){
        this.products = this.removeUndefinedPropos(products)

    }
    removeUndefinedPropos(products){
        const result = []
        for (const product of products){
            const keys = Reflect.ownKeys(product)
            if(!keys.length) continue

            keys.forEach(key => product[key] || delete product[key])
            result.push(new Product(product))
        }
        return result
    }
}
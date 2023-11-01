import Benchmark from "benchmark";
import CartNew from "./cart-id-new.js";
import CartOld from "./cart-id-old.js";
import CartRmOld from "./cart-rm-prop-old.js";
import CartRmNew from "./cart-rm-prop-new.js";
import database from "../database.js";

import CartPriceNew from "./cart-price-new.js";
import CartPriceOld from "./cart-price-old.js";

const suite = new Benchmark.Suite

//01 suite
/* suite
    .add('cart#Crypto', function() {
        new CartNew()
    })
    .add('cart#UUID', function() {
        new CartOld()
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function(){
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run() */

//02 suite
/* const data = {
        products: [
            {
                id: '1',
                a: undefined,
                v: null,
                c: undefined
            },
            {
                id: '2',
                a: undefined,
                v: 'test',
                c: undefined
            },
            {

            }

        ]
    }
suite
    .add('cart#For', function() {
        new CartRmNew(data)
    })
    .add('cart#Map', function() {
        new CartRmOld(data)
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function(){
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run() */

//03 suite

suite
    .add('cart#Old', function() {
        
        new CartPriceOld(database)

    })
    .add('cart#For', function() {
        new CartPriceNew(database)
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function(){
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run()
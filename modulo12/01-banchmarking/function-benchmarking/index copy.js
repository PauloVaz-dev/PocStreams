import Benchmark from "benchmark";
import CartNew from "./cart-id-new.js";
import CartOld from "./cart-id-old.js";


const suite = new Benchmark.Suite

suite
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
    .run()

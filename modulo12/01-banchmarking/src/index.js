import database from "../database.js";
import Cart from "./entities/cart.js";

const data = new Cart(database)

console.log(data)
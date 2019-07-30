<template>
    <div>
        
        <div class="product-item" v-for="wp in wPairShoe" :key="wp.Id">

            <div class="product-image">
            <img :src="wp.Image">
            </div>

            <div class="Product-info" >
                <div class="info-content">
                <h1>{{wp.Title}}</h1>
                <p v-if="wp.inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Color: {{wp.Color}}</p>
                <p>Price: $ {{wp.Price}}</p>
                <p>Shipping Fee: Free Shipping</p>
                <br>
                <p ><b>Description:</b></p>
                <p>{{wp.description}}</p>
                <br>
               <!-- <p class="favorite" @click="">Add to Favorites</p> -->
                </div>
                <br>
                <div class="picture-content">
               <img :src="wp.Image">

               
                   <div class="quantity-container">
                   Quantity:
                   <button @click="addQuantityWP">+</button>
                   <input type="number" max="99" v-model="wp.quaN">
                   <button @click="reduceQuantityWP">-</button>
                   </div>
             

               <div class="btn-cart">
                   <button class="add" @click="">ADD TO CART</button>
                   <button class="remove" @click="">Remove to Cart</button>
               </div>
               </div>
            </div>
  
        </div>
        <hr>
       <review></review>
    </div>
</template>
<script>
import review from '../review.vue'
import { stat } from 'fs';
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'

export default {
    name: 'Bluecap',
    components: {
        review,
    },
    data() {
        return {

        }
    },
    computed: {
        wPairShoe() {
            return this.$store.state.wPairShoe
        }
    },
    methods: {
        ...mapMutations([
            'addQuantityWP',
            'reduceQuantityWP',
        ])
    },
}
</script>
<style scoped>
.Product-info {
    margin: 20px 10px;
    padding: 10px 0px 20px 40px;
    width: 250px;
}
.Product-info h1 {
    font-family: 'Open Sans';
    margin: 0;
}
.Product-info p {
    margin: 0;
    padding: 0;
    font-size: 12px;
}
.Product-info ul {
    margin: 10px 5px;
    padding: 0;
}
.Product-info ul li {
    font-size: 10px;
}
.Product-info img {
    margin: 0 auto;
    width: 100px;
}
.quantity-container {
    margin: 10px 5px;
}
.quantity-container input {
    width: 20px
}
input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
.btn-cart {
    margin-top: 30px;
}
.btn-cart button {
    padding: 6px 11px;
    margin-left: 10px;
    border: none;
    font-size: 12px;
    font-family: 'open sans';
    font-weight: bold;
    box-shadow: 1px 1px 3px #515151;
    border-radius: 15px;
    cursor: pointer;
}
.add {
    background: rgb(14, 255, 26);
    color: rgb(26, 26, 26)
}
.add:hover {
    background: rgb(10, 199, 20);
}
.remove {
    color: rgb(26, 26, 26);
    background: rgb(0, 191, 255);
}
.remove:hover {
    background: rgb(18, 163, 211);
}
.product-image {
    display: none;
}
.favorite {
    font-family: 'Open Sans';
    font-weight: bold;
    border: 1px solid orangered;
    width: 120px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    color: orangered
}
.favorite:hover {
    box-shadow: 1px 1px 2px grey;
}
@media only screen and (min-width: 350px) {
    .Product-info {
    margin: 20px auto;
    width: 300px;
}
.btn-cart {
    margin: 30px 0px 0px 30px
}
}
@media only screen and (min-width: 700px) {
    .Product-info {
    width: 400px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.picture-content {
    margin-top: 50px;
}
.btn-cart {
    display: flex;
    margin: 20px 0px;
}
.btn-cart button {
    font-size: 10px;
}
.Product-info img {
    margin: 30px 50px;
    width: 130px;
}
.product-image {
    display: block;
    margin: 50px 20px;
}
.product-image img {
    width: 300px;
}
.product-item {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 100;
    margin: 50px auto;
}
}
</style>



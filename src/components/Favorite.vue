<template>
    <div class="wrapper">
        <p v-if="!variants.length">No favorite Added</p>
        <ul>
            <li v-for="variant in variants" :key="variant.id">Product Name:{{variant}}</li>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'favorite',
    props: ['variants'],
    data() {
        return {
        }
    },
    methods: {
        
    }
}
var myList = new Vue({
    created: () => {

    }
})
</script>

<style scoped>
p {
    color: grey;
}
li {
    background: rgb(209, 209, 209);
    color: black;
    font-weight: bold;
    margin-top: 5px;
    padding: 10px;
    position: relative;
}
</style>



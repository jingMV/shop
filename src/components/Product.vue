<template>
<div>
    <div class="wrapper" id="article-product">
        <div class="product-info"><h2>Best Seller</h2></div>
        <ul>
            <div class="article-product">
            <li @mouseover="openLink" @mouseout="closeLink" class="grid-a">
                <router-link  :class="{openMe: visi}" to="/NikeRed">View</router-link>
                <img :class="{fil: !visi}" :src="require('../assets/image/img1.png')" alt="nice shoe">
            </li>
            <li @mouseover="openLinkA" @mouseout="closeLinkA" class="grid-b">
                <router-link :class="{openMe: helo}" to="/ShoeGreen">View</router-link>
                <img :class="{fil: !helo}" :src="require('../assets/image/img2.png')" alt="nice shoe">
            </li>
            <li @mouseover="openLinkB" @mouseout="closeLinkB" class="grid-c">
                <router-link :class="{openMe: linkB}" to="/NikeBlue">View</router-link>
                <img :class="{fil: !linkB}" :src="require('../assets/image/img3.png')" alt="nice shoe">
            </li>
            <li @mouseover="openLinkC" @mouseout="closeLinkC" class="grid-d">
                <router-link to="/Allstar" :class="{openMe: linkC}" >View</router-link>
                <img :class="{fil: !linkC}" :src="require('../assets/image/img4.png')" alt="nice shoe">
            </li>
            <li @mouseover="openLinkD" @mouseout="closeLinkD" class="grid-e">
                <router-link :class="{openMe: linkD}" to="/NikeGrey">View</router-link>
                <img :class="{fil: !linkD}" :src="require('../assets/image/img5.png')" alt="nice shoe">
            </li>
            <li @mouseover="openLinkE" @mouseout="closeLinkE" class="grid-f">
                <router-link :class="{openMe: linkE}" to="/ConverseShoe">View</router-link>
                <img :class="{fil: !linkE}"  :src="require('../assets/image/img6.png')" alt="nice shoe">
            </li>
            </div>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'Product',
    data() {
        return {
            visi: true,
            helo: true,
            linkB: true,
            linkC: true,
            linkD: true,
            linkE: true,
        }
    },
    methods: {
        openLink: function() {
            this.visi = false;
        },
        closeLink: function() {
        this.visi = true;
        },

        openLinkA: function() {
        this.helo = false;
        },
        closeLinkA: function() {
        this.helo = true;
        },
        openLinkB: function() {
        this.linkB = false;
        },
        closeLinkB: function() {
        this.linkB = true;
        },
        openLinkC: function() {
        this.linkC = false;
        },
        closeLinkC: function() {
        this.linkC = true;
        },
        openLinkD: function() {
        this.linkD = false;
        },
        closeLinkD: function() {
        this.linkD = true;
        },
        openLinkE: function() {
        this.linkE = false;
        },
        closeLinkE: function() {
        this.linkE = true;
        },
    }
}
</script>

<style scoped>
.product-info h2 {
    font-size: 15px;
    color: #515151;
    text-align: center;
    margin: 50px 0px;
}ul {
    margin: 0;
    padding: 0;
}
.article-product {
    padding: 0px 20px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 30% 30% 30% 10%;
    overflow: hidden;
    margin: 0;
}
.grid-a {
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 3;
}
.grid-b {
grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 1;
grid-row-end: 2;
}
.grid-c {
grid-column-start: 4;
grid-column-end: 5;
grid-row-start: 1;
grid-row-end: 2;
}
.grid-d {
grid-column-start: 1;
grid-column-end: 1;
grid-row-start: 3;
grid-row-end: 3;
}
.grid-e {
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end: 3;
}
.grid-f {
grid-column-start: 3;
grid-column-end: 5;
grid-row-start: 2;
grid-row-end: 3;
}
@supports (-moz-appearance:none) {
.article-product {
    padding: 0px 20px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    overflow: hidden;
    margin: 0;
    margin-top: 40px;
}
.grid-a {
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
}
.grid-b {
grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 1;
grid-row-end: 2;
}
.grid-c {
grid-column-start: 4;
grid-column-end: 5;
grid-row-start: 1;
grid-row-end: 2;
}
.grid-d {
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 3;
}
.grid-e {
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
}
.grid-f {
grid-column-start: 3;
grid-column-end: 5;
grid-row-start: 2;
grid-row-end: 3;
position: absolute;
top: -53%
}
}
.article-product li {
    position: relative;
    text-align: center;
    width: 100%;
}
.article-product li img {
    width: 100%;
    overflow: hidden;
}
.article-product li a {
    display: block;
    position: absolute;
    z-index: 1;
    top: 50px;
    font-size: 15px;
    color: white;
    text-align: center;
    padding: 10px 15px;
    background: #515151;
    box-shadow: 1px 2px 3px #515151;
}
.openMe {
    visibility: hidden;
}
.fil {
    transform: rotateX(9deg) rotateY(30deg);
    box-shadow: 5px 5px 20px #515151;
}
@media only screen and (min-width: 700px) {
    .product-info h2 {
    font-size: 20px;
    text-align: center;
    margin: 150px 0px 100px 0px;
}
.article-product li a {
    left: 10px;
}
}
</style>
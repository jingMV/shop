<template>
    <div>
        <div class="wrapper" id="article">
            <div class="new-product">
                <h2>New Arrival</h2>
                <div class="new-product-info">
                    <ul>
                        <li>
                            <router-link to="/Blue Cap">
                            <img :src="require('../assets/newArrival/arrival-1.jpg')"><br>
                            <Strong>Blue Cap</strong><br>
                            <small>1,100</small>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Blue CapNY">
                            <img :src="require('../assets/newArrival/arrival-2.jpg')"><br>
                            <Strong>Blue Cap NY</strong><br>
                            <small>1,100</small>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Shoe Play">
                            <img :src="require('../assets/newArrival/arrival-3.jpg')"><br>
                            <Strong>Shoe Play</strong><br>
                            <small>2,500</small>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Hboots">
                            <img :src="require('../assets/newArrival/arrival-4.jpg')"><br>
                            <Strong>H-Boots</strong><br>
                            <small>4,100</small>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Shoe AC">
                            <img :src="require('../assets/newArrival/arrival-5.jpg')"><br>
                            <Strong>Shoe AC</strong><br>
                            <small>4,600</small>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/White Adi">
                            <img :src="require('../assets/newArrival/arrival-6.jpg')"><br>
                            <Strong>White Adi</strong><br>
                            <small>6,100</small>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Pair Shoe">
                            <img :src="require('../assets/newArrival/arrival-7.jpg')"><br>
                            <Strong>W-Pair Shoe</strong><br>
                            <small>5,100</small>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/N-Pink">
                            <img :src="require('../assets/newArrival/arrival-8.jpg')"><br>
                            <Strong>N-Pink</strong><br>
                            <small>5,000</small>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewArrival',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.new-product {
    padding: 0px 20px;
}
.new-product h2 {
    font-family: 'Open Sans';
    font-size: 10px;
    text-align: center;
    color: #515151;
    margin: 20px 0;
}
.new-product-info ul {
    color:#515151;
    text-align: center;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-column-gap: 10%;
}
.new-product-info ul li img {
    width: 100%;
}
.new-product-info ul li {
    margin-top: 20px;
    cursor: pointer;
}
.new-product-info ul li:hover {
    box-shadow: 1px 1px 3px #515151;
}
.new-product-info ul li a {
    color: #515151;
}
@media only screen and (min-width: 700px) {
    .new-product h2 {
    font-size: 20px;
    margin: 30px 0;
}
.new-product-info ul {
    color:#515151;
    text-align: center;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 22.75% 22.75% 22.75% 22.75%;
    grid-column-gap: 3%;
    grid-row-gap: 7%;
}
}
@media only screen and (min-width: 1200px) {
    .new-product-info ul {
        padding: 0px 70px;
    }
}
</style>


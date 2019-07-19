<template>
    <div  id="footer-container">
        
        <div class="btn-top" >
            <span @click="goTop">Back to Top</span>
        </div>
        <div class="wrapper">
        <div class="footer-content">
            <ul>
                <li><small>Our Office Located at:<br>
                Sitio Daan<br>
                Road to Forever<br>
                Island Philippines</small></li>

                <li>
                    <small>Follow Us:<br>
                    <a href="#">Twitter</a><br>
                    <a href="#">Facebook</a><br>
                    <a href="#">Instagram</a></small>
                </li>

                <li>
                    <router-link to="#">About</router-link><br>
                     <router-link to="#">Help</router-link>
                </li>
                <li>
                 <small>&copy; 2019<br>ukayPH.com</small>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'Footer',
    methods: {
        goTop: function() {
            document.documentElement.scrollTop = 0
        }
    }
}
</script>
<style scoped>
.btn-top {
    background: rgb(70, 70, 70);
    text-align: center;
    padding: 5px;
    color: #ebebeb;
}
.btn-top span {
    cursor: pointer;
}
#footer-container {
    background: rgb(231, 231, 231);
}
ul {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10%;
    margin: 0;
    padding: 30px;
    text-align: center;
}
ul li a {
    color: #515151;
}
ul li {
    color: #515151;
}
@media only screen and (min-width: 1200px) {
    ul {
    padding: 40px 200px;
}
}
</style>



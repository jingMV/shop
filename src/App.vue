<template>
  <div id="app">
    <div class="cart">
    
    </div>
    <headers />
    <router-view ></router-view>
  </div>
  
</template>

<script>
import Vue from 'vue'
import headers from './components/headerComponent.vue'


export default {
 
  name: 'app',
  components: {
    headers,
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
//show nav desktop
  /*const showNav = new Vue({
    created: function() {
      var w = window.innerWidth;
      if (w > 1000) {
        return this.clickNav = true
      }
    }
  })*/
</script>

<style>
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f5f5f5;
  overflow: hidden;
  font-family: 'roboto';
  width: 100%;
  scroll-behavior: smooth;
}
.wrapper {
 width: 100%;
 position: relative;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.cart p {
  position: absolute;
  font-size: 13px;
  font-family: 'Open Sans';
  right: 52px;
  top: 6px;
  z-index: 1;
  color: rgb(0, 107, 0);
  font-weight: bold;

}
@media only screen and (min-width: 1000px) {
  .cart p {
  right: 40px;
  top: 20px;
}
}

@media only screen and (min-width: 1200px) {
  .wrapper {
  width: 98%;
  max-width: 1250px;
  margin: 0 auto;
}
.cart p {
  right: 45px;
  top: 20px;
}
}
</style>

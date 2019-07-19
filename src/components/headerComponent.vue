<template>
    <div>
    <header>
      <div  id="header">
      <div class="logo"><b><router-link to="/">Ukay<span>PH</span></router-link></b></div>
      <nav>
        <div class="navbar-wrapper hide-desktop" @click="openNav">
            <span class="navbar-icon navbar-a"></span>
            <span class="navbar-icon navbar-b"></span>
            <span class="navbar-icon navbar-c"></span>
        </div>
        <ul class="nav-nav" :class="{openMe: !clickNav}">
          <li class="close hide-desktop" @click="closeNav">Close</li>
          <li><router-link to="/Onsale">On Sale</router-link></li>
          <li><router-link to="/New-Arrival">New Arrival</router-link></li>
          <li>
            <router-link to="/Favorite"><span class="brand">Favorites</span></router-link>
          </li>
          <li class="account-container" @mouseover="toggleOpen" @mouseout="toggleClose" >
            <span class="account">Account</span>
            <span class="account-content" :class="{displayMe: show}">
              <li><router-link to="/SignIn">Sign In</router-link></li>
              <li><router-link to="/SignUp">Sign Up</router-link></li>
            </span>
          </li>
        </ul>
      </nav>
      </div>
    </header>
    </div>
    
</template>
<script>

export default {
    name: 'headerComponent',
    components: {
    },
    data() {
        return {
         clickNav: false,
         show: false,
        }
    },
    methods: {
    openNav: function() {
    this.clickNav = true
    },
    closeNav: function() {
     this.clickNav = false
    },
    toggleOpen: function() {
      this.show = true
    },
    toggleClose: function() {
    this.show = false
    }
  },
}
</script>
<style scoped>
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.navbar-icon {
  display: block;
  cursor: pointer;
}
.navbar-a, .navbar-b, .navbar-c {
  width: 25px;
  height: 3px;
  background: #515151;
  margin: 6px 0;
  transition: 0.2s;
  border-radius: 4px;
}
#header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  width: 100%;
  position: relative;
}
.hide-desktop {
  display: block;
}
.navbar-wrapper {
  margin: 0;
  padding: 0;
  margin-right: 30px;
}
 .nav-nav {
  position: fixed;
  display: block;
  z-index: 10;
  top: 0;
  right: 0;
  margin: 0;
  padding: 70px 0px 0px 10px;
  width: 200px;
  height: 100%;
  background: rgb(219, 219, 219);
  overflow: hidden;
  box-shadow: 3px 10px 10px #515151;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  text-decoration: underline;
  cursor: pointer;
}
.nav-nav li {
  text-align: left;
  font-size: 12px;
  margin-top: 15px;
  color: #515151;
  padding: 13px 10px;
}
.nav-nav li:hover {
  text-decoration: underline;
}
.nav-nav a {
  color: #515151;
  
}
.logo {
  margin-top: 5px;
  font-family: 'montserrat';
}
.logo a {
  color: rgb(0, 107, 0);
  font-weight: bold;
}
.logo span {
  color: rgb(240, 156, 1);
}
.openMe {
  display: none;
}
.account {
  cursor: pointer;
}
.account-container {
  position: relative;
}
.account-content {
  position: absolute;
  background:#353535;
  top: 0px;
  left: 60px;
  display: none;
}
.account-content li a {
  color: rgb(241, 241, 241);
  margin: 0;
}
.account-content li {
  margin: 0;
  padding: 3px 6px;
}
.displayMe {
  display: block
}
@media only screen and (min-width: 1000px) {
  .hide-desktop {
  display: none;
}
#header {
height: 30px;
padding: 2em 1em;

}
.logo {
  margin-left: 50px;
}
.openMe {
  display: block;
}
 .nav-nav {
  overflow: hidden;
  position: inherit;
  display: flex;
  text-align: left ;
  background: none;
  width: auto;
  height: auto;
  padding: 0;
  margin-right: 140px;
  box-shadow: inherit;
}
.nav-nav li {
  text-align: left;
  font-size: 12px;
  padding: 0px;
  margin-top: 5px;
  margin-left: 15px;
  color: #515151;
  
}
.nav-nav a {
  color: #515151;
}

.account-container {
  position: inherit;
  width: 60px;
}
.account-content {
  position: inherit;
  background:#ececec;
  display: none;
  z-index: 20px;
}
.account-content li a {
  color: #515151;
  margin: 0;
  text-decoration: none;
}
.account-content li a:hover {
  background: white;
}
.account-content li {
  margin: 0;
  padding: 3px 6px;
}
.displayMe {
  display: block;
}
}
</style>

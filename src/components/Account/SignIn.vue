<template>
    <div class="wrapper">
        <div class="sign-content">
            <div class="title-container">
                <p>Welcome to our store</p>
                <h1>UkayPH</h1>
                <img src="@/assets/online-store.png">
            </div>
         <div class="sign-container">
             <h2>Sign In</h2>
             <form @submit="submitMe" class="form-container">
                 <label for="username">Acount:</label><br>
                 <input type="text" id="username" placeholder="Username" name="username"><br>
                 <br>
                 <label for="password">Password:</label><br>
                 <input type="password" id="password" placeholder="Password" name="password"><br>
                 <router-link to="">Forgot Password?</router-link>
                 <br>
                 <br>
                 <input type="submit" id="submit" value="Log In">
                 <span class="separate-line"></span>
 
                 <p>Sign in with:</p>
                 <div class="img-container">
                 <ul v-for="image in images" :key="image.id">
                 <img :src="image.imgs" :alt="image.alt">
                 </ul>
                 </div>
             </form>
           </div>
        </div>
        <footer>
            <small>All Right Reserved</small>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'SignIn',
    data() {
        return {
            images: [
                {
                imgs: require('../../assets/social/facebook.png'),
                alt: 'Facebook',
                id: 1,
                },
                {
                imgs: require('../../assets/social/twitter.png'),
                alt: 'Twitter',
                id: 2,
                },
                {
                imgs: require('../../assets/social/linkedin.png'),
                alt: 'Linkedin',
                id: 3,
                }
                ]
        }
    }
}
</script>

<style scoped>
.title-container {
    display: none;
}
.sign-container {
    width: 250px;
    padding-left: 20px;
    margin-top: 70px;
}
.form-container {
    width: 250px;
    padding-left: 30px;
    margin: 0 auto;
}
#submit {
    margin: 10px;
    padding: 10px 17px;
    border: none;
    font-weight: bold;
    background: rgb(0, 189, 252);
    box-shadow: 3px 10px 10px solid rgb(53, 53, 53);
    color:rgb(54, 54, 54);
    border-radius: 15px;
}
.form-container a {
    font-size: 8px;
    margin: 5px 0px 0px 90px;
}
.separate-line {
    display: block;
    height: 1px;
    width: 100%;
    margin: 20px auto;
    background: grey;
}
.sign-container p {
    font-size: 12px;
    color: #515151;
}
.form-container ul img {
    width: 30px;
}
.form-container ul {
    margin: 0;
    padding-left: 10px;
}
.img-container {
    display: flex;
}
footer {
    text-align: center;
    color: #515151;
    padding-top: 50px;
}
@media only screen and (min-width: 400px) {
    .sign-container {
        margin: 60px auto;
    }
}
@media only screen and (min-width: 700px) {
    .title-container {
        display: block;
        margin: 30px 0px 5px 50px;
    }
    .title-container p, h1 {
        margin: 0;
    }
    .title-container h1 {
        font-size: 50px;
        font-family: 'Montserrat'
    }
    .title-container p {
        font-size: 15px;
    }
    .title-container img {
        width: 250px;
        margin-left: 60px;
    }
    .sign-content {
        display: flex;
        max-width: 1000px;
        width: 98%;
        margin: 0 auto;
    }
    .sign-container {
        margin-top: 30px;
    }
}
</style>



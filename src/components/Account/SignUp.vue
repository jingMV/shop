<template>
    <div class="wrapper">
        <div class="sign-content">
            <div class="title-container">
                <p>Welcome to our shop</p>
                <h1>UkayPH</h1>
                <img src="@/assets/online-store.png">
            </div>
            <div class="sign-container">
                <h2>Sign Up</h2>
                <form @submit.prevent="submitForm" id="form">
                    <label for="username">Username:</label><br>
                    <input type="text" id="username" name="username" v-model="username" required><br><span v-if="errorM" :style="{color: color}">{{errorUser}}</span><br>
                    <br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" v-model="email" required><br>
                    <br>
                    <label for="PhoneNumber">Phone Number:</label><br>
                    <input type="tel" id="phoneNumber" name="phoneNumber" v-model.number="phonenumber"><br>
                    <br>
                    <label for="password">Password:</label><br>
                    <input type="password" id="Password" name="password" v-model="password" required><br><br><span v-if="errorP" :style="{color: color}">{{errorPass}}</span><br>
                    <label for="gender">Gender:</label><br>
                    <input type="radio" name="gender" value="male" v-model="gender" checked >Male 
                    <input type="radio" name="gender" value="female" v-model="gender">Female
                    <input type="radio" name="gender" value="other" v-model="gender">Other<br><br>
                    <label for="date">Birthday:</label><br>
                    <input type="date" name="date" value="date" v-model="date" ><br>
                    <br>
                    <input type="submit" value="Sign Up" id="submit"><br>
                    <p v-if="errors.length">
                        <b>PLEASE COMPLETE THE FOLLOWING REQUEST</b>
                        <ul>
                            <li v-for="error in errors">{{error}}</li>
                        </ul>
                    </p>
                </form>
            </div>
        </div>
        <footer>
            <small>All Right Reserved</small>
        </footer>
    </div>
</template>
<script>
import { isNumber } from 'util';
export default {
    name: 'SignUp',
    data() {
        return {
            username: null,
            phonenumber: '',
            email: null,
            password: null,
            gender: null,
            date: null,
            errors: [],
            color: 'red',
            errorUser: "Username: Minimum of 5 letters",
            errorM: false,
            errorPass: 'Password Minimum of 5 Characters',
            errorP: false,
        }
    },
    methods: {
        submitForm: function() {
            if(this.username && this.phonenumber && this.password && this.gender && this.date) {
                confirm('thank you for joining')
            } else {
                if(!this.username){alert("Username Required " + '' + " Username minimun of 5 letters")}
                if(!this.phonenumber){alert("Phone Number Required")}
                if(!this.password){alert("Password Required")}
                if(!this.gender){alert("Gender Required")}
                if(!this.date){alert("Birthday Required")}
            }
            if (this.username.length < 5) {
                this.errorM = true
            } else {
                this.errorM = false
            }
            //if (this.password.length < 5) {
            //   this.errorP = true
            //}else {
            //  this.errorP = false
           // }
    }
    }
}

</script>

<style scoped>
.errorStyle {
    display: none;
}
.title-container {
    display: none;
}
.sign-container {
    width: 300px;
    margin: 50px auto;
}
.sign-container {
    font-size: 11px;
}
footer {
    text-align: center;
    padding-top: 50px;
    color: #515151;
}
#submit {
    font-size: 12px;
    font-weight: bold;
    border: none;
    padding: 8px 13px;
    color:#ffffff;
    background: forestgreen;
    margin-top: 15px;
    border-radius: 15px;
}
</style>



<template>
    <div class="wrapper">
         <h3>Review</h3>
        <div class="review">

            <span class="tabb">
            <span @click="myRev"> View Review</span>
            <span @click="makeRev">Make a Review</span>
            </span>

            <div v-if="tab" class="user-review">
                <h4 v-if="myReview.length < 1">No Review Yet.</h4>
                <ul>
                    <li v-for="myRev in myReview" :key="myRev.id">{{myRev}}</li>
                </ul>
                
            </div>
            <br>
            <br>
            
            <div v-if="!tab" class="review-container">
            <p class="user-review" v-if="errors.length">
             <b>Please fill out the required form</b>
             <ul style="border: 1px solid red">
                <li  v-for="error in errors" :key="error.id">{{error}}</li>
             </ul>
            </p>
            <br>
                <form @submit.prevent="submitReview">
                    <label for="name">Name:</label><br>
                    <input type="text" name="name" id="name" v-model="name"><br><br>
                    <label for="textarea">Review:</label><br>
                    <textarea id="textarea" v-model="textarea"></textarea><br><br>
                    <label for="rating">Rating:</label>
                    <select id="rating" v-model.number="rating">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br>
                    <br>
                    <input type="submit" value="Send Review">
                    <br>
                </form>
            </div>
        </div>
    </div>
</template><script>
export default {
    name: 'review',
    data() {
        return {
            name: null,
            textarea: null,
            rating: null,
            myReview: [],
            errors: [],
            tabs: ['Review', 'Make a Review'],
            selectedtab: 'Review',
            tab: true
        }
    },
    methods: {
        submitReview: function() {
            
            if (this.name && this.textarea && this.rating) {
                this.myReview.push("Name: " + this.name)
                this.myReview.push("Review: " + this.textarea)
                this.myReview.push("Rating: " + this.rating)

                this.name = null
                this.textarea = null
                this.rating = null

                this.errors = []

            } 
            else {
                if(!this.name)this.errors.push("Name Required")
                if(!this.textarea)this.errors.push("Review Required")
                if(!this.ratin)this.errors.push("Rating Required")
            }

    },
    myRev: function() {
        this.tab = true
    },
    makeRev: function() {
        this.tab = false
    }

}
}
</script>
<style scoped>
.review {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}
.wrapper h3 {
    text-align: center;
    color: #515151;
}
.user-review {
    text-align: center;
}
.tabb {
    cursor: pointer;
    text-align: center;
}
.tabb span {
    margin: 0 10px;
    background: rgb(243, 243, 243);
    padding: 5px 10px;
    font-size: 15px;
    text-align: center;
    border: 1px solid orangered;
    border-radius: 7px;
    color: orangered;
}
.tabb span:hover {
    box-shadow: 1px 1px 3px #515151;
}
ul {
    padding: 0;
}
input[type=submit] {
    font-size: 15px;
    padding: 6px 11px;
    margin: 20px 0px;
    cursor: pointer;
    background: rgb(32, 56, 65);
    border-radius: 15px;
    border: none;
    color: antiquewhite
}
input[type=submit]:hover {
    background: rgb(23, 42, 49);
}
form {
    text-align: left;
    width: 300px;
    margin: 10px auto;
}
</style>


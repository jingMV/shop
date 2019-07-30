<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Vue from 'vue'

export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapMutations([
            'addtoFavorite',
        ])
    },
    created: function() {
        console.log(this.addtoFavorite)
    }
}
</script>

<style scoped>

</style>



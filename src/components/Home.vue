<template>
    <div >
        <div class="wrapper">
        <section class="section">
           <img src="@/assets/section-background.jpg">
        </section>
        <newArrival />
        <product />
        </div>
        <footers />
        
    </div>
</template>
<script>
import newArrival from './NewArrival.vue'
import product from './Product.vue'
import footers from './Footer.vue'

export default {
    name: 'Home',
    components : {
        newArrival,
        product,
        footers,
    }
}
</script>

<style scoped>
.section {
    margin: 0;
    padding: 0;
    width: 100%;
}
.section img {
    width: 100%;
    margin: 0 auto;
}
</style>



<script>
import Glide from '@glidejs/glide'
// import CardCarousel from "./CardCarousel.vue";

export default {
  // components: {CardCarousel},
  props:{
    recipes:[],
  },
  mounted:function (){
    // Glide JS
    new Glide('.glide', {
      type: 'carousel',
      autoplay: 2000,
      hoverpause: true,
      time: 2000,
      gap: 285,
      perView: 4,
      breakpoints: {
        576: {
          // Small Phones
          perView: 1,
        },
        678: {
          // Big Phones
          // gap:170,
          perView: 1,
          // peek: 75,
        },
        992: {
          // Tablets
          gap: 75,
          perView: 2,
          // peek: 15,
        },
        1200: {
          // Big Tables or Small Laptops
          gap: 200,
          perView: 3,
          // peek: 15,
        },
        1400: {
          // gap: 25,
          perView: 3,
          // peek: 15,
        },
      }
    }).mount();
    // Glide JS
    //   console.log('Carousel Api',this.recipes.recipes[2])
    // console.log("Carousel id",this.recipes[0].id)
  },
}

</script>

<template>
  <!--Carousel Start -->
  <!--  <h1>{{recipes.apiData[0]}}</h1>-->
  <div  id="index-recipesOfTheWeek" class="row-cols-1 my-5 ">
    <h3 class="fw-bold title-carousel">RECIPES OF THE <span class="yellow-line">WEEK</span></h3>
  </div>

  <!--Recipes of the week START -->
  <div class="row container-carousel m-auto">
    <div class="col">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">

            <li v-for="(recipe) in this.recipes" class="glide__slide">
              <router-link  :to="{name: 'recipeDetail', params: {id: recipe.id}}">
                <img class="img-sizeCards" :src="recipe.img" alt="">
              </router-link>
            </li>

          </ul>
        </div>
        <div class="glide">
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left btn-carouselLeft" data-glide-dir="<">
              <i class="bi bi-arrow-left-short fs-3"></i>
            </button>
            <button class="glide__arrow glide__arrow--right btn-carouselRight" data-glide-dir=">">
              <i class="bi bi-arrow-right-short fs-3"></i>
            </button>

          </div>
        </div>
        <div class="glide">
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
            <button class="glide__bullet" data-glide-dir="=4"></button>
            <button class="glide__bullet" data-glide-dir="=5"></button>
            <button class="glide__bullet" data-glide-dir="=6"></button>
            <button class="glide__bullet" data-glide-dir="=7"></button>
            <button class="glide__bullet" data-glide-dir="=8"></button>
            <button class="glide__bullet" data-glide-dir="=9"></button>
            <button class="glide__bullet" data-glide-dir="=10"></button>
            <button class="glide__bullet" data-glide-dir="=11"></button>
            <button class="glide__bullet" data-glide-dir="=12"></button>
          </div>
        </div>
      </div>
      <hr class="mt-5 yellow-line">
    </div>
    <!--Recipes of the week END -->
    <!--Carousel End-->
  </div>

</template>

<style scoped>

</style>
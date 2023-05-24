<script>
// GLIDE JS
import Carousel from "../components/Carousel.vue";
import ListCategory from "../components/ListCategories.vue";
import ListCards from "../components/ListCards.vue";
import AccordionFilter from "../components/AccordionFilter.vue";

export default {
  components: {ListCategory, Carousel,ListCards,AccordionFilter},
  props:{
    recipes:[],
    topRecipes:[],
    categories:[]
  },
  mounted() {
    // console.log("Home Categories", this.categories)
    // console.log("Home top recipes", this.topRecipes)
  },
  methods:{
    selectedCategory(category){
      console.log("Home selected category " , category)
      this.$emit('selectedcategory', category);
    },
    selectedCategories(categories){
      console.log("Recipes en Home con el filter", this.recipes)
      // console.log("Home selected category " , categories)
      this.$emit('selectedcategories', categories);
    }
  }
}

// GLIDE J
</script>

<template>
  <section class="container mt-5">
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col-12">
          <div class="container-banner">
            <p class="ms-5 text-banner"><span class="fw-bold">You</span> are what you <span
                class="fw-bold">eat</span></p>
            <img class="w-100" src="/img/banner.png" alt="">
          </div>
          <hr class="mt-5 yellow-line">
        </div>
      </div>
    </div>

    <carousel v-if="this.topRecipes.length > 0" :recipes="this.topRecipes"></carousel>

    <!--Recipes START -->
    <div id="index-recipes" class="row m-auto my-5  ">
      <div class="col-10">
        <h3 class="title-carousel fw-normal fw-bold">RECIPES</h3>
      </div>

      <!--      %Accordion Filter-->
      <accordion-filter v-if="this.categories.length > 0" :listCategories="this.categories" v-on:selectedcategories="selectedCategories" ></accordion-filter>
<!--      <accordion-filter v-if="this.categories.length > 0" :list-categories="this.categories"></accordion-filter>-->
      <!--      %Accordion Filter-->

    </div>

    <!--    !List Category-->
    <list-category v-if="this.categories.length > 0" :listCategories="this.categories" v-on:selectedcategory="selectedCategory"></list-category>
    <!--    !List Category-->

    <!--    $List Recipes-->
    <ListCards v-if="this.recipes.length > 0" :recipes="this.recipes"></ListCards>
    <!--    $List Recipes-->

    <!--Recipes END -->
  </section>





</template>

<style scoped>

</style>
<script>
// GLIDE JS
import Carousel from "../components/Carousel.vue";
import ListCategory from "../components/ListCategories.vue";
import ListCards from "../components/ListCards.vue";

export default {
  components: {ListCategory, Carousel,ListCards},
  props:{
    recipes:[],
    topRecipes:[],
    categories:[]
  },
  mounted() {
    console.log("Home Categories", this.categories)
    console.log("Home top recipes", this.topRecipes)
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

      <div class="col-2">
        <div class="dropdown">
          <button type="button" class="btn clr-black dropdown btn-search " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" data-bs-auto-close="outside">
            <i class="bi bi-filter fs-3"></i>
          </button>
          <div class="dropdown-menu dropdown-width dropdown-menu-end dropdown-menu-lg-start">
            <h5 class="ff-inter px-3">Filters </h5>
            <div class="input-group px-3 my-3">
              <input type="text" class="form-control" placeholder="Hamburger..." aria-label="Username"
                     aria-describedby="basic-addon1">
              <span type="button" class="input-group-text btn btn-dark btn-search" id="basic-addon1">
                    <span class="material-symbols-outlined text-dark ">search</span>
                </span>
            </div>
            <form  class="px-3">
              <!--                        @ACCORDION START-->
              <div class="accordion  ff-inter" id="accordionPanelsStayOpenExample">
                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Category
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Appetizers
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Appetizers
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Appetizers
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Appetizers
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Appetizers
                        </label>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Occasion
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Holidays
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Holidays
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Holidays
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Holidays
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Holidays
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Complexity
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Easy
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Medium
                        </label>
                      </div>
                      <div class="form-check my-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                          Hard
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--                        @ACCORDION START-->
            </form>
          </div>
        </div>
      </div>
    </div>

    <!--    !List Category-->
    <list-category v-if="this.categories.length > 0" :listCategories="this.categories"></list-category>
    <!--    !List Category-->

    <!--    $List Recipes-->
    <ListCards v-if="this.recipes.length > 0" :recipes="this.recipes"></ListCards>
    <!--    $List Recipes-->

    <!--Recipes END -->
  </section>





</template>

<style scoped>

</style>
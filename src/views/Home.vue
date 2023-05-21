<script>
// GLIDE JS
import Glide from '@glidejs/glide'
import Carousel from "../components/Carousel.vue";
import {onMounted} from "vue";
import ApiSpoonacular from "../ApiSpoonacular.vue";

export default {
  components: {Carousel},
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
    <!--    Carousel-->
    <!--    Carousel-->
    <!--    &lt;!&ndash;Carousel Start &ndash;&gt;-->

    <!--    &lt;!&ndash;Recipes of the week START &ndash;&gt;-->
    <!--    <div class="row container-carousel m-auto">-->
    <!--      <div class="col">-->
    <!--        <div class="glide">-->
    <!--          <div class="glide__track" data-glide-el="track">-->
    <!--            <ul class="glide__slides">-->
    <!--              <li class="glide__slide">-->
    <!--                <img class="img-sizeCards" src="/img/recipe%20(1).png" alt="">-->
    <!--              </li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--          <div class="glide">-->
    <!--            <div class="glide__arrows" data-glide-el="controls">-->
    <!--              <button class="glide__arrow glide__arrow&#45;&#45;left btn-carouselLeft" data-glide-dir="<">-->
    <!--                <i class="bi bi-arrow-left-short fs-3"></i>-->
    <!--              </button>-->
    <!--              <button class="glide__arrow glide__arrow&#45;&#45;right btn-carouselRight" data-glide-dir=">">-->
    <!--                <i class="bi bi-arrow-right-short fs-3"></i>-->
    <!--              </button>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="glide">-->
    <!--            <div class="glide__bullets" data-glide-el="controls[nav]">-->
    <!--              <button class="glide__bullet" data-glide-dir="=0"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=1"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=2"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=3"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=4"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=5"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=6"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=7"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=8"></button>-->
    <!--              <button class="glide__bullet" data-glide-dir="=9"></button>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <hr class="mt-5 yellow-line">-->
    <!--      </div>-->
    <!--      &lt;!&ndash;Recipes of the week END &ndash;&gt;-->
    <!--      &lt;!&ndash;Carousel End&ndash;&gt;-->
    <!--    </div>-->


    <!--Recipes START -->
    <div id="index-recipes" class="row m-auto my-5  ">
      <div class="col-10">
        <h3 class="title-carousel fw-normal fw-bold">RECIPES</h3>
      </div>
      <!--        <div class="col-6">-->
      <!--            <div class="input-group mb-3">-->
      <!--                <input type="text" class="form-control" placeholder="Hamburger..." aria-label="Username"-->
      <!--                       aria-describedby="basic-addon1">-->
      <!--                <span type="button" class="input-group-text btn btn-dark btn-search" id="basic-addon1">-->
      <!--                    <span class="material-symbols-outlined text-dark ">search</span>-->
      <!--                </span>-->
      <!--            </div>-->
      <!--        </div>-->
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
    <div class="row-cols-1">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ps-3">
              <li class="nav-item">
                <button class="btn ff-inter fs-5 me-5 btn-category">All</button>
              </li>
              <li class="nav-item">
                <button class="btn fs-5 mx-4 btn-category">Appetizers</button>
              </li>
              <li class="nav-item">
                <button class="btn fs-5 mx-4">Soups</button>
              </li>
              <li class="nav-item">
                <button class="btn fs-5 mx-4">Salads</button>
              </li>
              <li class="nav-item">
                <button class="btn fs-5 mx-4">Desserts</button>
              </li>
              <li class="nav-item">
                <button class="btn fs-5 mx-4">Beverages</button>
              </li>
              <li class="nav-item">
                <button class="btn fs-5 mx-4">Snacks</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="row m-auto">

      <div class="col m-auto">
        <ul class="cards-horizontal m-auto">
          <a href="#" class="text-decoration-none">
            <li class="cards_item-horizontal mx-0">
              <div class="card-horizontal">
                <div class="card_price-horizontal">

                  <p><i class="bi bi-heart pe-2"></i>54</p>
                </div>
                <div class="card_image-horizontal"><img
                    src="/img/recipe%20(2).png"
                    alt="mixed vegetable salad in a mason jar. "></div>
                <div class="card_content-horizontal">
                  <h2 class="card_title-horizontal fs-2 text-truncate">Greek Yogurt Parfait with Fresh Berries</h2>
                  <div class="card_text-horizontal">
                    <ul class="list-unstyled pb-1 gap-3">
                      <li class="fs-5 mb-1">
                        <i class="bi bi-alarm pe-2"></i>
                        15 min
                      </li>
                      <li class="fs-5 mb-1">
                        <i class="bi bi-award pe-2"></i>
                        13 portions</li>
                      <li class="fs-5 mb-1">
                        <i class="bi bi-book pe-2"></i>
                        Hard</li>
                    </ul>
                  </div>

                  <router-link :to="{name: 'recipeDetail'}" class="btn rounded-3 btn-lg my-1 clr-yellow w-100" role="button">View Recipe</router-link>
                  <!--                  <a href="#" class="btn rounded-3 btn-lg my-1 clr-yellow w-100" role="button">View recipe</a>-->
                </div>
              </div>
            </li>
          </a>
        </ul>
      </div>

    </div>
    <!--Recipes END -->
  </section>





</template>

<style scoped>

</style>
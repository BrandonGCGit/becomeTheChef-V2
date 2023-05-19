<script>
// GLIDE JS
import Glide from '@glidejs/glide'

export default {
  mounted() {
    // Glide JS
    new Glide('.glide', {
      type: 'carousel',
      autoplay: 2000,
      hoverpause: true,
      time: 2000,
      gap: 225,
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
  }
}

// GLIDE J
</script>

<template>
  <section class="container mt-5">
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <router-link :to="{name: '/'}"><img src="/img/LOGO NEGRO.png" alt="Logo"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="material-symbols-outlined">menu</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 g-5 me-2">
              <li class="nav-item mx-3">
                <a class="btn fs-5 fw-normal" href="#index-recipes" role="button">Recipes</a>
              </li>
              <li class="nav-item mx-3">
                <a class="btn fs-5 fw-normal" href="#index-recipesOfTheWeek" role="button">Recipes of the week</a>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'login'}"
                             class="nav-link btn btn-lg fs-5 fw-normal btn-singIn border-radius-login clr-whiteCream text-black "
                >Login
                </router-link>
<!--                <a class="nav-link btn btn-lg fs-5 fw-normal btn-singIn border-radius-login clr-whiteCream text-black " href="./login.html" role="button">Log in</a>-->
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'singUp'}"
                             class="nav-link btn btn-lg fs-5 btn-register border-radius-signup clr-yellow text-black"
                >Sing Up
                </router-link>
<!--                <a class="nav-link btn btn-lg fs-5 btn-register border-radius-signup clr-yellow text-black" href="./signup.html" role="button">Sign up</a>-->
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr  class="yellow-line">
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
    </header>

    <!--Header End-->
    <div  id="index-recipesOfTheWeek" class="row-cols-1 my-5 ">
      <h3 class="fw-bold title-carousel">RECIPES OF THE <span class="yellow-line">WEEK</span></h3>
    </div>
    <!--Carousel Start -->

    <!--Recipes of the week START -->
    <div class="row container-carousel m-auto">
      <div class="col">
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <img class="img-sizeCards" src="/img/recipe%20(1).png" alt="">
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
            </div>
          </div>
        </div>
        <hr class="mt-5 yellow-line">
      </div>
      <!--Recipes of the week END -->
      <!--Carousel End-->
    </div>


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

  <!--    =================================================-->
  <!--    FOOTER START-->
  <!--    =================================================-->
  <footer class="">

    <div class="container-fluid clr-whiteCream border-top mt-5">

      <!--==============================-->
      <div class="col pt-3 pb-3 text-center bg-transparent">
        <a href="#"><img src="/img/LOGO%20NEGRO.png" alt="img-brand-white"></a>

      </div>

      <!--FIN DE LA PRIMERA COLUM-->
      <!--INICIO DE LA SEGUNDA COLUM-->
      <div class="row align-items-center">

        <!--INICIO ROW 02-->
        <div class="col pt-3 me-4">
          <ul class="social justify-content-center">
            <li>
              <a class="facebook" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
            <li>
              <a class="instagram" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fa fa-instagram fs-3 pe-0 mx-0" aria-hidden="true"></i>
              </a>
            </li>
          </ul>


        </div>

      </div>
      <!--FIN DE LA SEGUNDA COLUM-->
      <div class="row pb-4 pt-4 text-center">
        <div class="d-flex flex-column justify-content-center">
          <p class="txt-terms mb-0">Copyright 2022</p>
          <p class="txt-terms mt-0">proyecto ITM desarrollo de aplicaciones interactivas_TM4100</p>
        </div>

      </div>



    </div><!--FIN DEL CONTAINER-->


  </footer>


  <!--    =================================================-->
  <!--    FOOTER END-->
  <!--    =================================================-->



</template>

<style scoped>

</style>
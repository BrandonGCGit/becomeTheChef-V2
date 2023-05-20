<script>
export default {
  methods:{
  }
}
</script>

<template>

  <div class="container mt-5" >
    <!--*Recipes Banner START -->
    <div class="row m-auto clr-whiteCream border-radius-exterior">
      <div class="col-fluid-5 container-banner-text border-radius-left ff-inter">
        <h3 class="fs-1 fw-bold ps-3 pt-3">Classic chocolate chip cookies</h3>
        <p class=" fs-6 ms-4 text word-spacing ">These classic chocolate chip cookies are a favorite for
          any
          occasion. They're easy to
          make, and the end
          result is a soft, chewy cookie with just the right amount of sweetness. The recipe starts with a
          simple
          mix of flour, baking soda, and salt, which gets combined with a creamy mixture of butter, white and
          brown sugars, eggs, and vanilla extract. Finally, the chocolate chips are folded in, creating a
          delicious cookie dough that is perfect for baking. Once the cookies come out of the oven, they're
          golden
          brown and chewy, with melty chocolate chips in every bite. Serve them warm with a glass of milk, or
          enjoy them as a sweet snack any time of day!
        </p>
        <div class="ms-3 tag clr-yellow rounded-3">
          <a class="nav-link text-dark p-0 mb-2" href="">#Dinner</a>
        </div>
      </div>
      <div class="col-7 px-0 container-banner-img position-relative">
        <div class="card_price-horizontal position-absolute">
          <button class="btn bg-transparent fs-1"><i class="bi bi-heart pe-2"></i>54</button>
        </div>
        <img class="img-banner border-radius-right w-100" src="img/recipe%20(4).png" alt="">
      </div>
    </div>

    <!-- !Recipes LIKES AND DISLIKES START-->
    <!--    <div-->
    <!--            class="row m-auto mt-2 mb-2 clr-whiteCream border-radius-exterior shadow-container-info border-line bg-pattern ">-->
    <!--        <div class="col-12">-->
    <!--            <div class="ms-3 mt-2 d-flex gap-5 justify-content-end">-->
    <!--                <p class=" fs-2"><span class="material-symbols-outlined me-2 icon fs-2">favorite</span>45</p>-->
    <!--                <p class=" fs-2"><span class="material-symbols-outlined me-2 icon fs-2">thumb_down</span>10</p>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!-- !Recipes LIKES AND DISLIKES END-->

    <!--@Tags START-->
    <div class="row">
      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 mb-5">Occasion</h5>
          <p class="ff-inter fs-3">Holidays</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 mb-5">Occasion</h5>
          <p class="ff-inter fs-3">Holidays</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Portions</h5>
          <p class="ff-inter fs-lg">4</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Time of preparation</h5>
          <p class="ff-inter fs-6"><span class="fs-lg">15</span>min</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Time of cooking</h5>
          <p class="ff-inter fs-6"><span class="fs-lg">25</span>min</p>
        </div>
      </div>

      <div class="col  mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Total time</h5>
          <p class="ff-inter fs-6"><span class="fs-lg">40</span>min</p>
        </div>
      </div>

    </div>
    <!--@Tags END-->

    <hr class="yellow-line mt-5 w-100">

    <!--*Recipes Banner END -->

    <!--!Recipes Ingredients START -->
    <div
        class="row-cols-1  m-auto mt-4 clr-whiteCream border-radius-exterior">
      <h3 class="ff-inter fs-1 fw-bold ms-3 pt-3">Ingredients</h3>
      <ul class="fs-4 ms-4 p-4">
        <li>2 1/4 cups all-purpose flour</li>
        <li>1 tsp baking soda</li>
        <li>1 tsp salt</li>
        <li>1 cup unsalted butter, at room temperature</li>
        <li>3/4 cup white granulated sugar</li>
        <li>3/4 cup light brown sugar, packed</li>
        <li>2 large eggs</li>
        <li>2 tsp vanilla extract</li>
        <li>2 cups semisweet chocolate chips</li>
      </ul>
    </div>
    <hr class="yellow-line mt-5 w-100">
    <!--!Recipes Ingredients END -->

    <!--?Recipes Instructions START -->
    <div
        class="row-cols-1  m-auto mt-4 clr-whiteCream border-radius-exterior">
      <h3 class="ff-inter fs-1 fw-bold ps-5 pt-3">Instructions</h3>
      <ol class="fs-4 px-5 ms-4 my-1 word-spacing-instructions instructions-step list-unstyled">

        <li class="">
          <p> Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper. </p>
        </li>
        <li class="instructions-step">
          <p> In a medium bowl, whisk together the flour, baking soda, and salt. </p>
        </li>
        <li class="instructions-step">
          <p>
            In a large mixing bowl, use an electric mixer to cream the butter, white granulated sugar, and
            light brown sugar together until light and fluffy, about 2-3 minutes.
          </p>
        </li>
        <li class="instructions-step">
          <p>
            Beat in the eggs, one at a time, until fully incorporated. Stir in the vanilla extract.
          </p>
        </li>
        <li class="instructions-step">
          <p>
            Gradually add the dry ingredients to the wet mixture, mixing until just combined.
          </p>
        </li>
        <li class="instructions-step">
          <p>
            Stir in the chocolate chips until evenly distributed throughout the dough.
          </p>
        </li>
        <li class="instructions-step">
          <p>
            Drop rounded tablespoons of dough onto the prepared baking sheet, spacing them about 2 inches
            apart.
          </p>
        </li>
        <li class="instructions-step">
          <p>
            Bake for 10-12 minutes, or until the edges are golden brown and the centers are set.
          </p>
        </li>
        <li class="instructions-step">
          <p>
            Allow the cookies to cool on the baking sheet for 5 minutes before transferring them to a wire
            rack to cool completely.
          </p>
        </li>

      </ol>
    </div>
    <hr class="yellow-line mt-5 w-100">
    <!--?Recipes Instructions END -->
    <!--@Recipe INFO END -->

    <!-- *You'll Also Love START-->
    <div class="row m-auto">
      <h3 class="ff-inter fs-1 fw-bold ps-5 pt-3">You'll Also Love</h3>
      <ul class="cards-horizontal">
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
    <!-- *You'll Also Love END-->
  </div>
  <!-- ?Header Start-->

</template>

<style scoped>

</style>
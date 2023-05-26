<script>

export default {
  props:{
    id:{
      type:String,
      default: "default ID"
    },
    name:{
      type:String,
      default: "default name"
    },
    likes:{
      type:String,
      default: "777"
    },
    img:{
      type:String,
      default: "default img"
    },
    description:{
      type:String,
      default: "default description"
    },
    category:{
      type:String,
      default: "default category"
    },
    occasion:{
      type:String,
      default: "default occasion"
    },
    complexity:{
      type:String,
      default: "default complexity"
    },
    portions:{
      type:String,
      default: "777"
    },
    timeOfPreparation:{
      type:String,
      default: "777"
    },
    timeOfCooking:{
      type:String,
      default: "777"
    },
    totalTime:{
      type:String,
      default: "777"
    },
    ingredients:[],

    instructions:{
      type:String,
      default: "default instructions"
    },
  },
  data(){
    return{
      recipe:{}
    }
  },
  mounted() {
    function countProperties(obj) {
      var count = 0;

      for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
          ++count;
      }

      return count;
    }

    console.log("RECIPE DETAIL MOUNTEd", this.name)
    axios({
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.id
    }).then(
        (response) => {
          let items = response.data;
          console.log("Receta", items)

          this.recipe.id = items.meals[0].idMeal;
          this.recipe.name = items.meals[0].strMeal;
          this.recipe.img = items.meals[0].strMealThumb;
          // Todo description
          this.recipe.category = items.meals[0].strCategory;
          // Todo Occasion
          // TODO complexity
          // TODO portions
          // TODO timeOfPreparation
          // TODO  timeOfCooking
          // TODO  totalTime
          let recipeIngredients = []
            for (let i = 1; i < countProperties(items.meals[0]); i++){
            if (items.meals[0]["strIngredient" + i] != undefined && items.meals[0]["strIngredient" + i] != ""){
              recipeIngredients.push(items.meals[0]["strIngredient" + i]);
              this.recipe.ingredients = recipeIngredients;
            }
          }
          // TODO instructions
          this.recipe.instructions = items.meals[0].strInstructions;

          // for (var i = 1; i < items.lenght; i++) {
          //   console.log("eNTRE EN EL FOR")
          //   if (items.meals.strIngredient + i != ""){
          //     this.ingredients.push(items.meals.strIngredient + 1);
          //     console.log("Recipe detail ingredients" ,this.ingredients);
          //   }else{
          //     i = items.lenght
          //   }
          //
          // }
          // items.forEach(recipe =>{
          //   this.ingredients.push({
          //
          //   })
          // })
          //
          // this.instructions = items.meals.strInstructions

        }
    ).catch(
        error => console.log(error)
    );
    // console.log("recipe Details",this.id)
    // this.$test.on('foo', data =>{
    //   console.log("Bus details", data)
    // })
  },
}
</script>

<template>

  <div class="container mt-5" >
    <!--*Recipes Banner START -->
    <div class="row m-auto clr-whiteCream border-radius-exterior">
      <div class="col-fluid-5 container-banner-text border-radius-left ff-inter">
        <h3 class="fs-1 fw-bold ps-3 pt-3">{{recipe.name}}</h3>
        <p class=" fs-6 ms-4 text word-spacing ">
          {{description}}
        </p>
        <div class="ms-3 tag clr-yellow rounded-3">
          <a class="nav-link text-dark p-0 mb-2" href="">#{{recipe.category}}</a>
        </div>
      </div>
      <div class="col-7 px-0 container-banner-img position-relative">
        <div class="card_price-horizontal position-absolute">
          <button class="btn bg-transparent fs-1"><i class="bi bi-heart pe-2"></i>{{likes}}</button>
        </div>
        <img class="img-banner border-radius-right w-100" :src="recipe.img" alt="">
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
          <h5 class="ff-inter pt-3 mb-5">Complexity</h5>
          <p class="ff-inter fs-3">{{complexity}}</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 mb-5">Occasion</h5>
          <p class="ff-inter fs-3">{{occasion}}</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Portions</h5>
          <p class="ff-inter fs-lg">{{portions}}</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Time of preparation</h5>
          <p class="ff-inter fs-6"><span class="fs-lg">{{timeOfPreparation}}</span>min</p>
        </div>
      </div>

      <div class="col yellow-right-line mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Time of cooking</h5>
          <p class="ff-inter fs-6"><span class="fs-lg">{{timeOfCooking}}</span>min</p>
        </div>
      </div>

      <div class="col  mt-4 vh-25">
        <div class="clr-whiteCream text-center border-radius-exterior vh-25 ">
          <h5 class="ff-inter pt-3 pb-4">Total time</h5>
          <p class="ff-inter fs-6"><span class="fs-lg">{{totalTime}}</span>min</p>
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
        <li v-for="(ingredients) in this.recipe.ingredients">{{ingredients}}</li>
<!--        <li>2 1/4 cups all-purpose flour</li>-->
<!--        <li>1 tsp baking soda</li>-->
<!--        <li>1 tsp salt</li>-->
<!--        <li>1 cup unsalted butter, at room temperature</li>-->
<!--        <li>3/4 cup white granulated sugar</li>-->
<!--        <li>3/4 cup light brown sugar, packed</li>-->
<!--        <li>2 large eggs</li>-->
<!--        <li>2 tsp vanilla extract</li>-->
<!--        <li>2 cups semisweet chocolate chips</li>-->
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
          <p> {{this.recipe.instructions}} </p>
        </li>
<!--        <li class="instructions-step">-->
<!--          <p> In a medium bowl, whisk together the flour, baking soda, and salt. </p>-->
<!--        </li>-->
<!--        <li class="instructions-step">-->
<!--          <p>-->
<!--            In a large mixing bowl, use an electric mixer to cream the butter, white granulated sugar, and-->
<!--            light brown sugar together until light and fluffy, about 2-3 minutes.-->
<!--          </p>-->
<!--        </li>-->
<!--        <li class="instructions-step">-->
<!--          <p>-->
<!--            Beat in the eggs, one at a time, until fully incorporated. Stir in the vanilla extract.-->
<!--          </p>-->
<!--        </li>-->
<!--        <li class="instructions-step">-->
<!--          <p>-->
<!--            Gradually add the dry ingredients to the wet mixture, mixing until just combined.-->
<!--          </p>-->
<!--        </li>-->
<!--        <li class="instructions-step">-->
<!--          <p>-->
<!--            Stir in the chocolate chips until evenly distributed throughout the dough.-->
<!--          </p>-->
<!--        </li>-->
<!--        <li class="instructions-step">-->
<!--          <p>-->
<!--            Drop rounded tablespoons of dough onto the prepared baking sheet, spacing them about 2 inches-->
<!--            apart.-->
<!--          </p>-->
<!--        </li>-->
<!--        <li class="instructions-step">-->
<!--          <p>-->
<!--            Bake for 10-12 minutes, or until the edges are golden brown and the centers are set.-->
<!--          </p>-->
<!--        </li>-->
<!--        <li class="instructions-step">-->
<!--          <p>-->
<!--            Allow the cookies to cool on the baking sheet for 5 minutes before transferring them to a wire-->
<!--            rack to cool completely.-->
<!--          </p>-->
<!--        </li>-->

      </ol>
    </div>
    <hr class="yellow-line mt-5 w-100">
    <!--?Recipes Instructions END -->
    <!--@Recipe INFO END -->

    <!-- *You'll Also Love START-->
    <div class="row m-auto">
      <h3 class="ff-inter fs-1 fw-bold ps-5 pt-3">You'll Also Love</h3>
      <ul class="cards-horizontal">
      </ul>
    </div>
    <!-- *You'll Also Love END-->
  </div>
  <!-- ?Header Start-->

</template>

<style scoped>

</style>
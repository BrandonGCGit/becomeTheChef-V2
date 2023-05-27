<script>
export default {
  props:{
    id:0
  },
  data(){
    return{
      recipe:{}
    }
  },
  mounted() {
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
          this.recipe.description = "Description default"
          this.recipe.category = items.meals[0].strCategory;
          // Todo Occasion
          this.recipe.occasion = "Occasion default"
          // TODO complexity
          this.recipe.complexity = "Complexity default"
          // TODO portions
          this.recipe.portions = 777;
          // TODO timeOfPreparation
          this.recipe.timeOfPreparation = 777
          // TODO  timeOfCooking
          this.recipe.timeOfCooking = 777
          // TODO  totalTime
          this.recipe.totalTime = 777
          // TODO Featured
          this.recipe.featured = true
          let recipeIngredients = []
          for (let i = 1; i < countProperties(items.meals[0]); i++){
            if (items.meals[0]["strIngredient" + i] != undefined && items.meals[0]["strIngredient" + i] != ""){
              recipeIngredients.push(items.meals[0]["strIngredient" + i]);
              this.recipe.ingredients = recipeIngredients;
            }
          }
        }
    ).catch(
        error => console.log(error)
    );
  }
}
</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <!-- *Tool Bar START -->
      <div class="col-12">
        <div class="row border-bottom mx-3">
          <div class="col">
            <h3 class="ff-inter fw-bold ps-4 mt-4 mb-3">
              Recipe Edit
            </h3>
          </div>
        </div>
        <div class="row mx-3">
          <!-- !EDIT START -->
          <!-- @FORME START -->
          <div class="col-10 align-items-baseline justify-content-start">
            <form action="" method="">
              <div class="row">
                <!-- *STATUS DROPDOWN START -->
                <div class="col-4">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>...</option>
                      <option value="1">Active</option>
                      <option value="2">Disabled</option>
                    </select>
                    <label for="floatingSelect">Status</label>
                  </div>
                </div>
                <!-- *STATUS DROPDOWN END -->
                <!-- ?BUTTON STATUS START -->
                <div class="d-flex col-8 align-items-baseline mt-4">
                  <button type="button" class="btn btn-lg btn-success w-50">Active</button>
                </div>
                <!-- ?BUTTON STATUS END -->

                <!-- @NAME START-->
                <div class="col-8">
                  <div class="form-floating mb-3">
                    <input type="email"
                           class="form-control form-control-plaintext margin-inputs-signup border-bottom border-top-0 fs-6 mt-3 border-radius-0"
                           id="edit-form-name"
                           placeholder="Name"
                           name="register_email"
                           :value="this.recipe.name"
                    >
                    <label for="edit-form-name">Recipe name</label>
                  </div>
                </div>
                <!-- @NAME END-->
                <!-- !PORTIONS START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control form-control-plaintext margin-inputs-signup border-bottom border-top-0 fs-6 mt-3 border-radius-0"
                        id="edit-form-name"
                        placeholder="Name"
                        name="register_email"
                        :value="this.recipe.portions"
                    >
                    <label for="edit-form-name">Portions</label>
                  </div>
                </div>
                <!-- !PORTIONS END -->
                <!-- *TIME OF PREPARATION START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control form-control-plaintext margin-inputs-signup border-bottom border-top-0 fs-6 mt-3 border-radius-0"
                        id="edit-form-name"
                        placeholder="Name"
                        name="register_email"
                        :value="this.recipe.timeOfPreparation"
                    >
                    <label for="edit-form-name">Time of Preparation (min)</label>
                  </div>
                </div>
                <!-- *TIME OF PREPARATION END -->
                <!-- ?TIME OF COOKING START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control form-control-plaintext margin-inputs-signup border-bottom border-top-0 fs-6 mt-3 border-radius-0"
                        id="edit-form-name"
                        placeholder="Name"
                        name="register_email"
                        :value="this.recipe.timeOfCooking"
                    >
                    <label for="edit-form-name">Time of cooking (min)</label>
                  </div>
                </div>
                <!-- ?TIME OF COOKING END -->
                <!-- !TOTAL TIME START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control form-control-plaintext margin-inputs-signup border-bottom border-top-0 fs-6 mt-3 border-radius-0"
                        id="edit-form-name"
                        placeholder="Name"
                        name="register_email"
                        :value="this.recipe.totalTime"
                    >
                    <label for="edit-form-name">Total time (min)</label>
                  </div>
                </div>
                <!-- !TOTAL TIME END -->
                <!-- @COMPLEXITY START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>{{this.recipe.complexity}}</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Complexity</label>
                  </div>
                </div>
                <!-- @COMPLEXITY END -->
                <!-- ?CATEGORY START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>{{this.recipe.category}}</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Category</label>
                  </div>
                </div>
                <!-- ?CATEGORY END -->
                <!-- *OCCASION START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>{{this.recipe.occasion}}</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Occasion</label>
                  </div>
                </div>
                <!-- *OCCASION END -->
                <!-- !FEATURED START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>{{this.recipe.featured}}</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Featured</label>
                  </div>
                </div>
                <!-- !FEATURED END -->
                <!-- @DESCRIPTION START-->
                <div class="col-12 mt-5">
                  <div class="form-floating mb-3">
                                        <textarea :value="this.recipe.description" class="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2Disabled"></textarea>
                    <label for="floatingTextarea2Disabled">Description</label>
                  </div>
                </div>
                <!-- @DESCRIPTION END-->
                <!-- ?List OF INGREDIENTS START -->
                <div class="col-12 mt-3">
                  <div class="form-floating mb-3">
                                        <textarea :value="this.recipe.ingredients" class="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2Disabled"></textarea>
                    <label for="floatingTextarea2Disabled">Ingredients</label>
                  </div>
                </div>
                <!-- ?List OF INGREDIENTS END -->
                <!-- *LIST OF INSTRUCTIONS START-->
                <div class="col-12 mt-3">
                  <div class="form-floating mb-3">
                                        <textarea :value="this.recipe.instructions" class="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2Disabled"></textarea>
                    <label for="floatingTextarea2Disabled">Instructions</label>
                  </div>
                </div>
                <!-- *LIST OF INSTRUCTIONS END-->

              </div>
            </form>

          </div>
          <!-- @FORME END -->
          <!-- *RECIPE IMG START -->
          <div class="col-2 mt-4">
            <img class="img-fluid img-thumbnail" src="/img/recipe%20(1).png" alt="">
            <div class="input-group mt-2">
              <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
            </div>
          </div>
          <!-- *RECIPE IMG START -->
          <!-- !EDIT END -->
        </div>
      </div>
      <!-- @Content END -->
    </div>
  </section>
</template>

<style scoped>

</style>
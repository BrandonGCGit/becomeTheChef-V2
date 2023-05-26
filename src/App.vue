<script>
// import ApiSpoonacular from "./ApiSpoonacular.vue";
import mitt from "mitt";


export default {
  name: 'App',

  data(){
    return{
      loading: true,
      recipes:[],
      topRecipes:[],
      categories:[]
    }
  },


  mounted() {
    // $Recipes
    // https://www.themealdb.com/api/json/v1/1/list.php?c=list
    axios({
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    }).then(
        (response) => {
          let items = response.data.meals;
          if (items.length > 0)this.loading = !this.loading;
          items.forEach(recipe => {
            this.recipes.push({
              id: recipe.idMeal,
              name: recipe.strMeal,
              img: recipe.strMealThumb,
              likes: 0
            })
          })

          // console.log('APP Recipes',this.recipes)
        }
    ).catch(
        error => console.log(error)
    );
    // $Recipes


    // ?TopRecipes
    // Top recipes no obtiene las recets mas votadas se esperara a tener la base de datos para tener la funionnalida correcta
    axios({
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
    }).then(
        (response) => {
          let items = response.data.meals;
          if (items.length > 0)this.loading = !this.loading;
          items.forEach(recipe => {
            this.topRecipes.push({
              id: recipe.idMeal,
              name: recipe.strMeal,
              img: recipe.strMealThumb
            })
          })
        }
    ).catch(
        error => console.log(error)
    );
    // ?TopRecipes

    //   !Categories
    axios({
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/categories.php'
    }).then(
        (response) => {
          let items = response.data.categories;
          if (items.length > 0) this.loading = !this.loading;
            items.forEach(category => {
              this.categories.push({
                id: category.idCategory,
                name: category.strCategory
              })
            })
          // // this.categories = response.data.meals
          // let items = response.data.meals;
          // items.forEach( element => {
          //   this.categories.push({id:element.index, name: element.strCategory})
          // }
          // );
        }
    ).catch(
        error => console.log(error)
    );
    //   !Categories
  },
  methods:{
    // App>Home>ListCagories>CategoryButton
    selectedCategory(category){
      // $Recipes
      this.recipes =[];
      // https://www.themealdb.com/api/json/v1/1/list.php?c=list
      axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
      }).then(
          (response) => {
            let items = response.data.meals;
            if (items.length > 0)this.loading = false
            items.forEach(recipe => {
              this.recipes.push({
                id: recipe.idMeal,
                name: recipe.strMeal,
                img: recipe.strMealThumb,
                likes: 0
              })
            })

            // console.log('APP Recipes',this.recipes)
          }
      ).catch(
          error => console.log(error)
      );
      // $Recipes
      // console.log("App selected category", category)
    },

    // App>Home>AccordionFilter>AccordionButton
    selectedCategories(categories){
      // console.log("Selected categories from APP", categories)
      // $Recipes
      // console.log("Recipes pro primera vez",this.recipes)
      console.log("lenght recipes", this.recipes.length)

        this.recipes =[];
        // https://www.themealdb.com/api/json/v1/1/list.php?c=list
        // console.log("INICIANDO FOR", categories.length)
        for (let i = 0; i < categories.length; i++){
          // console.log("SE ENTRO EN EL FOR")
          let category;
          let recipesSelectedCategory = [];
          category = categories[i];
          // console.log("Funcionandno el category de app" , category)
          axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
          }).then(
              (response) => {
                let items = response.data.meals;
                if (items.length > 0)this.loading = false;
                items.forEach(recipe => {
                  recipesSelectedCategory.push({
                    id: recipe.idMeal,
                    name: recipe.strMeal,
                    img: recipe.strMealThumb,
                    likes: 0
                  })
                })
                // console.log('APP Recipes',this.recipes)
                this.recipes.push(recipesSelectedCategory);
              }
          ).catch(
              error => console.log(error)
          );
          // recipesSelectedCategory = [];

        }
        // $Recipes
        // console.log("App selected category", category)
        // console.log("TODO FUNCIONANDO CON EL SUPER FILTER",  this.recipes)
        // console.log("TODO FUNCIONANDO CON EL SUPER FILTER  v2",  recipesSelectedCategory)

    },

    // App>Home>ListCards>Card
    onClickLike(id){
      let recipe = this.recipes.find(recipe => recipe.id == id)
      if (Array.isArray(this.recipes[0])){
        for (let i = 0; i < this.recipes.length; i++){
          for (let j = 0; j < this.recipes.length; j++){
            if (this.recipes[j].find(recipe => recipe.id == id)){
              this.recipes[j].find(recipe => recipe.id == id).likes++
            }
          }
        }
      }else{
        recipe.likes++
      }

    },

    // App>Home>AccordionFilter>Search
    searchRecipeByName(recipeName){
      this.recipes =[];
      // $Recipes by name
      axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + recipeName
      }).then(
          (response) => {
            let items = response.data.meals;
            if (items.length > 0)this.loading = !this.loading;
            items.forEach(recipe => {
              this.recipes.push({
                id: recipe.idMeal,
                name: recipe.strMeal,
                img: recipe.strMealThumb,
                likes: 0
              })
            })

            // console.log('APP Recipes',this.recipes)
          }
      ).catch(
          error => console.log(error)
      );
      // $Recipes by name
    }
  }
}
</script>

<template>
  <main>
    <router-view name="navbar"></router-view>
    <router-view
        :topRecipes="this.topRecipes"
        :categories="this.categories"
        :recipes="this.recipes"
        :loading="this.loading"
        v-on:selectedcategory="selectedCategory"
        v-on:selectedcategories="selectedCategories"
        v-on:recipelike="onClickLike"
        v-on:searchrecipebyname="searchRecipeByName"
    ></router-view>
    <router-view name="footer"></router-view>
  </main>
</template>

<style scoped>
</style>

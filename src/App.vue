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
          if (items.length > 0)this.loading = false
          items.forEach(recipe => {
            this.recipes.push({
              id: recipe.idMeal,
              name: recipe.strMeal,
              img: recipe.strMealThumb
            })
          })

          // console.log('APP Recipes',this.recipes)
        }
    ).catch(
        error => console.log(error)
    );
    // $Recipes


    // ?TopRecipes
    axios({
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
    }).then(
        (response) => {
          let items = response.data.meals;
          if (items.length > 0)this.loading = false
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
          if (items.length > 0)
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
                img: recipe.strMealThumb
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

    selectedCategories(categories){
      // console.log("Selected categories from APP", categories)
      // $Recipes
      console.log("Recipes pro primera vez",this.recipes)
      this.recipes =[];

      // https://www.themealdb.com/api/json/v1/1/list.php?c=list
      console.log("INICIANDO FOR", categories.length)
      for (let i = 0; i < categories.length; i++){
        console.log("SE ENTRO EN EL FOR")
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
              if (items.length > 0)this.loading = false
              items.forEach(recipe => {
                recipesSelectedCategory.push({
                  id: recipe.idMeal,
                  name: recipe.strMeal,
                  img: recipe.strMealThumb
                })
              })
              console.log('APP Recipes',this.recipes)
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
        v-on:selectedcategory="selectedCategory"
        v-on:selectedcategories="selectedCategories"
    ></router-view>
    <router-view name="footer"></router-view>
  </main>
</template>

<style scoped>
</style>

<script>
import {defineComponent} from 'vue'
import Card from "./Card.vue";
import {all} from "axios";

export default defineComponent({
  name: "ListCards",
  components:{Card},

  props:{
    recipes:[]
  },
  data(){
    return{
      listRecipes: this.recipes
    }
  },
  computed:{
    // Filter
    /*Metodo para convertir un arreglo con arreglos de recetas en un arreglo con recetas todas unidas
    El if se asegura que vengan arreglos dentro del arreglo con isArray
    Esto ya que la primera vez que viene tiene recetas del index pero no se le ha aplicado ningun
    filter, seguidamente un for para reccorre el arreglo y un foreach apra extrear la info que hay
    dentro del segundo array qie contiene las recetas
      */
    listRecipesWithFilter(recipes){
      console.log("Entre en el metodo")
      recipes = this.recipes
      if(Array.isArray(this.recipes[0])){
        console.log("Entre en el if")
        let allRecipes = [];
        for (let i = 0; i < this.recipes.length; i++){
          console.log("PRIMER FOR " , i)
          // for (let j = 0; j < this.recipes[i].length; j++){
          //   console.log("SEGUNDO FOR " , j)
            this.recipes[i].forEach(recipe =>{
              allRecipes.push({
                id: recipe.id,
                name: recipe.name,
                img: recipe.img
              });
            })
            console.log(allRecipes);
          // }
        }
        console.log("ALL RECIPES ?", allRecipes);

        this.listRecipes = allRecipes;
      }
    }
  },
  mounted() {
  }
})
</script>

<template>
  <p>{{listRecipesWithFilter}}</p>
  <div class="row m-auto">
    <ul class="cards-horizontal m-auto">
      <!--todo Hacer nuevo dise;o de cartas-->
      <Card v-for="(recipe) in this.listRecipes"
            :id = recipe.id
            :img = recipe.img
            :name = recipe.name
      ></Card>
    </ul>
  </div>
</template>

<style scoped>

</style>
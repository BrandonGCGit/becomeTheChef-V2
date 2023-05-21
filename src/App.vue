<script>
import ApiSpoonacular from "./ApiSpoonacular.vue";
export default {
  name: 'App',

  data(){
    return{
      dataRecipes: ApiSpoonacular.methods.getTop10Recipes()
    }
  },

  mounted() {
    console.log("Api data", this.dataRecipes);
  }
}
</script>

<template>
  <main>
    <router-view name="navbar"></router-view>
    <router-view></router-view>
    <router-view :recipes="dataRecipes" name="carousel"></router-view>
    <router-view name="footer"></router-view>
  </main>
</template>

<style scoped>
</style>

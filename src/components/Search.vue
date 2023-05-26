<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Search",
  data: function (){
    return{
      search:""
    }
  },
  methods:{
    searchRecipeByName(recipeName){
      this.$emit('searchrecipebyname',recipeName)
    }
  },
  computed:{

  }
})
</script>

<template>

<!--  <input v-model="search" placeholder="Rice...">-->
<!--  <p>El mensaje es: {{ search }}</p>-->

  <input
      v-model="search"
      class="form-control"
      placeholder="Hamburger..."
      aria-label="Username"
      aria-describedby="basic-addon1">
  <span
      v-on:keyup.enter="searchRecipeByName(search)"
      v-on:click="searchRecipeByName(search)"
        type="button"
        class="input-group-text btn btn-dark btn-search"
        id="search">
    <span class="material-symbols-outlined text-dark ">search</span>
  </span>
</template>

<style scoped>

</style>
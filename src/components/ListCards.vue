<script>
import {defineComponent} from 'vue'
import Card from "./Card.vue";

export default defineComponent({
  name: "ListCards",
  components:{Card},

  props:{
    recipes:[]
  },
  mounted() {
    console.log("List Cards", this.recipes)
  }
})
</script>

<template>
  <div class="row m-auto">
    <ul class="cards-horizontal m-auto">
      <!--todo Hacer nuevo dise;o de cartas-->
      <Card v-for="(recipe) in this.recipes"
            :id = recipe.id
            :img = recipe.img
            :name = recipe.name
      ></Card>
    </ul>
  </div>
</template>

<style scoped>

</style>
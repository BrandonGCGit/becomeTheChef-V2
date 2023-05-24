<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CategoryButton",
  props:{
    name:{
      type: String,
      default: "Default name"
    }
  },
  methods:{
    onClickCategoryButton(){
      // console.log("Click button category button")
      this.$emit('selectedcategory',this.name)
    }
  }
})
</script>

<template>
  <button v-on:click="onClickCategoryButton" class="btn ff-inter fs-5 me-5 btn-category">{{name}}</button>
</template>

<style scoped>

</style>
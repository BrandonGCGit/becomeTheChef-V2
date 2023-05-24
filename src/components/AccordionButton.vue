<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AccordionButton",
  props:{
    name:{
      type:String,
      default: "Default accordion name"
    }
  },
  methods:{
    onClickCategoryButton(){
      console.log("Click button category button")
      this.$emit('selectedcategory',this.name)
    }
  }
})
</script>

<template>
  <div class="form-check my-2">
    <input v-on:click="onClickCategoryButton" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      {{name}}
    </label>
  </div>
</template>

<style scoped>

</style>
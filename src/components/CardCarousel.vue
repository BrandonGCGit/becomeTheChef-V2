<script>
export default {
  props:{
    id:{
      type:String,
      default: "N/A ID"
    },
    name:{
      type:String,
      default: "N/A ID"
    },
    img:{
      type:String,
      default: "N/A IMG"
    }
  }
}

</script>

<template>
  <li class="glide__slide">
    <img class="img-sizeCards" :src="img" :alt="name">
  </li>
</template>

<style scoped>

</style>
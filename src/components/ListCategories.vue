<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ListCategories",
  props:{
    listCategories:[]
  },
  mounted() {
    console.log("List categories", this.listCategories)
  }
})
</script>

<template>
  <div class="row-cols-1">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ps-3">
            <li v-for="(category) in this.listCategories" class="nav-item">
              <button class="btn ff-inter fs-5 me-5 btn-category">{{category.name}}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>
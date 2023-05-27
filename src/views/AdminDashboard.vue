<script>
export default {
  name: 'AdminDashboard',
  props:{
    recipes:[],
  },
  mounted() {
    console.log(this.recipes)
  }
}

</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="row border-bottom mx-3">
          <div class="col">
            <h3 class="ff-inter fw-bold ps-4 mt-4 mb-3">
              Recipes List
            </h3>
          </div>
        </div>
        <div class="row mx-3">
          <!-- @TABLE START -->
          <table class="table ff-inter">
            <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Category</th>
              <th scope="col">Complexity</th>
              <th scope="col">Occasion</th>
              <th scope="col">Settings</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(recipe) in this.recipes" >
              <th scope="row"><img class="w-12" :src="recipe.img" alt=""></th>
              <td>{{recipe.name}}</td>
              <td><button type="button" class="btn btn-success">Active</button></td>
              <td>Dinner</td>
              <td>Hard</td>
              <td>Holidays</td>
              <td>
                <router-link :to="{name: 'adminEdit', params:{id: recipe.id}}" class="btn clr-whiteCream shadow border-radius-25" role="button">
                  <i class="bi bi-pencil-square"></i>
                </router-link>
                <button type="button" class="btn clr-whiteCream shadow border-radius-25 ms-2">
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <!-- @TABLE END -->
        </div>
      </div>
      <!-- @Content END -->
    </div>
  </section>
</template>

<style scoped>

</style>
<script setup>

</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <!-- *Tool Bar START -->
<!--      <div class="col-2 d-flex align-items-center flex-column shadow vh-100">-->
<!--        <img class="w-50 mt-4" src="/img/LOGO%20NEGRO.png" alt="">-->
<!--        <router-link :to="{name: 'adminDashboard'}" class="btn m-auto mt-5 text-dark clr-yellow fs-5" role="button">List Recipes</router-link>-->

<!--        <router-link :to="{name: '/'}" class="w-100 btn btn-primary mb-3 text-dark btn-danger fs-5" role="button">Logout</router-link>-->


<!--        &lt;!&ndash; @Tool Bar END &ndash;&gt;-->
<!--      </div>-->
      <!-- @Content START -->
<!--      <div class="col-12">-->
<!--        <div class="row border-bottom mx-3">-->
<!--          &lt;!&ndash; !Time &ndash;&gt;-->
<!--          <div class="col-6 d-flex justify-content-between my-4 py-3 yellow-right-line ">-->
<!--            <router-link :to="{name: '/'}"><img src="/img/LOGO%20NEGRO.png" alt="Logo"></router-link>-->
<!--            <p class="fs-4 ff-inter mt-1 pe-5 py-3">-->
<!--              <i class="bi bi-calendar fs-3 me-2"></i>-->
<!--              29 April-->
<!--            </p>-->
<!--          </div>-->
<!--          &lt;!&ndash; !Time &ndash;&gt;-->

<!--          &lt;!&ndash; @Search &ndash;&gt;-->
<!--          <div class="col-4 d-flex justify-content-center  align-items-center my-4 py-3 yellow-right-line">-->
<!--            <div class="input-group mb-3 w-75">-->
<!--              <input type="text" class="form-control " placeholder="Hamburger..."-->
<!--                     aria-label="Username" aria-describedby="basic-addon1">-->
<!--              <span type="button" class="input-group-text btn btn-dark btn-search" id="basic-addon1">-->
<!--                                <span class="material-symbols-outlined text-dark ">search</span>-->
<!--                            </span>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; @Search &ndash;&gt;-->

<!--          &lt;!&ndash; *User &ndash;&gt;-->
<!--          <div class="col-2 d-flex justify-content-center  align-items-center  my-4 py-3">-->
<!--            <i class="bi bi-person fs-3 pb-3 me-2"></i>-->
<!--            <p class="fs-4 ff-inter">-->
<!--              Admin-234-->
<!--            </p>-->
<!--          </div>-->
<!--          &lt;!&ndash; *User &ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->

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
            <tr>
              <th scope="row"><img class="w-12" src="/img/recipe%20(1).png" alt=""></th>
              <td>Hamburger</td>
              <td><button type="button" class="btn btn-success">Active</button></td>
              <td>Dinner</td>
              <td>Hard</td>
              <td>Holidays</td>
              <td>
                <router-link :to="{name: 'adminEdit'}" class="btn clr-whiteCream shadow border-radius-25" role="button">
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
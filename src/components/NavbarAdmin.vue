<script setup>

</script>

<template>
  <div class="col-12">
    <div class="row border-bottom mx-3">
      <!-- !Time -->
      <div class="col-6 d-flex justify-content-between my-4 py-3 yellow-right-line ">
        <router-link :to="{name: '/'}"><img src="/img/LOGO%20NEGRO.png" alt="Logo"></router-link>
        <p class="fs-4 ff-inter mt-1 pe-5 py-3">
          <i class="bi bi-calendar fs-3 me-2"></i>
          29 April
        </p>
      </div>
      <!-- !Time -->

      <!-- @Search -->
      <div class="col-4 d-flex justify-content-center  align-items-center my-4 py-3 yellow-right-line">
        <div class="input-group mb-3 w-75">
          <input type="text" class="form-control " placeholder="Hamburger..."
                 aria-label="Username" aria-describedby="basic-addon1">
          <span type="button" class="input-group-text btn btn-dark btn-search" id="basic-addon1">
                                <span class="material-symbols-outlined text-dark ">search</span>
                            </span>
        </div>
      </div>
      <!-- @Search -->

      <!-- *User -->
      <div class="col-2 d-flex justify-content-center  align-items-center  my-4 py-3">
        <i class="bi bi-person fs-3 pb-3 me-2"></i>
        <p class="fs-4 ff-inter">
          Admin-234
        </p>
      </div>
      <!-- *User -->
    </div>
  </div>
</template>

<style scoped>

</style>
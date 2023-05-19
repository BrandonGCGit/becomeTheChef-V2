<script setup>

</script>

<template>
  <section class="container-fluid clr-whiteCream">
    <div class="row">
      <!-- *Tool Bar START -->
      <div class="col-2 d-flex align-items-center flex-column shadow vh-100">
        <img class="w-50 mt-4" src="/img/LOGO NEGRO.png" alt="">
        <router-link :to="{name: 'adminDashboard'}" class="btn m-auto mt-5 text-dark clr-yellow fs-5" role="button">List Recipes</router-link>

        <router-link :to="{name: '/'}" class="w-100 btn btn-primary mb-3 text-dark btn-danger fs-5" role="button">Logout</router-link>
        <!-- *Tool Bar END -->
      </div>
      <!-- @Content START -->
      <div class="col-10">

        <div class="row border-bottom mx-3">
          <!-- !Time -->
          <div class="col-5 d-flex justify-content-center my-4 py-3 yellow-right-line">
                        <span class="material-symbols-outlined fs-3 mt-1 me-2">
                            calendar_month
                        </span>
            <p class="fs-4 ff-inter">
              29 April
            </p>
          </div>
          <!-- !Time -->

          <!-- @Search -->
          <div class="col-5 d-flex justify-content-center  align-items-center my-4 py-3 yellow-right-line">
            <div class="input-group mb-3 w-75">
              <input type="text" class="form-control clr-whiteCream" placeholder="Hamburger..."
                     aria-label="Username" aria-describedby="basic-addon1">
              <span type="button" class="input-group-text btn btn-dark btn-search" id="basic-addon1">
                                <span class="material-symbols-outlined text-dark ">search</span>
                            </span>
            </div>
          </div>
          <!-- @Search -->

          <!-- *User -->
          <div class="col-2 d-flex justify-content-center  align-items-center  my-4 py-3">
                        <span class="material-symbols-outlined fs-3 pb-3 me-2">
                            account_circle
                        </span>
            <p class="fs-4 ff-inter">
              Admin-234
            </p>
          </div>
          <!-- *User -->
        </div>
        <div class="row border-bottom mx-3">
          <div class="col">
            <h3 class="ff-inter fw-bold ps-4 mt-4 mb-3">
              Recipe Edit
            </h3>
          </div>
        </div>
        <div class="row mx-3">
          <!-- !EDIT START -->
          <!-- @FORME START -->
          <div class="col-10 align-items-baseline justify-content-start">
            <form action="" method="">
              <div class="row">
                <!-- *STATUS DROPDOWN START -->
                <div class="col-4">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>...</option>
                      <option value="1">Active</option>
                      <option value="2">Disabled</option>
                    </select>
                    <label for="floatingSelect">Status</label>
                  </div>
                </div>
                <!-- *STATUS DROPDOWN END -->
                <!-- ?BUTTON STATUS START -->
                <div class="d-flex col-8 align-items-baseline mt-4">
                  <button type="button" class="btn btn-lg btn-success w-50">Active</button>
                </div>
                <!-- ?BUTTON STATUS END -->

                <!-- @NAME START-->
                <div class="col-8">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control form-control-plaintext margin-inputs-signup
                                         border-bottom border-top-0 fs-6 mt-3 border-radius-0" id="edit-form-name"
                           placeholder="Name" name="register_email">
                    <label for="edit-form-name">Recipe name</label>
                  </div>
                </div>
                <!-- @NAME END-->
                <!-- !PORTIONS START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control form-control-plaintext margin-inputs-signup
                                         border-bottom border-top-0 fs-6 mt-3 border-radius-0" id="edit-form-name"
                           placeholder="Name" name="register_email">
                    <label for="edit-form-name">Portions</label>
                  </div>
                </div>
                <!-- !PORTIONS END -->
                <!-- *TIME OF PREPARATION START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control form-control-plaintext margin-inputs-signup
                                         border-bottom border-top-0 fs-6 mt-3 border-radius-0" id="edit-form-name"
                           placeholder="Name" name="register_email">
                    <label for="edit-form-name">Time of Preparation (min)</label>
                  </div>
                </div>
                <!-- *TIME OF PREPARATION END -->
                <!-- ?TIME OF COOKING START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control form-control-plaintext margin-inputs-signup
                                         border-bottom border-top-0 fs-6 mt-3 border-radius-0" id="edit-form-name"
                           placeholder="Name" name="register_email">
                    <label for="edit-form-name">Time of cooking (min)</label>
                  </div>
                </div>
                <!-- ?TIME OF COOKING END -->
                <!-- !TOTAL TIME START -->
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control form-control-plaintext margin-inputs-signup
                                         border-bottom border-top-0 fs-6 mt-3 border-radius-0" id="edit-form-name"
                           placeholder="Name" name="register_email">
                    <label for="edit-form-name">Total time (min)</label>
                  </div>
                </div>
                <!-- !TOTAL TIME END -->
                <!-- @COMPLEXITY START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>...</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Complexity</label>
                  </div>
                </div>
                <!-- @COMPLEXITY END -->
                <!-- ?CATEGORY START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>...</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Category</label>
                  </div>
                </div>
                <!-- ?CATEGORY END -->
                <!-- *OCCASION START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>...</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Occasion</label>
                  </div>
                </div>
                <!-- *OCCASION END -->
                <!-- !FEATURED START -->
                <div class="col-3">
                  <div class="form-floating mt-4">
                    <select
                        class="form-select border-0 btn-secondary dropdown-toggle bg-transparent clr-yellow shadow text-dark"
                        id="floatingSelect" aria-label="Floating label select example">
                      <option selected>...</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                    <label for="floatingSelect">Featured</label>
                  </div>
                </div>
                <!-- !FEATURED END -->
                <!-- @DESCRIPTION START-->
                <div class="col-12 mt-5">
                  <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2Disabled"></textarea>
                    <label for="floatingTextarea2Disabled">Description</label>
                  </div>
                </div>
                <!-- @DESCRIPTION END-->
                <!-- ?List OF INGREDIENTS START -->
                <div class="col-12 mt-3">
                  <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2Disabled"></textarea>
                    <label for="floatingTextarea2Disabled">Ingredients</label>
                  </div>
                </div>
                <!-- ?List OF INGREDIENTS END -->
                <!-- *LIST OF INSTRUCTIONS START-->
                <div class="col-12 mt-3">
                  <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2Disabled"></textarea>
                    <label for="floatingTextarea2Disabled">Instructions</label>
                  </div>
                </div>
                <!-- *LIST OF INSTRUCTIONS END-->

              </div>
            </form>

          </div>
          <!-- @FORME END -->
          <!-- *RECIPE IMG START -->
          <div class="col-2 mt-4">
            <img class="img-fluid img-thumbnail" src="/img/recipe (1).png" alt="">
            <div class="input-group mt-2">
              <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
            </div>
          </div>
          <!-- *RECIPE IMG START -->
          <!-- !EDIT END -->
        </div>
      </div>
      <!-- @Content END -->
    </div>
  </section>
</template>

<style scoped>

</style>
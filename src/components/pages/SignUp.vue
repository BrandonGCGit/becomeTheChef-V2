<script setup>

</script>

<template>
  <section class="container-fluid p-0">
    <!-- @CONTENT START -->
    <div class="row m-auto">
      <!--!FORM START -->
      <div class="col-5 justify-content-center width-signup-form">
        <div class="d-flex justify-content-center my-5">
          <router-link :to="{name: '/'}"><img src="/img/LOGO NEGRO.png" alt="Logo"></router-link>
        </div>
        <div class="d-flex justify-content-center my-5">
          <h3 class="fs-1"> <span class="fw-bold">Sign up</span> with us today</h3>
        </div>

        <!--?FORM START-->
        <div class="d-flex align-items-center justify-content-center">
          <form action="" method="">
            <!--*NAME START -->
            <div class="row">
              <div class="col-12">
                <div class="mb-2">
                  <input type="text"
                         class="mb-4 form-control-plaintext border-bottom border-top-0 fs-6 border-dark"
                         id="" placeholder="Name" name="">
                </div>

                <!--*NAME END -->

                <!-- @LAST NAME START -->
                <div class="mb-2">
                  <input type="text"
                         class="margin-inputs-signup form-control-plaintext border-bottom border-top-0 fs-6 border-dark"
                         id="register_lastName" placeholder="Last name" name="register_lastName">
                </div>
                <!-- @LAST NAME END -->

                <div class="mb-2">
                  <input type="email"
                         class="margin-inputs-signup
                                        form-control-plaintext border-bottom border-top-0 fs-6 border-dark"
                         id="register_email" placeholder="Email" name="register_email">
                </div>

                <!--!PASSWORD START-->
                <div class="mb-2">
                  <input type="password"
                         class="margin-inputs-signup form-control-plaintext border-bottom border-top-0 fs-6 border-dark"
                         id="register_password" placeholder="Password" name="register_password">
                </div>
                <!--!PASSWORD START-->

                <!-- ?CONFIRM PASSWORD START -->
                <div class="mb-2">
                  <input type="password"
                         class="margin-inputs-signup form-control-plaintext border-bottom border-top-0 fs-6 border-dark"
                         placeholder="Confirm password" name="register_passwordConfirmation">
                </div>
                <!-- ?CONFIRM PASSWORD END -->

                <!--!BTN SING UP START-->
                <div class="margin-inputs-signup">
                  <button class="input-vw btn btn-yellow btn-lg btn-block clr-yellow" type="submit"
                          value="">Sign
                    Up</button>
                </div>
                <!--!BTN SING UP END-->

                <p class="mb-4 text-center">Already have an account?
                  <router-link :to="{name: 'login'}" class="link-info">Login</router-link>
                </p>
              </div>
            </div>
          </form>

        </div>
        <!--?FORM END-->
      </div>
      <!--!FORM END -->
      <!--*IMG START-->
      <div class="col-7 p-0 clr-yellow width-signup-banner">
        <p class="text-white text-banner-signup ff-inter">
          In the kitchen, <span class="yellow-line fw-bold">mistakes</span> are just <span
            class="yellow-line fw-bold">opportunities</span> to <span
            class="yellow-line fw-bold">learn</span> and <span class="yellow-line fw-bold">grow</span>
        </p>
        <img class="img-fluid w-100 justify-content-end img-banner-signup p-2"
             src="/img/191009-cooking-vegetables-al-1422.jpg" alt="">
      </div>
      <!--*IMG END-->
    </div>
    <!-- @CONTENT END -->

  </section>
</template>

<style scoped>

</style>
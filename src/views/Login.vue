<script setup>

</script>

<template>
    <!-- @CONTENT START -->
    <div class="row m-auto">
      <!--*IMG START-->
      <div class="col-7 p-0 clr-yellow width-signup-banner">
        <p class="text-white text-banner-login ff-inter fw-light">
          The <span class="yellow-line fw-bold">joy</span> of cooking is in the <span
            class="yellow-line fw-bold">process</span>, not just the end <span
            class="yellow-line fw-bold">result</span>
        </p>
        <img class="img-fluid w-100 justify-content-end img-banner-signup p-2" src="/img/banner-login.jpg" alt="">
      </div>
      <!--*IMG END-->
      <!--!FORM START -->
      <div class="col-5 justify-content-center width-signup-form">
        <div class="d-flex justify-content-center my-5">
          <router-link :to="{name: '/'}"><img src="/img/LOGO%20NEGRO.png" alt="Logo"></router-link>
        </div>
        <div class="d-flex justify-content-center my-5">
          <h3 class="fs-1"> <span class="fw-bold">Welcome Back</span></h3>
        </div>

        <!--?FORM START-->
        <div class="d-flex align-items-center justify-content-center">
          <form action="" method="">
            <div class="row">
              <div class="col-12">
                <!--*EMAIL START-->
                <div class="mb-2">
                  <input type="email" class="margin-inputs-signup
                                        form-control-plaintext border-bottom border-top-0 fs-6 border-dark"
                         id="register_email" placeholder="Email" name="register_email">
                </div>
                <!--*EMAIL END-->

                <!--!PASSWORD START-->
                <div class="mb-2">
                  <input type="password"
                         class="margin-inputs-signup form-control-plaintext border-bottom border-top-0 fs-6 border-dark mb-3"
                         id="register_password" placeholder="Password" name="register_password">
                  <router-link :to="{name: 'forgotPassword'}" class="link-info d-flex justify-content-end">Forgot Password?</router-link>
                </div>
                <!--!PASSWORD START-->
                <!--!BTN SING UP START-->
                <div class="margin-inputs-signup">

<!--                  <button class="input-vw btn btn-yellow btn-lg btn-block clr-yellow" type="submit"-->
<!--                          value="">-->
<!--                    Login-->
<!--                  </button>-->

                  <router-link :to="{name: 'adminDashboard'}" class="input-vw btn btn-yellow btn-lg btn-block clr-yellow" role="button">Login</router-link>
                </div>
                <!--!BTN SING UP END-->
                <p class="mb-4 text-center">Don't have an account?
                  <router-link :to="{name: 'singUp'}" class="link-info">Sign in</router-link>
                </p>
              </div>
            </div>
          </form>

        </div>
        <!--?FORM END-->
      </div>
      <!--!FORM END -->

    </div>
    <!-- @CONTENT END -->

</template>

<style scoped>

</style>
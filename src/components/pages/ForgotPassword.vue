<script setup>

</script>

<template>
  <section class="container-fluid p-0 ">
    <!-- @CONTENT START -->
    <div class="row m-auto">
      <div class="col width-signup-form vh-100">
        <div class="d-flex justify-content-center my-5">
          <router-link :to="{name: '/'}"><img src="/img/LOGO NEGRO.png" alt="Logo"></router-link>
        </div>
        <div class="d-flex justify-content-center mt-5 ff-inter">
          <h3 class="fs-1 ff-inter">Forgot password?</h3>
        </div>
        <div class="d-flex justify-content-center">
          <p fs-3>No worries we'll send your reset instructions</p>
        </div>
        <!--?FORM START-->
        <div class="d-flex align-items-center justify-content-center">
          <form action="" method="">
            <div class="row">
              <div class="col">
                <!-- @EMAIL START-->
                <div class="mb-2">
                  <input type="email" class="margin-inputs-signup
                                        form-control-plaintext border-bottom border-top-0 fs-6 border-dark"
                         id="register_email" placeholder="Email" name="register_email">
                </div>
                <!-- @EMAIL END-->
                <!--!BTN SING UP START-->
                <div class="margin-inputs-signup">
                  <button class="input-vw btn btn-yellow btn-lg btn-block clr-yellow" type="submit"
                          value="">Reset password</button>
                </div>
                <!--!BTN SING UP END-->

                <p class="mb-4 text-center">Remember password? <a href="login.php"
                                                                  class="link-info">Login</a>
                </p>
              </div>
            </div>
          </form>

        </div>
        <!--?FORM END-->
      </div>
    </div>
    <!-- @CONTENT END -->

  </section>
</template>

<style scoped>

</style>
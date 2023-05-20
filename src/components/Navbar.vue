<script>

</script>

<template>
  <header class="container mt-5">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link :to="{name: '/'}"><img src="/img/LOGO%20NEGRO.png" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto g-5 me-2 ">
            <li class="nav-item mx-3">
              <a class="btn fs-5 fw-normal" href="" role="button">Recipes</a>
            </li>
            <li class="nav-item mx-3">
              <a class="btn fs-5 fw-normal" href="" role="button">Recipes of the week</a>
            </li>

            <li class="nav-item">
              <router-link :to="{name: 'login'}"
                           class="nav-link btn btn-lg fs-5 fw-normal btn-singIn border-radius-login clr-whiteCream text-black "
              >Login
              </router-link>
              <!--                <a class="nav-link btn btn-lg fs-5 fw-normal btn-singIn border-radius-login clr-whiteCream text-black " href="./login.html" role="button">Log in</a>-->
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'singUp'}"
                           class="nav-link btn btn-lg fs-5 btn-register border-radius-signup clr-yellow text-black"
              >Sing Up
              </router-link>
              <!--                <a class="nav-link btn btn-lg fs-5 btn-register border-radius-signup clr-yellow text-black" href="./signup.html" role="button">Sign up</a>-->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr  class="yellow-line">
  </header>
</template>

<style scoped>

</style>
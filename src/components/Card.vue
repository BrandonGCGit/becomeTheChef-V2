<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Card",
  props:{
    id:{
      type: String,
      default: "Default ID"
    },
    img:{
      type: String,
      default: "Default IMG"
    },likes:{
      type: String,
      default: "777"
    },name:{
      type: String,
      default: "Default NAME"
    },time:{
      type: String,
      default: "777"
    },portions:{
      type: String,
      default: "777"
    },
    difficulty:{
      type: String,
      default: "Default DIFFICULTY"
    },
  }
})
</script>

<template>
  <a href="#" class="text-decoration-none">
    <li class="cards_item-horizontal mx-0">
      <div class="card-horizontal">
        <div class="card_price-horizontal">
          <p><i class="bi bi-heart pe-2"></i>{{likes}}</p>
        </div>
        <div class="card_image-horizontal "><img
            :src="img"
            :alt="name"></div>
        <div class="card_content-horizontal">
          <h2 class="card_title-horizontal fs-4 text-truncate">{{name}}</h2>
          <div class="card_text-horizontal">
            <ul class="list-unstyled pb-1 gap-3">
              <li class="fs-5 mb-1">
                <i class="bi bi-alarm pe-2"></i>
                {{time}} min
              </li>
              <li class="fs-5 mb-1">
                <i class="bi bi-award pe-2"></i>
                {{portions}} portions</li>
              <li class="fs-5 mb-1">
                <i class="bi bi-book pe-2"></i>
                {{difficulty}}</li>
            </ul>
          </div>

          <router-link :to="{name: 'recipeDetail'}" class="btn rounded-3 btn-lg my-1 clr-yellow w-100" role="button">View Recipe</router-link>
          <!--                  <a href="#" class="btn rounded-3 btn-lg my-1 clr-yellow w-100" role="button">View recipe</a>-->
        </div>
      </div>
    </li>
  </a>
</template>

<style scoped>

</style>
<script>
import {defineComponent} from 'vue'
import Card from "./Card.vue";

export default defineComponent({
  name: "Loading",
  components: {Card},
})
</script>

<template>
<!--  <div class="overlay"><div><img src="/img/loading.gif" alt=""></div></div>-->
</template>

<style scoped>
body, html {
  margin:         0;
  padding:        0;
}

div.overlay {
  display:        table;
  position:       fixed;
  top:            0;
  left:           0;
  width:          100%;
  height:         100%;
}
div.overlay > div {
  display:        table-cell;
  width:          100%;
  height:         100%;
  background:     #ccc;
  text-align:     center;
  vertical-align: middle;
}
</style>
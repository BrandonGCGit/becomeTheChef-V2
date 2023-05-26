<script>
import AccordionButton from "./AccordionButton.vue";
import Search from "./Search.vue";

export default {
  name:"AccordionFilter",
  components: {Search, AccordionButton},

  props:{
    listCategories:[]
  },
  data: function (){
    return{
      selectedCategories:[]
    }
  },
  methods:{
    onClickSelectedCategory(category){
      let obtainIndex;


      if(this.selectedCategories.includes(category)){

        // console.log("Este elemento ya esta en el arreglo su index es ", this.selectedCategories.indexOf(category));
        obtainIndex = this.selectedCategories.indexOf(category);
        this.selectedCategories.splice(obtainIndex, 1)
        this.$emit('selectedcategories',this.selectedCategories);

      }else{

        // console.log("Este elemento no esta en el arreglo voy a agregarlo")
        this.selectedCategories.push(category)
        this.$emit('selectedcategories',this.selectedCategories);

      }
      // console.log("SelectedCategories Accordion filter", this.selectedCategories);
      // console.log("Accordion filter, category selected " + category);
    },
    searchRecipeByName(recipeName){
      this.$emit('searchrecipebyname', recipeName);
    }


  }
}
</script>

<template>
  <div class="col-2">
    <div class="dropdown d-flex justify-content-end">
      <button type="button" class="btn clr-black dropdown btn-search " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" data-bs-auto-close="outside">
        <i class="bi bi-filter fs-3"></i>
      </button>
      <div class="dropdown-menu dropdown-width dropdown-menu-end dropdown-menu-lg-start">
        <h5 class="ff-inter px-3">Filters </h5>
        <div class="input-group px-3 my-3">
          <!--          !Search-->
          <search v-on:searchrecipebyname="searchRecipeByName"></search>
          <!--          !Search-->
        </div>
        <form  class="px-3">
          <!--                        @ACCORDION START-->
          <div class="accordion  ff-inter" id="accordionPanelsStayOpenExample">
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Category
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">

                  <!--                  !Accordion button category-->
                  <AccordionButton v-for="(category) in this.listCategories"
                                   :name="category.name"
                                   v-on:selectedcategory="onClickSelectedCategory"
                  ></AccordionButton>
                  <!--                  !Accordion button category-->

                </div>
              </div>
            </div>
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Occasion
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Holidays
                    </label>
                  </div>
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Holidays
                    </label>
                  </div>
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Holidays
                    </label>
                  </div>
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Holidays
                    </label>
                  </div>
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Holidays
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Complexity
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Easy
                    </label>
                  </div>
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Medium
                    </label>
                  </div>
                  <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Hard
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--                        @ACCORDION START-->
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
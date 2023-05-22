<script>
import {defineComponent} from 'vue'


export default defineComponent({
  name: "ApiSpoonacular",

  props:{
  },
  data(){
    return {
      apiData: "API DATA"
    }
  },
  computed:{

  },
  methods:{
    getTop10Recipes(){
      let recipes = [];
      let items = [];
      // !Axios
      axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
      }).then(
          (response) => {
            console.log(response.data.meals)
            // // this.categories = response.data.meals
            // let items = response.data.meals;
            // items.forEach( element => {
            //   this.categories.push({id:element.index, name: element.strCategory})
            // }
            // );
          }
      ).catch(
          error => console.log(error)
      );
      return{
        recipes
      }
    }
  }
})
</script>
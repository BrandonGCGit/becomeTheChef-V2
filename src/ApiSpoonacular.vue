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
        url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=a78570f882de4c6a9a21489ec0a6bd2c'
      }).then(
          (response) => {
            items = response.data.results;

            if(items.length > 0){
              items.forEach( element => {
                recipes.push({
                  id:element.id,
                  image:element.image,
                  name: element.title,
                  // category: "main course",
                  // time: "Defaul time",
                  // level: "Defaul level",
                  // likes: 111,
                  // ingredients: "NA",
                  // instructions: "NA"
                })
              });
            }
            // console.log("Api",recipes)
          }
      ).catch(
          // error => console.log(error)
      );
      return{
        recipes
      }
    }
  }
})
</script>
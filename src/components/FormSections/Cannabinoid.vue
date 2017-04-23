<template lang="pug">
div.row-flex-wrap

  // Strain Catagory
  div.field.row-flex-51
    div.extraction.row-50
      div.row-flex.label-container
        span.label Strain catagory
      div.row-flex
        s-select(:placeholder="'Select Catagory...'",  :model="product.strain_catagory", :change="onExtractionMethodChange", :items="extraction_methods")
          
    div.row-50
      div.row-flex.label-container
        span.label Milligrams per unit
      div.row-flex
        s-select(:placeholder="'THC'",  :model="product.thc", :change="onShelfLifeChange", :items="shelf_lives")

  // Extraction and Shelf Life
  div.field.row-flex-51
    div.extraction.row-50
      div.row-flex.label-container
        span.label Extracton Methods
      div.row-flex
        s-select(:placeholder="'Select Method...'",  :model="extraction_method", :change="onExtractionMethodChange", :items="extraction_methods")
          
    div.row-50
      div.row-flex.label-container
        span.label Shelf life
      div.row-flex
        s-select(:placeholder="'Select Shelf life...'",  :model="shelf_life", :change="onShelfLifeChange", :items="shelf_lives")

    
  // Terpene Profile
  div.field.row-75
    div.row-flex.label-container
      span.label Additional terpene profiles

    div.row-flex.description-container
      span.description Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.row-flex.input-container
      s-select(:placeholder="'Select terpene profile...'",  :model="terpene", :change="onTerpeneChange", :items="terpene_profiles")
      s-button(title="Add terpene", :classes="['primary']", :onclick="addTerpene")  

    div.row-flex-wrap.terpene-profiles
      div.row-flex.item-container(v-for="profile in product.terpene_profiles")
        span.dot
        span.terpene-profile {{profile}}
        s-button(title="Delete item", :classes="[]", :onclick="removeTerpeneProfile", :value="profile")  


  //Product Ingredients
  div.field.row-75
    div.row-flex.label-container
      span.label Product ingredients

    div.row-flex.description-container
      span.description Needs update But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.row-flex.input-container
      s-input(:placeholder="'Add Ingredient...'", :model="ingredient", :change="onIngredientChange")
      s-button(title="Add ingredient", :classes="['primary']", :onclick="addIngredient")  

    div.row-flex-wrap.tags
      div.row-flex.item-container(v-for="ingredient in product.ingredients")
        span.dot
        span.tag {{ingredient}}
        s-button(title="Delete item", :classes="[]", :onclick="removeIngredient", :value="ingredient")  

  //Product Allergens
  div.field.row-75
    div.row-flex.label-container
      span.label Product allergens

    div.row-flex.description-container
      span.description Needs update But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.row-flex.input-container
      s-input(:placeholder="'Describe allergen...'", :model="allergen", :change="onAllergenChange")
      s-button(title="Add allergen", :classes="['primary']", :onclick="addAllergen")  

    div.row-flex-wrap.tags
      div.row-flex.item-container(v-for="allergen in product.allergens")
        span.dot
        span.tag {{allergen}}
        s-button(title="Delete item", :classes="[]", :onclick="removeAllergen", :value="allergen")  

  // Nutritional Labeling
  div.field.row-flex-wrap-75
    div.row-flex.label-container
      span.label Nutritional labeling

    div.row-flex.description-container
      span.description Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.add-image-container
      p Drag and drop an image or 
        u click to upload
        input(type="file", @change="onFileChange")

    div.product-images-container.row-flex(v-if="product.nutrition_labels && product.nutrition_labels.length")
      div.product-image-container(v-for="image in product.nutrition_labels")
        img(:src="image", alt="product image" )

</template>

<style lang="stylus" scoped>
  .field
    margin-bottom 30px

  .label-container
    margin-bottom 12px

  .description-container
    margin-bottom 18px
      
  .input-container
    .s-input
      margin-right 20px

    .s-select
      margin-right 20px
       
  .selling-point-container
    margin-top 1em
    padding .7em
    background-color rgba(0,0,0, .05)
    border-radius 4px

  .extraction
    margin-right 20px
        
  .selling-point
    font-size 15px

  .tag-container
    margin-top 1em
    padding .7em
    background-color rgba(0,0,0, .05)
    border-radius 4px
        
  .tag
    font-size 15px
         
  .label-container
    margin-bottom 12px

  .description-container
    margin-bottom 18px

  .add-image-container
    cursor pointer
    display flex
    flex-basis 100%
    background-color #fafbff
    border dashed 1px #d6dae9
    height 100px
    border-radius 4px
    justify-content center
    align-items center
    position relative
    margin-bottom 1em

    input
      cursor pointer
      opacity 0
      width 100%
      height 100%
      top 0px
      left 0px
      position absolute

    p
      font-weight 500
      color #656a86
      font-size 14px

    u 
      font-weight 500
      font-size 14px

  .product-images-container
    border solid 1px #d6dae9
    border-radius 4px

    .product-image-container
      display flex
      justify-content center
      align-items center
      width 150px
      padding 1em

      img
        width: 100%

</style>

<script>
export default {
  name: 'CannabinoidSection',
  props: {
    product: {
      type: Object,
      default:  {
        extraction_method: "",
        shelf_life: "",
        terpene_profiles: [],
        nutrition_labels: [],
        ingredients: [],
        allergens: [],
      }
    },
  },
  data(){
    return {
      extraction_methods: [{title: "Needs work", value: "Needs work"}, {title: "needs values", value: "needs value"}],
      extraction_method: this.product.extraction_method,
      shelf_lives: [{title: "Needs work", value: "Needs work"}, {title: "needs values", value: "needs value"}],
      terpene_profiles: [{title: "Needs work", value: "Needs work"}, {title: "needs values", value: "needs value"}],
      shelf_life: this.product.shelf_life,
      terpene: "",
      ingredient: "",
      allergen: "",
    }
  },
  created(){},
  methods: {
    onExtractionMethodChange(item){
      this.product.extraction_method = item.value;
      this.extraction_method = item.value;
    },

    onShelfLifeChange(item){
      this.product.shelf_life = item.value;
      this.shelf_life = item.value;
    },

    onTerpeneChange(item){
      this.terpene = item.value;
    },
    addTerpene(){
      if(this.product.terpene_profiles){
        this.product.terpene_profiles.push(this.terpene)        
      } else {
        this.product.terpene_profiles = [this.terpene]
      }
      this.terpene = ""
    },
    removeTerpeneProfile(profile){
      this.product.terpene_profiles.splice(this.product.terpene_profiles.indexOf(profile), 1)
    },

    
    onIngredientChange(val){
      this.ingredient = val.target.value.trim()
    },
    addIngredient(){
      if(this.product.ingredients){
        this.product.ingredients.push(this.ingredient)        
      } else {
        this.product.ingredients = [this.ingredient]
      }
      this.ingredient = ""
    },
    removeIngredient(ingredient){
      this.product.ingredients.splice(this.product.ingredients.indexOf(ingredient), 1)
    },

    onAllergenChange(val){
      this.allergen = val.target.value.trim()
    },
    addAllergen(){
      if(this.product.allergens){
        this.product.allergens.push(this.allergen)        
      } else {
        this.product.allergens = [this.allergen]
      }
      this.allergen = ""
    },
    removeAllergen(allergen){
      this.product.allergens.splice(this.product.allergens.indexOf(allergen), 1)
    },

    
    onFileChange(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.$store.dispatch('uploadFile', {
        file: file
      }).then(results => {
        if(this.product.nutrition_labels){
          this.product.nutrition_labels.push(results.downloadURL);
        } else {
          this.product.nutrition_labels = [results.downloadURL]
        }
      });
    },
  },
}
</script>


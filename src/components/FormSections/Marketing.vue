<template lang="pug">
div.row-flex-wrap

  // Selling Points
  div.field.row-75
    div.row-flex.label-container
      span.label Selling points

    div.row-flex.description-container
      span.description Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.row-flex.input-container
      s-input(:placeholder="'Describe selling point...'", :model="selling_point", :change="onSellingPointChange")
      s-button(title="Add selling point", :classes="['primary']", :onclick="addSellingPoint")  

    div.row-flex-wrap.selling-points
      div.row-flex.selling-point-container(v-for="point in product.selling_points")
        span.selling-point {{point}}


  // Product Tags
  div.field.row-75
    div.row-flex.label-container
      span.label Product tags

    div.row-flex.description-container
      span.description Needs update But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.row-flex.input-container
      s-select(:placeholder="'Select product tag...'", :model="tag", :change="onTagChange")
      s-button(title="Add product tag", :classes="['primary']", :onclick="addTag")  

    div.row-flex-wrap.tags
      div.row-flex.tag-container(v-for="tag in product.tags")
        span.tag {{tag}}


  // Product Images
  div.field.row-flex-wrap-75
    div.row-flex.label-container
      span.label Additional marketing images

    div.row-flex.description-container
      span.description Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.add-image-container
      p Drag and drop an image or 
        u click to upload
        input(type="file", @change="onFileChange")

    div.product-images-container.row-flex(v-if="product.marketing_images && product.marketing_images.length")
      div.product-image-container(v-for="image in product.marketing_images")
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
  name: 'MarketingSection',
  props: {
    product: {
      type: Object,
      default:  {
        selling_points: [],
        tags: [],
        marketing_images: [],
        promotions: [],
      }
    },
    open: {
      Boolean,
      default: true
    }
  },
  data(){
    return {
      selling_point: "",
      selling_points: this.product.selling_points,
      tag: "",
      tags: this.product.tags
    }
  },
  created(){},
  methods: {
    onSellingPointChange(val){
      this.selling_point = val.target.value.trim();
    },
    addSellingPoint(){
      if(this.product.selling_points){
        this.product.selling_points.push(this.selling_point)        
      } else {
        this.product.selling_points = [this.selling_point]
      }
      this.selling_point = ""
    },
    onTagChange(){

    },
    addTag(){

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
        console.log(results)
        if(this.product.marketing_images){
          this.product.marketing_images.push(results.downloadURL);
        } else {
          this.product.marketing_images = [results.downloadURL]
        }
      });
    },
  },
}
</script>


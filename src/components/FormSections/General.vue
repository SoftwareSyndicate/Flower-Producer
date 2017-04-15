<template lang="pug">
div.general.row-flex-wrap
  // Name
  div.field.row-50
    div.label-container
      span.label Product name
    div.row-flex
      s-input(:placeholder="'Add name...'", :model="product.name", :change="onNameChange")

  // Description
  div.field.row-75
    div.row-flex.label-container
      span.label Short product description

    div.row-flex.description-container
      span.description Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.row-flex.description
      s-textarea(:placeholder="'Add description...'", :model="product.description", :change="onDescriptionChange")

  // Product Images
  div.field.row-flex-wrap-75
    div.row-flex.label-container
      span.label Product Images

    div.row-flex.description-container
      span.description Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.add-image-container
      p Drag and drop an image or 
        u click to upload
        input(type="file", @change="onFileChange")

    div.product-images-container.row-flex-75(v-if="product.product_images && product.product_images.length")
      div.product-image-container(v-for="image in product.product_images")
        img(:src="image", alt="product image" )

</template>

<style lang="stylus" scoped>
.general
  .field
    margin-bottom 30px

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
  name: 'GeneralSection',
  props: {
    product: {
      type: Object,
      default:  {
        name: "",
        description: "",
        product_images: []
      }
    },
  },
  created(){},
  methods: {
    onNameChange(val){
      this.product.name = val.target.value.trim();
    },
    onDescriptionChange(val){
      this.product.description = val.target.value.trim();
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
        if(this.product.product_images){
          this.product.product_images.push(results.downloadURL);
        } else {
          this.product.product_images = [results.downloadURL]
        }
      });
    },
  },
  data() {
    return {
      open: true,
    }
  },
}
</script>

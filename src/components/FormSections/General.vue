<template lang="pug">
div.general
  div.field.name
    div.label-container
      span.label Product name
    div.input-container
      s-input(:placeholder="'Add name...'", :model="product.name", :change="onNameChange")

  div.field.description
    div.label-container
      span.label Short product description

    div.description-container
      span.description ***Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.input-container.description
      s-textarea(:placeholder="'Add description...'", :model="product.description", :change="onDescriptionChange")

  div.field.images
    div.label-container
      span.label Product Images

    div.description-container
      span.description ***Needs update  But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

    div.add-image-container
      p Drag and drop an image or 
        u click to upload
        input(type="file", @change="onFileChange")

    div.product-images-container(v-if="product.product_images && product.product_images.length")
      div.product-image-container(v-for="image in product.product_images")
        img(:src="image", alt="product image" )


</template>

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

<style lang="stylus" scoped>
.general
  display flex
  flex-basis 100%
  flex-wrap wrap

  .field
    &.name   
      flex-basis 50%
        
    &.description
      flex-basis 75%

    &.images
      flex-wrap wrap
      flex-basis 75%
      
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

      .product-images-container
        display flex
        flex-basis 75%
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

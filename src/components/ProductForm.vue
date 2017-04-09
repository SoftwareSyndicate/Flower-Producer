<template lang="pug">
div.product-form
  div.section
    div.section-header(:class="{'closed': !generalOpen}", @click="generalOpen = !generalOpen")
      span.top-border
      h3 General info
      i.material-icons(v-if="!generalOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

    transition(name="open", mode="out-in", v-if="generalOpen")
      div.section-body
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


  div.section
    div.section-header(:class="{'closed': !retailOpen}", @click="retailOpen = !retailOpen")
      span.top-border
      h3 Retail info
      i.material-icons(v-if="!retailOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

    transition(name="open", mode="out-in", v-if="retailOpen")
      div.section-body
        div.row
          div.field.wholesale
            div.label-container
              span.label Wholesale pricing

            div.input-container
              s-input(:placeholder="'$'", :model="product.wholesale_price", :change="onWholeSalePriceChange", type="'number'" )


          div.field.retail
            div.label-container
              span.label Suggested Retail pricing (MSRP)

            div.input-container
              s-input(:placeholder="'$'", :model="product.retail_price", :change="onRetailPriceChange", type="'number'")

  div.section
    div.section-header(:class="{'closed': !cannabinoidOpen}", @click="cannabinoidOpen = !cannabinoidOpen")
      span.top-border
      h3 Cannabinoid & Ingredient info
      i.material-icons(v-if="!cannabinoidOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

    transition(name="open", mode="out-in", v-if="cannabinoidOpen")
      div.section-body
        div.row
          div.field
            div.label-container
              span.label Cannabinoid profile
            div.input-container
              s-select(:placeholder="'Select profile...'", :items="['Sativa', 'Indica', 'Hybrid']", :model="product.cannabinoid_profile")

        div.row
          div.field
            div.label-container
              span.label Extraction method
            div.input-container
              s-select(:placeholder="'Select method...'", :items="['Ethanol Extraction']", :model="product.extraction_method")


  div.section
    div.section-header(:class="{'closed': !productOpen}", @click="productOpen = !productOpen")
      span.top-border
      h3 Product marketing
      i.material-icons(v-if="!productOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

    div.section-body


</template>

<script>
export default {
  name: 'ProductForm',
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
    onWholeSalePriceChange(val){
      this.product.wholesale_price = val.target.value.trim();
    },
    onRetailPriceChange(val){
      this.product.retail_price = val.target.value.trim();
    },
    onFileChange(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      // var reader = new FileReader();
      // var vm = this;
      // reader.onload = (e) => {
      //   if(this.product.product_images){
      //     this.product.product_images.push(e.target.result)
      //   } else {
      //     this.product.product_images = [e.target.result]
      //   }

      //   vm.image = e.target.result;
      // };
      // reader.readAsDataURL(file);
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
      first: true, 
      generalOpen: true,
      retailOpen: true,
      cannabinoidOpen: true,
      productOpen: true,
    }
  },
}
</script>

<style lang="stylus" scoped>
.product-form
  display flex
  flex-basis 100%
  flex-wrap wrap

  .row
    display flex
    flex-basis 100%

  .section
    display flex
    flex-basis 100%
    flex-wrap wrap
    margin-bottom 20px

    .section-header
      cursor pointer
      align-items center
      display flex
      flex-basis 100%
      flex-wrap wrap
      margin-bottom 20px
      border-top-left-radius 4px
      border-bottom-left-radius 4px
      background-color rgba(255, 255, 255, 0.2)
      box-shadow inset 0 -1px 0 0 #c3ead6
      border-left solid 1px #d6dae9
      border-bottom solid 1px #d6dae9

      &.closed
        box-shadow none
        .top-border
          background-color #d6dae9
          
      .top-border
        flex-basis 100%
        height 4px
        background-color #3ed783
        border-top-left-radius 4px
        transition background-color .5s ease

      h3
        font-size 14px
        font-weight 500
        color #4a4e5d
        padding 20px

      i
        margin-left auto
        margin-right 30px
        color rgba(0,0,0,0.5)
        cursor pointer
        border-radius 4px

    .open-enter-active, .open-leave-active
      transition all .5s ease

    .open-enter, .open-leave-active
      opacity 0
      height 0px

    .section-body
      display flex
      flex-basis 100%
      flex-wrap wrap

      .field
        display flex
        flex-wrap wrap
        flex-basis 100%
        margin-bottom 30px


        &.name   
          flex-basis 50%

        &.description
          flex-basis 75%

        &.images
          flex-wrap wrap
          .add-image-container
            cursor pointer
            display flex
            flex-basis 75%
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


        &.wholesale
          flex-basis 25%
          margin-right 1em

        &.retail
          flex-basis 25%
          margin-right 1em
                        
        .label-container
          display flex
          flex-basis 100%
          margin-bottom 12px

          .label
            font-weight 500
            font-size 13px

        .description-container
          display flex
          flex-basis 100%
          margin-bottom 12px

          .description
            text-align left
            width 50%
            font-weight 500
            font-size 12px
            color #a7adc6
            line-height 1.33


        .input-container
          display flex
          flex-basis 100%



            

</style>

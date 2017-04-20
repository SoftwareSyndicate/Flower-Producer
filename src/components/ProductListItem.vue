<template lang="pug">
div.product-list-item
  div.checkbox-container
    input(type="checkbox")

  div.item
    div.img-container
      img(v-if="product.product_images", :src="product.product_images[0]")

    div.info-container
      div.top
        div.row-flex-wrap.description-container
          div.row-flex-100
            h4 {{product.name}}
          div.row-flex-100
            div.selling-point(v-for="(point, index) in product.selling_points")
              span {{point}}
              span.dot
            // div.tag(v-for="(tag, index) in product.tags")
            //   span {{tag}}
            //   span.dash(v-if="index != product.selling_points.length - 1")
            div.price-container(v-if="product.wholesale_price")
              span.price(v-if="product.wholesale_price") ${{product.wholesale_price}} Wholesale
              span.break(v-if="product.retail_price") |
              span.price(v-if="product.retail_price") ${{product.retail_price}} Retail

              
        div.actions-container
          div.buttons-container
            s-button(:title="'Archive'", :class=['sm'])
            router-link(:to="{ name: 'product', params: { id: product.id }}")
              s-button(:title="'Edit'", :class=['sm'])

      div.bottom
        div.stats-container
          div.buttons-container
            s-button(:title="'2.4K'", :class=['sm'])
            s-button(:title="'920'", :class=['sm'])
            s-button(:title="'THC 10mg'", :class=['sm'])

        div.meta-container
          p.created-at Added {{product.created_at.toLocaleDateString()}}
          img(v-if="product.created_by", :src="product.created_by.avatar")



</template>


<style lang="stylus" scoped>

weird-green = #3ed783

.product-list-item
  display flex
  flex-basis 100%
  align-items center
  border-radius 2px
  box-shadow 0 2px 2px 0 #e8eaf4
  border solid 1px #bcc1d7
  min-height 200px
  transition all .35s ease-in-out
  cursor pointer

  &:hover
    border solid 1px weird-green
    background-color rgba(62, 215, 130, 0.04)

  .checkbox-container
    flex-shrink 1
    background-color #f8faff
    border-right solid 1px #e8eaf4
    height 100%
    width 36px
    justify-content center
    display flex

    input
      margin-top 14px


  .item
    display flex
    flex-grow 1
    padding 40px 36px 40px 36px

    .img-container
      border-radius: 4px;
      border: solid 1px #bcc1d7;
      margin-right 30px
      height 120px
      width 144px
      display flex
      justify-content center
      align-items center
      flex-shrink 1

      img
        height 70%
        
    .info-container
      flex-grow 1
      display flex
      flex-wrap wrap

      .top
        display flex
        flex-basis 100%
        border-bottom solid 2px #e8eaf4
        margin-bottom 20px
        padding-bottom 20px

        .description-container
          text-align left
          flex-wrap wrap

          h4
            font-size 15px
            font-weight 500
            letter-spacing -0.4px
            color #4a4a4a
            padding-bottom 4px


         span
           font-size 13px
           letter-spacing -0.3px
           color #959bb4
           padding-right 5px
            
         .selling-point
           display flex
           align-items center

         .tag
           display flex
           align-items center
           
        .dot
          content " "
          width 2px
          height 2px
          border-radius 50%
          margin-right 5px
          background-color #a7adc6
          display inline-block
          padding 0px

        .price-container
          display flex
          align-items center
          
        .actions-container
          margin-left auto

          .buttons-container
            display flex

            .s-button
              margin-left 10px


    .bottom
      display flex
      flex-basis 100%
      align-items flex-end

     .stats-container
       .buttons-container
         display flex
         .s-button
           margin-right 18px
           box-shadow none

     .meta-container
       align-items center
       margin-left auto
       display flex

       .created-at
         font-size 13px
         letter-spacing -0.3px
         color #959bb4
         margin-right 15px

       img
         width 32px
         height 32px
         border-radius 40px
         background-color #d8d8d8
         border solid 0.5px #8e929e

</style>


<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  data(){
    return {}
  },
}
</script>

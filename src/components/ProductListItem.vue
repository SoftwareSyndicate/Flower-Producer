<template lang="pug">
div.product-list-item
  div.checkbox-container
    input(type="checkbox")

  div.item
    div.img-container
      img(:src="product.product_images[0]")

    div.info-container
      div.top
        div.description-container
          h4 {{product.name}}
          span(v-for="tag in product.tags") {{tag}}

        div.actions-container
          div.buttons-container
            s-button.secondary(:title="'Archive'")
            router-link(:to="{ name: 'product', params: { id: product.id }}")
              s-button.secondary(:title="'Edit'")

      div.bottom
        div.stats-container
          div.buttons-container
            s-button.secondary(:title="'2.4K'")
            s-button.secondary(:title="'920'")
            s-button.secondary(:title="'THC 10mg'")

        div.meta-container
          p.created-at Added {{product.created_at.toLocaleDateString()}}
          img(:src="product.created_by.avatar")



</template>

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
        width auto

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

           &:after
            content "-"

           &:last-child
             &:after
               content ""

        .actions-container
          margin-left auto

          .buttons-container
            display flex

            .syndicate-button
              margin-left 10px


    .bottom
      display flex
      flex-basis 100%
      align-items flex-end

     .stats-container
       .buttons-container
         display flex
         .syndicate-button
           margin-right 18px

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

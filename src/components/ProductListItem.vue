<template lang="jade">
  div.product-list-item
    div.checkbox-container
      input(type="checkbox")
    
    div.item 
      div.img-container
        img(:src="product.product_images[0]")
        
      div.info-container
        div.row
          div.description-container
            h4 {{product.name}}
            span(v-for="tag in product.tags") {{tag}} 
        
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
.product-list-item 
  display flex
  flex-basis 100%
  flex-wrap wrap
  align-items center
  border-radius 2px
  box-shadow 0 2px 2px 0 #e8eaf4
  border solid 1px #bcc1d7
  min-height 200px
  
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
         
      img
        height 70%
        width auto
        
    .info-container
      display flex

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

</style>

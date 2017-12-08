<template>
  <div class="my-header">
    <div class="icon"></div>
    <h1 class="text">Cookmi Music</h1>

    <!-- 个人中心 -->
    <router-link to="/user" class="mine" tag="div">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .my-header
    position: relative
    height: 44px
    text-align: center
    color: #f80
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      background: url("./logo@2x.png")
      background-size: 30px 32px
    .icon-mine:before
      content: "\E912"
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: 18px
    .mine
      position: absolute
      top: 0
      right: 0
    .icon-mine
      display: block
      padding: 12px
      font-size: 20px
      color: #f80

</style>

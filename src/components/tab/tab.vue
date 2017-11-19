<template>
  <div class="my-tab">
    <router-link tag="div" class="tab-item" :to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="/rank">
      <span class="tab-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="/search">
      <span class="tab-link">搜索</span>
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

<style scoped>
  .my-tab {
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .router-link-active {
    color: orange;
    border-bottom: 2px solid orange;
  }
</style>

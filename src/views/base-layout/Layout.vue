<template>
  <div id="wrapper">
    <side-bar></side-bar>
    <div id="page-wrapper" class="gray-bg">
      <head-bar></head-bar>
      <tab-views></tab-views>
      <div class="wrapper wrapper-content animated fadeInRight">
        <router-view></router-view>
      </div>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/base-layout/SideBar'
import HeadBar from '@/views/base-layout/HeadBar'
import TabViews from '@/views/base-layout/TabViews'
import MyFooter from '@/views/base-layout/MyFooter'
export default {
  components: {
    SideBar,
    HeadBar,
    TabViews,
    MyFooter
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

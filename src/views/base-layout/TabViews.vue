<!-- <template>
  <div class="row wrapper white-bg page-heading">
    <div class="col-lg-10">
      <ol class="breadcrumb">
        <li>
          <a href="#">{{firstTitle}}</a>
        </li>
        <li class="active">
          <strong>{{secondTitle}}</strong>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstTitle: '',
      secondTitle: ''
    }
  },
  watch: {
    $route(val) {
      console.log(val)
      this.firstTitle = val.matched[0].meta.title
      this.secondTitle = val.meta.title
    }
  }
}
</script>
 -->

<template>
  <div>
    <div class="tabs-container">
      <router-link class="tags-view-item" :class="isActive(tag) ? 'active' : '' " v-for="(tag, index) in visitedTabsView" :to="tag.path" :key="index">
        <el-tag
          closable
          :disable-transitions="false"
          @close.prevent.stop="handleClose(tag)">
          {{tag.name}}
        </el-tag>
      </router-link>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>{{firstTitle}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{secondTitle}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      firstTitle: '',
      secondTitle: ''
    }
  },
  created() {
    this.addTabsView()
    this.firstTitle = this.$route.matched[0].meta.title
    this.secondTitle = this.$route.meta.title
  },
  computed: {
    ...mapGetters([
      'visitedTabsView'
    ])
  },
  methods: {
    ...mapActions([
      'addVisitedTabsView',
      'delVisitedTabsView'
    ]),
    addTabsView() {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.addVisitedTabsView(this.generateRoute())
    },
    generateRoute() {
      if (this.$route.path) {
        return this.$route
      }
      return false
    },
    isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name
    },
    handleClose(tag) {
      this.delVisitedTabsView(tag).then((tags) => {
        if (this.isActive(tag)) {
          const lastTag = tags.slice(-1)[0]
          if (lastTag) {
            console.info(1)
            this.$router.push(lastTag.path)
          } else {
            console.info(2)
            this.$router.push('/')
          }
        }
      })
    }
  },
  watch: {
    $route(val) {
      this.addTabsView()
      this.firstTitle = val.matched[0].meta.title
      this.secondTitle = val.meta.title
    }
  }
}
</script>

<style scoped lang="stylus">
  .tabs-container {
    height: 40px;
    padding: 5px;
    border-bottom: 1px solid #dfdfdf;
    .tags-view-item {
      .el-tag {
        margin: 0 3px;
        &:first-child {
          margin-left: 0;
        }
      }
      &.active {
        .el-tag {
          background-color: #00b4aa;
          color: #fff;
          /deep/ .el-icon-close {
            color: #fff;
          }
          &::before {
            content: '';
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
          }
        }
      }
    }
  }
  .el-breadcrumb {
    padding: 10px 0;
  }
</style>

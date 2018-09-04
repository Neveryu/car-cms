<template>
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

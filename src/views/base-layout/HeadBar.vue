<template>
  <div class="row border-bottom">
    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <li>
          <a href="javascript:;" @click="handerLogout" v-loading.fullscreen.lock="fullscreenLoading">
            <i class="fa fa-sign-out"></i> Log out
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { logout } from '@/api/login'
export default {
  data() {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    handerLogout() {
      this.fullscreenLoading = true
      logout().then(resp => {
        if(resp.code === 0) {
          this.$router.push({ name: 'login' })
        }
      })
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox">
        <div class="ibox-content">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>车辆ID</th>
            <th>手机号</th>
            <th>车牌号</th>
            <th>发动机号</th>
            <th>车辆VIN号</th>
            <th>品牌型号</th>
            <th>是否认证</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr style="text-align: center" v-show="initLoading">
            <td colspan="8">加载中...</td>
          </tr>
          <tr v-for="(car, index) of carList" :key="index">
            <td>{{car.id}}</td>
            <td>{{car.phone}}</td>
            <td>{{car.carNum}}</td>
            <td>{{car.driverNum}}</td>
            <td>{{car.VIN}}</td>
            <td>{{car.brand}}</td>
            <td>{{car.request ? '认证':'未认证'}}</td>
            <td>
              <div class="dropdown">
                <i class="fa fa-car dropdown-toggle" data-toggle="dropdown"></i>
                <ul class="dropdown-menu pull-left" role="menu" style="min-width: 80px;">
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="javascript:;" @click="editCar(car.id)">编辑</a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="javascript:;" @click="delCar(car.id)">删除</a>
                  </li>
                  
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCarList } from '@/api/car'
export default {
  data() {
    return {
      initLoading: true,
      carList: []
    }
  },
  methods: {
    editCar(id) {
      console.log(id)
    },
    delCar(id) {
      console.log(id)
    }
  },
  created() {
    getCarList().then(resp => {
      this.initLoading = false
      this.carList = resp.data
    })
  }
}
</script>

<style scoped>
  .dropdown a {
    text-align: center;
  }
</style>

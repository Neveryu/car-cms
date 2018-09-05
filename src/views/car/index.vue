<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox">
        <div class="ibox-content">
      <table class="table table-hover">
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
          <tr>
            <td>0001</td>
            <td>13888888888</td>
            <td>Win 95+</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>X</td>
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
      carList: []
    }
  },
  created() {
    console.log(getCarList())
  }
}
</script>

<style scoped>

</style>

<template>
  <!-- <div class="row">
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
                <i class="fa fa-ellipsis-v dropdown-toggle" data-toggle="dropdown"></i>
                <ul class="dropdown-menu pull-left" role="menu" style="min-width: 80px;">
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="javascript:;" @click="removeBind(car.id)">解绑</a>
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
  </div> -->
  <div class="row">
    <div class="tool-bar">
      <el-form ref="form" :inline="true" :model="searchForm" label-width="80px" style="text-align: right; padding-right: 30px;">
        <el-form-item label="车牌号">
          <el-select v-model="searchForm.carNum1" placeholder="">
            <el-option label="京A" value="a"></el-option>
            <el-option label="京B" value="b"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="searchForm.carNum2"></el-input>
        </el-form-item>
            <el-form-item>
        <el-button type="primary" plain @click="query">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="info" plain @click="reset">重置</el-button>
      </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="carList"
      v-loading="loading"
      stripe
      current-row-key
      style="width: 100%">
      <el-table-column
        prop="id"
        label="车辆ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="carNum"
        label="车牌号">
      </el-table-column>
      <el-table-column
        prop="driverNum"
        label="发动机号">
      </el-table-column>
      <el-table-column
        prop="VIN"
        label="车辆VIN号">
      </el-table-column>
      <el-table-column
        prop="brand"
        label="品牌型号">
      </el-table-column>
      <el-table-column
        prop="request"
        label="是否认证">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="demonstration">更多选择</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="['remove', scope.row]">解绑</el-dropdown-item>
              <el-dropdown-item :command="['del', scope.row]">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="perNum"
      :page-count="totalPage"
      background
      layout="total, sizes, prev, pager, next, jumper">
      <!-- :total="totalPage"> -->
    </el-pagination>
  </div>
</template>

<script>
import { getCarList } from '@/api/car'
export default {
  data() {
    return {
      loading: true,
      // 数据
      carList: [],
      // 总页数
      totalPage: 0,
      // 每页条数
      perNum: 20,
      // 当前第几页
      currentIndex: 1,
      // 搜索
      searchForm: {
        carNum1: '京A',
        carNum2: ''
      }
    }
  },
  methods: {
    query() {},
    reset() {},
    handleSizeChange(pageSize) {
      this.loading = true
      this.currentIndex = 1
      this.perNum = pageSize
      getCarList(this.currentIndex, this.perNum).then(resp => {
        this.loading = false
        this.carList = resp.data
        this.totalPage = resp.totalPage
      })
    },
    handleCurrentChange(currentIndex) {},
    handleCommand(command) {
      if(command[0] === 'remove') {
        this.removeBind(command[1])
      } else if(command[0] === 'del') {
        this.delCar(command[1])
      } else {
        console.log('command car')
      }
    },
    removeBind(id) {
      this.$confirm('确定解除绑定吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal: false
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    delCar(id) {
      this.$confirm('确认删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal: false
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  created() {
    getCarList(this.currentIndex, this.perNum).then(resp => {
      this.loading = false
      this.carList = resp.data
      this.totalPage = resp.totalPage
    })
  }
}
</script>

<style scoped>
  .dropdown a {
    text-align: center;
  }
  .fa-ellipsis-v {
    display: block;
  }
  .el-pagination {
    margin-top: 15px;
    text-align: right;
    padding-right: 20px;
  }
  .el-select /deep/ input {
    width: 80px;
  }
</style>

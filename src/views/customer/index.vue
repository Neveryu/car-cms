<template>
  <div class="row">
    <div class="tool-bar">
      <div class="date-wrapper">
        <el-date-picker
          v-model="searchDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <el-form ref="searchForm" :inline="true" :model="searchForm" label-width="80px" style="text-align: right; padding-right: 30px;">
        <el-form-item label="车牌号" prop="carNum1">
          <el-select v-model="searchForm.carNum1" placeholder="">
            <el-option label="京A" value="a"></el-option>
            <el-option label="京B" value="b"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="" prop="carNum2">
          <el-input v-model="searchForm.carNum2"></el-input>
        </el-form-item>
            <el-form-item>
        <el-button type="primary" plain @click="query">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="info" plain @click="reset('searchForm')">重置</el-button>
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
        align="center"
        prop="id"
        label="客户ID"
        width="80">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="姓名"
        width="160">
      </el-table-column>
      <el-table-column
        align="center"
        prop="sex"
        label="性别">
        <template slot-scope="scope">
          {{scope.row.sex === 1 ? '男' : '女'}}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="phone"
        label="手机号">
      </el-table-column>
      <el-table-column
        align="center"
        prop="carNum"
        label="车牌号">
      </el-table-column>
      <el-table-column
        align="center"
        prop="registDate"
        label="注册日期">
      </el-table-column>
      <el-table-column
        align="center"
        prop="accountId"
        label="账户ID">
      </el-table-column>
      <el-table-column
        align="center"
        prop="request"
        label="是否认证">
        <template slot-scope="scope">
          <el-tag
          :type="scope.row.request === 1 ? 'success' : 'default'">
            {{scope.row.request === 1 ? '已认证' : '未认证'}}
          </el-tag>
        </template>
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
import { getCustomerList } from '@/api/customer'
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
      searchDate: '',
      searchForm: {
        carNum1: '京A',
        carNum2: ''
      }
    }
  },
  methods: {
    query() {
      this.loading = true
      getCustomerList(this.currentIndex, this.perNum).then(resp => {
        this.loading = false
        this.carList = resp.data
        this.totalPage = resp.totalPage
      }).catch((err) => {
        this.loading = false
        console.log('获取车辆列表错误：' + err)
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    handleSizeChange(pageSize) {
      this.loading = true
      this.currentIndex = 1
      this.perNum = pageSize
      getCustomerList(this.currentIndex, this.perNum).then(resp => {
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
          message: '解除绑定成功!'
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
      })
    }
  },
  created() {
    getCustomerList(this.currentIndex, this.perNum).then(resp => {
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
  .el-input /deep/ input {
    width: 120px;
  }
  .el-form--inline .el-form-item {
    margin-right: 0;
  }
  .date-wrapper {
    text-align: right;
    margin-top: -35px;
    padding: 0 20px 10px 0;
  }
</style>

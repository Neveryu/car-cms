<template>
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

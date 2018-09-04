<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav" id="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element"> <span>
            <img alt="image" class="img-circle" src="/static/img/profile_small.jpg"/>
          </span>
          <a data-toggle="dropdown" class="dropdown-toggle" href="#">
            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
            </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Mailbox</a></li>
              <li class="divider"></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
          <div class="logo-element">
            IN+
          </div>
        </li>
        <li>
          <router-link to="/customer"><i class="fa fa-users"></i> <span class="nav-label">客户管理</span> <span class="label label-primary pull-right">NEW</span></router-link>
        </li>
        <li>
          <router-link to="/car">
            <i class="fa fa-car"></i> <span class="nav-label">车辆管理</span>
          </router-link>
        </li>
        <li>
          <router-link to="/park">
            <i class="fa fa-hand-o-right"></i> <span class="nav-label">停车场</span>
          </router-link>
        </li>
        <li>
          <router-link to="/order">
            <i class="fa fa-file-text"></i> <span class="nav-label">账单管理</span>
          </router-link>
        </li>
        <li>
          <router-link to="/permission">
            <i class="fa fa-cubes"></i> <span class="nav-label">权限管理</span>
          </router-link>
        </li>
        <li>
          <router-link to="/user">
            <i class="fa fa-user"></i> <span class="nav-label">用户管理</span>
          </router-link>
        </li>
        <li>
          <router-link to="/error">
            <i class="fa fa-edit"></i> <span class="nav-label">报错信息</span><span class="label label-info pull-right">62</span>
          </router-link>
        </li>
        <li class="special_link">
          <a href="#"><i class="fa fa-database"></i> <span class="nav-label">Package</span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

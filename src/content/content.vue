<template>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container-fluid">
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                </a>
                <a class="brand" v-link="{path:'/banner'}">校园通-管理平台</a>
                <div class="nav-collapse collapse">
                    <ul class="nav pull-right">
                        <li class="dropdown">
                            <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i> admin <i class="caret"></i>

                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a tabindex="-1" v-link="{ path: '/login'}">Login</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>
    </div>
    <div class="container-fluid">
	    <div class="row-fluid">
            <div class="span3" id="sidebar">
                <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                    <li class="active">
                        <a>静态资源</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/banner'}"><i class="icon-chevron-right"></i>Banner</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/banner-ios'}"><i class="icon-chevron-right"></i>Banner for ios</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/calendar'}"><i class="icon-chevron-right"></i>校历</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/calendar-ios'}"><i class="icon-chevron-right"></i>校历 for ios</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/start'}"><i class="icon-chevron-right"></i>闪屏</a>
                    </li>
                    <li class="active">
                        <a>版本控制</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/version'}"><i class="icon-chevron-right"></i>app版本控制</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/patch'}"><i class="icon-chevron-right"></i>补丁包版本控制</a>
                    </li>
                    <li class="active">
                        <a>ios</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/ios'}"><i class="icon-chevron-right"></i>用户反馈</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/ios-push'}"><i class="icon-chevron-right"></i>注册id</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/ios-config'}"><i class="icon-chevron-right"></i>配置</a>
                    </li>
                    <li class="active">
                        <a v-link="{ path: '/product/0'}"><i class="icon-chevron-right"></i>产品展示</a>
                    </li>
                </ul>
            </div>
	        <div class="span9" id="content">
				<router-view :url="url"></router-view>
			</div>
	    </div>
    </div>
</template>
<script>
   export default {
        data(){
            return {
                url:'http://121.42.176.189:5486/api'
            }
            // when build
            // return {
            //     url:'http://boxmanage.muxixyz.com/api'
            // }
        }
    } 
</script>

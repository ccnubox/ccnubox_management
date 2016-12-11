<template>
<div>
	<h1>补丁包版本控制</h1>
</div>
<div>
	<ul class="nav nav-tabs">
    <li :class="currentPath == '/patch/' ? 'active' : ''">
      <a v-link="{ path: '/patch/'}">最新补丁</a>
    </li>
		<li :class="currentPath == '/patch/apppatch' ? 'active' : ''">
            <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle">查看版本<b class="caret"></b></a>
                <ul class="dropdown-menu" id="menu1">
                    <li v-for="patch in patches" track-by="$index">
                        <a v-link="{ name: 'patch' , params: { id: $index }}">{{ patch.version }}</a>
                    </li>
                </ul>
            </li>
		</li>
		</li>
		<li :class="currentPath == '/patch/addpatch' ? 'active' : ''">
			<a v-link="{ path: '/patch/addpatch'}">添加补丁</a>
		</li>
        <li :class="currentPath == '/patch/delpatch' ? 'active' : ''">
            <a v-link="{ path: '/patch/delpatch'}">删除补丁</a>
        </li>
	</ul>
	<router-view :patches="patches" :url="url"></router-view>
</div>
</template>
<script>
var request = require('superagent');
export default {
    data(){
        return {
            patches:[
            // {
            //    "version": "v1",
            //    "download": "http://xxx.com",
            //    "update": "2016-0802",
            //    "intro": "这是一次史无前例的更新",
            //    "size": "100M"
            // },{
            //    "version": "v2",
            //    "download": "http://xxx.com",
            //    "update": "2016-0802",
            //    "intro": "这是一次史无前例的更新",
            //    "size": "100M"
            // },
            // {
            //    "version": "v3",
            //    "download": "http://xxx.com",
            //    "update": "2016-0802",
            //    "intro": "这是一次史无前例的更新",
            //    "size": "100M"
            // },{
            //    "version": "v4",
            //    "download": "http://xxx.com",
            //    "update": "2016-0802",
            //    "intro": "这是一次史无前例的更新",
            //    "size": "100M"
            // }
            ]
        }
    },
    props: {
        url: {
            type: String
        }
    },
    route: {
        activate: function () {
            var self = this
            request
                .get(self.url + '/patch/')
                .end(function(err,res){
                    if (err) throw err
                    self.patches = res.body
                })
        }
    }
}
</script>
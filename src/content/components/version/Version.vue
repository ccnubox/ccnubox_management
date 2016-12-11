<template>
<div>
	<h1>app版本控制</h1>
</div>
<div>
	<ul class="nav nav-tabs">
        <li :class="currentPath == '/version/latestver' ? 'active' : ''">
            <a v-link="{ path: '/version/latestver'}">最新版本</a>
        </li>
		<li :class="currentPath == '/version/appver' ? 'active' : ''">
            <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle" @click="update">查看版本<b class="caret"></b></a>
                <ul class="dropdown-menu" id="menu1">
                    <li v-for="version in versions" track-by="$index">
                        <a v-link="{ name: 'version' , params: { id: $index }}">{{ version.version }}</a>
                    </li>
                </ul>
            </li>
		</li>
		<li :class="currentPath == '/version/addver' ? 'active' : ''">
			<a v-link="{ path: '/version/addver'}">添加版本</a>
		</li>
        <li :class="currentPath == '/version/delver' ? 'active' : ''">
            <a v-link="{ path: '/version/delver'}">删除版本</a>
        </li>
	</ul> 
	<router-view :versions="versions" :url="url"></router-view>
</div>

</template>
<script>
var request = require('superagent');
export default {
    data(){
        return {
            versions:[
            // {
            //     "name":"华师匣子",
            //     "version": "v1",
            //     "download": "http://xxx.com",
            //     "update": "2016-0802",
            //     "intro": "这是一次史无前例的更新",
            //     "size": "100M"
            // },{
            //     "name":"华师匣子",
            //     "version": "v2",
            //     "download": "http://xxx.com",
            //     "update": "2016-0802",
            //     "intro": "这是一次史无前例的更新",
            //     "size": "100M"
            // },
            // {
            //     "name":"华师匣子",
            //     "version": "v3",
            //     "download": "http://xxx.com",
            //     "update": "2016-0802",
            //     "intro": "这是一次史无前例的更新",
            //     "size": "100M"
            // },{
            //     "name":"华师匣子",
            //     "version": "v4",
            //     "download": "http://xxx.com",
            //     "update": "2016-0802",
            //     "intro": "这是一次史无前例的更新",
            //     "size": "100M"
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
                .get(self.url + '/app/')
                .end(function(err,res){
                    var c =  JSON.parse(res.text)
                    console.log(c)
                    if (err) throw err
                    self.versions = c
                })
        }
    },
    methods:{
        update:function(){
            var self = this
            request
                .get(self.url + '/app/')
                .end(function(err,res){
                    var c =  JSON.parse(res.text)
                    if (err) throw err
                    self.versions = c
                })            
        }
    }
}
</script>
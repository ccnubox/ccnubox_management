<template>
<div>
	<h1>木犀产品展示</h1>
	<p>update time: {{ update }}</p>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/product/appver/' ? 'active' : ''">
            <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle">展示产品<b class="caret"></b></a>
                <ul class="dropdown-menu" id="menu1">
                    <li v-for=" product in products" track-by="$index">
                        <a v-link="{ name: 'product' , params: { id: $index }}">{{ product.name }}</a>
                    </li>
                </ul>
            </li>
		</li>
	</ul>
	<router-view :products="products"></router-view>
</div>
</template>
<script>
var request = require('superagent');
export default {
	data(){
		return {
			products:[
			// {
	  //           "name": "学而",
	  //           "icon": "icon-urlxxxx",
	  //           "url": "https://xueer.muxixyz.com",
	  //           "intro": "华师课程经验挖掘机",				
			// },
			// {
	  //           "name": "华师匣子",
	  //           "icon": "icon-urlxxxx",
	  //           "url": "https://xueer.muxixyz.com",
	  //           "intro": "华师课程经验挖掘机",				
			// },
			// {
	  //           "name": "机器人",
	  //           "icon": "icon-urlxxxx",
	  //           "url": "https://xueer.muxixyz.com",
	  //           "intro": "华师课程经验挖掘机",				
			// },
			// {
	  //           "name": "校园通",
	  //           "icon": "icon-urlxxxx",
	  //           "url": "https://xueer.muxixyz.com",
	  //           "intro": "华师课程经验挖掘机",				
			// },
			// {
	  //           "name": "校园通",
	  //           "icon": "icon-urlxxxx",
	  //           "url": "https://xueer.muxixyz.com",
	  //           "intro": "华师课程经验挖掘机",				
			// }
			],
		   update: ''
		}
	},
	route: {
		activate: function () {
			var self = this
			request
				.get('/api/product/')
				.end(function(err,res){
					if (err) throw err
					self.products = res.body._product
					self.update = res.body.update
				})
		}
	}
}	
</script>
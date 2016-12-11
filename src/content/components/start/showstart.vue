<template>
<table class="table table-bordered" style="table-layout:fixed">
	<thead>
		<tr>
			<th width="20%">闪屏</th>
			<th width="80%"></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>图片名</td>
			<td><a href="{{ url }}">{{ img }}</a></td>
		</tr>
		<tr>
			<td>图片链接</td>
			<td><a href="{{ url }}">{{ imgurl }}</a></td>
		</tr>
		<tr>
			<td>更新时间</td>
			<td>{{ update }}</td>
		</tr>
	</tbody>
</table>
</template>
<script>
	var request = require('superagent');
	export default {
		data(){
			return {
			    img: '',
			    imgurl: '',
			    update: ''
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
					.get(self.url + '/start/')
					.end(function(err,res){
						if (err) throw err
						self.img = res.body.filename
						self.imgurl = res.body.img
						self.update = res.body.update
					})
			}
		}
	}

</script>
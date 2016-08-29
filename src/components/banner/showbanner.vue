<template>
	<table class="table table-bordered" style="table-layout:fixed">
		<thead>
			<tr>
				<th width="8%">Banner</th>
				<th width="40%">七牛链接</th>
				<th width="40%">图片链接</th>
				<th width="12%">更新时间</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="banner in banners"  track-by="$index">
				<td>{{ $index }}</td>
				<td><a href="{{ banner.img }}">{{ banner.img }}</a></td>
				<td><a href="{{ banner.url }}">{{ banner.url }}</a></td>
				<td>{{ banner.update }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
var request = require('superagent');
export default {
	data(){
		return {
			banners:[{
				"img": "http://muxistatic.com",
				"url": "http://muxistudio.com",  
				'update': "2016-0802"
			},
			{
				"img": "http://muxistatic.com",
				"url": "http://muxistudio.com",  
				'update': "2016-0803"
			},
			{
				"img": "http://muxistatic.com",
				"url": "http://muxistudio.com",  
				'update': "2016-0804"
			},
			{
				"img": "http://muxistatic.com",
				"url": "http://muxistudio.com",  
				'update': "2016-0805"
			}]
		}
	},
	route: {
		activate: function () {
			var self = this
			request
				.get('/api/banner')
				.end(function(err,res){
					if (err) throw err
					self.banner = res.body
				})
		}
	}
}
</script>
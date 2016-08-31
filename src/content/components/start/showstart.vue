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
			<td>七牛外链</td>
			<td><a href="{{ img }}">{{ img }}</a></td>
		</tr>
		<tr>
			<td>图片链接</td>
			<td><a href="{{ url }}">{{ url }}</a></td>
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
			    url: '',
			    update: ''
			}
		},
		route: {
			activate: function () {
				var self = this
				request
					.get('/api/start/')
					.end(function(err,res){
						if (err) throw err
						self.img = res.body.img
						self.url = res.body.url
						self.update = res.body.update
					})
			}
		}
	}

</script>
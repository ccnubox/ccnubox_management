<template>
	<table class="table table-bordered" style="table-layout:fixed">
	<thead>
		<tr>
			<th width="20%"></th>
			<th width="80%">内容</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>version</td>
			<td>{{ version }}</td>			
		</tr>
		<tr>
			<td>下载地址</td>
			<td><a href="{{ download }}">{{ download }}</a></td>
		</tr>
		<tr>
			<td>更新时间</td>
			<td>{{ update }}</td>
		</tr>
		<tr>
			<td>更新说明</td>
			<td>{{ intro }}</td>
		</tr>
		<tr>
			<td>更新包大小</td>
			<td>{{ size }}</td>
		</tr>
	</tbody>
</table>
</template>
<script>
	var request = require('superagent');
	export default {
		data(){
			return {
				version: '',
				download: '',
				update: '',
				intro: '',
				size: ''
			}
		},
		route: {
			activate: function () {
				var self = this
				request
					.get('/api/patch/latest/')
					.end(function(err,res){
						if (err) throw err
						self.version = res.body.version
						self.download = res.body.download
						self.update = res.body.update
						self.intro = res.body.intro
						self.size = res.body.size
					})
			}
		}
	}	
</script>
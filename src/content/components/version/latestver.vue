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
			<td>name</td>
			<td>{{ name }}</td>			
		</tr>
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
				name: '',
				version: '',
				download: '',
				update: '',
				intro: '',
				size: ''
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
					.get(self.url + '/app/latest/')
					.end(function(err,res){
						console.log(res.text)
						if (err) throw err
						var c =  JSON.parse(res.text)
						self.name = c.name
						self.version = c.version
						self.download = c.download
						self.update = c.update
						self.intro = c.intro
						self.size = c.size
					})
			}
		}
	}	
</script>
<template>
<table class="table table-bordered" style="table-layout:fixed">
	<thead>
		<tr>
			<th width="20%">Calendar</th>
			<th width="80%"></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>七牛外链</td>
			<td><a href="{{ img }}">{{ img }}</a></td>
		</tr>
		<tr>
			<td>图片大小</td>
			<td>{{ size }}</td>
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
			    size: '',
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
					.get(self.url + '/ios/calendar/')
					.end(function(err,res){
						console.log(res.body)
						if (err) throw err
						self.img = res.body.img
						self.size = res.body.size
						self.update = res.body.update
					})
			}
		}
	}
		
</script>
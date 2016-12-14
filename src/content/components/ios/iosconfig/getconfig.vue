<template>
	<table class="table table-bordered" style="table-layout:fixed">
		<thead>
			<tr>
				<th width="20%">k</th>
				<th width="80%">v</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="array in arrays">
				<td>{{ array.user }}</td>
				<td>{{ array.msg }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
var request = require('superagent');
export default {
	data(){
		return {
			config:{'k1':'v1', 'k2':'v2'},
			arrays:[]
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
				.get(self.url + '/ios/config/')
				.set('Authorization',localStorage.str)
				.end(function(err,res){
					if (err) throw err
					self.config = res.body.config
					// var a = res.text
					// var c =  JSON.parse(a)
					// self.banners = c
					var key = Object.keys(self.config)
					for(var i = 0;i<key.length;i++){
						self.arrays.push({user:key[i],msg:self.config[key[i]]})
					}
				})
		}
	}
}
</script>
<template>
	<table class="table table-bordered" style="table-layout:fixed">
		<thead>
			<tr>
				<th width="20%">user</th>
				<th width="80%">反馈信息</th>
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
			feedbacks:[],
			// {'13007149711':'啊啊啊啊'},
		    // {'2014210761': '啦啦啦啦啦'}
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
				.get(self.url + '/feedbacks/')
				.set('Authorization',localStorage.str)
				.end(function(err,res){
					if (err) throw err
					self.feedbacks = res.body
					// var a = res.text
					// var c =  JSON.parse(a)
					// self.banners = c
					for(var i = 0;i<self.feedbacks.length;i++){
						var key = Object.keys(self.feedbacks[i])
						var value = self.feedbacks[i][key]
						self.arrays.push({user:key,msg:value})
					}
				})
		}
	}
}
</script>
<template>
	<table class="table table-bordered" style="table-layout:fixed">
		<thead>
			<tr>
				<th width="8%">Banner</th>
				<th width="40%">七牛链接</th>
				<th width="40%">图片名</th>
				<th width="12%">更新时间</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="banner in banners"  track-by="$index">
				<td>{{ banner.num }}</td>
				<td @click="geturl(banner.img)"><a href="{{ banner.img }}">{{ banner.img }}</a></td>
				<td><a href="{{ banner.img }}">{{ banner.filename }}</a></td>
				<td>{{ banner.update }}</td>
			</tr>
		</tbody>
	</table>
	<form method="put">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">七牛外链</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="img" type="text" value="点击表单上的七牛链接" v-model="url" required>
		      	</div>
		      	<label class="control-label" for="focusedInput">修改排序</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="url" type="text" value="num" v-model="num" required>
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="modify">修改排序</button>
	      <button type="reset" class="btn">Cancel</button>
	    </div>
	  </fieldset>
	</form>
</template>

<script>
var request = require('superagent');
export default {
	data(){
		return {
			banners:[],
			// {
			// 	"img": "http://muxistatic.com",
			// 	"url": "http://muxistudio.com",  
			// 	'update': "2016-0802"
			// },
			// {
			// 	"img": "http://muxistatic.com",
			// 	"url": "http://muxistudio.com",  
			// 	'update': "2016-0803"
			// },
			// {
			// 	"img": "http://muxistatic.com",
			// 	"url": "http://muxistudio.com",  
			// 	'update': "2016-0804"
			// },
			// {
			// 	"img": "http://muxistatic.com",
			// 	"url": "http://muxistudio.com",  
			// 	'update': "2016-0805"
			// }
			num:0,
			url:""
		}
	},
	methods:{
		geturl(img){
			this.url = img
		},
		modify(){
			var self = this
			request
				.put(self.url + '/banner/')
				.set('Authorization',localStorage.str)
				.send({img:self.url,num:self.num})
				.set('Content-Type','application/json')
				.end(function(err,res){
					if (err) throw err;
					if (res.status == 200) {
						alert('修改成功');
					}
					self.url = ''
					self.num = ''
				})
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
				.get(self.url + '/banner/')
				.end(function(err,res){
					if (err) throw err
					var a = res.text
					var c =  JSON.parse(a)
					self.banners = c
				})
		}
	}
}
</script>
<template>
<form class="form-horizontal">
  	<fieldset>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">七牛外链</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="startimg" type="text" placeholder="七牛文件名(若有后缀包括后缀)">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">图片链接</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="starturl" type="text" placeholder="url">
	      	</div>
	    </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-success" @click="updatestart">Update</button>
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
			startimg:'',
			starturl:''
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods: {
		updatestart: function (e) {
			e.preventDefault()
			var self =  this
			request
				.post(self.url + '/start/')
				.set('Authorization',localStorage.str)
				.send({img:self.startimg,size:self.starturl})
				.end(function(err,res){
					if (err) throw err
					if (res.status == 201) {
						alert('创建成功');
					}
					self.startimg = ''
					self.starturl = ''					
				})
		}
	}
}
</script>
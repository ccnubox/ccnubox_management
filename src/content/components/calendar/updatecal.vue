<template>
<form class="form-horizontal">
  	<fieldset>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">七牛外链</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" type="text" value="七牛文件名(若有后缀包括后缀)" v-model="calimg">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">图片大小</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" type="text" value="_x_" v-model="calsize">
	      	</div>
	    </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-success" @click="updatecal">Update</button>
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
			calimg:'',
			calsize:''
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods: {
		updatecal: function (e) {
			e.preventDefault()
			var self =  this
			request
				.post(self.url + '/calendar/')
				.set('Authorization',localStorage.str)
				.send({img:self.calimg,size:self.calsize})
				.end(function(err,res){
					if (err) throw err
					if (res.status == 201) {
						alert('创建成功');
					}
					self.calimg = ''
					self.calsize = ''					
				})
		}
	}
}
</script>
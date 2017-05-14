<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">图片链接</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="name" type="text" placeholder="图片链接" v-model="bannerdel">
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="delbanner">Delete</button>
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
			bannerdel:''
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		delbanner:function(e){
			e.preventDefault()
			var self = this
			request
				.del(self.url + '/ios/banner/')
				.set('Authorization',localStorage.str)
				.query({name:self.bannerdel})
				.end(function(err,res){
					if (err) throw err;
					if (res.status == 200) {
						alert('删除成功');
					}
					self.bannerdel = ''
				})
		}
	}
}
</script>
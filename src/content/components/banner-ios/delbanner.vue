<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">name</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="name" type="text" value="七牛文件名" v-model="baniosdel">
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
			baniosdel:''
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
				.query({name:self.baniosdel})
				.end(function(err,res){
					if (err) throw err;
					if (res.status == 200) {
						alert('删除成功');
					}
					self.baniosdel = ''
				})
		}
	}
}
</script>
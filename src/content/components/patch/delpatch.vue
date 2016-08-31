<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">name</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="name" type="text" value="版本号" v-model="patchdel">
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="delpatch">Delete</button>
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
			patchdel:''
		}
	},
	methods:{
		delpatch:function(){
			var self = this
			request
				.del('/api/patch/str:version/')
				.set('Authorization',localStorage.str)
				.query({version:self.patchdel})
				.end(function(err,res){
					if (err) throw err;
					if (res.status == 200) {
						alert(res.msg);
					}
					self.patchdel = ''
				})
		}
	}
}
</script>
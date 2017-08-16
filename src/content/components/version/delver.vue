<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">name</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="name" type="text" placeholder="版本号" v-model="verdel">
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="delver">Delete</button>
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
			verdel:''
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		delver:function(e){
			e.preventDefault()
			var self = this
			request
				.del(self.url + '/app/'+ self.verdel+'/')
				.set('Authorization',localStorage.str)
				.end(function(err,res){
					if (err) throw err;
					if (res.status == 200) {
						alert(res.body.msg)
					}
					self.verdel = ''
				})
		}
	}
}
</script>
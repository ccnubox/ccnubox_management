<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">unique_id</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="img" type="text" v-model="unique_id" required>
		      	</div>
		    </div>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">sid</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="url" type="text" v-model="sid" required>
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="register">Add New <i class="icon-plus icon-white"></i></button>
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
			unique_id:"",
			sid:""
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		register: function(e){
			e.preventDefault()
			var self =  this
			if (this.unique_id && this.sid) {
				request
					.post(self.url + '/push/register/')
					.set('Authorization',localStorage.str)
					.send({unique_id:self.unique_id,sid:self.sid})
					.set('Content-Type','application/json')
					.end(function(err,res){
						if (err) throw err;
						if (res.status == 201) {
							alert(res.body.message);
						}
						self.unique_id = ''
						self.sid = ''
					})
				}
		}
	}
}
</script>
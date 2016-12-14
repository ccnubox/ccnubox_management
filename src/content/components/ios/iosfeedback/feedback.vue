<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">联系方式</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="contact" type="text" v-model="contact" required>
		      	</div>
		    </div>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">反馈内容</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="feedback" type="text" v-model="feedback" required>
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
			contact:"",
			feedback:""
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
			if (this.contact && this.feedback) {
				request
					.post(self.url + '/feedbacks/')
					.set('Authorization',localStorage.str)
					.send({contact:self.contact,feedback:self.feedback})
					.set('Content-Type','application/json')
					.end(function(err,res){
						if (err) throw err;
						if (res.status == 201) {
							alert('success');
						}
						self.contact = ''
						self.feedback = ''
					})
				}
		}
	}
}
</script>
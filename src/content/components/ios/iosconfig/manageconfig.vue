<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">config</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="img" type="text" v-model="config" required>
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="upload">Upload<i class="icon-plus icon-white"></i></button>
	      <button class="btn btn-success" @click="update">Update<i class="icon-plus icon-white"></i></button>
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
			config:""
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		upload: function(e){
			e.preventDefault()
			var self =  this
			if (this.config) {
				var configjson = JSON.parse(this.config)
				request
					.post(self.url + '/push/register/')
					.set('Authorization',localStorage.str)
					.send({config:configjson})
					.set('Content-Type','application/json')
					.end(function(err,res){
						if (err) throw err;
						if (res.status == 201) {
							alert('upload success');
						}
						self.config = ''
					})
				}
		},
		upload: function(e){
			e.preventDefault()
			var self =  this
			if (this.config) {
				var configjson = JSON.parse(this.config)
				request
					.put(self.url + '/push/register/')
					.set('Authorization',localStorage.str)
					.send({config:configjson})
					.set('Content-Type','application/json')
					.end(function(err,res){
						if (err) throw err;
						if (res.status == 200) {
							alert('update success');
						}
						self.config = ''
					})
				}
		},		
	}
}
</script>
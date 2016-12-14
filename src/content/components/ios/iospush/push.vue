<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">title</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="title" type="text" v-model="title" required>
		      	</div>
		    </div>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">userinfo</label>
		      	<div class="controls">
		        	<textarea class="input-xlarge focused" id="userinfo" v-model="userinfo" required></textarea>
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="push">Push</button>
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
			title:"",
			userinfo:""
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		push: function(e){
			e.preventDefault()
			var self =  this
			if (this.title && this.userinfo) {
				var info = JSON.parse(this.userinfo)
				request
					.post(self.url + '/push/')
					.set('Authorization',localStorage.str)
					.send({title:self.title,userinfo:info})
					.set('Content-Type','application/json')
					.end(function(err,res){
						if (err) throw err;
						if (res.status == 201) {
							alert('上传成功');
						}
						self.title = ''
						self.userinfo = ''
					})
				}
		}
	}
}
</script>
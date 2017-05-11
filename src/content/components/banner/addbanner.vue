<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">图片外链</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="img" type="text" placeholder="图片外链" v-model="banimg" required>
		      	</div>
		    </div>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">指向链接</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="url" type="text" placeholder="url" v-model="banurl" required>
		      	</div>
		    </div>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">序号</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="num" type="text" placeholder="序号" v-model="bannum" required>
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success" @click="addbanner">Add New <i class="icon-plus icon-white"></i></button>
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
			banimg:"",
			banurl:"",
			bannum:""
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		addbanner: function(e){
			e.preventDefault()
			var self =  this
			if (this.banimg && this.banurl && this.bannum) {
				request
					.post(self.url + '/banner/')
					.set('Authorization',localStorage.str)
					.send({img:self.banimg,url:self.banurl,num:self.bannum})
					.set('Content-Type','application/json')
					.end(function(err,res){
						if (err) throw err;
						if (res.status == 201) {
							alert('上传成功');
						}
						self.banimg = ''
						self.banurl = ''
						self.bannum = ''
					})
				}
		}
	}
}
</script>
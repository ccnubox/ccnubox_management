<template>
<form class="form-horizontal">
  	<fieldset>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">产品名称</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="pname" type="text" value="">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">icon</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="picon" type="text" value="icon七牛外链">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">产品url</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="purl" type="text" value="">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">产品介绍</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="pintro" type="text" value="">
	      	</div>
	    </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-success" @click="addpatch">Add New <i class="icon-plus icon-white"></i></button>
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
			pname:'',
			picon:'',
			purl:'',
			pintro:''
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		addpatch: function(e){
			e.preventDefault()
			var self =  this
			request
				.put(self.url + '/product/')
				.set('Authorization',localStorage.str)
				.send({name:self.pname,icon:self.picon,url:self.purl,intro:self.pintro})
				.end(function(err,res){
					if (err) throw err;
					if (res.status == 200) {
						alert('success');
					}
					self.pname =''
					self.picon=''
					self.purl=''
					self.pintro=''
				})
		}
	}
}
</script>
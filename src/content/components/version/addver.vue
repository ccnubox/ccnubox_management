<template>
<form class="form-horizontal">
  	<fieldset>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">name</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="appname" type="text">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">version</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="appver" type="text" placeholder="v">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">下载地址</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="appdnl" type="text" placeholder="url">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">更新时间</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="appupdt" type="text" placeholder="2016-0802">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">更新说明</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="appintro" type="text" placeholder="更新了...">
	      	</div>
	    </div>
	    <div class="control-group">
	      	<label class="control-label" for="focusedInput">更新包大小</label>
	      	<div class="controls">
	        	<input class="input-xlarge focused" id="focusedInput" v-model="appsize" type="text" placeholder="M">
	      	</div>
	    </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-success" @click="addver">Add New <i class="icon-plus icon-white"></i></button>
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
			appname: '',
			appver: '',
			appdnl: '',
			appupdt: '',
			appintro: '',
			appsize: ''
		}
	},
	props: {
    	url: {
          	type: String
      	}
  	},
	methods:{
		addver: function(e){
			e.preventDefault()
			var self =  this
			request
				.post(self.url + '/app/')
				.set('Authorization',localStorage.str)
				.send({name:self.appname,version:self.appver,download:self.appdnl,update:self.appupdt,intro:self.appintro,size:self.appsize})
				.end(function(err,res){
					if (err) throw err;
					if (res.status == 201) {
						alert(res.body.msg);
					}
					self.appname = '',
					self.appver = '',
					self.appdnl = '',
					self.appupdt = '',
					self.appintro = '',
					self.appsize = ''
				})
		}
	}
}
</script>
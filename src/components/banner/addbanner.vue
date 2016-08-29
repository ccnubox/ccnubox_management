<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">七牛外链</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="img" type="text" value="url" v-model="img">
		      	</div>
		    </div>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">图片资源</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="url" type="text" value="url" v-model="url">
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
			img:'',
			url:''
		}
	},
	methods:{
		addbanner: function(){

		}
	}
}
</script>
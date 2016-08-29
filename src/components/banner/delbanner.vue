<template>
	<form class="form-horizontal" method="post">
	  	<fieldset>
		    <div class="control-group">
		      	<label class="control-label" for="focusedInput">name</label>
		      	<div class="controls">
		        	<input class="input-xlarge focused" id="name" type="text" value="url" v-model="del">
		      	</div>
		    </div>
	    </div>
	    <div class="form-actions">
	      <button class="btn btn-success">Delete</button>
	      <button type="reset" class="btn">Cancel</button>
	    </div>
	  </fieldset>
	</form>
</template>
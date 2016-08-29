<template>
<table class="table table-bordered" style="table-layout:fixed">
	<thead>
		<tr>
			<th width="20%"></th>
			<th width="80%">内容</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="(key,dataItem) of patches[0]">
			<td>{{ key }}</td>
			<td>{{ dataItem }}</td>
		</tr>
	</tbody>
</table>
</template>
<script>
export default {
  	props: {
    	patches: {
          	type: Array
      	}
  	}
}	
</script>
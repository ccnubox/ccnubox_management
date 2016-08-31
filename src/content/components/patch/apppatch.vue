<template>
<table class="table table-bordered" style="table-layout:fixed">
	<thead>
		<tr>
			<th width="20%"></th>
			<th width="80%">内容</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="(key,dataItem) of patches[$route.params.id]">
			<template v-if=" key == 'download' ">
				<td>{{ key }}</td>
				<td><a href="{{ dataItem }}">{{ dataItem }}</a></td>
			</template>
			<template v-if=" key != 'download' ">
				<td>{{ key }}</td>
				<td>{{ dataItem }}</td>
			</template>
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
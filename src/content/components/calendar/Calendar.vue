<template>
<div>
	<h1>校历</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/calendar/' ? 'active' : ''">
			<a v-link="{ path: '/calendar/'}">latest</a>
		</li>
		<li :class="currentPath == '/calendar/update' ? 'active' : ''">
			<a v-link="{ path: '/calendar/update'}">update</a>
		</li>
	</ul>
	<router-view :url="url"></router-view>
</div>
</template>
<script>
export default{
	props: {
    	url: {
          	type: String
      	}
  	}
}
</script>
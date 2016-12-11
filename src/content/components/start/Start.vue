<template>
<div>
	<h1>闪屏</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/start/' ? 'active' : ''">
			<a v-link="{ path: '/start/'}">latest</a>
		</li>
		<li :class="currentPath == '/start/update' ? 'active' : ''">
			<a v-link="{ path: '/start/update'}">update</a>
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
  	},
}
</script>
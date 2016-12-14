<template>
<div>
	<h1>ios</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/ios-config' ? 'active' : ''">
			<a v-link="{ path: '/ios-config/'}">iOS配置</a>
		</li>
		<li :class="currentPath == '/ios-config/manage' ? 'active' : ''">
			<a v-link="{ path: '/ios-config/manage'}">管理配置</a>
		</li>
	</ul>
	<router-view :url="url"></router-view>
</div>
</template>

<script>
export default {
  	props: {
    	url: {
          	type: String
      	}
  	}
}
</script>
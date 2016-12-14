<template>
<div>
	<h1>ios</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/ios-push' ? 'active' : ''">
			<a v-link="{ path: '/ios-push/'}">注册id</a>
		</li>
		<li :class="currentPath == '/ios-push/push' ? 'active' : ''">
			<a v-link="{ path: '/ios-push/push'}">推送信息</a>
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
<template>
<div>
	<h1>ios</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/ios' ? 'active' : ''">
			<a v-link="{ path: '/ios/'}">用户反馈</a>
		</li>
		<li :class="currentPath == '/ios/feedback' ? 'active' : ''">
			<a v-link="{ path: '/ios/feedback'}">ios推送</a>
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
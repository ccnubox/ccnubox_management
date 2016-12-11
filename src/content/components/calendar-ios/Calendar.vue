<template>
<div>
	<h1>校历 for ios</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/calendar-ios/' ? 'active' : ''">
			<a v-link="{ path: '/calendar-ios/'}">latest</a>
		</li>
		<li :class="currentPath == '/calendar-ios/update' ? 'active' : ''">
			<a v-link="{ path: '/calendar-ios/update'}">update</a>
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
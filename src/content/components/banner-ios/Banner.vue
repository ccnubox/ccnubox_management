<template>
<div>
	<h1>Banner for ios</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/banner-ios/' ? 'active' : ''">
			<a v-link="{ path: '/banner-ios/'}">Show</a>
		</li>
		<li :class="currentPath == '/banner-ios/delete' ? 'active' : ''">
			<a v-link="{ path: '/banner-ios/delete'}">Delete</a>
		</li>
		<li :class="currentPath == '/banner-ios/add' ? 'active' : ''">
			<a v-link="{ path: '/banner-ios/add'}">Add</a>
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
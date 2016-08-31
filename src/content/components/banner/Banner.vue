<template>
<div>
	<h1>Banner</h1>
</div>
<div>
	<ul class="nav nav-tabs">
		<li :class="currentPath == '/banner/' ? 'active' : ''">
			<a v-link="{ path: '/banner/'}">Show</a>
		</li>
		<li :class="currentPath == '/banner/delete' ? 'active' : ''">
			<a v-link="{ path: '/banner/delete'}">Delete</a>
		</li>
		<li :class="currentPath == '/banner/add' ? 'active' : ''">
			<a v-link="{ path: '/banner/add'}">Add</a>
		</li>
	</ul>
	<router-view></router-view>
</div>
</template>


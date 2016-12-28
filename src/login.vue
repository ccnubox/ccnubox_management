<template>
    <div class="container">
      <form class="form-signin" role="form">
        <h2 class="form-signin-heading">Please sign in</h2>
        <input type="email" class="form-control" v-model="email" placeholder="Email address" required>
        <input type="password" class="form-control" v-model="password" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
      </form>
    </div> 
</template>
<style>
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}
</style>

<script>
	var request = require('superagent')
export default {
	data(){
		return {
			email:'',
			password:''
		}
	},
	methods:{
		login: function(){
			if(this.email && this.password)	{
				var emtxt = this.email
				var pwtxt = this.password
				var str = emtxt+':'+pwtxt
				var encodestr = btoa(str)
				localStorage.str='Basic ' + encodestr
				console.log(localStorage.str)
				this.email = ''
				this.password = ''
				this.$router.go('/')
			}else {
				alert('please enter your account and password')
			}
		},
	}
}
</script>
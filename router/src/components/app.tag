<app>
	<ul class="nav nav-tabs">
		<li><a href='/'>Home</a></li>
		<li><a href='/about'>About</a></li>
		<li><a href='/settings'>Settings</a></li>
	</ul>

	<div class="container" id="page"></div>

	<style scoped>
		:scope { display: block }
		* {
			box-sizing: border-box;
		}
		.nav-tabs {
			border-bottom: 1px solid #ddd;
		}
		.nav {
			padding-left: 0;
			margin-bottom: 0;
			list-style: none;
		}
		.nav > li {
			padding: 10px;
			display: inline-block;
		}
		.nav > li:first-child {
			 padding-left: 0;
		 }
		.nav > li > a{
			text-decoration: none;
		}
		.nav > li > a:hover{
			color: lightgray;
		}
	</style>
</app>
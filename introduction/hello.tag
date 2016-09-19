<hello>
	<h3>{message}</h3>
	<ul if="people">
		<li each="{p,i in people}">
			{p.name}
			<button onclick="{removePeople}">Remove</button>
		</li>
	</ul>

	<input type="text" name="person" value="" onkeyup="{update}"/>
	<div>Hello {person.value}</div>

	<hr/>

	<button onclick="{addPeople}">Add</button>

	<script>
		this.message = 'Hello, Riot:';
		this.people = [
			{name: 'Filip'},
			{name: 'Marko'},
			{name: 'Vuk'}
		];

		this.addPeople = function (e) {
			this.people.push({name: this.person.value});
		};

		this.removePeople = function (e) {
			this.people.splice(e.item.i, 1);
		};

	</script>

	<style scoped>
		:scope {
			font-size: 2rem
		}

		h3 {
			color: #444
		}

		ul {
			color: #999
		}
	</style>
</hello>

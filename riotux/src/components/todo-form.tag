<riotux-todo>
	<h3>Riot flux todo list</h3>

	<label>Write task</label>

	<form onsubmit="{ addTask }">
		<input type="text" name="inputTask"/>

		<input type="submit" class="btn-gray" value="Add task"/>
	</form>

	<script>
		this.addTask = function () {
			riotux.action('tasks', 'add', this.inputTask.value)
		}
	</script>

	<style scoped>
		:scope {
			display: block;
		}

		:scope * {
			margin: 10px;
		}

		input.btn-gray {
			display: block;
			margin: 0 auto;
			background-color: #eeeeee;
		}
	</style>
</riotux-todo>
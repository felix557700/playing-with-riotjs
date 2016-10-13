<riotux-todo-list>
	<h3>
		<span style="position:relative">
			Here is the list
			<span class="badge">{ count }</span>
		</span>
	</h3>

	<ul class="scroll">
		<li each="{ task,i in tasks }" onclick="{ removeTask }" data-item-index="{i}" no-reorder="">#{ i+1 }: { task }</li>
	</ul>

	<script>
		this.tasks = []

		riotux.subscribe(this, 'tasks', (state, state_value) => {
			console.log(state, state_value)
			this.update()
		})

		this.removeTask = function(event) {
			riotux.action('tasks', 'remove', event.target.dataset.itemIndex)
		}

		this.on('update', () => {
			this.tasks = riotux.get('tasks')
			this.count = this.tasks.length
		})

		this.on('unmount', () => {
			riotux.unsubscribe(this)
		})
	</script>


	<style scoped>
		:scope {
			display: block
		}

		.badge {
			position: absolute;
			width: 1.6em;
			top: -10px;
			font-size: 15px;
			line-height: 1.6em;
			text-align: center;
			border-radius: 0.8em;
			background-color: #6495ed;
			color: white;
		}

		.scroll {
			max-height: calc(100vh - 146px);
			overflow: auto;
		}
	</style>
</riotux-todo-list>
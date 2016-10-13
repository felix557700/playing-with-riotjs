export default function createStores() {
	riotux.Store({
		state: {
			tasks: []
		},
		mutations: {
			addTask: function (state, task) {
				state.tasks.push(task)
			},
			removeTask: function (state, id) {
				state.tasks.splice(id, 1)
			}
		}
	})
}
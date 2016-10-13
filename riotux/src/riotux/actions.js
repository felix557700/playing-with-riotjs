export default function createActions() {
	riotux.Actions({
		add: function (store, task) {
			store.dispatch('addTask', task)
		},

		remove: function (store, id) {
			store.dispatch('removeTask', id)
		}
	})
}


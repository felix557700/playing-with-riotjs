import riot from 'riot'
import './components/todo-form.tag.tag'
import './components/todo-list.tag'
import createActions from './riotux/actions'
import createStores from './riotux/store'

function render() {
	riot.mount('*')
}

window.onload = function () {
	createActions()
	createStores()
	render()
}
import riot from 'riot'
import routes from './config/routes'
import './components/app.tag'
import './components/home.tag'
import './components/about.tag'
import './components/settings.tag'
import './components/page404.tag'

const MAIN_ID = '#page'

riot.mount('app')

routes.forEach(route => {
	riot.route(route.url, () => riot.mount(MAIN_ID, route.tag))
})

riot.route.base('/')
riot.route.start(true)

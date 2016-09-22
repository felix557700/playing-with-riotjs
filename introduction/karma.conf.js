module.exports = function (config) {
	config.set({
		basePath: '',

		frameworks: ['mocha', 'chai', 'riot'],

		plugins: [
			'karma-mocha',
			'karma-mocha-reporter',
			'karma-phantomjs-launcher',
			'karma-chai',
			'karma-riot',
			'karma-coverage'
		],
		files: [
			'node_modules/chai/chai.js',
			'*.tag',
			'test/**/*.js'
		],
		exclude: [],

		preprocessors: {
			'**/*.tag': ['riot', 'coverage']
		},

		port: 9876,
		colors: true,

		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		reporters: ['mocha', 'coverage'],

		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{ type: 'text' },
				{
					type: 'html',
					subdir: '.'
				}
			]
		},

		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false,
		concurrency: Infinity
	})
};

'use strict';

let path		= require('path'),
	argv		= require('yargs').argv;
	
let app = {
	module: {
		app: '[app/**/*.js]',
		template: 'app:templates - angular',
		vendor: 'app/app.module.js - [app/**/*.js] - app:templates - app:styles-adapter + angular + bootstrap',
		style: 'app:styles-adapter - bootstrap'
	},
	envs: {
		dev: 'dev',
		prod: 'prod'
	}
};

let build = {
	environment: argv.env || 'dev',
	app: argv.app || argv.dev || false,
	vendor: argv.vendor || argv.dev || false,
	templates: argv.templates || argv.dev || false,
	styles: argv.styles || argv.dev || false,
};

let dir = {
	public: './public/',
    vendor: ['./node_modules/', './jspm_packages/'],
	src: './src/',
    js: './src/js/',
	app: './src/js/app/',
	styles: './src/css/',
    img: './src/img/',
	jspm_packages: './jspm_packages/',
    templates: './templates/'
};

let file = {
	bundle: {
		app: 'app.js',
		vendor: 'vendor.js',
		template: 'templates.js',
		style: 'styles.js'
	},
    import: 'import.js',
    manifest: './manifest.json',
	systemJs: {
		systemJs: 'system.js',
		config: 'config.js'
	},
	index: 'index.html',
	icon: 'icon.png'
};

let setting = {
	templateCache: {
		module: 'app.templates',
		moduleSystem: 'ES6',
		standalone: true
	},
	htmlMin: {
		removeComments: true,
        collapseWhitespace: true,
        removeTagWhitespace: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
	},
	ngAnnotate: {
		remove: true,
		add: true,
		single_quotes: true
	},
	sourceMaps: { 
		init: {
			loadMaps: true,
			debug: false
		},
		write: {
			includeContent: true,
			debug: true
		}
	},
	bundleOptions: {
		minify: false, 
		sourceMaps: 'inline'
	}
};

module.exports = {
	app: app,
	dir: dir,
	file: file,
	setting: setting,
	build: build
};
'use strict';

let path		= require('path'),
	argv		= require('yargs').argv,
    
    DevBuilder		= require('jspm-dev-builder'),
	jspm			= require('jspm');
	
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
    root: './',
	public: {
        root: './public/',
        js: './public/js/',
        css: './public/css/',
        ext: './public/ext/',
        jsonTemplates: './jsonTemplates/'
    },
    vendor: {
        jspm_packages: './jspm_packages/',
        node_modules: './node_modules/',
    },
	src: {
        root: './src/',
        js: './src/js/',
        app: './src/js/app/',
        styles: './src/css/',
        img: './src/img/',
        jsonTemplates: './src/jsonTemplates/'
    },
    ext: {
        root: './ext/'
    }
};

let file = {
	bundle: {
		app: 'app.js',
		vendor: 'vendor.js',
		template: 'templates.js',
		style: 'styles.js'
	},
	systemJs: {
		systemJs: 'system.js',
		config: 'config.js',
        import: 'import.js'
	},
    ext: {
        icon: 'icon.png'
    },
    manifest: 'manifest.json',
	index: 'index.html'
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

let builder = {
    app: new DevBuilder({
			jspm: jspm, // so you can use your local version of jspm
			expression: app.module.app, // path to your app's entry point
			outLoc: dir.public.js + file.bundle.app, // where you want the output file
			logPrefix: 'jspm-app', // put at the beginning of log messages from dev builder
			buildOptions: setting.bundleOptions
    }),
    vendor: new DevBuilder({
        jspm: jspm, // so you can use your local version of jspm
        expression: app.module.vendor, // path to your app's entry point
        outLoc: dir.public.js + file.bundle.vendor, // where you want the output file
        logPrefix: 'jspm-vendor', // put at the beginning of log messages from dev builder
        buildOptions: setting.bundleOptions
    }),
    templates: {},
    styles: {},
}

module.exports = {
	app: app,
	dir: dir,
	file: file,
	setting: setting,
	build: build,
    builder: builder
};
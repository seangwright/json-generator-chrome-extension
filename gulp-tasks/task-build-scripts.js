'use strict';

let gulp 			= require('gulp'),
	Builder			= require('systemjs-builder'),
    runSequence     = require('run-sequence'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	utils			= require('./build-utils'),
	log				= require('./build-utils').log,
	errorHandler	= require('./build-utils').errorHandler,
	config			= require('./build-config');
	
module.exports = {
	scriptsAnnotate: scriptsAnnotate
}
	
gulp.task('build-scripts', ['build-scripts:templates'], function (done) {
	log('Building scripts ...');
    
    runSequence(
		['build-scripts:app', 'build-scripts:vendor'],
		done);
});

gulp.task('build-scripts:app', ['build-scripts:ng-annotate'], function (done) {
	return done();
});

gulp.task('build-scripts:vendor', ['build-scripts:bundle-vendor'], function (done) {
	return done();
});

gulp.task('build-scripts:templates', ['build-scripts:bundle-template'], function (done) {
	return done();
});

gulp.task('build-scripts:ng-annotate', ['build-scripts:bundle-app'], function () {
	scriptsAnnotate();
});

function scriptsAnnotate() {
	log(`Angular-annotating ${config.file.bundle.app} in ${config.dir.public.js}`);
	
	return gulp.src(config.dir.public.js + config.file.bundle.app)
	
	.pipe($.plumber({ handleError: errorHandler }))
	.pipe($.if(utils.buildDev(), $.sourcemaps.init(config.setting.sourceMaps.init)))
	.pipe($.ngAnnotate(config.setting.ngAnnotate))
	.pipe($.if(utils.buildDev(), $.sourcemaps.write(config.setting.sourceMaps.write)))
	
	.pipe(gulp.dest(config.dir.public.js));
}

gulp.task('build-scripts:bundle-app', [], function () {
	if (utils.bundleApp()) {
		log(`Starting bundling of ${config.file.bundle.app} into ${config.dir.public.js}`);
		let builder = new Builder('/', './config.js');
		
		return builder.bundle(
			config.app.module.app, 
			config.dir.public.js + config.file.bundle.app, 
			config.setting.bundleOptions)
			
			.then(function () {
				log(`Completed bundle ${config.file.bundle.app} in ${config.dir.public.js}`);
				return;
			})
			
			.catch(function (err) {
				log(`Error : ${err}`);
			});
	}
});

gulp.task('build-scripts:bundle-vendor', ['build-scripts:templates'], function () {
	if (utils.bundleVendor()) {
		log(`Starting bundling of ${config.file.bundle.vendor} in ${config.dir.public.js}`);
		let builder = new Builder('/', './config.js');
		
		return builder.bundle(
			config.app.module.vendor, 
			config.dir.public.js + config.file.bundle.vendor, 
			config.setting.bundleOptions)
			
			.then(function () {
				log(`Completed bundle ${config.file.bundle.vendor} in ${config.dir.public.js}`);
				return;
			})
			
			.catch(function (err) {
				log(`Error : ${err}`);
			});
	}
});

gulp.task('build-scripts:bundle-template', ['build-scripts:template-cache'], function () {
	if (utils.bundleTemplates()) {
		log(`Starting bundling of ${config.file.bundle.template} in ${config.dir.public.js}`);
		let builder = new Builder('/', './config.js');
		
		return builder.bundle(
			config.app.module.template, 
			config.dir.public.js + config.file.bundle.template, 
			{ minify: true, sourceMaps: false })
			
			.then(function () {
				log(`Completed bundle ${config.file.bundle.template} in ${config.dir.public.js}`);
				return;
			})
			
			.catch(function (err) {
				log(`Error : ${err}`);
			});
	}
});

gulp.task('build-scripts:template-cache', [], function () {
	if (utils.bundleTemplates()) {
		log(`Building template cache into angular module ${config.file.bundle.template} in ${config.dir.public.js}`);
		
		return gulp.src(`${config.dir.src.app}**/*.html`)
		
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe($.htmlmin(config.setting.htmlMin))
		.pipe($.angularTemplatecache(config.file.bundle.template, config.setting.templateCache))
		
		.pipe(gulp.dest(config.dir.public.js));
	}
});
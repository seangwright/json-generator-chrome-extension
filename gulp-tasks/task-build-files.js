'use strict';

let gulp			= require('gulp'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	log				= require('./build-utils').log,
	errorHandler	= require('./build-utils').errorHandler,
	utils			= require('./build-utils'),
	config			= require('./build-config');
	
gulp.task('build-files', [
        'build-files:index',  
        'build-files:systemJs',
        'build-files:manifest',
        'build-files:ext',
        'build-files:json-templates'], function (done) {
	return done();
});

gulp.task('build-files:index', [], function () {
	log(`Copying ${config.file.index} to ${config.dir.public.root}`);
	
	return gulp.src([config.dir.src.root + config.file.index])
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public.root));
});

gulp.task('build-files:systemJs', [], function () {
	log(`Copying ${Object.keys(config.file.systemJs).join(', ')} to ${config.dir.public.js}`);
	
	return gulp.src([
        config.dir.root + config.file.systemJs.config,
        config.dir.vendor.jspm_packages + config.file.systemJs.systemJs,
        config.dir.src.js + config.file.systemJs.import])
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public.js));
});

gulp.task('build-files:manifest', [], function () {
    log(`Copying ${config.file.manifest} to ${config.dir.public.root}`);
	
	return gulp.src([config.dir.root + config.file.manifest])
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public.root));
});

gulp.task('build-files:ext', [], function () {
    log(`Copying ${Object.keys(config.file.ext).join(',')} to ${config.dir.public.ext}`);
	
	return gulp.src([`${config.dir.ext.root}**/*`])
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public.ext));
});

gulp.task('build-files:json-templates', function () {
    log(`Copying json templates to ${config.dir.public.jsonTemplates}`);
    
    return gulp.src(`${config.dir.src.jsonTemplates}**/*`)
    
        .pipe($.plumber({ handleError: errorHandler }))
        .pipe(gulp.dest(config.dir.public.jsonTemplates));
});
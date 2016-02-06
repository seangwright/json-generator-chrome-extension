'use strict';

let gulp			= require('gulp'),
	$				= require('gulp-load-plugins')({ lazy: true }),
	
	log				= require('./build-utils').log,
	errorHandler	= require('./build-utils').errorHandler,
	utils			= require('./build-utils'),
	config			= require('./build-config');
	
gulp.task('build-files', ['build-files:index', 
        'build-files:config', 
        'build-files:systemjs',
        'build-files:manifest', 
        'build-files:import',
        'build-files:json-templates',
        'build-files:icon'], function (done) {
	return done();
});

gulp.task('build-files:index', [], function () {
	log(`Copying ${config.file.index} to ${config.dir.public}`);
	
	return gulp.src(config.dir.src + config.file.index)
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-files:config', [], function () {
	log(`Copying ${config.file.systemJs.config} to ${config.dir.public}`);
	
	return gulp.src(config.file.systemJs.config)
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-files:systemjs', [], function () {
    log(`Copying ${config.file.systemJs.systemJs} to ${config.dir.public}`);
	
	return gulp.src(config.dir.jspm_packages + config.file.systemJs.systemJs)
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-files:manifest', [], function () {
    log(`Copying ${config.file.manifest} to ${config.dir.public}`);
	
	return gulp.src(config.file.manifest)
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-files:import', [], function () {
    log(`Copying ${config.file.import} to ${config.dir.public}`);
	
	return gulp.src(config.dir.js + config.file.import)
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public));
});

gulp.task('build-files:json-templates', function () {
    log(`Copying json templates to ${config.dir.public}templates/`);
    
    return gulp.src(`${config.dir.templates}*.json`)
    
        .pipe($.plumber({ handleError: errorHandler }))
        .pipe(gulp.dest(`${config.dir.public}templates/`));
});

gulp.task('build-files:icon', [], function () {
    log(`Copying ${config.file.icon} to ${config.dir.public}`);
	
	return gulp.src(config.dir.img + config.file.icon)
	
		.pipe($.plumber({ handleError: errorHandler }))
		.pipe(gulp.dest(config.dir.public));
});
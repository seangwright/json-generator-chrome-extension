'use strict';

let gulp			= require('gulp'),
	$				= require('gulp-load-plugins')({ lazy: true }),

	config			= require('./build-config'),
	buildScripts	= require('./task-build-scripts'),
	utils				= require('./build-utils');

gulp.task('build-watch', [], function () {
	if (utils.bundleApp()) {
		utils.log(`Watching ${config.dir.src.app}**/*.js'`);
		let appBuilder = config.builder.app;
        
		$.watch(config.dir.src.app + '**/*.js', function (vinyl) {
			appBuilder.build(`${config.dir.src.app}${vinyl.relative}`)
				.then(function success(builder) {
					buildScripts.scriptsAnnotate();
				});
		});
	}
	
	if (utils.bundleVendor()) {
		utils.log(`Watching ${config.dir.vendor.jspm_packages}**/*.js'`);
		let vendorBuilder = config.builder.vendor;
        
		$.watch(config.dir.vendor.jspm_packages + '**/*.js', function (vinyl) {
			vendorBuilder.build(`${config.dir.jspm_packages}${vinyl.relative}`)
				.then(function success(builder) {
				});
		});
	}

	if (utils.bundleStyles()) {
		utils.log(`Watching ${config.dir.src.styles}**/*.css'`);
		gulp.watch(config.dir.styles + '**/*.css', ['build-styles']);
	}
	
	if (utils.bundleTemplates()) {
		utils.log(`Watching ${config.dir.src.app}**/*.html'`);
		gulp.watch(config.dir.src.app + '**/*.html', ['build-scripts:templates']);
	}
	
	if (utils.buildDev()) {
		utils.log(`Watching files`);
		gulp.watch([
        config.dir.src.root + config.file.index,
        config.dir.root + config.file.systemJs.config,
        config.dir.vendor.jspm_packages + config.file.systemJs.systemJs,
        config.dir.src.js + config.file.systemJs.import,
        config.dir.root + config.file.manifest,
        `${config.dir.ext.root}**/*`], ['build-files']);
	}
});
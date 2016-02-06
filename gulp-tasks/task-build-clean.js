'use strict';

let gulp		= require('gulp'),

	clean		= require('./build-utils').clean,
	log			= require('./build-utils').log,
	config		= require('./build-config');
	
gulp.task('build-clean', [], function (done) {
    log('Cleaning ...');
    
    return clean(config.dir.public, done);
});

gulp.task('build-clean:scripts', [], function (done) {
	log(`Cleaning scripts from ${config.dir.public}`);
	
	return clean(config.dir.public + '*.js', done);
});

gulp.task('build-clean:files', ['build-clean:index', 'build-clean:icon'], function (done) {
	log(`Cleaning files from ${config.dir.public}`);
	
	return done();
});

gulp.task('build-clean:index', [], function (done) {
	return clean(config.dir.public + config.file.index);
});

gulp.task('build-clean:icon', [], function(done) {
	return clean(config.dir.public + config.file.icon);
});
'use strict';

let gulp		= require('gulp'),

	clean		= require('./build-utils').clean,
	log			= require('./build-utils').log,
	config		= require('./build-config');
	
gulp.task('build-clean', [], function (done) {
    log('Cleaning ...');
    
    return clean(`${config.dir.public.root}**/*`, done);
});
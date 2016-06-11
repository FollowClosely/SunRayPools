'use strict';

var gulp        = require('gulp'),
		browserSync = require('browser-sync'),
			reload    = browserSync.reload,
		concat      = require('gulp-concat'),
		config      = require('./gulp.config'),
		declare     = require('gulp-declare'),
		del         = require('del'),
		handlebars  = require('gulp-handlebars'),
		imgMin      = require('gulp-imagemin'),
		prefixer    = require('gulp-autoprefixer'),
		rename      = require('gulp-rename'),
		sass        = require('gulp-sass'),
		sourcemaps  = require('gulp-sourcemaps'),
		stream      = require('vinyl-source-stream'),
		taskListing = require('gulp-task-listing'),
		util        = require('gulp-util'),
		wrap        = require('gulp-wrap');

gulp.task('default', ['watch', 'serve'], function() {
	console.log('gulp gulp gulp');
});

gulp.task('help', taskListing);

gulp.task('clean', function(){
	var files = config.buildDir;
	clean(files);
});

gulp.task('styles', function(){
	return gulp.src(config.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefixer({ browsers: ['last 2 version', '> 5%' ]}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.styles.dest))
		.pipe(reload({stream: true}));
});
gulp.task('clean-styles', function(){
	var files = config.styles.dest;
	clean(files);
});

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.dest))
		.pipe(reload({stream: true}));
});
gulp.task('clean-scripts', function(){
	var files = config.scripts.dest;
	clean(files);
});

gulp.task('html', function(){
	return gulp.src(config.html.src)
		.pipe(gulp.dest(config.html.dest))
		.pipe(reload({stream: true}));
});

gulp.task('templates', function(){
  gulp.src(config.views.src)
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true
    }))
    // .pipe(concat('templates.js'))
    .pipe(gulp.dest(config.views.dest));
});


gulp.task('fonts', function(){
	return gulp.src(config.fonts.src)
		.pipe(gulp.dest(config.fonts.dest))
		.pipe(reload({stream: true}));
});

gulp.task('lib', function(){
	return gulp.src(config.lib.src)
		.pipe(gulp.dest(config.lib.dest))
		.pipe(reload({stream: true}));
});

gulp.task('images', function() {
	return gulp.src(config.images.src)
		.pipe(imgMin({optimizationLevel: 5}))
		.pipe(gulp.dest(config.images.dest))
		.pipe(reload({stream: true}));
});

gulp.task('watch', [
	'styles', 'scripts', 'html', 'templates'
],
	function() {
		gulp.watch(config.styles.src, ['styles']);
		gulp.watch(config.scripts.src, ['scripts']);
		gulp.watch(config.html.src, ['html']);
		gulp.watch(config.views.src, ['templates']);
});
gulp.task('watch-all', [
	'styles', 'scripts', 'html', 'templates', 'lib', 'fonts', 'images', 'serve'
],
	function() {
		gulp.watch(config.styles.src, ['styles']);
		gulp.watch(config.scripts.src, ['scripts']);
		gulp.watch(config.html.src, ['html']);
		gulp.watch(config.views.src, ['templates']);
		gulp.watch(config.fonts.src, ['fonts']);
		gulp.watch(config.lib.src, ['lib']);
		gulp.watch(config.images.src, ['images']);
});

gulp.task('serve', function(){
	browserSync({
		server: './build'
	});
});

// =============================== //
// ========== FUNCTIONS ========== //
// =============================== //
function log(msg){
	if(typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				util.log(util.colors.blue(msg[item]));
			}
		}
	} else {
		util.log(util.colors.blue(msg));
	}
}

function clean(path) {
	log('Cleaning: ' + util.colors.blue(path));
	del(path);
}










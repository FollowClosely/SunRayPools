'use strict';

var gulp        = require('gulp'),
		browserSync = require('browser-sync'),
		rename      = require('gulp-rename'),
		sourcemaps  = require('gulp-sourcemaps'),
		stream      = require('vinyl-source-stream'),
		rename      = require('gulp-rename'),
		sass        = require('gulp-sass'),
		gutil       = require('gulp-util'),
		reload      = browserSync.reload;

var config = {
	browserPort: 3000,
	UIPort: 3001,
	sourceDir: './app/',
	buildDir: './build/',
	scripts: {
		src: 'app/assets/js/**/*.js',
		dest: 'build/assets/js'
	},
	styles: {
		src: 'app/assets/sass/**/*.scss',
		dest: 'build/assets/css'
	},
	html: {
		src: 'app/index.html',
		dest: 'build/',
		viewsSrc: 'app/views/**/*.html',
		viewsDest: 'build/views/'
	},
	lib: {
		src: 'app/assets/lib/**/*',
		dest: 'build/assets/lib'
	},
	images: {
		src: 'app/assets/images/**/*',
		dest: 'build/assets/images'
	},
	fonts: {
		src: ['app/assets/fonts/**/*'],
		dest: 'build/assets/fonts'
	}
};


gulp.task('default', ['watch', 'serve'], function() {
	console.log('gulp gulp gulp');
});

gulp.task('styles', function(){
	return gulp.src(config.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.styles.dest))
		.pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.dest))
		.pipe(reload({stream: true}));
});

gulp.task('html', function(){
	return gulp.src(config.html.src)
		.pipe(gulp.dest(config.html.dest))
		.pipe(reload({stream: true}));
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
		.pipe(gulp.dest(config.images.dest))
		.pipe(reload({stream: true}));
});

gulp.task('watch', [
	'styles', 'scripts', 'html', 'fonts', 'lib', 'images'
],
	function() {
		gulp.watch(config.styles.src, ['styles']);
		gulp.watch(config.scripts.src, ['scripts']);
		gulp.watch(config.html.src, ['html']);
		gulp.watch(config.fonts.src, ['fonts']);
		gulp.watch(config.lib.src, ['lib']);
		gulp.watch(config.images.src, ['images']);
});

gulp.task('serve', function(){

	browserSync({
		server: './build'
	});

});









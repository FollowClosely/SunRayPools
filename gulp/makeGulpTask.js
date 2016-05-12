(function makeGulpTask (task) {
	return gulp.task(task, function (){
		return gulp.src(config + '.' + task + '.' + src)
			.pipe(gulp.dest(config + '.' + task + '.' + dest));
	});
})();
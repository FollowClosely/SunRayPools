
var config = {
	browserPort: 3000,
	UIPort: 3001,
	sourceDir: './app/',
	buildDir: './build/',
	scripts: {
		src: 'app/assets/js/**/*',
		dest: 'build/assets/js'
	},
	styles: {
		src: 'app/assets/sass/**/*.scss',
		dest: 'build/assets/css'
	},
	html: {
		src: ['app/index.html', 'app/views/**/*.html'],
		dest: 'build/'
	},
	views: {
		src: 'app/views/**/*.hbs',
		dest: 'build/'
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

module.exports = config;
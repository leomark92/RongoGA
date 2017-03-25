var gulp        = require('gulp'),
    concatCss   = require('gulp-concat-css'),
    rename      = require('gulp-rename'),
    notify      = require('gulp-notify'),
    browserSync = require('browser-sync');
    cleanCSS    = require('gulp-clean-css');

    const autoprefixer = require('gulp-autoprefixer');



    
// css
gulp.task('css', function () {
   gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
     .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
    .pipe(cleanCSS(''))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(notify('Thousand Oaks!'));
   
});

//html

gulp.task('html', function () {
	gulp.src('app/index.html')
	.pipe(browserSync.reload({stream: true}));
})




//brs
gulp.task('browser', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false

	});
});


//default
gulp.task('default', ['browser', 'css', 'html', 'watch']);

//watch
gulp.task('watch', ['browser', 'css', 'html'], function () {
	gulp.watch('css/*.css', ['css'])
	gulp.watch('app/index.html', ['html'])
});

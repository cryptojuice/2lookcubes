var gulp            = require('gulp');
var templateCache   = require('gulp-angular-templatecache');
var concat          = require('gulp-concat');
var rev             = require('gulp-rev');
var inject          = require('gulp-inject');
var sass            = require('gulp-sass');
var manifest        = require('./manifest');
var del             = require('del');
var path            = require('path');

var buildDir = path.resolve(manifest.buildDir);

gulp.task('clean:build', function() {
  del([buildDir + '**/*'], function() {});
});

gulp.task('build:templatecache', ['clean:build'], function() {
  return gulp.src(manifest.appTemplates)
    .pipe(templateCache({ module: 'cubeApp' }))
    .pipe(rev())
    .pipe(gulp.dest(buildDir));
});

gulp.task('build:appjs', ['clean:build'], function() {
  return gulp.src(manifest.appJS)
    .pipe(concat('app.js'))
    .pipe(rev())
    .pipe(gulp.dest(buildDir));
});

gulp.task('build:appcss', ['clean:build'], function() {
  return gulp.src(manifest.appCSS)
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(rev())
    .pipe(gulp.dest(buildDir));
});

gulp.task('build:appimages', ['clean:build'], function() {
  return gulp.src(manifest.appImages)
    .pipe(gulp.dest(buildDir + '/images'));
});

gulp.task('build:vendorjs', ['clean:build'], function() {
  return gulp.src(manifest.vendorJS)
    .pipe(concat('vendor.js'))
    .pipe(rev())
    .pipe(gulp.dest(buildDir));
});

gulp.task('build:vendorcss', ['clean:build'], function() {
  return gulp.src(manifest.vendorCSS)
    .pipe(sass())
    .pipe(concat('vendor.css'))
    .pipe(rev())
    .pipe(gulp.dest(buildDir));
});

gulp.task('build:inject', ['build:appimages', 'build:templatecache', 'build:appjs', 'build:appcss', 'build:vendorjs', 'build:vendorcss'], function() {
  return gulp.src(manifest.appIndex)
    .pipe(inject(gulp.src(buildDir + '/vendor*.js', { read: false }), { name: 'vendorjs', ignorePath: 'public' }))
    .pipe(inject(gulp.src(buildDir + '/app*.js', { read: false }), { name: 'appjs', ignorePath: 'public' }))
    .pipe(inject(gulp.src(buildDir + '/templates*.js', { read: false }), { name: 'templates', ignorePath: 'public' }))
    .pipe(inject(gulp.src(buildDir + '/vendor*.css', { read: false }), { name: 'vendorcss', ignorePath: 'public' }))
    .pipe(inject(gulp.src(buildDir + '/styles*.css', { read: false }), { name: 'appcss', ignorePath: 'public' }))
    .pipe(gulp.dest(buildDir));
});

gulp.task('build', ['build:inject']);

gulp.task('watch', ['build:inject'], function() {
  directories = [].concat(manifest.appIndex, manifest.appJS, manifest.appCSS, manifest.appTemplates).map(function(myPath) {
    return path.dirname(myPath);
  });
  gulp.watch(directories, ['build:inject']);
});

gulp.task('default', ['build']);

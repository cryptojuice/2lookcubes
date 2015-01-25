var gulp            = require('gulp');
var templateCache   = require('gulp-angular-templatecache');
var concat          = require('gulp-concat');
var rev             = require('gulp-rev');
var inject          = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var manifest        = require('./manifest');
var del             = require('del');
var path            = require('path');

var buildDir = path.resolve(manifest.buildDir);

gulp.task('clean:build', function() {
  del([buildDir + '**/*'], function() {});
});

gulp.task('build:templatecache', ['clean:build'], function() {
  return gulp.src(manifest.appTemplates)
    .pipe(templateCache())
    .pipe(rev())
    .pipe(gulp.dest(buildDir));
});

gulp.task('build:appjs', ['clean:build'], function() {
  return gulp.src(manifest.appJS)
    .pipe(angularFilesort())
    .pipe(concat('app.js'))
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

gulp.task('build:inject', ['build:templatecache', 'build:appjs', 'build:vendorjs',], function() {
  return gulp.src(manifest.appIndex)
    .pipe(inject(gulp.src(buildDir + '/vendor*.js', { read: false }), { name: 'vendorjs', ignorePath: 'public' }))
    .pipe(inject(gulp.src(buildDir + '/app*.js', { read: false }), { name: 'appjs', ignorePath: 'public' }))
    .pipe(gulp.dest(buildDir));
});

gulp.task('build', ['build:appimages', 'build:inject'], function() {
});

gulp.task('watch', function() {
  gulp.watch(manifest.appIndex, ['build:inject'])
  gulp.watch(manifest.appJS, ['build:inject'])
  gulp.watch(manifest.appTemplates, ['build:inject'])
});

gulp.task('default', ['build']);

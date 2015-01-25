var vendorJS = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/modernizr/modernizr.js',
  'bower_components/foundation/js/foundation.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js'
];

var vendorCSS = [
  'bower_components/foundation/scss/normalize.scss',
];

var appIndex = 'app/index.html';
var appTemplates = ['app/**/*.template.html'];
var appJS = ['app/**/*.js'];
var appImages = ['app/images/**/*'];
var appCSS = ['app/scss/**/*'];


var buildDir = './public';

module.exports = {
  vendorJS: vendorJS,
  vendorCSS: vendorCSS,
  appIndex: appIndex,
  appTemplates: appTemplates,
  appJS: appJS,
  appImages: appImages,
  appCSS: appCSS,
  buildDir: buildDir
};

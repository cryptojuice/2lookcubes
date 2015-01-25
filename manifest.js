var appIndex = 'app/index.html';
var appTemplates = ['app/**/*.template.html'];
var appJS = ['app/**/*.js'];
var appImages = ['app/images/**/*'];

var vendorJS = [
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js'
];

var buildDir = './public';

module.exports = {
  appIndex: appIndex,
  appTemplates: appTemplates,
  appJS: appJS,
  appImages: appImages,
  vendorJS: vendorJS,
  buildDir: buildDir
};

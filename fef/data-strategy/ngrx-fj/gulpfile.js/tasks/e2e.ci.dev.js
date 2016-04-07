var gulp = require('gulp'),
  exec = require('child_process').exec,
  concurrent = require('../utils/concurrent-dependent-process');

gulp.task('e2e:ci:dev', function () {
  concurrent('gulp serve:raw', 'gulp e2e:dev');
});
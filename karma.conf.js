module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};

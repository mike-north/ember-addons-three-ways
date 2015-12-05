/* jshint node: true */
'use strict';

var Filter = require('broccoli-filter');
var fileSize = require('broccoli-file-size');

FileSizePlugin.prototype = Object.create(Filter.prototype);

FileSizePlugin.prototype.constructor = FileSizePlugin;
function FileSizePlugin() {
  Filter.call(this, '', {});
}

FileSizePlugin.prototype.toTree = function(
  tree, inputPath, outputPath, inputOptions
) {
  return fileSize(tree, {
    colors: true
  });
};

module.exports = {
  name: 'ember-js-filesize',
  included: function(app, parentAddon) {
    (parentAddon || app)
      .registry
      .add('js', new FileSizePlugin());
  }
};

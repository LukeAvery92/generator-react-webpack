'use strict';
let generator = require('yeoman-generator');
let utils = require('../../utils/all');

module.exports = generator.Base.extend({

  constructor: function() {
    generator.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    this.option('stateless', {
      desc: 'Create a stateless component instead of a full one',
      defaults: false
    });
  },

  writing: function() {

    let settings = utils.yeoman.getAllSettingsFromComponentName(this.name, this.config.get('style'));
    let componentType = this.options.stateless ? 'Stateless' : 'Base';

    // Create the style template
    this.fs.copyTpl(
      this.templatePath(`styles/Component${settings.style.suffix}`),
      this.destinationPath(settings.component.path + settings.component.folderName + settings.style.fileName),
      settings
    );

    // Create the component
    this.fs.copyTpl(
      this.templatePath(`components/${componentType}.js`),
      this.destinationPath(settings.component.path + settings.component.folderName + settings.component.fileName),
      settings
    );

    // Create the unit test
    this.fs.copyTpl(
      this.templatePath('tests/Base.js'),
      this.destinationPath(settings.component.path + settings.component.folderName  + settings.test.fileName),
      settings
    );

    this.fs.copyTpl(
      this.templatePath('package/Base.js'),
      this.destinationPath(settings.component.path + settings.component.folderName  + settings.packageFile.fileName),
      settings
    );
  }
});

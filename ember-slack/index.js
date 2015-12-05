/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-slack',
  includedCommands: function() {
    return {
      slack: {
        name: 'slack',
        description: 'Send a slack message',
        works: 'insideProject',

        anonymousOptions: [
          '<message>'
        ],

        availableOptions: [
          {
            name: 'channel',
            type: String,
            default: 'general'
          }
        ],

        run: function(commandOptions, rawArgs) {
          var channel = commandOptions.channel;
          var message = rawArgs[0];
          console.log("----------------------\n" +
            "#" + channel + ":\t" + message);
        }
      }
    }
  }
};

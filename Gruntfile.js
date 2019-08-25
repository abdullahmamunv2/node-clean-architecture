const path = require('path');
module.exports = function(grunt) {
  
    grunt.initConfig({
        copy: {
            development: {
              files: [
                {
                    src: [
                        'config/default.json',
                        'config/custom-environment-variables.json',
                        'config/development.json'
                    ], 
                    dest: 'dist/development/',
                    expand: true
                },
                {
                    src: [
                        'package.json',
                        'module.alias.config.js',
                        'docker/dev/DockerFile'
                    ], 
                    dest: 'dist/development/',
                    expand: true,
                    flatten: true
                },
              ],
            },
            staging: {
                files: [
                  {
                      src: [
                          'config/default.json',
                          'config/custom-environment-variables.json',
                          'config/staging.json'
                      ], 
                      dest: 'dist/staging/',
                      expand: true
                  },
                  {
                      src: [
                          'package.json',
                          'module.alias.config.js'
                      ], 
                      dest: 'dist/staging/',
                      expand: true
                  },
                ],
            },
            production: {
                files: [
                  {
                      src: [
                          'config/default.json',
                          'config/custom-environment-variables.json',
                          'config/production.json'
                      ], 
                      dest: 'dist/production/',
                      expand: true
                  },
                  {
                      src: [
                          'package.json',
                          'module.alias.config.js'
                      ], 
                      dest: 'dist/production/',
                      expand: true
                  },
                ],
            },
          }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('dev', ["copy:development"]);
  };
module.exports = function(grunt) {
 require('jit-grunt')(grunt);

 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['main.scss'],
          dest: './build/css',
          ext: '.css'
        }],
        options: {
          style: 'compressed'
        }
      },
    },

    watch: {
      sass: {
        files: ['src/css/**/*.scss', '!build/*'],
        tasks: ['sass:target']
      },
    },
  });
  grunt.registerTask('default', ['watch']);
};
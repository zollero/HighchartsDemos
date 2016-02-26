//grunt settings
module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            build: ['Gruntfile.js', 'js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            build: {
                files: ['js/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'watch']);
};
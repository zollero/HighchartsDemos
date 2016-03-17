//grunt settings
module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            build: ['Gruntfile.js', './DPCharts/DPCharts.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            options: {
                banner: '/*! DPCharts v0.0.1 | @277651 */\n'
            },
            build: {
                files: [{
                    expand: true,
                    src: './DPCharts/*.js',
                    dest: './DPCharts',
                    rename: function(dest, src) {
                        var fileName = src.substring(src.lastIndexOf('/'), src.length);
                        fileName = fileName.substring(0, fileName.lastIndexOf('.'));
                        var fileResult = dest + fileName + '.min.js';
                        grunt.log.writeln('现在处理文件：' + src + '，处理后的文件：' + fileResult);
                        return fileResult;
                    }
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
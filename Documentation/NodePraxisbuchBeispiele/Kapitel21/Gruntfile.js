module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')

        nodeunit: {
            all: ['test/*_test.js']
        },

        cssmin: {
            compress: {
                files: {
                    'public/css/min.css': ['src/css/*.css']
                } }
        },

        uglify: {
            businessRoutines: {
                files: {
                    'public/js/logic.min.js': ['src/js/*.js']
                } }
        },

        jslint: {
            files: ['src/js/*.js']
        },

        watch: {
            files: ['src/js/*.js'],
            tasks: ['jslint']
        }

    });

    grunt.registerTask('default', ['nodeunit', 'cssmin', 'uglify', 'jslint']);

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

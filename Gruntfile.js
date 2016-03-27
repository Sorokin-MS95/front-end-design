module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch : {
			scripts: {
				files : 'css/main.scss',
				tasks : ['sass']
			}
		},
		sass :  {
			dist: {
				files: {
					'css/styles.css' : 'css/styles.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.registerTask('default', ['watch']);
}
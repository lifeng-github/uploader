/*!build time : 2015-03-18 11:02:28 AM*/
module.exports=function(a){var b=a.task,c="./";return a.initConfig({pkg:a.file.readJSON("package.json"),banner:'/*!build time : <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>*/\n',clean:{build:{src:"./build/*"}},kmc:{options:{packages:[{name:"<%= pkg.name %>",path:"../"}],depFilePath:"mods.js",fixModuleName:!0,map:[["<%= pkg.name %>/","kg/<%= pkg.name %>/<%= pkg.version %>/"]]},main:{files:[{expand:!0,cwd:c,src:["./**/*.js","!./node_modules/**/*.js","!./demo/**/*.js","!./test/**/*.js","!Gruntfile.js"],dest:"build/"}]}},uglify:{options:{compress:{global_defs:{DEBUG:!1},drop_console:!0,dead_code:!0},banner:"<%= banner %>",beautify:{ascii_only:!0}},page:{files:[{expand:!0,cwd:"./build",src:["**/*.js","!**/*-min.js"],dest:"./build",ext:"-min.js"}]}},less:{options:{paths:"./"},main:{files:[{expand:!0,cwd:c,src:["**/*.less","!build/**/*.less","!demo/**/*.less","!node_modules/**/*.less"],dest:"./build/",ext:".css"}]}},copy:{main:{files:[{expand:!0,cwd:c,src:["**/*.css","!build/**/*.css","!demo/**/*.css","!node_modules/**/*.css","**/*.swf"],dest:"./build/",filter:"isFile"}]}},watch:{all:{files:["./src/**/*.css","!./build/**/*"],tasks:["build"]}},cssmin:{scss:{files:[{expand:!0,cwd:"./build",src:["**/*.scss.css","!**/*.scss-min.css"],dest:"./build",ext:".scss-min.css"}]},less:{files:[{expand:!0,cwd:"./build",src:["**/*.less.css","!**/*.less-min.css"],dest:"./build",ext:".less-min.css"}]},main:{files:[{expand:!0,cwd:"./build",src:["**/*.css","!**/*-min.css","!**/*.less.css","!**/*.scss.css"],dest:"./build",ext:"-min.css"}]}}}),a.loadNpmTasks("grunt-contrib-uglify"),a.loadNpmTasks("grunt-kmc"),a.loadNpmTasks("grunt-contrib-clean"),a.loadNpmTasks("grunt-contrib-cssmin"),a.loadNpmTasks("grunt-contrib-watch"),a.loadNpmTasks("grunt-contrib-copy"),a.loadNpmTasks("grunt-contrib-less"),a.registerTask("build","\u9ed8\u8ba4\u6784\u5efa\u4efb\u52a1",function(){b.run(["clean:build","kmc","uglify","copy","cssmin"])}),a.registerTask("default","",function(a){a||b.run(["build"])})};
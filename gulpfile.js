var gulp = require('gulp');
var nodeman = require('gulp-nodemon');

gulp.task('default', function(){
    nodeman({
        script: 'app.js',
        ext: 'js',
        env:{
            PORT:8000
        },
        ignore:['./node_modules']
    })
})
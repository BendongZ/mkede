/**
 * Created by zd on 2017/6/6.
 */
//引入gulp包
var gulp = require('gulp');
var webserver = require('gulp-webserver');
//引入gulp-webpack包
var webpack = require('gulp-webpack');

//文件名提取包
var named = require('vinyl-named');

//引入gulp-sass的包
var  sass = require('gulp-sass');

//定义一个开启服务的任务
gulp.task('webserver',function(){
	gulp.src('./build/')
	.pipe(webserver({
		host:"localhost",
		port:8000,
		directoryListing:{
			enable:true,
			path:'./build'
		},
		livereload:true
	}))
})

//观测文件的变化，然后去执行相应的任务
gulp.task('watch',function(){
	gulp.watch('./src/*.html',['copyhtml'])
	gulp.watch('./src/script/**/*.js',['packjs'])
	gulp.watch('./src/script/**/*.html',['packjs'])
	gulp.watch('./src/style/usage/**/*.scss',['packcss'])
	gulp.watch('./src/images/**/*',['copy-img'])
})

//拷贝HTML页面
gulp.task('copyhtml',function(){
	gulp.src('./src/*.html').pipe(gulp.dest('./build/'))
})

//拷贝css样式
gulp.task('copycss',function(){
	gulp.src('./src/style/swiper.min.css').pipe(gulp.dest('./build/style/'))
})

//拷贝图片资源
gulp.task('copy-img',function(){
	gulp.src('./src/images/**/*').pipe(gulp.dest('./build/images'))
})

//拷贝libs目录下的js
gulp.task('copy-libs',function(){
	gulp.src('./src/script/libs/*').pipe(gulp.dest('./build/script/libs'))
})

//编译scss文件
gulp.task('packcss',function(){
	gulp.src('./src/style/usage/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./build/style'))
})

//模块化处理js文件
gulp.task('packjs',function(){
	gulp.src(['./src/script/app.js','./src/script/app-classification.js'])
	.pipe(named())
	.pipe(webpack({
		output:{
			filename:'[name].js'
		},
		module:{
			loaders:[
				{
					test:/\.js$/,
					loader:'imports-loader',
					exclude:'./node_modules'
				},
				{
					test:/\.html/,
					loader:'html-loader',
					exclude:'./node_modules'
				}
			]
		}
	}))
	.pipe(gulp.dest('./build/script/'))
})

//定义默认任务
gulp.task('default',['copyhtml','webserver','watch'],function(){})

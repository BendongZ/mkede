/**
 * Created by zd on 2017/6/6.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
//引入gulp-webpack包
var webpack = require('gulp-webpack');

//文件名提取包
var named = require('vinyl-named');

//引入gulp-sass的包
var  sass = require('gulp-sass');

//引入反向代理http-proxy-middleware
var proxy = require('http-proxy-middleware');

gulp.task('copyhtml',function(){
	gulp.src('./src/*.html').pipe(gulp.dest('./build/'))
})

gulp.task('webserver',function(){
	gulp.src('./build/')
	.pipe(webserver({
		host:"localhost",
		port:8000,
		directoryListing:{
			enable:true,
			path:'./build'
		},
		livereload:true,

		middleware:[
		//反向代理配置，
			proxy('/mock',{
				target:'http://localhost:9000/',//找数据地址
				changeOrigin:true,//切换域名也能识别
				pathRewrite:{//去掉mock
					'^/mock':''
				}

			})
		]

	}))
})



gulp.task('copy-img',function(){
	gulp.src('./src/images/**/*').pipe(gulp.dest('./build/images'))
})

gulp.task('copy-libs',function(){
	gulp.src('./src/script/libs/*').pipe(gulp.dest('./build/script/libs'))
})

gulp.task('packcss',function(){
	gulp.src('./src/style/usage/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./build/style'))
})

gulp.task('packjs',function(){
	gulp.src('./src/script/*.js')
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
gulp.task('watch',function(){
	gulp.watch('./src/*.html',['copyhtml'])
	gulp.watch('./src/script/**/*.js',['packjs'])
	gulp.watch('./src/script/libs/*.js',['copy-libs'])
	gulp.watch('./src/script/**/*.html',['packjs'])
	gulp.watch('./src/style/usage/**/*.scss',['packcss'])
	gulp.watch('./src/images/**/*',['copy-img'])
})
gulp.task('default',['copyhtml','webserver','packjs','packcss','copy-img','copy-libs','watch'],function(){})

/**
 * Created by zd on 2017/6/6.
 */
//引入gulp包
var gulp = require('gulp');
//引入web服务的包
var webserver = require('gulp-webserver');
//引入gulp-webpack包
var webpack = require('gulp-webpack');

//文件名提取包
var named = require('vinyl-named');

//引入gulp-sass的包
var sass = require('gulp-sass');

//版本号控制
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

//删除文件的包
var del = require('del');

//执行串行并行工作的包
var sequence = require("gulp-sequence");

//引入包管理的插件，gulp-load-plugins
var $ = require('gulp-load-plugins')();

//搭建开发生产环境的包
var minimist = require('minimist');
var gulpif = require('gulp-if');
var knownOptions={
	string:'env',
	default:{env:process.env.NODE_ENV || 'production'}
}
var options = minimist(process.argv.slice(2),knownOptions);

//定义一个开启服务的任务
//引入反向代理http-proxy-middleware
var proxy = require('http-proxy-middleware');

gulp.task('webserver',function(){
	gulp.src('./dev/')
	.pipe(webserver({
		host:"10.9.166.125",
		port:8000,
		directoryListing:{
			enable:true,
			path:'./dev'
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
			}),
			proxy('/zhuce',{
				target:'http://localhost:8000/',//找数据地址
				changeOrigin:true,//切换域名也能识别
				pathRewrite:{//去掉mock
					'^/zhuce':''
				}
			}),
			proxy('/verify',{
				target:'http://localhost:8000/',//找数据地址
				changeOrigin:true,//切换域名也能识别
				pathRewrite:{//去掉mock
					'^/verify':''
				}
			}),
			proxy('/second',{
				target:'http://localhost:8000/',//找数据地址
				changeOrigin:true,//切换域名也能识别
				pathRewrite:{//去掉mock
					'^/second':''
				}
			})
		]

        }))
})

//观测文件的变化，然后去执行相应的任务
gulp.task('watch',function(){
	gulp.watch('./src/*.html',['copyhtml'])
	gulp.watch('./src/script/**/*.js',['packjs'])
	gulp.watch('./src/script/**/*.html',['packjs'])
	gulp.watch('./src/style/usage/**/*.scss',['packcss'])
	gulp.watch('./src/images/**/*',['copy-img'])
	gulp.watch('./src/style/*.css',['copycss'])
})


//拷贝HTML页面
gulp.task('copyhtml',function(){
	gulp.src('./src/*.html')
	.pipe(gulpif(options.env === 'production',gulp.dest('./build')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev')))
})

//拷贝css样式
gulp.task('copycss',function(){
	gulp.src('./src/style/*.css')
	.pipe(gulpif(options.env === 'production',gulp.dest('./build/style/')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev/style/')))
})

//拷贝图片资源
gulp.task('copy-img',function(){
	gulp.src('./src/images/**/*')
	.pipe(gulpif(options.env === 'production',gulp.dest('./build/images')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev/images')))
})

//拷贝libs目录下的js
gulp.task('copy-libs',function(){
	gulp.src('./src/script/libs/*')
	.pipe(gulpif(options.env === 'production',gulp.dest('./build/script/libs')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev/script/libs')))
})

//编译scss文件
gulp.task('packcss',function(){
	gulp.src('./src/style/usage/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulpif(options.env === 'production',$.minifyCss()))
	.pipe(gulpif(options.env === 'production',rev()))
	.pipe(gulpif(options.env === 'production',gulp.dest('./build/style')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev/style')))
	.pipe(gulpif(options.env === 'production',rev.manifest()))
	.pipe(gulpif(options.env === 'production',gulp.dest('./build/rev/style')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev/rev/style')))
})

//模块化处理js文件
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
	.pipe(gulpif(options.env === 'production',$.uglify()))
	.pipe(gulpif(options.env === 'production',rev()))
	.pipe(gulpif(options.env === 'production',gulp.dest('./build/script')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev/script')))
	.pipe(gulpif(options.env === 'production',rev.manifest()))
	.pipe(gulpif(options.env === 'production',gulp.dest('./build/rev/script')))
	.pipe(gulpif(options.env !== 'production',gulp.dest('./dev/rev/script')))
})

//修改html中的js，css的引用路径
gulp.task('packhtml',function(){
	gulp.src(['./build/rev/**/*.json','./build/*.html'])
	.pipe($.minifyHtml())
	.pipe(revCollector())
	.pipe(gulp.dest('./build'))
})

//删除文件操作
gulp.task('clean',del.bind(null,['./build/**/*'],{force:true}))

//执行串行并行工作,总的pack任务，总打包
gulp.task('pack',function(callback){
	//如何通过gulp来串行，并行工作gulp-sequence或者run-sequence
	//执行过程有些任务需要返回数据来确定任务是否完成
	if(options.env === 'production'){
		sequence('clean',['packjs','packcss','copy-img','copy-libs','copyhtml','copycss'],'packhtml')(callback);
	}else{
		sequence(['packjs','packcss','copy-img','copy-libs','copyhtml','copycss'])(callback);
	}
})

//定义默认任务
gulp.task('default',['pack','webserver','watch'],function(){})

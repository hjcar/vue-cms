const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('Html-webpack-plugin');
const VueloaderPlugin=require('vue-loader/lib/plugin')

//暴露对象
module.exports={
	entry:path.join(__dirname,"./src/main.js"), //入口文件
	output:{	//出口文件
		path:path.join(__dirname,'./dist/'),
		filename:'undle.js'
	}, 
	plugins: [//插件配置节点
		     new HtmlWebpackPlugin({  //new一个内存中生成 html 页面的插件
		     	//这是自定义模板页面的路径去生成内存中的页面
    		 template:path.join(__dirname,'./src/index.html'),
    		 filename:'index.html' //拷贝一份放在内存里面

   		  }),  
		   new VueloaderPlugin()
		     ],
		 module: {  
	      rules: [
		       { //正则表达式规则 	
		         test: /\.css$/,
		         use: ['style-loader','css-loader']
	               //第三方文件的匹配规则 先处理css-loader,然后依此处理
		        },
		        {
		        	test:/\.less$/,
		        	use:['style-loader','css-loader',"less-loader"]
		        },
		         {
			         test: /\.(woff|woff2|eot|ttf|otf)$/,
			         use: ['url-loader']
		    	},
		        {
		        	test: /\.(png|svg|jpg|gif)$/,
		            use: ['file-loader'] //传参数 limit是固定的 参数是大小
		            //limit是给图片的大小单位是byte,如果我们引用的图片大于或等于给定的limit值
		            //否则着不会转换为base64
		            //第二个参数 name=[name].[ext]
		        },{
				    test: /\.js$/,
				    use:'babel-loader',
				    exclude: /node_modules/,
	      		  },
	      		  {
	      		  	 test: /\.vue$/,
	      		  	 use:'vue-loader'//处理vue
	      		  }
	     	]
	 	},
	 	resolve:{
	 		alias:{
	 			"vue$":"vue/dist/vue.js"
	 		}
	 	}

}
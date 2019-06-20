# VUE-商城

## 制作app组件

1. 完成header

2. 完成tabbar
+ 在制作制作购物车小图标时,对多一些操作
+ 先把扩展的css拷贝一份
+ 在拷贝一份扩展字体 ttf文件,到项目中
+ 然后导入类,然后添加购物车小图标

3. 完成路由 router-view
+ 设置tabbar路由高亮
+ 点击tabbar 中的路由连接展示路由组件

4. 完成首页轮播图(/home)
+ 轮播图数据请求
+ 使用 vue-resource
+ 获取数据 加载数据

5. 完成6宫格

## 新闻咨询

6. 完成newsList新闻列表
+ 完成路由
+ 请求数据
+ 加载渲染

7. 完成新闻详情
+ 把每一项改造为 router-link,同时 在跳转时候应该提供一个id标识符
+ 创建 新闻 详情 的主键页面 newInfo.vue
+ 在路由模块中，将新闻详情的路由地址 和组件页面对应起来


8. 获取评论列表
+ 发送请求获取数据
+ 渲染数据到列表

9. 发表评论
+ 双向数据绑定
+ 为发表按钮绑定一个事件
+ 校验内容是否为空
+ 内容通过发送给后端
+ 发表内容ok重新刷新列表
	(如果重新调用getcomments方法重新评论列表 可能只能获取到你看的那个页码的数据)
	发送个服务端,把内容添加到数组的首位(这样就我们没有重新请求数据了,不会影响到用户看到了第几页的数据)

## 图片分享
+ 绘制顶部滑动列表
### 制作顶部滑动区域坑
1. 需要借助于mui中的滑动区域
2. 需要将slider中的 mui-fullscren去掉
3. 滑动条需要导入js 并且初始化
```
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
4. 导入js的时候出现报错 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
推测: 觉得是mui用到了'caller', 'callee', and 'arguments' 但是我们 bundle.js打包的时候,默认启动了严格模式 而这几个不能使用'caller', 'callee', and 'arguments'

解决: 1.禁用webpack严格模式
npm install babel-plugin-transform-remove-strict-mode

##### .babelrc
{
  "plugins": ["transform-remove-strict-mode"]
}

2.不用了

+ 制作底部图片列表
 实现了图片列表的懒加载 和样式优化

+ 实现图片信息

+ 图片详情页

使用vue插件

npm i vue-preview -S

浏览图片

导入子组件 

##### mui 最新的谷歌浏览器 无法点击跳转
```
mui('body').on('tap','a',function(){document.location.href=this.href;});
//css样式可以关闭警告
*{touch-action: none;} 
```
### mounted() 
解决有些路由跳转js没有绑定上 
## 商品列表

完成商品列表基本布局

## 尝试手机上预览 和测试
1. 保证手机可以正常运行
2. 保证手机和电脑处于同一个WiFi环境中
3. 手机可以访问到 电脑的IP
4. 打开自己项目中 package.json, 在dev脚本中加上 --host 指令 ,把当前电脑的WiFi地址，设置为 -- host的指令
 如何查看自己电脑所处WiFi地址   

```
--host 192.168.137.1
```

## 商品详情

+ 使用了vue route 提供的链式导航
+ 注意：区分 this.\$route 和 this.\$router 这两个对象
+ 其中：this.\$route 是路由参数对象，所有路由中的参数，params，query 都属于他
+ this.\$router是一个路由导航对象，用它 可以方便的使用js代码，实现路由跳转
```
this.$route.push(Location)
```

### 三部分构成
+ 顶部轮播图 (发现首页写过一次轮播图,决定封装成组件)
+ 商品购买
+ 商品参数

### 封装好轮播图组件 传递参数为数组
+ 分析为什么轮播图在另一个页面的时候很丑
 不好看了！！！
 商品详情页面希望高度100% 宽度为auto 
+ 经过分析得到问题原因 首页中的轮播和详情中的轮播图 宽度高度都是 100%;

5.既然这两个 轮播图 其他方面没有冲突 只是宽度有分歧  那么我们可以定义一个属性 isfull 是否为100%

### 购物车的小球动画
+ 半场动画()
//小球动画适配思路
	//1.原因我们把小球动画最终位置写死了
	//2.只要分辨路和测试的时候不一样 或者滚动条有一定距离之后 问题就出现了
	//3.因此得到分析 不能把位置距离固定死
	//而是应该针对不同情况 动态机会坐标值
	//4.经过分析得到解题思路 先得到 徽标的坐标 在得到小球坐标 然后就差值就是要位移的距离

```
	getBoundingClientRect()//获取元素的4个坐标 left right top bottom
```
### 使用 $refs
+ 在javascript里面这样调用：this.$refs.input1 这样就可以减少获取dom节点的消耗了
用法如下:
```
<div id="app">
  <input type="text" ref="input1"/>
  <button @click="add">添加</button>
</div>

  this.$refs.input1.value ="test"; //this.$refs.input1 减少获取dom节点的消耗

```
+ 动画

```
//获取小球位置
    //console.log(this.$refs);
    const ballPosition=this.$refs.ball.getBoundingClientRect();
    //获取徽标
    const badgePostion=document.getElementById("bage")
    .getBoundingClientRect();
    const xDist= badgePostion.left-ballPosition.left  ;
    const yDist= badgePostion.top -ballPosition.top ;

    el.offsetWidth; //必须加这个不然没有动画
    el.style.transform=`translate(${xDist}px,${yDist}px)`;
    el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
```

### 拿到购物车数量

1. 经过分析: 按钮属于goodsinfo 页面 , 数字属于 numberbox 组件
2. 由于涉及到 父子组件嵌套 无法在hoosdinfo页面中 获取到 选中的商品数量值
3. 怎么解决这个问题 （涉及到子组件向父组件传值）
4. 事件调用的本质： 父向子传递方法 子调用这个方法 同时把数据当作参数 传递这个方法
5. 
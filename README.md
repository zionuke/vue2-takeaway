# 简介

## 1. 项目描述

1. 此项目为一个前后端分离的外卖 Web App (SPA) 项目
2. 使用了 Vue 全家桶+ES6+Webpack 等前端最新技术
3. 包括商家, 商品, 购物车, 用户等多个功能子模块
4. 采用模块化、组件化、工程化的模式开发

## 2. 能从此项目中学到什么?

### 2.1 项目开发流程及开发方法

1. 熟悉一个项目的开发流程
2. 学会组件化、模块化、工程化的开发模式
3. 掌握使用 vue-cli 脚手架初始化 Vue.js 项目
4. 学会模拟 json 后端数据，实现前后端分离开发
5. 学会 ES6+eslint 的开发方式
6. 掌握一些项目优化技巧

### 2.2 Vue 插件或第三方库

1. 学会使用 vue-router 开发SPA单页应用
2. 学会使用 axios/vue-resource 与后端进行数据交互
3. 学会使用 vuex 管理应用组件状态
4. 学会使用 better-scroll/vue-scroller 实现页面滑动效果
5. 学会使用 mint-ui 组件库构建界面
6. 学会使用 vue-lazyload 实现图片惰加载
7. 学会使用 mockjs 模拟后台数据接口

### 2.3 样式/布局/效果相关

1. 学会使用 stylus 编写模块化的 CSS
2. 学会使用 Vue.js 的过渡编写酷炫的交互动画
3. 学会制作并使用图标字体
4. 学会解决移动端 1px 边框问题
5. 学会移动端经典的 css sticky footer 布局
6. 学会 flex 弹性布局

## 3. API接口文档

[项目API接口文档](https://github.com/dragon-liu/vue2-takeaway/blob/main/server/API%E6%96%87%E6%A1%A3.md)

## 4. 项目开发

[完整项目开发流程说明文档](https://github.com/dragon-liu/vue2-takeaway/blob/main/docs/%E5%B0%9A%E7%A1%85%E8%B0%B7_vue%E9%A1%B9%E7%9B%AE-%E7%A1%85%E8%B0%B7%E5%A4%96%E5%8D%96.pdf)

## 5. 运行项目

**先运行服务器，再打开项目**

开启服务端程序之前要先安装mongdb，并且成功打开数据库连接

**server文件夹下cmd命令：**

1. `npm install`
2. `npm start`

**工程根目录下cmd命令：**

1. `npm install`
2. `npm start`

**登陆**

1. 手机号登陆，需要自己注册容联云通讯后先添加一个测试账号，然后在server\util\sms_util.js中修改相应个人配置，之后输入符合格式的手机号即可
2. 密码登陆，默认用户名abc，密码123

## 6. 项目截图

1. 首页

![首页](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/QQ%E5%9B%BE%E7%89%8720211102110806.png?token=AJJYY5S4HG4VEOL4HCZ4AGDBQCW3M)

2. 订单

![订单](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/202111021133379.png)

3. 搜索

![搜索](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/202111021134670.png)

4. 个人

![个人](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/202111021135769.png)

5. 登陆

![登陆](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/202111021136950.png)

6. 商家信息

![商家信息](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/202111021137629.png)

7. 商家评价

![商家评价](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/202111021137465.png)

8. 商家详情

![商家详情](https://raw.githubusercontent.com/dragon-liu/picBed/master/img/202111021138618.png)

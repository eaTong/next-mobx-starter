# next-mobx-starter

### 开始
由于项目中采用了`mongodb`作为持久化数据库，在运行本项目之前需要保证`mongodb`的可连接性，默认本机，如需连接其他项目，请在`server/mongoConfig.js`中修改。

### 关于项目
此项目由个人博客项目搭建及开发衍生而来，为保证拓展性和实用性，做了适当增减，主要技术栈为： `React` ,`MobX`,`Next.js`,`mongodb`,`koa`。

### 关于样式
样式方面，可以采用`css`,`less`,`sass`,`scss`中任何一个或者多个方案。推荐全局样式在`pages/_document.js`中引入，其他各页面中的样式采用`Next.js`推荐方案，用`style`包裹

### 关于后台
后台所有文件放置在`server`文件夹中，已加入`session`，`router`等基本要素，可满足基本开发，如需更换技术栈或者抛弃后台，可直接删除`server`文件夹中所有文件，并修改`package.json`启动方式。

### 关于发布
为保证项目可以兼容`pm2`，将后台的入口`index.js`提到最外层，以保证在`pm2`下面可以完整运行。

### start
This project used `mongodb` for persistence and session , you should make sure `mongobd` is connectable before you run this.If you should change connection config , it's in file `server/mongoConfig.js`.

### About project
This project is based on my personal blog : `eaTong`(not ready yet), and used `React` ,`MobX`,`Next.js`,`mongodb`,`koa` for development;

### About styles
You can use any one or multi technology in `css`,`less`,`sass`,`scss`. It's suggested to import global style in `pages/_document.js`,the style in page should be written in `style` block in their own page. 

### About backend
The backend in this project is written by `koa` , and backend files are all in folder `server`,and I had already imported  `router`,`session` and so on .if you want ,you can delete them or change easily

### About deploy
File `index.js` is in root directory for make sure this project can be run in 'pm2'. 

---
title: 前端入了个门
# separator: <!--s-->
# verticalSeparator: <!--v-->
theme: league
highlightTheme: atom-one-dark-reasonable
# revealOptions:
#     transition: 'fade'
---

## 前端入了个门

> by - wangqianwen

---

### 大纲

-   刀耕火种 - html、js、css
-   MPA 与 SPA
-   现代前端构建 - 预编译
    -   现在怎么写前端
    -   现在怎么写 js
    -   现在怎么写 css
    -   现在怎么打包应用
-   举个栗子 🌰，从头写一个 vue 应用
    -   脚手架
    -   ...

---

### 一、刀耕火种 - html、js、css

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>页面标题</title>
    </head>
    <body>
        <div>页面内容</div>
        <style>
            body {
                font-size: 14px;
            }
        </style>
        <script>
            console.log('加载完毕');
        </script>
    </body>
</html>
```

<!--
html、js、css等都是静态文件，托管在 webserver，开发人员写的代码跟实际部署的是完全相同的。
但随着前端技术的发展，以及对体验性要求的提高，已经不能再满足业务需求。于是逐步发展出以下两种模式。
-->

---

### 二、MPA 与 SPA

> 实时数据 + 模板 = 动态生成的页面

---

### MPA

> Multiple Page Application

-   托管的纯静态 html
-   传统后端动态渲染的页面：
    -   asp、 asp.net
    -   jsp
    -   。。。

<!--
因为对数据的实时性要求，
用户在访问不同的url时，后端动态生成、输出对应的页面。
-->

---

### SPA

> Single Page Application，简称 `spa`，是目前的主流。

<!--
因为生成页面有服务器损耗，而且多个页面如果引用相同资源，也会造成重复下载，浪费带宽。

所以一种新的技术应运而生。SPA 即单页面应用，它拥有类似app的使用体验，最直观的感觉就是，页面不再刷新。
-->

---

### MPA 对比 SPA

> MPA vs SPA，差异如下：

| 方式  | 谁生成页面 | 跳转资源能否复用 | 举例                                                          |
| :---- | :--------: | :--------------: | ------------------------------------------------------------- |
| `MPA` |    后端    |        否        | <a target="_blank" href="https://www.cnblogs.com/">博客园</a> |
| `SPA` |    前端    |  是，且依赖加载  | 当前 ppt                                                      |

<!--
这样，资源的消耗就放到了前端，减轻了服务端压力。
同时同一种资源只会加载一次，配合依赖加载，可以让用户更快的看到页面，操作更流畅。
-->

<!--
依赖加载：
用到的时候才去加载相关资源。比如打开一个新页面时，才去加载这个页面所有的js、css、图片等。
避免首屏内容太多阻塞带宽。
-->

---

### 三、现代前端构建 - 预编译

![](./assets/goujianyingyong.png)

---

### 预编译 - js

---

### 预编译 - css

---

### 四、从头写一个 vue 应用

<!--
参考：https://v2.cn.vuejs.org/v2/guide/ 自行扩展
-->

---

### vue 应用 - 脚手架

---

### vue 应用 - 组件

---

### vue 应用 - 路由、页面

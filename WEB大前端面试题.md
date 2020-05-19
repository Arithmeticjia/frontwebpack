## 1.http、html和浏览器

### 1.http和https

**https的SSL加密是在传输层实现的。**

#### (1)http和https的基本概念

http: 超文本传输协议，是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。

https: 是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。

https协议的主要作用是：建立一个信息安全通道，来确保数组的传输，确保网站的真实性。

#### (2)http和https的区别？

http传输的数据都是未加密的，也就是明文的，网景公司设置了SSL协议来对http协议传输的数据进行加密处理，简单来说https协议是由http和ssl协议构建的可进行加密传输和身份认证的网络协议，比http协议的安全性更高。
主要的区别如下：

- Https协议需要ca证书，费用较高。
- http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
- 使用不同的链接方式，端口也不同，一般而言，http协议的端口为80，https的端口为443
- http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

#### (3)https协议的工作原理

客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤，如图所示。

- 客户使用https url访问服务器，则要求web 服务器建立ssl链接。
- web服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。
- 客户端和web服务器端开始协商SSL链接的安全等级，也就是加密等级。
- 客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。
- web服务器通过自己的私钥解密出会话密钥。
- web服务器通过会话密钥加密与客户端之间的通信。

#### (4)https协议的优点

- 使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；
- HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。
- HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。
- 谷歌曾在2014年8月份调整搜索引擎算法，并称“比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高”。

#### (5)https协议的缺点

- https握手阶段比较费时，会使页面加载时间延长50%，增加10%~20%的耗电。
- https缓存不如http高效，会增加数据开销。
- SSL证书也需要钱，功能越强大的证书费用越高。
- SSL证书需要绑定IP，不能再同一个ip上绑定多个域名，ipv4资源支持不了这种消耗。

### 2.tcp三次握手，一句话概括

**客户端和服务端都需要直到各自可收发，因此需要三次握手。**

简化三次握手：

[![2018-07-10 3 42 11](https://user-images.githubusercontent.com/17233651/42496289-1c6d668a-8458-11e8-98b3-65db50f64d48.png)](https://user-images.githubusercontent.com/17233651/42496289-1c6d668a-8458-11e8-98b3-65db50f64d48.png)

从图片可以得到三次握手可以简化为：C发起请求连接S确认，也发起连接C确认我们再看看每次握手的作用：第一次握手：S只可以确认 自己可以接受C发送的报文段第二次握手：C可以确认 S收到了自己发送的报文段，并且可以确认 自己可以接受S发送的报文段第三次握手：S可以确认 C收到了自己发送的报文段

### 3.TCP和UDP的区别

（1）TCP是面向连接的，udp是无连接的即发送数据前不需要先建立链接。

（2）TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付。 并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。

（3）TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如IP电话和视频会议等）。

（4）TCP只能是1对1的，UDP支持1对1,1对多。

（5）TCP的首部较大为20字节，而UDP只有8字节。

（6）TCP是面向连接的可靠性传输，而UDP是不可靠的。

### 4.WebSocket的实现和应用

#### (1)什么是WebSocket?

WebSocket是HTML5中的协议，支持持久连续，http协议不支持持久性连接。Http1.0和HTTP1.1都不支持持久性的链接，HTTP1.1中的keep-alive，将多个http请求合并为1个

#### (2)WebSocket是什么样的协议，具体有什么优点？

- HTTP的生命周期通过Request来界定，也就是Request一个Response，那么在Http1.0协议中，这次Http请求就结束了。在Http1.1中进行了改进，是的有一个connection：Keep-alive，也就是说，在一个Http连接中，可以发送多个Request，接收多个Response。但是必须记住，在Http中一个Request只能对应有一个Response，而且这个Response是被动的，不能主动发起。
- WebSocket是基于Http协议的，或者说借用了Http协议来完成一部分握手，在握手阶段与Http是相同的。我们来看一个websocket握手协议的实现，基本是2个属性，upgrade，connection。

基本请求如下：

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

```

多了下面2个属性：

```
Upgrade:webSocket
Connection:Upgrade
告诉服务器发送的是websocket
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13

```

### 5.HTTP请求的方式，HEAD方式

- head：类似于get请求，只不过返回的响应中没有具体的内容，用户获取报头
- options：允许客户端查看服务器的性能，比如说服务器支持的请求方式等等。

### 6.一个图片url访问后直接下载怎样实现？

请求的返回头里面，用于浏览器解析的重要参数就是OSS的API文档里面的返回http头，决定用户下载行为的参数。

下载的情况下：

```
  1. x-oss-object-type:
         Normal
  2. x-oss-request-id:
         598D5ED34F29D01FE2925F41
  3. x-oss-storage-class:
         Standard

```

### 7.web Quality （无障碍）

能够被残障人士使用的网站才能称得上一个易用的（易访问的）网站。
残障人士指的是那些带有残疾或者身体不健康的用户。

使用alt属性：

```
<img src="person.jpg"  alt="this is a person"/>

```

有时候浏览器会无法显示图像。具体的原因有：

- 用户关闭了图像显示
- 浏览器是不支持图形显示的迷你浏览器
- 浏览器是语音浏览器（供盲人和弱视人群使用）
  如果您使用了 alt 属性，那么浏览器至少可以显示或读出有关图像的描述。

### 8.几个很实用的BOM属性对象方法?

什么是Bom? Bom是浏览器对象。有哪些常用的Bom属性呢？

#### (1)location对象

location.href-- 返回或设置当前文档的URL
location.search -- 返回URL中的查询字符串部分。例如 <http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu> 返回包括(?)后面的内容?id=5&name=dreamdu
location.hash -- 返回URL#后面的内容，如果没有#，返回空
location.host -- 返回URL中的域名部分，例如www.dreamdu.com
location.hostname -- 返回URL中的主域名部分，例如dreamdu.com
location.pathname -- 返回URL的域名后的部分。例如 <http://www.dreamdu.com/xhtml/> 返回/xhtml/
location.port -- 返回URL中的端口部分。例如 <http://www.dreamdu.com:8080/xhtml/> 返回8080
location.protocol -- 返回URL中的协议部分。例如 <http://www.dreamdu.com:8080/xhtml/> 返回(//)前面的内容http:
location.assign -- 设置当前文档的URL
location.replace() -- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL location.replace(url);
location.reload() -- 重载当前页面

#### (2)history对象

history.go() -- 前进或后退指定的页面数 history.go(num);
history.back() -- 后退一页
history.forward() -- 前进一页

#### (3)Navigator对象

navigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

### 9.HTML5 drag api

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发

### 10.http2.0

首先补充一下，http和https的区别，相比于http,https是基于ssl加密的http协议
简要概括：http2.0是基于1999年发布的http1.0之后的首次更新。

- 提升访问速度（可以对于，请求资源所需时间更少，访问速度更快，相比http1.0）
- 允许多路复用：多路复用允许同时通过单一的HTTP/2连接发送多重请求-响应信息。改善了：在http1.1中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制（连接数量），超过限制会被阻塞。
- 二进制分帧：HTTP2.0会将所有的传输信息分割为更小的信息或者帧，并对他们进行二进制编码
- 首部压缩
- 服务器端推送

### 11.补充400和401、403状态码

#### (1)400状态码：请求无效

产生原因：

- 前端提交数据的字段名称和字段类型与后台的实体没有保持一致
- 前端提交到后台的数据应该是json字符串类型，但是前端没有将对象JSON.stringify转化成字符串。

解决方法：

- 对照字段的名称，保持一致性
- 将obj对象通过JSON.stringify实现序列化

#### (2)401状态码：当前请求需要用户验证

#### (3)403状态码：服务器已经得到请求，但是拒绝执行

### 12.fetch发送2次请求的原因

**fetch发送post请求的时候，总是发送2次，第一次状态码是204，第二次才成功？**

原因很简单，因为你用fetch的post请求的时候，导致fetch 第一次发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。

### 13.Cookie、sessionStorage、localStorage的区别

共同点：都是保存在浏览器端，并且是同源的

- Cookie：cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下,存储的大小很小只有4K左右。 （key：可以在浏览器和服务器端来回传递，存储容量小，只有大约4K左右）
- sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持，localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。（key：本身就是一个回话过程，关闭浏览器后消失，session为一个回话，当页面不同即使是同一页面打开两次，也被视为同一次回话）
- localStorage：localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。（key：同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效）

补充说明一下cookie的作用：

- 保存用户登录状态。例如将用户id存储于一个cookie内，这样当用户下次访问该页面时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie还可以设置过期时间，当超过时间期限后，cookie就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：常见选项有一个月、三个 月、一年等。
- 跟踪用户行为。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。如果每次都需要选择所在地是烦琐的，当利用了 cookie后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区的天气情况。因为一切都是在后 台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便
- 定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用cookie来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。

### 14.web worker

在HTML页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker是运行在后台的js，独立于其他脚本，不会影响页面你的性能。并且通过postMessage将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。

如何创建web worker：

- 检测浏览器对于web worker的支持性
- 创建web worker文件（js，回传函数等）
- 创建web worker对象

### 15.对HTML语义化标签的理解

HTML5语义化标签是指正确的标签包含了正确的内容，结构良好，便于阅读，比如nav表示导航条，类似的还有article、header、footer等等标签。

### 16.iframe是什么？有什么缺点？

定义：iframe元素会创建包含另一个文档的内联框架
提示：可以将提示文字放在<iframe></iframe>之间，来提示某些不支持iframe的浏览器

缺点：

- 会阻塞主页面的onload事件
- 搜索引擎无法解读这种页面，不利于SEO
- iframe和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能。

### 17.Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

Doctype声明于文档最前面，告诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。

- 严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。
- 混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。

### 18.Cookie如何防范XSS攻击

XSS（跨站脚本攻击）是指攻击者在返回的HTML中嵌入javascript脚本，为了减轻这些攻击，需要在HTTP头部配上，set-cookie：

- httponly-这个属性可以防止XSS,它会禁止javascript脚本来访问cookie。
- secure - 这个属性告诉浏览器仅在请求为https的时候发送cookie。

结果应该是这样的：Set-Cookie=.....

### 19.Cookie和session的区别

HTTP是一个无状态协议，因此Cookie的最大的作用就是存储sessionId用来唯一标识用户

### 20. 一句话概括RESTFUL

**就是用URL定位资源，用HTTP描述操作**

### 21.讲讲viewport和移动端布局

可以参考我的这篇文章：

[响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh）](https://github.com/forthealllight/blog/issues/13)

### 22. click在ios上有300ms延迟，原因及如何解决？

#### (1)粗暴型，禁用缩放

```
 <meta name="viewport" content="width=device-width, user-scalable=no"> 

```

#### (2)利用FastClick，其原理是：

检测到touchend事件后，立刻出发模拟click事件，并且把浏览器300毫秒之后真正出发的事件给阻断掉





# 2.CSS

### 1.css盒模型

简介：就是用来装页面上的元素的矩形区域。CSS中的盒子模型包括IE盒子模型和标准的W3C盒子模型。

box-sizing(有3个值哦)：border-box,padding-box,content-box.

- 标准盒子模型：

[![2018-07-10 4 24 03](https://user-images.githubusercontent.com/17233651/42498021-b4dd6a46-845d-11e8-8bd9-ac2d90985f2a.png)](https://user-images.githubusercontent.com/17233651/42498021-b4dd6a46-845d-11e8-8bd9-ac2d90985f2a.png)

- IE盒子模型：

[![2018-07-10 4 24 12](https://user-images.githubusercontent.com/17233651/42498075-d3496e3a-845d-11e8-919c-eb3a7866883b.png)](https://user-images.githubusercontent.com/17233651/42498075-d3496e3a-845d-11e8-919c-eb3a7866883b.png)

区别：从图中我们可以看出，这两种盒子模型最主要的区别就是width的包含范围，在标准的盒子模型中，width指content部分的宽度，在IE盒子模型中，width表示content+padding+border这三个部分的宽度，故这使得在计算整个盒子的宽度时存在着差异：

标准盒子模型的盒子宽度：左右border+左右padding+width
IE盒子模型的盒子宽度：width

在CSS3中引入了box-sizing属性，box-sizing:content-box;表示标准的盒子模型，box-sizing:border-box表示的是IE盒子模型

最后，前面我们还提到了，box-sizing:padding-box,这个属性值的宽度包含了左右padding+width

也很好理解性记忆，包含什么，width就从什么开始算起。

### 2.画一条0.5px的线

- 采用meta viewport的方式
- 采用 border-image的方式
- 采用transform: scale()的方式

### 3.link标签和import标签的区别

- link属于html标签，而[@import](https://github.com/import)是css提供的
- 页面被加载时，link会同时被加载，而[@import](https://github.com/import)引用的css会等到页面加载结束后加载。
- link是html标签，因此没有兼容性，而[@import](https://github.com/import)只有IE5以上才能识别。
- link方式样式的权重高于[@import](https://github.com/import)的。

### 4.transition和animation的区别

Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。

### 5.Flex布局

文章链接：
[http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool（语法篇）](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool%EF%BC%88%E8%AF%AD%E6%B3%95%E7%AF%87%EF%BC%89)
[http://www.ruanyifeng.com/blog/2015/07/flex-examples.html（实例篇）](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html%EF%BC%88%E5%AE%9E%E4%BE%8B%E7%AF%87%EF%BC%89)

Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

简单的分为容器属性和元素属性
容器的属性：

- flex-direction：决定主轴的方向（即子item的排列方法）
  .box {
  flex-direction: row | row-reverse | column | column-reverse;
  }
- flex-wrap：决定换行规则
  .box{
  flex-wrap: nowrap | wrap | wrap-reverse;
  }
- flex-flow：
  .box {
  flex-flow: || ;
  }
- justify-content：对其方式，水平主轴对齐方式
- align-items：对齐方式，竖直轴线方向

项目的属性（元素的属性）：

- order属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为0
- flex-grow属性：定义项目的放大比例，即使存在空间，也不会放大
- flex-shrink属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个item的flow-shrink为0，则为不缩小
- flex-basis属性：定义了在分配多余的空间，项目占据的空间。
- flex：是flex-grow和flex-shrink、flex-basis的简写，默认值为0 1 auto。
- align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖align-items，默认属性为auto，表示继承父元素的align-items

比如说，用flex实现圣杯布局

### 6.BFC（块级格式化上下文，用于清楚浮动，防止margin重叠等）

直译成：块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。

- BFC区域不会与float box重叠
- BFC是页面上的一个独立容器，子元素不会影响到外面
- 计算BFC的高度时，浮动元素也会参与计算

那些元素会生成BFC：

- 根元素
- float不为none的元素
- position为fixed和absolute的元素
- display为inline-block、table-cell、table-caption，flex，inline-flex的元素
- overflow不为visible的元素

### 7.垂直居中的方法

### (1)margin:auto法

css:

```
div{
  width: 400px;
  height: 400px;
  position: relative;
  border: 1px solid #465468;
 }
 img{
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
 }

```

html:

```
<div>
 <img src="mm.jpg">
</div>

```

定位为上下左右为0，margin：0可以实现脱离文档流的居中.

#### (2)margin负值法

```
.container{
  width: 500px;
  height: 400px;
  border: 2px solid #379;
  position: relative;
}
.inner{
  width: 480px;
  height: 380px;
  background-color: #746;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -190px; /*height的一半*/
  margin-left: -240px; /*width的一半*/
 }

```

补充：其实这里也可以将marin-top和margin-left负值替换成，
transform：translateX(-50%)和transform：translateY(-50%)

#### (3)table-cell（未脱离文档流的）

设置父元素的display:table-cell,并且vertical-align:middle，这样子元素可以实现垂直居中。

```
css:
div{
    width: 300px;
    height: 300px;
    border: 3px solid #555;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
img{
    vertical-align: middle;
}

```

#### (4)利用flex

将父元素设置为display:flex，并且设置align-items:center;justify-content:center;

```
css:
.container{
      width: 300px;
      height: 200px;
      border: 3px solid #546461;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
 }
 .inner{
      border: 3px solid #458761;
      padding: 20px;
 }

```

### 8.关于js动画和css3动画的差异性

渲染线程分为main thread和compositor thread，如果css动画只改变transform和opacity，这时整个CSS动画得以在compositor trhead完成（而js动画则会在main thread执行，然后出发compositor thread进行下一步操作），特别注意的是如果改变transform和opacity是不会layout或者paint的。
区别：

- 功能涵盖面，js比css大
- 实现/重构难度不一，CSS3比js更加简单，性能跳优方向固定
- 对帧速表现不好的低版本浏览器，css3可以做到自然降级
- css动画有天然事件支持
- css3有兼容性问题

### 9.块元素和行元素

块元素：独占一行，并且有自动填满父元素，可以设置margin和pading以及高度和宽度
行元素：不会独占一行，width和height会失效，并且在垂直方向的padding和margin会失
效。

### 10.多行元素的文本省略号

```
 display: -webkit-box
-webkit-box-orient:vertical
-webkit-line-clamp:3
overflow:hidden

```

### 11.visibility=hidden, opacity=0，display:none

opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

### 12.双边距重叠问题（外边距折叠）

多个相邻（兄弟或者父子关系）普通流的块元素垂直方向marigin会重叠

折叠的结果为：

两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。



# 3.JS

### 1. get请求传参长度的误区

**\*误区：我们经常说get请求参数的大小存在限制，而post请求的参数大小是无限制的。***

实际上HTTP 协议从未规定 GET/POST 的请求长度限制是多少。对get请求参数的限制是来源与浏览器或web服务器，浏览器或web服务器限制了url的长度。为了明确这个概念，我们必须再次强调下面几点:

- HTTP 协议 未规定 GET 和POST的长度限制
- GET的最大长度显示是因为 浏览器和 web服务器限制了 URI的长度
- 不同的浏览器和WEB服务器，限制的最大长度不一样
- 要支持IE，则最大长度为2083byte，若只支持Chrome，则最大长度 8182byte

### 2. 补充get和post请求在缓存方面的区别

post/get的请求区别，具体不再赘述。

补充补充一个get和post在缓存方面的区别：

- get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。
- post不同，post做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此get请求适合于请求缓存。

### 3. 闭包

一句话可以概括：闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数的作用域不会被释放。

### 4. 类的创建和继承

（1）类的创建（es5）：new一个function，在这个function的prototype里面增加属性和方法。

下面来创建一个Animal类：

```
// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};

```

这样就生成了一个Animal类，实力化生成对象后，有方法和属性。

（2）类的继承——原型链继承

```
--原型链继承
function Cat(){ }
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true

```

- 介绍：在这里我们可以看到new了一个空对象,这个空对象指向Animal并且Cat.prototype指向了这个空对象，这种就是基于原型链的继承。
- 特点：基于原型链，既是父类的实例，也是子类的实例
- 缺点：无法实现多继承

（3）构造继承：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

```
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

```

- 特点：可以实现多继承
- 缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法。

（4）实例继承和拷贝继承

实例继承：为父类实例添加新特性，作为子类实例返回

拷贝继承：拷贝父类元素上的属性和方法

上述两个实用性不强，不一一举例。

（5）组合继承：相当于构造继承和原型链继承的组合体。通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

```
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true

```

- 特点：可以继承实例属性/方法，也可以继承原型属性/方法
- 缺点：调用了两次父类构造函数，生成了两份实例

（6）寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性

```
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = Animal.prototype;
  //将实例作为子类的原型
  Cat.prototype = new Super();
})();
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true

```

- 较为推荐

### 5. 如何解决异步回调地狱

promise、generator、async/await

### 6. 说说前端中的事件流

HTML中与javascript交互是通过事件驱动来实现的，例如鼠标点击事件onclick、页面的滚动事件onscroll等等，可以向文档或者文档中的元素添加事件侦听器来预订事件。想要知道这些事件是在什么时候进行调用的，就需要了解一下“事件流”的概念。

什么是事件流：事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

**addEventListener**：**addEventListener** 是DOM2 级事件新增的指定事件处理程序的操作，这个方法接收3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。

**IE只支持事件冒泡**。

### 7. 如何让事件先冒泡后捕获

在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。

### 8. 事件委托

- 简介：事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。
- 举例：最经典的就是ul和li标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加。
- 好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

### 9. 图片的懒加载和预加载

- 预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
- 懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

### 10. mouseover和mouseenter的区别

- mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout
- mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

### 11. js的new操作符做了哪些事情

new 操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象。

### 12.改变函数内部this指针的指向函数（bind，apply，call的区别）

- 通过apply和call改变函数的this指向，他们两个函数的第一个参数都是一样的表示要改变指向的那个对象，第二个参数，apply是数组，而call则是arg1,arg2...这种形式。
- 通过bind改变this作用域会返回一个新的函数，这个函数不会马上执行。

### 13. js的各种位置，比如clientHeight,scrollHeight,offsetHeight ,以及scrollTop, offsetTop,clientTop的区别？

- clientHeight：表示的是可视区域的高度，不包含border和滚动条
- offsetHeight：表示可视区域的高度，包含了border和滚动条
- scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
- clientTop：表示边框border的厚度，在未指定的情况下一般为0
- scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

### 14. js拖拽功能的实现

- 首先是三个事件，分别是mousedown，mousemove，mouseup
  当鼠标点击按下的时候，需要一个tag标识此时已经按下，可以执行mousemove里面的具体方法。

- clientX，clientY标识的是鼠标的坐标，分别标识横坐标和纵坐标，并且我们用offsetX和offsetY来表示元素的元素的初始坐标，移动的举例应该是：

  **鼠标移动时候的坐标-鼠标按下去时候的坐标。**

  也就是说定位信息为：

  鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的offetLeft.

- 还有一点也是原理性的东西，也就是拖拽的同时是绝对定位，我们改变的是绝对定位条件下的left
  以及top等等值。

补充：也可以通过html5的拖放（Drag 和 drop）来实现

### 15. 异步加载js的方法

- defer：只支持IE如果您的脚本不会改变文档的内容，可将 defer 属性加入到<script>标签中，以便加快处理文档的速度。因为浏览器知道它将能够安全地读取文档的剩余部分而不用执行脚本，它将推迟对脚本的解释，直到文档已经显示给用户为止。
- async，HTML5属性仅适用于外部脚本，并且如果在IE中，同时存在defer和async，那么defer的优先级比较高，脚本将在页面完成时执行。
- 创建script标签，插入到DOM中

### 16. Ajax 解决浏览器缓存问题

- 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
- 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
- 在URL后面加上一个随机数： "fresh=" + Math.random()。
- 在URL后面加上时间搓："nowtime=" + new Date().getTime()。
- 如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。

### 17. js的节流和防抖

<http://www.cnblogs.com/coco1s/p/5499469.html>

### 18. JS中的垃圾回收机制

**必要性**：**由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。**

这段话解释了为什么需要系统需要垃圾回收，JS不像C/C++，他有自己的一套垃圾回收机制（Garbage Collection）。JavaScript的解释器可以检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了。例如：

```
var a="hello world";
var b="world";
var a=b;
//这时，会释放掉"hello world"，释放内存以便再引用

```

垃圾回收的方法：标记清除、计数引用。

- **标记清除**

这是最常见的垃圾回收方式，当变量进入环境时，就标记这个变量为”进入环境“,从逻辑上讲，永远不能释放进入环境的变量所占的内存，永远不能释放进入环境变量所占用的内存，只要执行流程进入相应的环境，就可能用到他们。当离开环境时，就标记为离开环境。

垃圾回收器在运行的时候会给存储在内存中的变量都加上标记（所有都加），然后去掉环境变量中的变量，以及被环境变量中的变量所引用的变量（条件性去除标记），删除所有被标记的变量，删除的变量无法在环境变量中被访问所以会被删除，最后垃圾回收器，完成了内存的清除工作，并回收他们所占用的内存。

- **引用计数法**

另一种不太常见的方法就是引用计数法，引用计数法的意思就是每个值没引用的次数，当声明了一个变量，并用一个引用类型的值赋值给改变量，则这个值的引用次数为1,；相反的，如果包含了对这个值引用的变量又取得了另外一个值，则原先的引用值引用次数就减1，当这个值的引用次数为0的时候，说明没有办法再访问这个值了，因此就把所占的内存给回收进来，这样垃圾收集器再次运行的时候，就会释放引用次数为0的这些值。

用引用计数法会存在内存泄露，下面来看原因：

```
function problem() {
    var objA = new Object();
    var objB = new Object();
    objA.someOtherObject = objB;
    objB.anotherObject = objA;
}

```

在这个例子里面，objA和objB通过各自的属性相互引用，这样的话，两个对象的引用次数都为2，在采用引用计数的策略中，由于函数执行之后，这两个对象都离开了作用域，函数执行完成之后，因为计数不为0，这样的相互引用如果大量存在就会导致内存泄露。

特别是在DOM对象中，也容易存在这种问题：

```
var element=document.getElementById（’‘）；
var myObj=new Object();
myObj.element=element;
element.someObject=myObj;

```

这样就不会有垃圾回收的过程。

### 19.eval是做什么的

它的功能是将对应的字符串解析成js并执行，应该避免使用js，因为非常消耗性能（2次，一次解析成js，一次执行）

### 20.如何理解前端模块化

前端模块化就是复杂的文件编程一个一个独立的模块，比如js文件等等，分成独立的模块有利于重用（复用性）和维护（版本迭代），这样会引来模块之间相互依赖的问题，所以有了commonJS规范，AMD，CMD规范等等，以及用于js打包（编译等处理）的工具webpack

### 21.Commonjs、 AMD和CMD

一个模块是能实现特定功能的文件，有了模块就可以方便的使用别人的代码，想要什么功能就能加载什么模块。

- Commonjs：开始于服务器端的模块化，同步定义的模块化，每个模块都是一个单独的作用域，模块输出，modules.exports，模块加载require()引入模块。
- AMD：中文名异步模块定义的意思。

requireJS实现了AMD规范，主要用于解决下述两个问题。

```
1.多个文件有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器

2.加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应的时间越长。

```

语法：requireJS定义了一个函数define，它是全局变量，用来定义模块。

requireJS的例子：

```
//定义模块
define(['dependency'], function(){
        var name = 'Byron';
        function printName(){
            console.log(name);
        }
        return {
            printName: printName
        };
   });
//加载模块
require(['myModule'], function (my){
 my.printName();
}

```

requirejs定义了一个函数define,它是全局变量，用来定义模块：

```
define(id?dependencies?,factory)

```

在页面上使用模块加载函数：

```
require([dependencies],factory)；

```

总结AMD规范：require（）函数在加载依赖函数的时候是异步加载的，这样浏览器不会失去响应，它指定的回调函数，只有前面的模块加载成功，才会去执行。
因为网页在加载js的时候会停止渲染，因此我们可以通过异步的方式去加载js,而如果需要依赖某些，也是异步去依赖，依赖后再执行某些方法。

### 22.对象深度克隆的简单实现

```
function deepClone(obj){
  var newObj= obj instanceof Array ? []:{};
  for(var item in obj){
    var temple= typeof obj[item] == 'object' ? deepClone(obj[item]):obj[item];
    newObj[item] = temple;
  }
  return newObj;
}

```

ES5的常用的对象克隆的一种方式。注意数组是对象，但是跟对象又有一定区别，所以我们一开始判断了一些类型，决定newObj是对象还是数组~

### 23.实现一个once函数，传入函数参数只执行一次

```
function ones(func){
    var tag=true;
    return function(){
      if(tag==true){
        func.apply(null,arguments);
        tag=false;
      }
      return undefined
    }
}

```

### 24.将原生的ajax封装成promise

```
var  myNewAjax=function(url){
  return new Promise(function(resolve,reject){
      var xhr = new XMLHttpRequest();
      xhr.open('get',url);
      xhr.send(data);
      xhr.onreadystatechange=function(){
           if(xhr.status==200&&readyState==4){
                var json=JSON.parse(xhr.responseText);
                resolve(json)
           }else if(xhr.readyState==4&&xhr.status!=200){
                reject('error');
           }
      }
  })
}

```

### 25.js监听对象属性的改变

我们假设这里有一个user对象,

#### (1)在ES5中可以通过Object.defineProperty来实现已有属性的监听

```
Object.defineProperty(user,'name',{
    set：function(key,value){
       
    }
})

```

缺点：如果id不在user对象中，则不能监听id的变化

#### (2)在ES6中可以通过Proxy来实现

```
var  user = new Proxy({}，{
 set：function(target,key,value,receiver){

  }
})

```

这样即使有属性在user中不存在，通过user.id来定义也同样可以这样监听这个属性的变化哦~

### 26.如何实现一个私有变量，用getName方法可以访问，不能直接访

#### (1)通过defineProperty来实现

```
obj={
  name:yuxiaoliang,
  getName:function(){
    return this.name
  }
}
object.defineProperty(obj,"name",{
   //不可枚举不可配置
});

```

#### (2)通过函数的创建形式

```
function product(){
    var name='yuxiaoliang';
    this.getName=function(){
      return name;
    }
}
var obj=new product();

```

### 27. ==和===、以及Object.is的区别

#### (1) ==

主要存在：强制转换成number,null==undefined

```
" "==0  //true
"0"==0  //true
" " !="0" //true
123=="123" //true
null==undefined //true

```

#### (2)Object.js

主要的区别就是+0！=-0 而NaN==NaN
(相对比===和==的改进)

### 28.setTimeout、setInterval和requestAnimationFrame之间的区别

这里有一篇文章讲的是requestAnimationFrame：<http://www.cnblogs.com/xiaohuochai/p/5777186.html>
与setTimeout和setInterval不同，requestAnimationFrame不需要设置时间间隔，
大多数电脑显示器的刷新频率是60Hz，大概相当于每秒钟重绘60次。大多数浏览器都会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验也不会有提升。因此，最平滑动画的最佳循环间隔是1000ms/60，约等于16.6ms。

RAF采用的是系统时间间隔，不会因为前面的任务，不会影响RAF，但是如果前面的任务多的话，
会响应setTimeout和setInterval真正运行时的时间间隔。

特点：
（1）requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率。

（2）在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量

（3）requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销。



# 4.JS高级



### 1.自己实现一个bind函数

**原理：通过apply或者call方法来实现。**

#### (1)初始版本

```
Function.prototype.bind=function(obj,arg){
  var arg=Array.prototype.slice.call(arguments,1);
  var context=this;
  return function(newArg){
    arg=arg.concat(Array.prototype.slice.call(newArg));
    return context.apply(obj,arg);
  }
}

```

#### (2) 考虑到原型链

**为什么要考虑？因为在new 一个bind过生成的新函数的时候，必须的条件是要继承原函数的原型**

```
Function.prototype.bind=function(obj,arg){
  var arg=Array.prototype.slice.call(arguments,1);
  var context=this;
  var bound=function(newArg){
    arg=arg.concat(Array.prototype.slice.call(newArg));
    return context.apply(obj,arg);
  }
  var F=function(){}
  //这里需要一个寄生组合继承
  F.prototype=context.prototype;
  bound.prototype=new F();
  return bound;
}

```

### 2.用setTimeout来实现setInterval

#### (1)用setTimeout()方法来模拟setInterval()与setInterval()之间的什么区别？

首先来看setInterval的缺陷，使用setInterval()创建的定时器确保了定时器代码规则地插入队列中。这个问题在于：如果定时器代码在代码再次添加到队列之前还没完成执行，结果就会导致定时器代码连续运行好几次。而之间没有间隔。不过幸运的是：javascript引擎足够聪明，能够避免这个问题。当且仅当没有该定时器的如何代码实例时，才会将定时器代码添加到队列中。这确保了定时器代码加入队列中最小的时间间隔为指定时间。

这种重复定时器的规则有两个问题：**1.某些间隔会被跳过 2.多个定时器的代码执行时间可能会比预期小。**

下面举例子说明：

假设，某个onclick事件处理程序使用啦setInterval()来设置了一个200ms的重复定时器。如果事件处理程序花了300ms多一点的时间完成。

[![2018-07-10 11 36 43](https://user-images.githubusercontent.com/17233651/42487876-92656f2c-8435-11e8-8a5f-0a97918039da.png)](https://user-images.githubusercontent.com/17233651/42487876-92656f2c-8435-11e8-8a5f-0a97918039da.png)

这个例子中的第一个定时器是在205ms处添加到队列中，但是要过300ms才能执行。在405ms又添加了一个副本。在一个间隔，605ms处，第一个定时器代码还在执行中，而且队列中已经有了一个定时器实例，结果是605ms的定时器代码不会添加到队列中。结果是在5ms处添加的定时器代码执行结束后，405处的代码立即执行。

```
function say(){
  //something
  setTimeout(say,200);
}
setTimeout(say,200)

```

或者

```
setTimeout(function(){
   //do something
   setTimeout(arguments.callee,200);
},200);

```

### 3.js怎么控制一次加载一张图片，加载完后再加载下一张

#### (1)方法1

```
<script type="text/javascript">
var obj=new Image();
obj.src="http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onload=function(){
alert('图片的宽度为：'+obj.width+'；图片的高度为：'+obj.height);
document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
}
</script>
<div id="mypic">onloading……</div>

```

#### (2)方法2

```
<script type="text/javascript">
var obj=new Image();
obj.src="http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onreadystatechange=function(){
if(this.readyState=="complete"){
alert('图片的宽度为：'+obj.width+'；图片的高度为：'+obj.height);
document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
}
}
</script>
<div id="mypic">onloading……</div>

```

### 3.代码的执行顺序

```
setTimeout(function(){console.log(1)},0);
new Promise(function(resolve,reject){
   console.log(2);
   resolve();
}).then(function(){console.log(3)
}).then(function(){console.log(4)});

process.nextTick(function(){console.log(5)});

console.log(6);
//输出2,6,5,3,4,1

```

为什么呢？具体请参考我的文章：[从promise、process.nextTick、setTimeout出发，谈谈Event Loop中的Job queue](https://github.com/forthealllight/blog/issues/5)

### 4.如何实现sleep的效果（es5或者es6）

#### (1)while循环的方式

```
function sleep(ms){
   var start=Date.now(),expire=start+ms;
   while(Date.now()<expire);
   console.log('1111');
   return;
}

```

执行sleep(1000)之后，休眠了1000ms之后输出了1111。上述循环的方式缺点很明显，容易造成死循环。

### (2)通过promise来实现

```
function sleep(ms){
  var temple=new Promise(
  (resolve)=>{
  console.log(111);setTimeout(resolve,ms)
  });
  return temple
}
sleep(500).then(function(){
   //console.log(222)
})
//先输出了111，延迟500ms后输出222

```

### (3)通过async封装

```
function sleep(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms));
}
async function test(){
  var temple=await sleep(1000);
  console.log(1111)
  return temple
}
test();
//延迟1000ms输出了1111

```

\####(4).通过generate来实现

```
function* sleep(ms){
   yield new Promise(function(resolve,reject){
             console.log(111);
             setTimeout(resolve,ms);
        })  
}
sleep(500).next().value.then(function(){console.log(2222)})

```

### 5.简单的实现一个promise

首先明确什么是promiseA+规范，参考规范的地址：

[primiseA+规范](https://promisesaplus.com/)

如何实现一个promise，参考我的文章：

[实现一个完美符合Promise/A+规范的Promise](https://github.com/forthealllight/blog/issues/4)

一般不会问的很详细，只要能写出上述文章中的v1.0版本的简单promise即可。

### 6.Function._*proto_*(getPrototypeOf)是什么？

获取一个对象的原型，在chrome中可以通过__proto__的形式，或者在ES6中可以通过Object.getPrototypeOf的形式。

那么Function.proto是什么么？也就是说Function由什么对象继承而来，我们来做如下判别。

```
Function.__proto__==Object.prototype //false
Function.__proto__==Function.prototype//true

```

我们发现Function的原型也是Function。

我们用图可以来明确这个关系：

[![2018-07-10 2 38 27](https://user-images.githubusercontent.com/17233651/42493275-f55d0860-844e-11e8-983f-e04189a4f3d8.png)](https://user-images.githubusercontent.com/17233651/42493275-f55d0860-844e-11e8-983f-e04189a4f3d8.png)

### 7.实现js中所有对象的深度克隆（包装对象，Date对象，正则对象）

通过递归可以简单实现对象的深度克隆，但是这种方法不管是ES6还是ES5实现，都有同样的缺陷，就是只能实现特定的object的深度复制（比如数组和函数），不能实现包装对象Number，String ， Boolean，以及Date对象，RegExp对象的复制。

#### (1)前文的方法

```
function deepClone(obj){
    var newObj= obj instanceof Array?[]:{};
    for(var i in obj){
       newObj[i]=typeof obj[i]=='object'?  
       deepClone(obj[i]):obj[i];    
    }
    return newObj;
}

```

这种方法可以实现一般对象和数组对象的克隆，比如：

```
var arr=[1,2,3];
var newArr=deepClone(arr);
// newArr->[1,2,3]

var obj={
   x:1,
   y:2
}
var newObj=deepClone(obj);
// newObj={x:1,y:2}

```

但是不能实现例如包装对象Number,String,Boolean,以及正则对象RegExp和Date对象的克隆，比如：

```
//Number包装对象
var num=new Number(1);
typeof num // "object"

var newNum=deepClone(num);
//newNum ->  {} 空对象

//String包装对象
var str=new String("hello");
typeof str //"object"

var newStr=deepClone(str);
//newStr->  {0:'h',1:'e',2:'l',3:'l',4:'o'};

//Boolean包装对象
var bol=new Boolean(true);
typeof bol //"object"

var newBol=deepClone(bol);
// newBol ->{} 空对象

....

```

#### (2)valueof()函数

所有对象都有valueOf方法，valueOf方法对于：如果存在任意原始值，它就默认将对象转换为表示它的原始值。对象是复合值，而且大多数对象无法真正表示为一个原始值，因此默认的valueOf()方法简单地返回对象本身，而不是返回一个原始值。数组、函数和正则表达式简单地继承了这个默认方法，调用这些类型的实例的valueOf()方法只是简单返回这个对象本身。

对于原始值或者包装类：

```
function baseClone(base){
 return base.valueOf();
}

//Number
var num=new Number(1);
var newNum=baseClone(num);
//newNum->1

//String
var str=new String('hello');
var newStr=baseClone(str);
// newStr->"hello"

//Boolean
var bol=new Boolean(true);
var newBol=baseClone(bol);
//newBol-> true

```

其实对于包装类，完全可以用=号来进行克隆，其实没有深度克隆一说，

这里用valueOf实现，语法上比较符合规范。

对于Date类型：

因为valueOf方法，日期类定义的valueOf()方法会返回它的一个内部表示：1970年1月1日以来的毫秒数.因此我们可以在Date的原型上定义克隆的方法：

```
Date.prototype.clone=function(){
  return new Date(this.valueOf());
}

var date=new Date('2010');
var newDate=date.clone();
// newDate->  Fri Jan 01 2010 08:00:00 GMT+0800 

```

对于正则对象RegExp：

```
RegExp.prototype.clone = function() {
var pattern = this.valueOf();
var flags = '';
flags += pattern.global ? 'g' : '';
flags += pattern.ignoreCase ? 'i' : '';
flags += pattern.multiline ? 'm' : '';
return new RegExp(pattern.source, flags);
};

var reg=new RegExp('/111/');
var newReg=reg.clone();
//newReg->  /\/111\//

```

### 8.简单实现Node的Events模块

简介：观察者模式或者说订阅模式，它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。

node中的Events模块就是通过观察者模式来实现的：

```
var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('say',function(name){
    console.log('Hello',name);
})
eventEmitter.emit('say','Jony yu');

```

这样，eventEmitter发出say事件，通过On接收，并且输出结果，这就是一个订阅模式的实现，下面我们来简单的实现一个Events模块的EventEmitter。

#### (1)实现简单的Event模块的emit和on方法

```
function Events(){
this.on=function(eventName,callBack){
  if(!this.handles){
    this.handles={};
  }
  if(!this.handles[eventName]){
    this.handles[eventName]=[];
  }
  this.handles[eventName].push(callBack);
}
this.emit=function(eventName,obj){
   if(this.handles[eventName]){
     for(var i=0;o<this.handles[eventName].length;i++){
       this.handles[eventName][i](obj);
     }
   }
}
return this;
}

```

这样我们就定义了Events，现在我们可以开始来调用：

```
 var events=new Events();
 events.on('say',function(name){
    console.log('Hello',nama)
 });
 events.emit('say','Jony yu');
 //结果就是通过emit调用之后，输出了Jony yu

```

#### (2)每个对象是独立的

因为是通过new的方式，每次生成的对象都是不相同的，因此：

```
var event1=new Events();
var event2=new Events();
event1.on('say',function(){
    console.log('Jony event1');
});
event2.on('say',function(){
    console.log('Jony event2');
})
event1.emit('say');
event2.emit('say');
//event1、event2之间的事件监听互相不影响
//输出结果为'Jony event1' 'Jony event2'

```

### 9.箭头函数中this指向举例

```
var a=11;
function test2(){
  this.a=22;
  let b=()=>{console.log(this.a)}
  b();
}
var x=new test2();
//输出22
```



# 5.框架

#### 1.vue与angular的区别?

1.vue仅仅是mvvm中的view层，只是一个如jquery般的工具库，而不是框架，而angular而是mvvm框架。
2.vue的双向邦定是基于ES5 中的 3.getter/setter来实现的，而angular而是由自己实现一套模版编译规则，需要进行所谓的“脏”检查，vue则不需要。因此，vue在性能上更高效，但是代价是对于ie9以下的浏览器无法支持。
4.vue需要提供一个el对象进行实例化，后续的所有作用范围也是在el对象之下，而angular而是整个html页面。一个页面，可以有多个vue实例，而angular好像不是这么玩的。
5.vue真的很容易上手，学习成本相对低，不过可以参考的资料不是很丰富，官方文档比较简单，缺少全面的使用案例。高级的用法，需要自己去研究源码，至少目前是这样。

#### 2.说说你对angular脏检查理解？

在angular中你无法判断你的数据是否做了更改，所以它设置了一些条件，当你触发这些条件之后,它就执行一个检测来遍历所有的数据，对比你更改的地方，然后执行变化。
这个检查很不科学。而且效率不高，有很多多余的地方，所以官方称为 脏检查。

#### 3.active-class是哪个组件的属性？

vue-router模块的router-link组件。

#### 4.嵌套路由怎么定义？

在实际项目中我们会碰到多层嵌套的组件组合而成，但是我们如何实现嵌套路由呢？因此我们需要在 VueRouter 的参数中使用 children 配置，这样就可以很好的实现路由嵌套。
index.html，只有一个路由出口

```
<div id="app">  
    <!-- router-view 路由出口, 路由匹配到的组件将渲染在这里 -->  
    <router-view></router-view>  
</div>复制代码
```

main.js，路由的重定向，就会在页面一加载的时候，就会将home组件显示出来，因为重定向指向了home组件，redirect的指向与path的必须一致。children里面是子路由，当然子路由里面还可以继续嵌套子路由。

```
import Vue from 'vue'  
import VueRouter from 'vue-router'  
Vue.use(VueRouter)  

//引入两个组件 

import home from "./home.vue"  
import game from "./game.vue"  
//定义路由  
const routes = [  
    { path: "/", redirect: "/home" },//重定向,指向了home组件  
    {  
        path: "/home", component: home,  
        children: [  
            { path: "/home/game", component: game }  
        ]  
    }  
]  
//创建路由实例  
const router = new VueRouter({routes})  

new Vue({  
    el: '#app',  
    data: {  
    },  
    methods: {  
    },  
    router  
})复制代码
```

home.vue，点击显示就会将子路由显示在出来，子路由的出口必须在父路由里面，否则子路由无法显示。

```
<template>  
    <div>  
        <h3>首页</h3>  
        <router-link to="/home/game">  
            <button>显示<tton>  
        </router-link>  
        <router-view></router-view>  
    </div>  
</template>复制代码
```

 game.vue

```
 <template>  
    <h3>游戏</h3>  
</template>复制代码
```

#### 5.怎么定义vue-router的动态路由？怎么获取传过来的动态参数？

> 在router目录下的index.js文件中，对path属性加上/:id。
> 使用router对象的params.id。

#### 6.vue-router有哪几种导航钩子？

三种，
第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子
第三种：单独路由独享组件

#### 7.scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？

css的预编译。

> 使用步骤：

第一步：用npm 下三个loader（sass-loader、css-loader、node-sass）

第二步：在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss

第三步：还是在同一个文件，配置一个module属性

第四步：然后在组件的style标签加上lang属性 ，例如：lang=”scss”

> 有哪几大特性:

1、可以用变量，例如（$变量名称=值）；
2、可以用混合器，例如（）
3、可以嵌套

#### 8.mint-ui是什么？怎么使用？说出至少三个组件使用方法？

基于vue的前端组件库。npm安装，然后import样式和js，vue.use（mintUi）全局引入。在单个组件局部引入：import {Toast} from ‘mint-ui’。
组件一：Toast(‘登录成功’)；
组件二：mint-header；
组件三：mint-swiper

#### 9.v-model是什么？怎么使用？ vue中标签怎么绑定事件？

可以实现双向绑定，指令（v-class、v-for、v-if、v-show、v-on）。vue的model层的data属性。绑定事件：`<input @click=doLog()/>`

#### 10.iframe的优缺点？

iframe也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入在现有的网页中。

> 优点：

1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. Security sandbox
3. 并行加载脚本
4. 方便制作导航栏

> 缺点：

1. iframe会阻塞主页面的Onload事件
2. 即时内容为空，加载也需要时间
3. 没有语意

#### 11.简述一下Sass、Less，且说明区别？

他们是动态的样式语言，是CSS预处理器,CSS上的一种抽象层。他们是一种特殊的语法/语言而编译成CSS。
变量符不一样，less是@，而Sass是$;
Sass支持条件语句，可以使用if{}else{},for{}循环等等。而Less不支持;
Sass是基于Ruby的，是在服务端处理的，而Less是需要引入less.js来处理Less代码输出Css到浏览器

#### 12.axios是什么？怎么使用？描述使用它实现登录功能的流程？

请求后台资源的模块。npm install axios -S装好，然后发送的是跨域，需在配置文件中config/index.js进行设置。后台如果是Tp5则定义一个资源路由。js中使用import进来，然后.get或.post。返回在.then函数中如果成功，失败则是在.catch函数中

#### 13.axios+tp5进阶中，调用axios.post(‘api/user’)是进行的什么操作？axios.put(‘api/user/8′)呢？

跨域，添加用户操作，更新操作。

#### 14.vuex是什么？怎么使用？哪种功能场景使用它？

vue框架中状态管理。在main.js引入store，注入。新建了一个目录store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

#### 15.mvvm框架是什么？它和其它框架（jquery）的区别是什么？哪些场景适合？

一个model+view+viewModel框架，数据模型model，viewModel连接两个

区别：vue数据驱动，通过数据来显示视图层而不是节点操作。

场景：数据操作比较多的场景，更加便捷

#### 16.自定义指令（v-check、v-focus）的方法有哪些？它有哪些钩子函数？还有哪些钩子函数参数？

全局定义指令：在vue对象的directive方法里面有两个参数，一个是指令名称，另外一个是函数。组件内定义指令：directives

钩子函数：bind（绑定事件触发）、inserted(节点插入的时候触发)、update（组件内相关更新）

钩子函数参数：el、binding

#### 17.说出至少4种vue当中的指令和它的用法？

v-if：判断是否隐藏；v-for：数据循环出来；v-bind:class：绑定一个属性；v-model：实现双向绑定

#### 18.vue-router是什么？它有哪些组件？

vue用来写路由一个插件。router-link、router-view

#### 19.导航钩子有哪些？它们有哪些参数？

> 导航钩子有：

a/全局钩子和组件内独享的钩子。b/beforeRouteEnter、afterEnter、beforeRouterUpdate、beforeRouteLeave

> 参数：

有to（去的那个路由）、from（离开的路由）、next（一定要用这个函数才能去到下一个路由，如果不用就拦截）最常用就这几种

#### 20.Vue的双向数据绑定原理是什么？

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

> 具体步骤：

**第一步：**需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter
这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

**第二步：**compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

**第三步：**Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个update()方法
3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

**第四步：**MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

#### 21.请详细说下你对vue生命周期的理解？

总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后

```
创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。

更新前/后：当data变化时，会触发beforeUpdate和updated方法。

销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在复制代码
```

#### 22.请说下封装 vue 组件的过程？

首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立的模块，解决了我们传统项目开发：效率低、难维护、复用性等问题。

然后，使用Vue.extend方法创建一个组件，然后使用Vue.component方法注册组件。子组件需要数据，可以在props中接受定义。而子组件修改好数据后，想把数据传递给父组件。可以采用emit方法。

#### 23.你是怎么认识vuex的？

vuex可以理解为一种开发模式或框架。比如PHP有thinkphp，java有spring等。
通过状态（数据源）集中管理驱动组件的变化（好比spring的IOC容器对bean进行集中管理）。

应用级的状态集中放在store中； 改变状态的方式是提交mutations，这是个同步的事物； 异步逻辑应该封装在action中。

#### 24.vue-loader是什么？使用它的用途有哪些？

解析.vue文件的一个加载器，跟template/js/style转换成js模块。

用途：js可以写es6、style样式可以scss或less、template可以加jade等

#### 25.请说出vue.cli项目中src目录每个文件夹和文件的用法？

assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置;view视图；app.vue是一个应用主组件；main.js是入口文件

#### 26.vue.cli中怎样使用自定义的组件？有遇到过哪些问题吗？

第一步：在components目录新建你的组件文件（smithButton.vue），script一定要export default {

第二步：在需要用的页面（组件）中导入：import smithButton from ‘../components/smithButton.vue’

第三步：注入到vue的子组件的components属性上面,components:{smithButton}

第四步：在template视图view中使用，`<smith-button>  </smith-button>`
问题有：smithButton命名，使用的时候则smith-button。

#### 27.聊聊你对Vue.js的template编译的理解？

简而言之，就是先转化成AST树，再得到的render函数返回VNode（Vue的虚拟DOM节点）

> 详情步骤：

首先，通过compile编译器把template编译成AST语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表现形式），compile是createCompiler的返回值，createCompiler是用以创建编译器的。另外compile还负责合并option。

然后，AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）

#### 28.vue的历史记录

history 记录中向前或者后退多少步

#### 29.vuejs与angularjs以及react的区别？

##### 1.与AngularJS的区别

> 相同点：

都支持指令：内置指令和自定义指令。

都支持过滤器：内置过滤器和自定义过滤器。

都支持双向数据绑定。

都不支持低端浏览器。

> 不同点：

1.AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观。

2.在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢。

Vue.js使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。

对于庞大的应用来说，这个优化差异还是比较明显的。

##### 2.与React的区别

> 相同点：

React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用。

中心思想相同：一切都是组件，组件实例之间可以嵌套。

都提供合理的钩子函数，可以让开发者定制化地去处理需求。

都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载。

在组件开发中都支持mixins的特性。

> 不同点：

React依赖Virtual DOM,而Vue.js使用的是DOM模板。React采用的Virtual DOM会对渲染出来的结果做脏检查。

Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作DOM。



#### 30.什么是vue生命周期？

 Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

#### 31.vue生命周期的作用是什么？

它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

#### 32.vue生命周期总共有几个阶段？

它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后

#### 33.第一次页面加载会触发哪几个钩子？

第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子

#### 34.DOM 渲染在 哪个周期中就已经完成？

DOM 渲染在 mounted 中就已经完成了

#### 35.简单描述每个周期具体适合哪些场景？

生命周期钩子的一些使用方法： beforecreate : 可以在这加个loading事件，在加载实例时触发 created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用 mounted : 挂载元素，获取到DOM节点 updated : 如果对数据统一处理，在这里写上相应函数 beforeDestroy : 可以做一个确认停止事件的确认框 nextTick : 更新数据后立即操作dom

arguments是一个伪数组，没有遍历接口，不能遍历

#### 36.cancas和SVG的是什么以及区别

> SVG

SVG 是一种使用 XML 描述 2D 图形的语言。
SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

> Canvas

Canvas 通过 JavaScript 来绘制 2D 图形。
Canvas 是逐像素进行渲染的。
在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

**37.Canvas 与 SVG 的比较**

> Canvas
>
> ```
> 依赖分辨率
> 不支持事件处理器
> 弱的文本渲染能力
> 能够以 .png 或 .jpg 格式保存结果图像
> 最适合图像密集型的游戏，其中的许多对象会被频繁重绘复制代码
> ```
>
> SVG
>
> ```
> 不依赖分辨率
> 支持事件处理器
> 最适合带有大型渲染区域的应用程序（比如谷歌地图）
> 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
> 不适合游戏应用
> ```


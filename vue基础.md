
 ##### vue通讯方式
 * 1.   props / $emit 适用于父子通讯
 * 2.   ref 适用于组件通讯
 *      ref如果是在普通dom上，引用的就是dom元素，如果是在子组件上就是指向组件是咧
 * 3.   $parent / $children / $root 访问父，子，根实例
 * 4.   eventBus（$emit / $on） 适用于父子，隔代，兄弟组件
 *      这种方法通过一个空的Vue实例作为中央时间总线，用它来出发事件和监听事件，从而实现任何组件的通信
 * 5.   $attrs / $listeners 适用于隔代组件通讯
 * 6.   provide/ inject 祖先组件通过provide来提供变了，然后在子孙组件中通过inject来注入变量
 * 7.   Vuex适用于父子，隔代，兄弟的通信
 * 8.   插槽 vue3可以通过usesolt 来查看插槽数据
 * 9.   mitt.js 



 ##### VUE内置指令
 * 1.   v-once 指定元素或者组件只渲染一次，包括元素或者组件，收首次渲染后都不在进行渲染，不在随数据变化重新渲染，视为静态内容
 * 2.   v-cloak 指定保持在元素上知道关联实例结束编译，解决初始化慢导致页面闪动的最佳实践
 * 3.   v-bind  绑定属性，动态更新HTML元素的属性，如v-bind:class => :class
 * 4.   v- 用于监听DOM事件，如v-on:click  v-on:keyup
 * 5.   v-hontml 赋值就是变了innerHTML
 * 6.   v-text 更新元素的textcontent
 * 7.   v-model 在普通标签=>    变成value和input的语法糖
 *              在组件上面=>    也是处理未value和input的语法糖
 * 8.   v-if v-elese v-else-if 可以配合template来使用，在render函数里面就是三元表达式
 * 9.   v-show 使指令来实现，最终会通过display来进行显隐
 * 10.  v-for 循环指令编译结果就是渲染列表
 *            优先级比v-if高 最好不要一起使用 尽量使用计算属性去解决
 *            注意增加唯一的key值
 * 
 


 ##### v-show 和v-if的区别
 *  手段. vif是动态的向dom内添加或者删除dom元素；v-show是通过display来隐藏或者显示
 *  编译. vif切换有一个局部编译或者卸载的过程，切换过程中也会合适的销毁或者重建内部的事件监听和子组件；vshow是css切换
 *  消耗. vif有更高的切换消耗，vshow有更高的初始化编译消耗
 


 ##### 解决vue初始化页面闪动的问题
 * ：首先在css里面加[v-cloak]：display：none
 * : 在根元素商家说display：none  ：style=display:block
 



 ##### SPA是什么，优缺点是什么
 * ：SPA页面是在web页面初始化加载相应的HTML Javascript css，SPA不会因为用户的操作而进行页面的重新加载，或者跳转，取而代之是路由机制来实现html内容变化
 * 
 * 优点：用户体验好，更新加载页面不用重新加载整个页面
 *       有利于前后端分离，架构清晰，
 * 缺点：初次加载耗时多
 *      不利于SEO
 



 ##### Vue首屏加载渲染优化
 * 1.图片压缩，懒加载
 * 2.禁止生产.map文件
 * 3.路由懒加载
 * 4.cdn引入公共库
 * 5.开启GZIP压缩
 



 ##### VUE的生命周期
 * 
 * beforeCreate：是在new vue之后触发的第一个钩子函数，在当前接团data,methods,computed,watch都不能访问
 * created：在实例创建完成之后发生，当前阶段已经完成了数据观测，也就是可以使用数据，在这里更改数据不会触发updated函数。可以进行一些初始化数据获取，在这阶段无法和dom进行交互
 * beforeMount:发生在挂载之前，当前虚拟dom已经创建完成，这个时候发生数据更改也不会触发updated
 * mounted：在挂在之后发生，当前真实DOM已经挂在完毕，数据完成双向绑定，可以访问DOM元素
 * beforeUpdata：在发生更新之前，也就是数据响应式发生更新，虚拟dom重新渲染之前
 * updata：发生在更新之后，当前阶段dom已经更新完成
 * beforeDestroy：发生在实例销毁之前，在这个时候可以做收尾工作，比如清楚定时器
 * destroyed：发生在实例销毁之后
 


  ##### 第一次页面加载会触发几个钩子函数
 * beforeCreate,created,beforeMouted,mounted
 


 ##### 在那个生命周期发起数据请求
 * 推荐created中发起，也可以在beforeMount和mounted中发起
 * created中发起，能够更快速的获取服务端数据，减少页面loading时间
 * ssr不支持beforeMounte和mounted
 


 ##### vue-router有几种模式
 * hash模式：使用url hash值来当做路由，支持所有API
 * history：依赖HTML5 history API 和服务器配置
 


 ##### MVVM MVC的区别
 * 
 * MVC：通过model，view，controller的方式来组织代码
 *      view：负责页面的显示逻辑
 *      model：负责储存页面的业务数据，及对相应数据的操作
 *      controller：是view和model的纽带，负责用户与应用的响应操作
 * 
 * MVVM：通过model，view，viewmodel
 *      model：数据模型，数据和业务逻辑都在model中定义
 *      view：代表UI图，负责数据的展示
 *      viewModel：负责监听model的数据变化，控制视图的更新，处理用户交互操作
 * 
 * VUE并没有完全遵循MVVM的思想，因为vue提供了$refs的属性，可以让model直接操作view
 



 ##### VUE的优点
 * 1.渐进式框架：在任何项目中都可以轻易引入
 * 2.轻量级框架：只关注视图层，是一个构建数据的视图集合，
 * 3.简单易学：国人开发，中文文档
 * 4.双休数据绑定：在数据操作方面更简单
 * 5.组件化：很大程度上实现了逻辑的封装和重用
 * 6.视图，数据，结构分离：使数据的更改和使用更为简单
 


 ##### SPA单页面的理解，优缺点
 * :SPA仅在web加载时就加载了javascript,css,html，一旦页面加载完成后，SPA不会因用户的操作而进行页面的跳转和重新加载，取代的是vue-router路由机制来控制html的内容变化
 * 
 * 优点：用户体验好，快，内容的改变不需要重新加载内容，
 *      有利于前后端分离，架构清晰，
 * 
 * 缺点：初次加载耗时
 *      不利于SEO
 


 ##### VUE的首屏加载优化（SPA优化）
 * 1.图片优化：图片CDN化
 * 2.禁止生成.map文件：productionSourceMap：false
 * 3.路由懒加载
 * 4.cdn引入公共库：configurewebpack：{externals:~~~~}
 * 5.开启GZIP压缩：
 *      ···
 *      ...     
 *     服务端也要配，不然不认识 GZIP 文件。 
 
plugins: [
    new CompressionWebpackPlugin({
        text: new RegExp('\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
    })
]


 ##### Vue首屏闪动优化
 * 首先在css中添加：[v-cloak]{display:none}，style='display：none':style='{display:block"}'
 



 ##### 怎么理解VUE的数据单向流
 * 父级prop的更新回向下流到子组件中，但反过来则不行，这样会方式从子组件意外更改到父组件的状态，从而导致你的应用数据难以理解
 * 
 


 ##### data为啥是个函数
 * 因为组件是用来复用的，且JS里对象是引用关系，如果组件中data是一个对象，那么这样的作用域没有隔离，子组件的data属性也会相互影响
 



 ##### watch和computed的区别
 * 
 * computed：   
 *  1.  它支持缓存，只有在依赖的数据发生变化后才会重新计算
 *  2.  不支持异步，当computed中有异步时，无法监听数据的变化
 *  3.  如果一个属性是由其他属性计算来的，这个属性依赖其他的属性，一般用computed
 *  4.  如果computed属性的属性值是函数，那么默认使用get。当发生数据变化的时候会调用set的方式
 * 
 * 
 ##### watch：
 *  1.  不支持缓存，当一个属性发生变化时，就会马上发生相应的操作
 *  2.  支持异步监听
 *  3.  监听的函数接受两个参数，一个是旧值一个是新值
 *  4.  监听的数据必须是data中或者prop的数据
 *  5.  函数有两个参数
 *      immediate：组件加载立即触发
 *      deep：深度监听
 



 ##### 插槽
 * ：slot又名插槽，是vue的内容分发机制
 * 
 * 默认插槽：又名匿名插槽，当slot没有指定name的属性时候，默认显示的插槽，一个组件只能有一个匿名插槽
 * 
 * 具名插槽：带有名字的插槽，也就是带有name属性的，一个组件可以有多个插槽
 * 
 * 作用域插槽：可以是匿名插槽，也可以是具名插槽
 * 
 * 
 * 实现原理：当子组件vm实例化的时候，获取父组件传入的slot内容，存放在$slot中，默认插槽的为vm.$slot.default,具名插槽为vm.$slot.cxxx  xxx是插槽名，当组件执行渲染的时候，遇到slot就会使用$slot的内容进行替换
 


 ##### SSR的理解
 * ：大致的意思就是vue在客户端将标签渲染成整个html的工作在服务的完成，服务端形成的html返回给客户端，这个过程就叫做服务端渲染
 * 
 * 优点：
 *  1、更好的SEO，
 *  2、首屏加载更快
 * 缺点：
 *  1、更多的开发限制，列入服务端渲染只支持beforecreate和created这两个函数
 *  2、不能进行动漫操作
 * 
 * 
 * 这会导致一些外部扩展库需要特殊处理才能在服务端渲染中运行
 



 ##### VUE的性能优化
 * 1.代码层面的优化
 *      1.  vif和vshow的使用场景区分
 *      2.  computed和watch的场景区分
 *      3.  vfor遍历必须为item添加key，避免同时使用vif
 *      4.  事假的销毁
 *      5.  图片资源的懒加载 
 *      6.  路由懒加载
 *      7.  按需引入   
 *      8.  服务端渲染
 * 2.webpack的优化
 *      1.  webpack对图片进行压缩
 *      2.  健身ES6转为ES5的沉余代码
 *      3.  提取公告代码
 *      4.  模板预编译
 *      5.  提取公共css
 *      6.  vue项目的编译优化
 * 3.web基础优化
 *      1.  开启GZIP
 *      2.  浏览器缓存
 *      3.  CDN的使用   
 *      4.  使用Chrome performance来发现性能瓶颈 
 



 ##### Keep-alive的作用，使用keep-alive的组件如何监听组件的切换
 * ：keep-alive是vue内置的一个组件，可以使被包含的组件保留状态，避免重新渲染，拥有以下特性
 *  1.  一般结合路由和动态路由一起使用，用于缓存组件
 *  2.  提供include和exclude的属性，两者都支持正则表达式，
 *      include表示只要名称匹配的组件都会被缓存，
 *      exclude表示任何名称匹配的组件都不会被缓存
 *      其中exclude比include的优先级更高
 *  3.  对呀两个钩子函数，
 *      activated：当组件被激活的时候触发
 *      deactivated：当组件被移除的时候触发
 


 ##### 数据响应式的原理
 * ：vue是才有数据劫持和发布者订阅者模式的方式，通过object.defineproperty()来劫持各个属性的setter，geter，在数据发生变化的时候发布给订阅者，触发相应的回调
 *      1.  使用observe对需要相应的数据进行递归，将对象的所有属性及其子属性，都加上setter和geter，这样给这个对象的某个属性赋值，会触发setter，
 *      2.  compiler解析模板指令，将模板的变量替换成数据，然后渲染视图，并且将每个指令对应的节点绑定更新函数，添加监听数据的订阅制，一旦数据发生变化到时候，更新视图
 *      3.  watcher订阅者 ，是沟通observe和compiler的通信桥梁，
 *          watcher的主要工作是：
 *          1.  在自身实例化时往属性订阅器里面添加自己，也就是dep
 *          2.  自身有一个updata的方法
 *          3.  待属性变动触发dep.notice通知时，能调用自身的updata，并触发complete的回调，完成数据更新
 * 
 *  简介：通过observe来监听model的数据变化，通过complete来解析模板指令，最终理由watcher来搭起observe和complete的桥梁，完成响应式的效果
 *  
 


 ##### object.defineproperty的缺点
 *  1.  无法监听新增属性
 *  2.  无法监听删除属性
 *  3.  无法监听数组
 


 ##### vue怎么监听数组的
 * 
 * 1.  通过遍历数组和递归数组对象，利用object.defineproperty对对象进行监听，通过重写数组方法对数组进行监听
 



 ##### vuex有哪几种属性
 * 1.state：定义应用状态的数据结果，可以在这里设置基础默认的初始状态
 * 2.getter：允许从store中获取数据，mapgetters辅助函数仅仅将store的getter映射到局部属性
 * 3.mutation：唯一更改store的方法，必须是同步函数，可以使用mapmutation
 * 4.action：提交mutation，而不是直接变更状态，可以使用异步
 * 5.module：允许将单个的store拆分多个store且同时保存在单一的状态   
 * 
 * 
 * action和mutation的区别：mutation是专注stata的修改，理论上是修改的唯一途径，action是业务代码
 *                          mutation必须是同步的，action可以是异步的单身不能直接操作stage
 *                          在视图更新的时候先更新actions在出发mutation
 *                          mutation的参数是state，包含store的数据，action的是context他是state的父级
 * 
 * mutation为啥不支持异步：vuex中状态更新的唯一途径理论上是mutation，异步操作通过action来提交mutation来实现，每个mutation执行完成后都会对应到一个新的状态变更，这样就可以打个快照保存起来，如果是异步的，就没有办法知道状态是什么时候更新的
 *
 * 
 * 开启严格模式：strict：true  ：无论 何时发生的状态变更且不是由mutation函数引起的将进行报错
 



 ### VUE3.0
 


 ##### proxy和defineProperty的区别：
 
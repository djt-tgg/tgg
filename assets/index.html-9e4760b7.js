import{_ as n,o as s,c as a,e}from"./app-0c9e2cd2.js";const p={},t=e(`<h1 id="react笔记" tabindex="-1"><a class="header-anchor" href="#react笔记" aria-hidden="true">#</a> React笔记</h1><h2 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 父传子</span>
<span class="token comment">// Parent父组件</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> Children <span class="token keyword">from</span> <span class="token string">&#39;./Children&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
  <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解构state</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/* 向子组件传入数据 change为父组件传给子组件的函数  子组件可执行此函数达到子串父的目的*/</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Children change<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>change<span class="token punctuation">}</span> list<span class="token operator">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//子组件接收数据  直接通过props接收  this.props 可解构</span>
<span class="token comment">//子传父: 可通过父组件向子组件传入一个函数,子组件通过props执行父组件的函数来达到子传父的母的</span>

<span class="token comment">// 任意组件通信  消息发布/订阅  pubsub-js</span>
<span class="token comment">//组件A</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">&#39;pubsub-js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 订阅消息</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;send&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// data为接收到的数据</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 组件B发送消息</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">&#39;pubsub-js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发送消息</span>
    <span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;send&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;发送的数据&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>send<span class="token punctuation">}</span><span class="token operator">&gt;</span>发送消息<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props的限制" tabindex="-1"><a class="header-anchor" href="#props的限制" aria-hidden="true">#</a> Props的限制</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token comment">// 需格外引入对类型作限制的包</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 子组件对接收的props作类型限制</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Children</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义props statis相当于往Children组件/类里添加属性</span>
  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span> <span class="token comment">// string类型  必填</span>
    <span class="token literal-property property">wc</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func <span class="token comment">//传值要是函数</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 指定props的默认值</span>
  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tt&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解构props</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1 <span class="token operator">&gt;</span>props的值<span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react代理" tabindex="-1"><a class="header-anchor" href="#react代理" aria-hidden="true">#</a> React代理</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在src中添加一个setupProxy的文件</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http-proxy-middleware&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&#39;/api1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>      <span class="token comment">// 默认值是false 是否让服务器知道自己的Host</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^/api1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// 路径重写</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&#39;/api2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5001&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>      <span class="token comment">// 默认值是false</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^/api2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// 路径重写</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 组件的三个生命周期状态:</span>
<span class="token comment">// 	Mount：插入真实 DOM</span>
<span class="token comment">// Update：被重新渲染</span>
<span class="token comment">// Unmount：被移出真实 DOM</span>

<span class="token comment">// 2. 生命周期流程:</span>
<span class="token comment">// 	* 第一次初始化显示: ReactDOM.render(&lt;Xxx /&gt;, containDom)</span>
<span class="token comment">// constructor()</span>
<span class="token comment">// componentWillMount() : 将要插入回调</span>
<span class="token comment">// render() : 用于插入虚拟DOM回调</span>
<span class="token comment">// componentDidMount() : 已经插入回调</span>
<span class="token comment">//   * 每次更新state: this.setState({})</span>
<span class="token comment">// componentWillReceiveProps(): 接收父组件新的属性</span>
<span class="token comment">// componentWillUpdate() : 将要更新回调</span>
<span class="token comment">// render() : 更新(重新渲染)</span>
<span class="token comment">// componentDidUpdate() : 已经更新回调</span>
<span class="token comment">//   * 删除组件: ReactDOM.unmountComponentAtNode(div): 移除组件</span>
<span class="token comment">// componentWillUnmount() : 组件将要被移除回调</span>

<span class="token comment">// 3. 常用的方法</span>
<span class="token comment">// render(): 必须重写, 返回一个自定义的虚拟DOM</span>
<span class="token comment">// constructor(): 初始化状态, 绑定this(可以箭头函数代替)</span>
<span class="token comment">// componentDidMount() : 只执行一次, 已经在dom树中, 适合启动 / 设置一些监听</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react路由" tabindex="-1"><a class="header-anchor" href="#react路由" aria-hidden="true">#</a> React路由</h2><h3 id="路由基本使用" tabindex="-1"><a class="header-anchor" href="#路由基本使用" aria-hidden="true">#</a> 路由基本使用</h3><ul><li>路由默认push跳转方式,改为replace跳转在Link标签里添加此属性即可</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js中</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/* BrowserRouter为history模式  &lt;HashRouter&gt;为hash模式*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// App.js中</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">&#39;flex&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token string">&#39;15px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">&#39;/home&#39;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">&#39;/about&#39;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>以下为路由对应的组件<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/* &lt;Switch&gt; 会遍历所有包含的 &lt;Route&gt;s 并渲染匹配的第一条 */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/* exact为精准匹配,用的比较少,不能随便开,可能会导致无法匹配二级路由 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&#39;/home&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/about&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token comment">/* 重定向Redirect ,都没有匹配上时重定向到此组件*/</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>Redirect to<span class="token operator">=</span><span class="token string">&#39;/home&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参" aria-hidden="true">#</a> 路由传参</h3><ul><li>params方式传参</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//paraps传参方式</span>
<span class="token comment">//组件通过路由链接传参</span>
<span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">&#39;/home/18/wc&#39;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>

<span class="token comment">//路由需配合接收  </span>
<span class="token operator">&lt;</span>Route  path<span class="token operator">=</span><span class="token string">&#39;/home/:age/:name&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token comment">//接收参数 this.props.match.params</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>search方式传参</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//组件通过路由链接传参 注册路由无需配置</span>
<span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">&#39;/home?age=18&amp;name=wc&#39;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
<span class="token comment">//组件接收</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search
<span class="token comment">//此时接收到的为urlencoded编码字符串,需要用querystring解析  此方法需引入</span>
<span class="token comment">//import qs from &#39;querystring&#39;  无需下载 脚手架自带</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>state方式传参</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//传参为一个对象</span>
<span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;wc&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
<span class="token comment">//接收 此传参方式参数不会被记录在浏览器的url里</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//两种跳转方式 replace和push  path为跳转路径,可url传参  第二个参数可传state参数{a:xxx,b:xxx}</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>state<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="withrouter" tabindex="-1"><a class="header-anchor" href="#withrouter" aria-hidden="true">#</a> withRouter</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//withRouter 可将一般组件加工成路由组件  一般组件没有router的那三个属性  加工后可以使用路由方法</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>withRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">Wc</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>Wc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","index.html.vue"]]);export{u as default};

import{_ as n,o as s,c as a,e}from"./app-0c9e2cd2.js";const p={},t=e(`<h1 id="ts笔记" tabindex="-1"><a class="header-anchor" href="#ts笔记" aria-hidden="true">#</a> Ts笔记</h1><h2 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 类型别名: type 类型别名 = 具体类型</span>
<span class="token keyword">type</span> <span class="token class-name">CustomArr</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> CustomArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//字面量类型</span>
<span class="token keyword">type</span> <span class="token class-name">Gender</span> <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;女&#39;</span>
<span class="token keyword">let</span> gender<span class="token operator">:</span> Gender <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span>
gender <span class="token operator">=</span> <span class="token string">&#39;女&#39;</span>
<span class="token comment">// 使用自定义类型:  字面量结合联合类型使用</span>
<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">&#39;up&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;down&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的类型指定" tabindex="-1"><a class="header-anchor" href="#函数的类型指定" aria-hidden="true">#</a> 函数的类型指定</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">//分别指定  给参数 返回值指定类型</span>
<span class="token keyword">function</span> <span class="token function">wc</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fun <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b
<span class="token comment">//同时指定  只适用于函数表达式  const 变量 = 函数体</span>
<span class="token keyword">type</span> <span class="token class-name">Wc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>
<span class="token keyword">const</span> addFun<span class="token operator">:</span> <span class="token function-variable function">Wc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b
<span class="token comment">//定义函数类型  void  标识此函数没有返回值  可选参数  ?  不能出现在必选参数前面</span>
<span class="token keyword">const</span> w <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象定义属性和方法的类型" tabindex="-1"><a class="header-anchor" href="#对象定义属性和方法的类型" aria-hidden="true">#</a> 对象定义属性和方法的类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 对象定义属性和方法的类型   对象定义属性和方法的类型  换行可以不加分号  写一行要加 ;</span>
<span class="token keyword">const</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function-variable function">fun</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;djt&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">obj</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span> playGames<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> student<span class="token operator">:</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;djt&#39;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
  num<span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">178</span><span class="token punctuation">,</span>
  <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">playGames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口interface" tabindex="-1"><a class="header-anchor" href="#接口interface" aria-hidden="true">#</a> 接口interface</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 与类型别名差不多  接口的每一行只能有一个属性或方法，每一行不需要加分号</span>
<span class="token comment">//interface可以重复定义,会合并  type不可重复定义</span>
<span class="token keyword">interface</span> <span class="token class-name">isType</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> isobj<span class="token operator">:</span> newType <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;djt&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// extends 实现类型继承</span>
<span class="token keyword">interface</span> <span class="token class-name">newType</span> <span class="token keyword">extends</span> <span class="token class-name">isType</span> <span class="token punctuation">{</span>
  gender<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type交叉类型" tabindex="-1"><a class="header-anchor" href="#type交叉类型" aria-hidden="true">#</a> type交叉类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//type 交叉类型 </span>
	<span class="token comment">// 使用 type 来定义 Point2D 和 Point3D</span>
<span class="token keyword">type</span> <span class="token class-name">Point2D</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 交叉类型 来实现接口继承的功能：</span>
<span class="token comment">// 使用 交叉类型 后，Point3D === { x: number; y: number; z: number }</span>
<span class="token keyword">type</span> <span class="token class-name">Point3D</span> <span class="token operator">=</span> Point2D <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> o<span class="token operator">:</span> Point3D <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  z<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型别名-接口-函数" tabindex="-1"><a class="header-anchor" href="#泛型别名-接口-函数" aria-hidden="true">#</a> 泛型别名--接口--函数</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//泛型别名  在类型别名后面加   相当于形参</span>
<span class="token keyword">type</span> <span class="token class-name">TypeName<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  msg<span class="token operator">:</span> <span class="token builtin">string</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  date<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token comment">//新的类型别名  使用上面的泛型</span>
<span class="token keyword">type</span> <span class="token class-name">Wc</span> <span class="token operator">=</span> TypeName<span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token comment">//&lt;&gt;号里面也可以使用类型别名</span>



<span class="token comment">// 泛型接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IdFn<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function-variable function">id</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token function-variable function">ids</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> idObj<span class="token operator">:</span> IdFn<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">ids</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//泛型函数</span>
<span class="token keyword">const</span> fun <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token punctuation">}</span>   普通函数在函数名后面加泛型<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token comment">//调用函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举-元组" tabindex="-1"><a class="header-anchor" href="#枚举-元组" aria-hidden="true">#</a> 枚举 / 元组</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//枚举  就是列出一些可选项</span>
<span class="token keyword">enum</span> wc<span class="token punctuation">{</span>
  <span class="token comment">// 枚举 后面的才是值</span>
  left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  right <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  top <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
  bottom <span class="token operator">=</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>wc<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 元组 更严谨的规定数组类型</span>
<span class="token keyword">const</span> arr<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token builtin">boolean</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface-和type的区别" tabindex="-1"><a class="header-anchor" href="#interface-和type的区别" aria-hidden="true">#</a> interface 和type的区别</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//interface  仅仅支持对象类型            type都可以</span>
<span class="token comment">//interface  可以通过extends 继承复用    type通过&amp;交叉合并复用</span>
<span class="token comment">//interface  可以重复定义,会合并         type不能重复定义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pick和omit用法" tabindex="-1"><a class="header-anchor" href="#pick和omit用法" aria-hidden="true">#</a> Pick和Omit用法</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//Pick从已有的类型中提取想要的类型</span>
<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">PickPerson</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token comment">//Omit从已有出现中排除不想要的类型</span>
<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">OmitPerson</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// OmitPerson === { name: string }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts-对请求接口封装" tabindex="-1"><a class="header-anchor" href="#ts-对请求接口封装" aria-hidden="true">#</a> Ts 对请求接口封装</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//创建实例后,封装请求和响应拦截器</span>
<span class="token comment">//对请求接口进行封装</span>
<span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">Method</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">&#39;https://xxxx&#39;</span>
<span class="token comment">// 新axios实例，基础配置</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">10000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求拦截器，携带token</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//从仓库获取token</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 判断有没有token  有就注入token到请求头</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>user<span class="token operator">?.</span>token <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>store<span class="token punctuation">.</span>user<span class="token operator">?.</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token comment">//项目中可能需要添加额外的请求头  需配置</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>


<span class="token comment">//响应拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 后台约定，响应成功，但是code不是200，是业务逻辑失败</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token operator">?.</span>code <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;业务失败&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 业务逻辑成功，返回响应数据，作为axios成功的结果</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//判断状态码</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>response<span class="token operator">?.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 删除用户信息</span>
      <span class="token comment">// 跳转登录</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span>  <span class="token number">402</span>  <span class="token number">403</span>   <span class="token number">500</span> <span class="token operator">...</span><span class="token punctuation">.</span>
    
       
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;网络错误&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>


<span class="token comment">//请求封装</span>
<span class="token comment">// 对请求接口类型进行封装</span>
<span class="token keyword">type</span> <span class="token class-name">ResData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求返回的数据全部类型</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  data<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token comment">// 请求的参数类型</span>
<span class="token comment">//Method 是axios提供的一个类型  需要导入</span>
<span class="token keyword">type</span> <span class="token class-name">ResParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  method<span class="token operator">?</span><span class="token operator">:</span> Method
  url<span class="token operator">:</span> <span class="token builtin">string</span>
  data<span class="token operator">?</span><span class="token operator">:</span> object
<span class="token punctuation">}</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>params<span class="token operator">:</span> ResParams<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 解构params参数 给method一个默认参数  因为get请求可以不填</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> method <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> params
  <span class="token comment">// &lt;T,ResData&lt;T&gt;&gt;  两个泛型  这里第一个参数可以随便传,因为只要第二个参数  第二个为请求过来的全部数据类型</span>
  <span class="token keyword">return</span> instance<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> ResData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    method<span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    <span class="token comment">// 如果是get请求,传参用params  post用data</span>
    <span class="token punctuation">[</span>method<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;params&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span> data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> instance <span class="token punctuation">}</span>


<span class="token comment">//调用  api文件中</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span>

<span class="token comment">//以登录举例</span>
<span class="token keyword">type</span>  <span class="token class-name">Useer</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">//定义返回数据的类型</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> 传参类型<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};

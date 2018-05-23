(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(n,s,a){"use strict";a.r(s);var t=a(0),p=Object(t.a)({},function(){var n=this.$createElement,s=this._self._c||n;return s("div",{staticClass:"content"},[this._ssrNode('<h1 id="使用requestanimationframe进行优化"><a href="#使用requestanimationframe进行优化" aria-hidden="true" class="header-anchor">#</a> 使用requestAnimationFrame进行优化</h1>'),this._ssrNode("<p>","</p>",[this._ssrNode('<a href="https://codyhouse.co/gem/auto-hiding-navigation/" target="_blank" rel="noopener noreferrer">',"</a>",[this._ssrNode("Auto-Hiding Navigationtext"),s("OutboundLink")],2)]),this._ssrNode('<div class="language-js extra-class"><pre class="language-js"><code><span class="token keyword">var</span> scrolling <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'scroll\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>scrolling <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tscrolling <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>requestAnimationFrame<span class="token punctuation">)</span>\n\t\t\t<span class="token operator">?</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>autoHideHeader<span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">:</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>autoHideHeader<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js extra-class"><pre class="language-js"><code>  <span class="token keyword">function</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>\n    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> <span class="token constant">RAF</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> window<span class="token punctuation">.</span>requestAnimationFrame <span class="token operator">||</span> window<span class="token punctuation">.</span>webkitRequestAnimationFrame <span class="token operator">||</span> window<span class="token punctuation">.</span>mozRequestAnimationFrame <span class="token operator">||</span> window<span class="token punctuation">.</span>oRequestAnimationFrame <span class="token operator">||</span> window<span class="token punctuation">.</span>msRequestAnimationFrame <span class="token operator">||</span> <span class="token keyword">function</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h1 id="简单直接的兼容性写法"><a href="#简单直接的兼容性写法" aria-hidden="true" class="header-anchor">#</a> 简单直接的兼容性写法</h1><div class="language-js extra-class"><pre class="language-js"><code><span class="token keyword">var</span> vendors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'webkit\'</span><span class="token punctuation">,</span> <span class="token string">\'moz\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vendors<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>window<span class="token punctuation">.</span>requestAnimationFrame<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> vp <span class="token operator">=</span> vendors<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        window<span class="token punctuation">.</span>requestAnimationFrame <span class="token operator">=</span> window<span class="token punctuation">[</span>vp <span class="token operator">+</span> <span class="token string">\'RequestAnimationFrame\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        window<span class="token punctuation">.</span>cancelAnimationFrame <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>vp <span class="token operator">+</span> <span class="token string">\'CancelAnimationFrame\'</span><span class="token punctuation">]</span>\n        <span class="token operator">||</span> window<span class="token punctuation">[</span>vp <span class="token operator">+</span> <span class="token string">\'CancelRequestAnimationFrame\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre></div>')],2)},[],!1,null,null,"1d4a21a6");s.default=p.exports}}]);
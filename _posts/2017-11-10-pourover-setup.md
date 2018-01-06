---
layout: blog
emoji: ☕
title: "Coffee setup"
category: fun
intro: "My current setup for making delicious pourovers ☕"
gradient: "#cdecff, #CFBAE1"
permalink: /coffee/
---
{% include poststyles.md %}

{% jsonball coffee from file /Users/katmeister/projects/katmeister.github.io/_includes/coffee.json %}

{{ wrapper_white }}

{{ writing }}
<h1 class="dib bb b--lightest-blue" style="line-height:0.6;border-width:8px">Beginner's essentials</h1>

If you're just getting started with making pourovers at home, here's what I recommend to get started. At the very least, you'll want a dripper, grinder, scale, and kettle.
</div>

<div class="flex flex-wrap flex-row mb3 mb4-l">
  {% assign essentials = coffee.items | where: "tag", "essential" %}
  {% for item in essentials %}
    <article class="fl w-100 w-50-ns pa2 pa3-l monospace">
      <div class="flex-l items-center br2 ba b--black-05 pa3 pa4-ns box-shadow">
        <div class="db w-100 w-30-l pr4-l tc">
          <div class="contain h3 h4-l mb3 mb0-l br2" style="background:url({{ item.img }}) no-repeat center"></div>
        </div>
        <div class="db w-100 w-70-l">
          <a href="{{ item.link }}"><h1 class="serif f5 f3-l mb0">{{ item.name }}</h1></a>
          <span class="Dot bg-light-blue"></span> <span class="f6 black-50 b dib">{{ item.type }}</span>
          <p class="serif f5 lh-copy measure mt2 mid-gray mb1">{{ item.note }}</p>
        </div>
      </div>
    </article>
  {% endfor %}
</div>

{{ writing }}
  <h2 class="dib bb b--lightest-blue" style="line-height:0.55;border-width:6px">Also important...</h2>

  <div class="flex flex-wrap flex-row mb3 mb4-l">
    {% assign more_essentials = coffee.items | where: "tag", "essential_plus" %}
    {% for item in more_essentials %}
    <article class="fl w-100 w-50-ns">
      <div class="flex-l items-center">
        <div class="db w-100 w-30-l pr4-l tc">
          <div class="contain h3 h4-l mb3 mb0-l br2" style="background:url({{ item.img }}) no-repeat center"></div>
        </div>
        <div class="db w-100 w-70-l">
          <a href="{{ item.link }}"><h1 class="serif f5 f4-l mb0">{{ item.name }}</h1></a>
          <p class="serif f5 lh-copy measure mt2 mid-gray mb1">{{ item.note }}</p>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</div>

{{ end-block }}

---
layout: blog
emoji: ☕
title: "Coffee setup"
category: fun
intro: "My current setup for making delicious pourovers ☕"
gradient: "#CFBAE1, #94C7B6"
permalink: /coffee/
tags:
  - Essentials: light-blue
  - Upgrades: gold
---
{% include poststyles.md %}

{% jsonball coffee from file /Users/katmeister/projects/katmeister.github.io/_includes/coffee.json %}

{{ wrapper_white }}

<div class="monospace">
  {% for tag_hash in page.tags %}
    {% for tag in tag_hash %}
      <div class="dib mr2">
        <span class="Dot bg-{{ tag[1] }}"></span> <span class="f6 black-50 b">{{ tag[0] }}</span>
      </div>
    {% endfor %}
  {% endfor %}
</div>

<div class="flex flex-wrap flex-row">
  {% assign sorted_items = coffee.items | sort: "name" %}
  {% for item in sorted_items %}
    <article class="fl w-100 w-50-m w-third-l pa2 pa3-l monospace">
      <div class="br2 ba b--black-10 pa2 pa2 pa3-ns box-shadow">
        <div class="flex justify-between">
          <div>
            <a href="{{ item.link }}"><h1 class="serif f5 f4-l mb0">{{ item.name }}</h1></a>
            <span class="Dot bg-{{ item.tag }}"></span> <span class="f6 black-50 b dib">{{ item.type }}</span>
          </div>
          <img src="http://tachyons.io/img/avatar_1.jpg" class="br2 h3 w3">
        </div>
        <p class="f6 lh-copy measure mt2 mid-gray mb1">{{ item.note }}</p>
      </div>
    </article>
  {% endfor %}
</div>

{{ end-block }}

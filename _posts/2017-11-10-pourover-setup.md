---
layout: blog
emoji: ☕
title: "Coffee setup"
category: fun
intro: "My current setup for making delicious pourovers ☕"
gradient: "#CFBAE1, #94C7B6"
permalink: /coffee/
---
{% include poststyles.md %}

{% jsonball coffee from file /Users/katmeister/projects/katmeister.github.io/_includes/coffee.json %}

{{ wrapper_white }}

{{ writing }}
# The essentials
fadsfsdfsd
</div>

<div class="flex flex-wrap flex-row">
  {% assign essentials = coffee.items | where: "tag", "essential" %}
  {% for item in essentials %}
    <article class="fl w-100 w-50-ns pa2 pa3-l monospace">
      <div class="br2 ba b--black-05 pa2 pa2 pa4-ns box-shadow">
        <div class="flex justify-between">
          <img src="http://tachyons.io/img/avatar_1.jpg" class="br2 mr2 mr3-ns h4 w4">
          <div>
            <a href="{{ item.link }}"><h1 class="serif f5 f3-l mb0">{{ item.name }}</h1></a>
            <span class="Dot bg-light-blue"></span> <span class="f6 black-50 b dib">{{ item.type }}</span>
            <p class="serif f5 lh-copy measure mt2 mid-gray mb1">{{ item.note }}</p>
          </div>
        </div>
      </div>
    </article>
  {% endfor %}
</div>

{{ end-block }}

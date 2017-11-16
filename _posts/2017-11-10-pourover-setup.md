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
items:
  - name: Kalita Wave 185
    type: Dripper
    tag: light-blue
    link: https://www.amazon.com/Kalita-Dripper-people-05039-Carita/dp/B004W5KPSQ/ref=sr_1_3?ie=UTF8&qid=1510359562&sr=8-3&keywords=kalita+wave+185&dpID=41fMd3bHUTL&preST=_SX300_QL70_&dpSrc=srch
    note: "Really easy to learn with."
  - name: Hario Mini Mill Slim
    type: Grinder
    tag: light-blue
    link: https://www.amazon.com/Hario-Mini-Mill-Coffee-Grinder/dp/B001804CLY/ref=sr_1_3?ie=UTF8&qid=1510360145&sr=8-3&keywords=hario+mini+mill+slim+hand+coffee+grinder&dpID=31Q-aLSaSCL&preST=_SY300_QL70_&dpSrc=srch
    note: "Took a little time to get used to, but I can now grind 20g of grounds in ~30 seconds."
  - name: Hario Drip Scale/Timer
    type: Scale
    tag: light-blue
    link: https://www.amazon.com/Hario-Coffee-Drip-Scale-Timer/dp/B009GPJMOU/ref=sr_1_1?ie=UTF8&qid=1510363404&sr=8-1&keywords=hario+scale&dpID=41iYyNEsA0L&preST=_SY300_QL70_&dpSrc=srch
    note: "Rad combination scale designed specifically for pourovers."
  - name: Bonavita Gooseneck Kettle
    type: Kettle
    tag: light-blue
    link: https://www.amazon.com/Bonavita-Digital-Variable-Temperature-Gooseneck/dp/B005YR0F40/ref=sr_1_4?s=kitchen&ie=UTF8&qid=1510361032&sr=1-4&keywords=bonavita+electric+kettle&dpID=41m5oiUYEaL&preST=_SY300_QL70_&dpSrc=srch
    note: "Adjustable temperature settings make this useful for both my tea and coffee."
  - name: Wave Filter 185
    type: Filters
    tag: light-blue
    link: https://www.amazon.com/Kalita-Filter-person-Brown-pieces/dp/B0038LE5PE/ref=sr_1_5?ie=UTF8&qid=1510364163&sr=8-5&keywords=kalita+wave+185+filters&dpID=51JqDLnRqoL&preST=_SX300_QL70_&dpSrc=srch
    note: "Kalita drippers have specific filters that you should buy!"
---
{% include poststyles.md %}

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
  {% assign sorted_items = page.items | sort: "name" %}
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

---
layout: blog
emoji: ☕
title: "Coffee at home"
category: fun
intro: "How I got into making pourovers at home and how you can, too! ☕"
gradient: "#cdecff, #CFBAE1"
permalink: /coffee/
---
{% include poststyles.md %}

{{ wrapper_white }}

{{ writing }}
I started learning more about coffee, particularly pourovers, mid-2017. It's no secret that I'm not exactly the most gifted when it comes to making anything remotely edible. But timing an even pour in order to extract sweet berries instead of bitter tangs? Finding just the right grind size to get a balanced body? I was hooked.

I started keeping a notebook of all my experiments. A spreadsheet of craft beans I've tried with tasting notes. Not only did I enjoy the scientific approach to improving my skills, I began looking forward to having my own little morning ritual.

These are my continuous goals by making coffee:
<ul class="pl5">
  <li>Improve my palette to distinguish a range of notes</li>
  <li>Quickly adapt to different bean origins and roasts</li>
</ul>

Making coffee will certainly be a hobby I continue to work on for life. If you're just starting out, here's the gear and resources I used (and still use) to help you on your way! I hope you find as much joy in this ritual that I have. 😊

<h2 class="dib bb b--lightest-blue mt5" style="line-height:0.6;border-width:8px">Beginner's essentials</h2>

If you're just getting started with making pourovers at home, here's what I recommend to get started. At the very least, you'll want a dripper, grinder, scale, and kettle.
</div>

<div class="flex flex-wrap flex-row mb3 mb4-l">
  {% assign essentials = site.data.coffee.items | where: "tag", "essential" %}
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
  <h3>Also important...</h3>

  <div class="flex flex-wrap flex-row mb3 mb4-l">
    {% assign more_essentials = site.data.coffee.items | where: "tag", "essential_plus" %}
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

  <h2 class="dib bb b--light-pink mt4" style="line-height:0.6;border-width:8px">Guides and books</h2>

  [Kalita Wave Coffee Brewing Intensive](https://www.youtube.com/watch?v=mupueSMHBJQ)
  <br>Nick Cho of Wrecking Ball is someone I continuously look to for self-taught guidance. This video is ~5 min and was a huge help when I first started out.

  [From Plant to Cup: Brew an Amazing Cup of Coffee](https://www.skillshare.com/classes/From-Plant-to-Cup-Brew-an-Amazing-Cup-of-Coffee/351651108)
  <br>This hour long Skillshare class from Blue Bottle is another great learning resource for beginners.

  [How to Make Coffee: The Science Behind the Bean](http://amzn.to/2DRGvpq)
  <br>I wanted to know more about the history and scientific breakdown of what makes coffee so great!
</div>

{{ end-block }}

---
layout: post
title: "Coffee at home"
intro: "How I got into making pourovers at home and how you can, too! ☕"
gradient: "#cdecff, #CFBAE1"
permalink: /coffee/
---
{% include poststyles.md %}

{{ wrapper_white }}

{{ writing }}
I started learning more about coffee, particularly pourovers, mid-2017. It's no secret that I'm not exactly the most gifted when it comes to making anything remotely edible. But timing an even pour in order to extract sweet berries instead of bitter tangs? Finding just the right grind size to get a balanced body? I was hooked. Not only did I enjoy the scientific approach to improving my skills, I began looking forward to having my own little morning ritual.

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

  <h2 class="dib bb b--light-yellow mt4" style="line-height:0.6;border-width:8px">Beans!</h2>

  And of course, the fun stuff: beans! When you're just starting out, be aware that it's all a learning process. Don't be discouraged if you can't quite develop the flavor profiles printed on the bag. 😄 Some notes here:
  * When trying to tweak the taste of your pourovers, remember to adjust the grind size of your beans. Too bitter? Try a courser grind. Too sour or flat? Try a finer grind.
  * Buy beans from your local roastery! Build relationships and ask your baristas for brewing advice. If you're in the east bay, beans I've been liking are [Aka Coffee](https://www.aka.coffee) and [Bicycle Oakland](https://www.bicyclecoffeeco.com).

  Enjoy your coffee! ☕
</div>

{{ end-block }}

---
layout: post
template: post
date: 2013-02-25
tags:
- nation building
- game design
title: "Nation Builder (Game Update)"
permalink: /post/43971448957/nation-builder-game-update
description: "Nation Builder (Game Update)"
---
Just a quick post tonight, as it's already pretty late.

I've been building the game I mentioned in [this post](http://blog.randylubin.com/post/42250698277/game-idea-inspired-by-the-origins-of-political-order). The working title is Nation Builder but I'll likely change it soon.

I spent a good chunk of this weekend working on it and the process has been a lot of fun. I love the flow state associated with coding and that it's for a game just amps up the fun.

I usually try to isolate just one new concept per project I take on but I'm biting off a bit more this time. The two big new things are [HTML5's Canvas](http://en.wikipedia.org/wiki/Canvas_element) and [Backbone.js](http://backbonejs.org/). Canvas lets you draw objects in HTML and is fairly easy to learn. Backbone.js is a Model-View-Presenter framework that is client-side and is useful for making complex, single-page web apps; the learning curve is much steeper but it's very powerful and I'm getting the hang of it.

The big vision for the game is incredibly complex and I'm hoping to quickly churn out rough prototypes that feature just a small subset of the game but are playable on their own. I was torn about whether to start with a map based game or have it all a statistical model. While just numbers would be easier, I decided to go with the map as I'll have more fun interacting with it and I'll need to keep my motivation high to see it through.

When thinking through some of the models, I've gone on some really fun tangents. The game needs to simulate population growth and my initial thought was to use a [logistic map](http://en.wikipedia.org/wiki/Logistic_map). Logistic maps are the simplest equations that can behave chaotically; I first encountered them when reading up on Chaos Theory and am having fun with them in the game. From there I learned about the [Lotka-Volterra Equation](http://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equation), which models the population of predator and prey over time. It's very cool and I'll be building into the game soon. If you're interested in learning more about that equation, check out [this video](http://vimeo.com/23839605) by the consistently inspiring Bret Victor.

That's all for this post. Hopefully I'll get another chunk of the game done soon and have something interactive to share!

---
title: Nation Building Continued - and a bit on Angular
date: 2014-05-12 00:00:00 Z
permalink: "/post/85503914238/nation-building-continued-and-a-bit-on-angular"
tags:
- game design
- nation building
layout: post
template: post
description: Nation Building Continued - and a bit on Angular
---

This week I've made a lot more progress on my [civilization building game](http://blog.randylubin.com/post/84806005103/nation-building-redux).

There isn't a fully playable game yet but there's a good chunk of early exploration written. I've also built several modules which will help me build the rest of the game more quickly.

At the core of the game is a Finite State Machine - the player moves the band through different states via what feels like a choose-your-own-adventure type mechanic. I've tried to build in some complex systems / loops, though so it feels non-linear / dynamic. I've also built in some mechanisms for procedural generation of content. In addition to the main state machine, I've added interrupts for various events.

I've been building the game in Angular.js and for the most part enjoying it. The framework definitely has its idiosyncrasies but once you get past them it's wonderful for prototyping.

I'm also learning a lot more about Angular best practices. At first I had all the logic in my controller but now I'm refactoring it into various services. I'm also using [](https://github.com/angular/angular-seed) which is a great foundation.

I expect to make more great progress this week and might include a link for early play-testing!
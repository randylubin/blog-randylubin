---
title: Update on Nation Builder
date: 2013-04-01 00:00:00 Z
permalink: "/post/46828584882/update-on-nation-builder"
tags:
- nation building
- game design
layout: post
template: post
description: Update on Nation Builder
---

After a several week break, I finally returned to coding Nation Builder. I only logged a few hours this weekend but I'm hoping to pick up the pace and maybe post an hour or two per night.

I've decided to put the current pre-alpha online. Disclaimer: it's not really a game yet - there's no winning, there's no balance, and it's missing some key elements in the game loop. I just though it'd be nice to post what I've written so far.

![](/images/5b030b2bcf02369df0c6048ead86ee1ac9e4dca096cfef8bc94dad3e0004a988.png)

The pre-alpha of [Nation Building](http://nationbuilding.randylubin.com/)

The code at [GitHub](https://github.com/randylubin/Nation-Building/tree/master/Band%20Expansion)

### The current state of the game
A new map generates each refresh with random water and placement of bands.

You control a band of hunter-gathers and can order them (by clicking on a hex) to stay put or to explore adjacent territories. If you stay in the same place too long, you exhaust the local ecology and your population starts to crash.

There are AI controlled bands - they move to whatever neighboring hex has the greatest ecology.

### Next up
First order of business is balancing the growth / decay dynamics. For testing, I've built a very crude model but it's probably time to use the dynamical systems / chaos stuff I was playing with at the beginning.

I also need to put in the logic of what happens when two bands meet. I'm planning to give the player options: trade, fight, flee, etc.

Finally, I want to add the win conditions. This will likely involve discovering certain tech that allows the band to become an agrarian tribe.
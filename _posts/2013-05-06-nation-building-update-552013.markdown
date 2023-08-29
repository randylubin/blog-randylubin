---
title: Nation Building Update (5/5/2013)
date: 2013-05-06 00:00:00 Z
permalink: "/post/49755717622/nation-building-update-552013"
tags:
- nation building
- game design
layout: post
template: post
description: Nation Building Update (5/5/2013)
---

After a few lazy weeks, I had a very productive day on Nation Building! It feels really good to be coding again. I'll provide a brief overview of my updates. You can check out the latest version [here](http://nationbuilding.randylubin.com/).

## Keyboard Controls

I added a module that monitors keyboard inputs and acts on them when appropriate. The two current uses are:

1.  You can issue movement orders to your band
2.  You can resolve a decision by hitting the number of the choice

The movement keys map to the neighboring territories like this:

![](/images/cfea1ffbafacfa8dc70b5afd5d3faf4b13cf380e83000efe60a2f49b1f986f7c.gif)

If you don't want to use the keyboard, you also still click to both select movement and choices.

The module was a little tricky to create but I can now easily extend it to encompass any other actions.

## Win Conditions
I now have a game loop checking for win conditions. The only way to win right now is by selecting 'Win the Game' during a random 'Decision' event, but it'll be easy to extend the conditions to something much more interesting.

That's all for today but I hope to get a few more hours in tomorrow night.
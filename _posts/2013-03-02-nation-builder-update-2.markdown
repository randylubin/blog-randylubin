---
layout: post
template: post
date: 2013-03-02
tags:
- nation building
- game design
title: "Nation Builder - Update 2"
permalink: /post/44354891835/nation-builder-update-2
description: "Nation Builder - Update 2"
---
This week I was able to put in a few more hours after work on the game I've been [talking about](http://blog.randylubin.com/post/43971448957/nation-builder-game-update).

Early in the week, I built it to a point where it:

*   Created a unique map with land and water
*   Selected one territory to be populated
*   Applied a logistic growth model to grow the populated territories
*   Expanded territories to adjacent territories once they grew above a population of 150 (Dunbar's Number)

Here's a shot of the map a few turns in; the numbers are the population in that territory:
![](/images/00793f7ebe518d35947504da382ae45dcdf5fe16afc21c16aa8569e9ec8b8a98.png)

Later in the week I did a major refactoring of the code to take advantage of [RequireJS](http://requirejs.org/). This allows me to break the Backbone App into many files in different folders. It was a bit of a headache to port it over but my codebase is now much easier to manage.

With some of the guts of the simulation behind me, I'm starting to create the game part of the app. I'm going to start by creating a simple game that just involves civilizations at the Band level (groups of 20 kinsmen). Once that's complete, I'll share it here so you can play it.

I have some exciting game mechanics in store for as the game goes on but I'll keep it a surprise for now...
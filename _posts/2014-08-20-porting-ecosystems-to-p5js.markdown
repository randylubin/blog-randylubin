---
layout: post
template: post
date: 2014-08-20
tags:
- processing
- programming
title: "Porting Ecosystems to p5.js"
permalink: /post/95259972368/porting-ecosystems-to-p5js
description: "Porting Ecosystems to p5.js"
---
[Check out Ecosystem with p5.js](http://randylubin.github.io/ecosystem-p5js/)

Back in 2012, I was experimenting with Processing, a programing language / environment optimized for generative art. My main output was 'Ecosystem' which I talked about [here](http://blog.randylubin.com/post/22111666178/ecosystem-a-little-art-project).

Processing was great but translated very poorly to the web, users had to view it through a Java applet. I tried an alternative, Processing.js, but it didn't work well and the code seemed inefficient.

Last week I found [p5.js](http://p5js.org/) which aims to follow Processing's vision and make it live on the web. After poking around I decided to port Ecosystem over to p5.js

![](/images/9f87dcdc5e90d1e3e1d2a7f26d66a4f404ec8b4117636a3a3d093a9ea6dde969.png)

The transition wasn't terrible but there were definitely some rough patches. The biggest change was replicating the Java-style objects and classes in Javascript. Other issues arose in converting the Vectors. Finally, there were some scope issues that I had to track down.

Overall, I'm happy with p5.js and would do another small project with it. For something more ambitious, I would probably use [EaselJS](http://www.createjs.com/#!/EaselJS)

Ecosystem's code is on GitHub [here](https://github.com/randylubin/ecosystem-p5js) and a demo lives [here](http://randylubin.github.io/ecosystem-p5js/)
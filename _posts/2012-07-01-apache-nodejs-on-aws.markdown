---
title: Apache -> Node.js on AWS
date: 2012-07-01 00:00:00 Z
permalink: "/post/26290775909/apache-nodejs-on-aws"
layout: post
template: post
description: Apache -> Node.js on AWS
---

<p>A quick technical post this week. I've done away with Apache on my AWS server and am now using Node.js for all my web server needs.</p>&#13;
<p><strong>The Problem</strong></p>&#13;
<p>I'm constantly creating little web apps, for fun and to learn new concepts. I want to run them simultaneously and as separate apps. I've toyed around with <a href="http://nodester.com/">Nodester</a> and <a href="https://nodejitsu.com/">Nodejitsu</a> (Heroku for Node.js) but wanted root access to the server. When I first started with Node.js I was using Apache on my <a href="https://aws.amazon.com/free/">free AWS</a> server and setting up a new virtual host for each app. It worked alright but was a pain to quickly add new apps.</p>&#13;
<p><strong>The Solution</strong></p>&#13;
<p>I wrote a Node.js Server to listen in on port 80 and then proxy my apps running on various other ports. I started fresh on a new EC2 instance and didn't bother to install Apache.</p>&#13;
<p>The server was just a few lines of code and now I can add new apps with one line of code and restarting the Node.js app; much easier than what I was doing with Apache.</p>&#13;
<p>You can check out the server code on <a href="https://gist.github.com/3029265">GitHub</a></p>&#13;
<p>I highly recommend trying this out if you're in a similar situation; feel free to reach out if you have any questions.</p> 
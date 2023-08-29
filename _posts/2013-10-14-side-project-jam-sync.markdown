---
title: 'Side Project: Jam-Sync'
date: 2013-10-14 00:00:00 Z
permalink: "/post/64003279316/side-project-jam-sync"
tags:
- projects
- programming
layout: post
template: post
description: 'Side Project: Jam-Sync'
---

Happy to announce the launch of another side project: [Jam-Sync](http://randylubin.github.io/jam-sync/#/). 

Jam-Sync is a collaboration with my younger brother, [Greg](http://greglubin.com/). It's a simple web app that allows musicians to know what chord to play while jamming. It's meant for multiple musicians in the same room, who can put their phone, tablet, or laptop in view while they play.

![](/images/c63cb2334031b7c56127e9f41f1dcb827d89ea5c8f5ecb578801fe848f5b958a.png)

We got the idea during Dropbox happy hour this summer. It was a great party and late in the evening we found our way to Dropbox's awesome music room. Greg plays piano and I play guitar. We picked up a drummer and bass player and started jamming. Slight problem: we kept forgetting what chord we should play as we went through the progressions.

Greg was living with me for the summer, doing an internship in the tech scene. He's been teaching himself to code and we were looking to collaborate on a fun project. Soon after the Dropbox jam session we chose the problem from that night; we decide to build an app to help musicians stay on the right chord when jamming.

We built the first prototype in a few hours and have since added some key features such as editing the chords, changing the beats-per-minute, and having multiple 'rooms' a user can enter.

It was fun and easy to build. We used Angular for the front-end and Firebase to sync between clients. Depending on interest, there are a bunch of directions we can extend the app: longer chord progressions, different time signatures, suggested scales, and diagrams to show how to play the chords.

Check it out [here](http://randylubin.github.io/jam-sync/#/) and use it the next time you jam!



_Geeky side-story: Clock Skew_

Getting the starting time to sync between clients was no easy task. We thought we only had to worry about latency and aimed to get around it by syncing a start time far enough in the future. Latency was the least of our time problems.

We learned that most devices have different internal clock times - the deviation is known as [clock skew](http://en.wikipedia.org/wiki/Clock_skew). Lucky for us, Firebase can estimate the difference between local time and server time - check it out [here](https://www.firebase.com/docs/managing-presence.html). With the Firebase fix, it was easy to adjust for the skew and get multiple devices to start the chord progression at the same time - crisis avoided!



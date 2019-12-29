---
layout: post
template: post
date: 2017-06-29
tags:
- encounter bot
- rpgs
- tracery
- twitter bot
title: "Making a interactive story bot"
permalink: /post/162413285163/making-a-interactive-story-bot
description: "Making a interactive story bot"
---
<p>Yesterday, I made a Twitter bot that creates minor story conflicts and then facilitates their resolution. It’s called <a href="https://twitter.com/EncounterBot">Encounter Bot</a>, you can start collaborating by replying to a tweet.</p><figure class="tmblr-full" data-orig-height="376" data-orig-width="588"><img src="/images/cba64a854dbe55e15b5a3dba704a5c347737fd1e44c42026f04d96708df74e92.png" data-orig-height="376" data-orig-width="588"></figure><p><br></p><p>I made the bot with <a href="http://tracery.io/">Tracery</a> / <a href="http://cheapbotsdonequick.com/">Cheap Bots Done Quick</a>&nbsp;and it was incredibly easy to get started. At it’s core, there’s a list of locations (e.g. abandoned temple) and threats (e.g. angry noble). Every three hours, the bot picks a random location and threat and Tweets out the encounter.</p><figure class="tmblr-full" data-orig-height="544" data-orig-width="521"><img src="/images/06f7d2e98991ded4855287485a68c634f757da74fafdb68918b33e71a3328e3e.png" data-orig-height="544" data-orig-width="521"></figure><p><br><br>When a player replies to a prompt, the bot then randomly selects a response (e.g. success at a cost, abysmal failure). The player can then keep replying and receiving responses until they decide to end the story by writing&nbsp;‘The End’.<br><br></p><figure class="tmblr-full" data-orig-height="876" data-orig-width="628"><img src="/images/6048d0864618912e3e0339eb4db20739795eb66b7548061556e73dcf25f215ce.png" data-orig-height="876" data-orig-width="628"></figure><p><br></p><p>I posted the bot to a few RPG communities and there’s already been a flurry of interaction. You can skim the bot’s feed to see old stories and those in progress. Reply to any prompt to start your own!</p><p>The bot was so easy to make that I’ll likely make some more. I’ve shared the&nbsp;<a href="http://cheapbotsdonequick.com/source/EncounterBot">Encounter Bot source code</a>, feel free to remix it!</p>
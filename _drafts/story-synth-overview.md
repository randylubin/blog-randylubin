---
layout: post
template: post
date: 2021-01-22 16:31:08 +0000
tags:
- Story Synth
title: Story Synth Overview
description: All about Story Synth, a web platform for prompt-driven storytelling
  games.

---
A few months back I launched Story Synth, a web platform for designing, playing, and sharing prompt-driven storytelling games. I'm loving how it's shaping up and hope to continue expanding it for years to come. This post will cover the past, present, and future of the platform.

Quick links:

* [https://storysynth.org](https://storysynth.org "https://storysynth.org") - the platform
* [https://docs.storysynth.org](https://storysynth.org "https://storysynth.org") - the guides and documentation
* [Dawn of the Monster Invasion](https://storysynth.org) - my first game on the platform
* [Around the Realm](https://storysynth.org/#/Games/Around-The-Realm/) - my second game on the platform

## The Goal

The goal for Story Synth is to make it as easy as possible for game designers to go from idea to playable game. Making a game is as simple as adding content to a Google Sheet and then sharing the link.

The platform already supports six different game formats, a variety of visual customizations, and a handful of functional extensions. I plan to keep enhancing the platform in many directions to enable more diverse forms of play.

## The Backstory

One side effect of pandemic social distancing is that it's become difficult to quickly design and playtest games with friends. Pre-pandemic, I'd grab a stack of index cards, design a game the hour before a playtest, and adapt it on the fly as the game progressed. None of that was feasible with all the players being remote.

I'd looked into online tabletop tools like Roll20, Tabletopia, and Virtual Tabletop Simulator, but they all suffered from steep learning curves, tedious asset pipelines (getting content into the platform), and they optimized for much more complex games than I was envisioning (e.g. board games, games with miniatures on a map). With no good tool at hand, I decided to create my own platform, specifically geared toward lightweight prompt driven games.

I built the Story Synth platform to initially support [Dawn of the Monster Invasion](https://storysynth.org), which became my [Golden Cobra](http://goldencobra.org/) submission. Soon after finishing the game, I launched the Story Synth platform to the public so that other designers could create games through it. The game + platform ended up winning the Golden Cobra prize for Best New Tool which was a nice honor!

## The Forever Project

## Creating a Game

Designers create new games by adding their content to Google Sheets. There are templates available for a variety of game types, most of which involve different ways of presenting prompts to the players (Ex: For the Queen, A Quiet Year).

After crafting their game in the sheet, Designers can paste a link to that sheet into the Story Synth homepage. The app then uses the sheet data to automatically assemble the game.

The designer then has access to a page for their game that lets them generate new sessions. The game page isn't automatically shared anywhere but the designer can distribute the link as broadly as they like. When in a game session, everyone at the same URL sees the same content in realtime, which makes it easy to play online.

From there, designers can iterate on their game as easily as updating their sheet and refreshing their webpage.

**_Customizing a Game_**

There's also plenty of room for game customization in both style and meta-data. By adding 'option' rows in the Google Sheet, designers can tweak the visual style of their game (with CSS). They can also add a cover image, game title, byline, blurb and other information about the game.

Further - the prompts themselves can contain HTML elements, which enable advanced game customization such as embedding images in the prompts or having different styles on different cards.

None of this advanced customization is necessary though - you can design games on Story Synth with zero coding at all.

**_Formats_**

Story Synth currently has six game formats:

* Shuffled – a series of ordered prompts followed by shuffled prompts, can optionally use multiple sequential decks
* Timed – each player receives unique prompts at different times based on a shared stopwatch
* Secrets – each player receives a secret prompt each round
* Monster – a series of ordered prompts spread over rounds; some rounds have multiple prompts
* Slot Machine – a series of cards with randomized content, drawn from each of several lists
* Phases – the game rotates through a series of a phases, with each phase drawing from a corresponding deck

**_What's Next_**

I'm going to keep adding new features, formats, extensions and more. In the short term, I'm working on a series of extensions (e.g. dice roller, standard card deck, lists, light state tracking, etc).

I'm also keen to get more designers making and sharing games on Story Synth and I'd love to help out if you have any interest!

Don't hesitate to reach out if you have any questions, suggestions or feature requests...
---
layout: post
template: post
date: 2021-02-08 19:14:15 +0000
tags: []
title: Prerendering Vue for Story Synth Unfurls
description: A look into how I refactored my Vue.js app Story Synth to have custom
  unfurls for different games.

---
This weekend I went down a bit of a rabbit hole trying to get social media unfurls to work properly for specific games in Story Synth (which is built in Vue.js). In the end, I got it working but I had to make tweaks up and down the stack to get there!

![Around the Realm unfurl, showing the game's logo](/images/screen-shot-2021-02-07-at-8-22-04-am.png "The final unfurl for Around the Realm")

## The Problem

Social media unfurls are when sites like Twitter or Facebook as well as messaging apps take an embedded link and expand it to show a photo and maybe a description.

Unfurls are based on a page's metadata – you can make your own by adding the [relevant meta tags](https://css-tricks.com/essential-meta-tags-social-media/) to your page's head. When I first built Story Synth, I added an image and description for the site and it shows up on any Story Synth link.

![An unfurl of a link to Story Synth homepage, showing the Story Synth logo](/images/screen-shot-2021-02-07-at-8-19-44-am.png "A generic Story Synth unfurl")

This looks good enough for the homepage but I want specific games to have their own unfurls with the cover image for the game. Without that customization, all Story Synth links look the same at a glance.

When you make a simple static site, customization is easy, just include different meta-tags on each page. Story Synth, however, is a single page, client side app that is assembled in the user's browser. Because the unfurl algorithms don't use javascript, they only see the unassembled Story Synth homepage, no matter what URL they visit.

Because I wanted to keep my app client-side only (i.e. not spinning up a server for server side hosting) I had to jump through a bunch of hoops to get the unfurls working properly.

## The Solution

The overall solution had two main solutions:

* Using [Vue-Meta](https://vue-meta.nuxtjs.org/) to dynamically add meta tags to custom pages
* Using [Prerender-SPA](https://www.npmjs.com/package/vue-cli-plugin-prerender-spa) to pre-build pages with the proper metadata

But each of those required a bit of refactoring and debugging to get working properly. Here's an overview of each library and what it took to get working properly.

### Using Vue-Meta to Customize Meta Data

Story Synth is a Vue.js app that has only one page, with a bunch of custom components inside it. Depending on the URL, different content is shown via the components (e.g. game launchers, game sessions). Vue-Meta is a library that lets you update the meta tags based on what components used at a given URL.

#### Step One: Remove existing meta tags

First I had to remove my existing meta tags from my index.html page – otherwise I would have both the old tags and the new tags showing up on each game page.

#### Step Two: Install Vue-Meta

The installation process is fairly straight forward and the instructions are all available on the [Vue-Meta site](https://vue-meta.nuxtjs.org/).

#### Step Three: Add Vue-Meta to the Custom Games Launcher

Once Vue-Meta was installed in the app, I had to add it to the Custom Game Launcher code. For context – most Story Synth URLs have a long string of 
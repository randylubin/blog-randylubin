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

Once Vue-Meta was installed in the app, I had to add it to the Custom Game Launcher code.

Some context first – most Story Synth URLs end in a long string – like [https://storysynth.org/Shuffled/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w](https://storysynth.org/Shuffled/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w) – the string at the end is the ID for the Google Sheet that is powering the game; it's unwieldy but it works.

I want cleaner URLs for my own published games, so created a custom game launcher with custom pages for each of my own games. This allows URLs like [https://storysynth.org/Games/Around-The-Realm](https://storysynth.org/Games/Around-The-Realm "https://storysynth.org/Games/Around-The-Realm") – much cleaner!

To get the meta data working for these games, I added Vue-Meta to my Custom Game Launcher page with a bit of code to add the right meta values depending on which game was loaded (based on URL). The code isn't the most exciting but you can [check it out here](https://github.com/randylubin/Story-Synth/blob/master/src/components/games/CustomGameLauncher.vue).

This got me to a point where the game pages had the right meta data but they still weren't viewable by the unfurl algorithms because they were still required the client to render them with javascript.

### Prerendering Pages for the Unfurler

The second major chunk of work involved getting Prerender-SPA to properly create my pages in advance so the unfurler sees the full page and not just the stub with javascript instructions for further assembly.

After spending a little time trying to get Prerender-SPA to install via webpack (my least favorite part of the stack) I realized there was a [Vue CLI Plugin for Prerender SPA](https://www.npmjs.com/package/vue-cli-plugin-prerender-spa). Using the Vue CLI was so much easier than manually installation – it downloaded the library and imported it to the right files.

The next issue I faced was switching my entire app from Hash Mode to History Mode (so storysynth.org/#/Games becomes storysynth.org/Games). Luckily, this too was easier than expected.

In my main.js file, I just had to change the mode and then add a extra bit of code to make sure the old links would forward properly:

    const router = new VueRouter({
      mode: 'history',
      routes // short for `routes: routes`
    })
    
    router.beforeEach((to, from, next) => {
       if (to.fullPath.substr(0,2) === "/#") {
        const path = to.fullPath.substr(2);
        next(path);
        return;
      }
      
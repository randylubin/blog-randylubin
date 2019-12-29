---
layout: post
template: post
date: 2012-05-21
title: "Thought Experiment: Temporally Optimized News Feed"
permalink: /post/23471531730/thought-experiment-temporally-optimized-news-feed
description: "Thought Experiment: Temporally Optimized News Feed"
---
<h3>Some Context</h3>&#13;
<p>I consume a lot of news online, mostly through Google Reader. The blogs I follow (mostly tech) generate roughly 200 posts on weekdays - I read every headline and then end up reading or skimming roughly 25% of the posts. It's a lot of content and that doesn't include opening a Hacker News / Reddit tab or flipping through the New York Times.</p>&#13;
<p>First thing in the morning and last thing at night I'll go through Google Reader. I'll check in a few times throughout the day and clear out the new posts. It's relatively under control (i.e. I'm not compulsively checking it every few minutes).</p>&#13;
<p>I'll save my thoughts on whether this much consumption is good / healthy for another post but I tend to hit two types of trouble with this system.</p>&#13;
<h3>The Problem(s)</h3>&#13;
<p>The first problem occurs when I've had a busy day or two and the new posts pile up.  Once it gets over a couple hundred new posts, I'll usually give up and declare blog bankruptcy (except for friends' blogs). This is always a bit frustrating as I'll suspect there's some great content I'm throwing away. This issue is much exacerbated if I go on vacation... I'll have no option but to delete scores of good content.</p>&#13;
<p>Problem two is at the opposite end of the spectrum - if I have a random bits of extra time throughout the day, I might want to read more high quality content. If I've already cleared out Google Reader and checked Hacker News, I may be at a loss for the next batch of content to explore. I could go the 'new' page for HN but I prefer having some type of filter to help with the signal / noise problem.</p>&#13;
<h3>The Solution</h3>&#13;
<p>An ideal solution would be a Reader which knows which content I've read AND tracks the duration between visits. If I've been on vacation for a week, it would show the best content of that week. If I'm checking in again after just an hour, it would show me the best content from past 60 minutes (assuming I had read or cleared the top content as of an hour ago).</p>&#13;
<p>Reddit already enables a lower quality version of this. If you select the 'top' tab, you can search through the top posts of this year, month, week, day, hour, or all time. This is especially useful if you find a new subreddit and are curious about the best content that's been posted there. Rather than the somewhat arbitrary time options they have, I'd much rather have a option of <strong>Since I Last Visited Reddit</strong>.</p>&#13;
<p>Creating an algorithm as described in the first paragraph of this section isn't easy but it's definitely feasible. There are some trickier design decisions which would deal with how deep ones consumption is in any visit (if I just spend 5 minutes reading during one session, I don't want the clock to reset to that time). Another tricky area is weighting recent vs past events.  I probably care more about whats going on today than yesterday but still want to know about major events from yesterday. Perhaps the proper weight looks like: good articles from today, great articles from yesterday, and amazing articles from before that.</p>&#13;
<p>This isn't something I'll build just something I'd like to see... your thoughts?</p> 
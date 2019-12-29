---
layout: post
template: post
date: 2015-07-18
tags:
- democracy.io
- eff
- projects
- coding
title: "Launching Democracy.io"
permalink: /post/124417803773/launching-democracyio
description: "Launching Democracy.io"
---
This week EFF launched a side project I’ve been working on - [Democracy.io](https://democracy.io/#/)!
![](/images/a87cf52efaa316837c704e6a60d7e2a584321d19f62553a306883de119e3c679.png)

Democracy.io is a simple way to message your legislators in congress. Just enter your address, select the representatives you want to contact, and fill out a few short fields.

Until now, messaging your Senators and Representative was a clunky process that involved hunting down the right pages on their sites and filling out long and complex forms.

### Making Democracy.io

We started this project in late February of this year. I had just met [Leah Jones](http://l12s.com/) and [Sina Khanifar](https://twitter.com/sinak)&nbsp;and we wanted to collaborate on a fun project (we were all fun-employed at the time). After throwing a few ideas around, we settled on Democracy.io - I think Sina suggested it, having worked on similar projects in the past.

Over the following few months we met for a few hours every week to push the project forward. The app is built with Angular on the front-end and Node.js for the backend. While we all worked on the full stack, I focused on the Angular app, Sina focused on design and CSS, and Leah implemented most of the back end and API integration. We use the Smarty Streets API for address lookup and [Contact Congress](https://github.com/unitedstates/contact-congress) and [Phantom of the Capital](https://github.com/EFForg/phantom-of-the-capitol) for legislator data and messaging sending, respectively. All our code is open source and [on GitHub](https://github.com/EFForg/democracy.io).

We wrapped up the majority of our work in May and began looking for a partner to host, promote, and maintain the site. Our first choice was the [Electronic Frontier Foundation](https://www.eff.org/) (EFF) - the greatest bastion of digital freedom in our time. They were excited about the project and committed to taking it on.

After some last minute tweaks and polishing, we launched with the EFF this Wednesday and received tons of good press (e.g. [Huffington Post](http://www.huffingtonpost.com/entry/democracyio-makes-it-easier-to-email-your-representatives-in-dc_55a6d44fe4b0c5f0322c4cc4), [Techcrunch](http://techcrunch.com/2015/07/15/democracy-io/)). It was gratifying to see the months of hard work pay off and get a great reception.

Overall I had a blast working with Leah and Sina - I learned a lot through our collaboration. It’s always fun to launch something - side project or otherwise - and it’s especially awesome when it’s made with great people and it reaches a wide audience.

### Next Steps

Now that Democracy.io is live, we’ve expanded the volunteer group working on it. We’re hoping to add more ways to contact reps (e.g. phone calls, mail) and better transparency into how legislators are handling and responding to the constituent messages.

When we started Democracy.io, we didn’t know if it would find a permanent home but we were lucky to find one with the EFF. Though there are a lot of developers who want to work on meaningful side projects that will make a positive impact on the world, it’s tough to know where to start. I would love to see the EFF and other organizations create lists of projects they want to see developed - I know the tech community would make them happen in no time!
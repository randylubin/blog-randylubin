---
title: Dat-GUI Tutorial
date: 2013-01-28 00:00:00 Z
permalink: "/post/41673541855/dat-gui-tutorial"
tags:
- programming
layout: post
template: post
description: Dat-GUI Tutorial
---

This post will empower you to easily use [Dat-GUI](https://code.google.com/p/dat-gui/) to quickly iterate on your web design.

![](/images/94c31fdcfe9fed965a9d9b56d9f94fe79adc122cd9ce1a77de1b20a2f84e3d59.png)

Last week I [wrote](http://blog.randylubin.com/post/41079139893/site-revamp-learning-visual-design) about my use of Dat-GUI in redesigning my website. Dat-GUI provides a control panel for your site where you can easily modify different CSS values without editing code or reloading the page. You can see it in action on the beta version of my site [here](http://randylubin.com/beta).

Dat-GUI has a nice [walkthrough](http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) where you can see its various features in action. Unfortunately, the documentation is poor and I had a bit of trouble integrating it to my site. With this guide you will be able to easily use Dat-GUI in three simple steps:

1)  Install Dat-GUI by downloading the files to your web directory
2)  Add the Dat-GUI default CSS values
3)  Link the Dat-GUI control panel to the CSS values

## 1) "Installing" Dat-GUI

You need to download the Dat-GUI JavaScript file and it to your site. The files are hosted [here](http://code.google.com/p/dat-gui/source/browse/#git%2Fbuild). The main file is - dat.gui.min.js - adds the main control panel to your webpage. You will need an extra file - dat.color.min.js - if you want to use the color selector (what I have on my site and use in this tutorial). Add these files to your site by putting it in the folder with your other JavaScript and linking to it in your site .

    <script type="text/javascript" src="/js/dat.gui.min.js"></script>
    <script type="text/javascript" src="/js/dat.color.min.js">

I also use jQuery. While not essential, it makes the next part easier.

    </script>

## 2) Add Dat-GUI Default CSS Values

Now that your web page can access the Dat-GUI, you need to select which CSS variables you want to control and add their default values. For my redesign, I was concerned with color so I wanted to play with the background, accent, and paragraph colors.

I'm storing the default values in the pageColors function to keep things clean but you can store it however you prefer. I name the three things I'm interested in and set them equal to default color values in hex code.

    <script type="text/javascript">
        var pageColors = function() {
            this.backgroundColor = '#091a28';
            this.accentColor = '#91b8d9';
            this.paragraphColor = '#e6e6e6';
            };
    
        ...

## 3) Connect Dat-GUI to your CSS

Now we need to connect Dat-GUI to your CSS. This will update the webpage as you make changes through the control panel. First we need to add the Dat-GUI widget. Then we give instructions for what to do with each modification.

    ... 
        window.onload = function() {
            // add the control panel
            var gui = new dat.GUI();
            // add the backgroundColor control and wait for a change
            gui.addColor(pageColors, 'backgroundColor').onChange(function(){
                // when a change occurs, navigate the DOM to 'body' and update the CSS for the background color
                $("body").css('background-color', pageColors.backgroundColor)
            });
            // add the accentColor control and wait for a change
            gui.addColor(pageColors, 'accentColor').onChange(function(){
                // navigate the DOM to find xxx##### with the class "accentText" and update the CSS for the color
                $("body").find('.accentText').css('color', pageColors.accentColor);
            });
            gui.addColor(colors, 'paragraphColor').onChange(function(){
                $("p").css('color', pageColors.paragraphColor)
            });
        };
    </script>

I add this code directly below the default values, within the same script tag.

If you are modifying something other than color, you would use gui.add rather than than gui.addColor.


That's all there is to it! Now you can go experiment with Dat-GUI on your own site.
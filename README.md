# Animate-On-Scoll-Intersection-Observer--mini-project
## Summary 
This is a simple mini project showcasing scroll animation effects using Intersection Observer. Intersection Observer is typically much friendlier on performance in comparison to using a scroll listener. The Intersection Observer is a native JavaScript API that provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. It can be used for scroll animations, lazy loading images, infinite scroll, and much more. Pull Requests welcomed!

## Task 
Build a simple landing page web application that uses the intersection observer to implement UI animations. The animations should not all happen at the same time, but according to the user's scroll progress on the page.

## Summary of Tech Stack
No frameworks, libraries, or plugins are necessary. Use of JavaScript's built in tool, intersection observer, was utilized to create these effects. The general concept behind intersection observer is being a way to watch a child element and be informed when it enters the bounding box of one of its parents. It is most commonly going to be used in relation to the target element scrolling into view in the root element. In my example, when my image elements enter the viewport and 25% of the image is intersecting, the styling is manipulated to allow the image (and CSS transition) to appear on the screen. This criteria is declared in the options object of my JS source code.

## Intersection Observer vs. Scroll Listener
Both of these concepts can be used to obtain the same solution. When comparing performance, it is advised to keep in mind what task you're trying to accomplish. For core tasks such as changing the hash, altering some styles based on scrolling, making something stick after a certain point, etc., intersection observer performs much better and should be preferred if performance is crucial for your application.  

## Design
Emphasis was not placed on design. This is a simple mini project to practice and showcase the functionality of the intersection observer. 

## Run Locally 
1. Run this command `git clone https://github.com/NickMezacapa/Animate-On-Scoll-Intersection-Observer--mini-project.git`
2. Run `npm install`
3. Double check your ports to avoid errors
4. Run `npm run start-dev`
5. You are now in the dev environment and can play around

## Testing Scenarios
- First image should not preload on page without a transition
- Images should appear on the page according to user's scroll progress
- Text does not overlap any images
- When any image is observed and appears on page it is accompanied by a transition
- Every other image appears on the opposite side of the page

## Screen Recording of Page 
https://user-images.githubusercontent.com/89874146/158482392-09c2ab09-1920-47d2-bbd6-c389eff0c1e5.mov

## Helpful Links
- https://medium.com/@cristinallamas/intersection-observer-vs-eventlistener-scroll-90aed9dc0e62
- https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API



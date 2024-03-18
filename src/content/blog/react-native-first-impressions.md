---
draft: false
title: "React Native: First Impressions"
snippet: ""
image: {
    src: "assets/blog/react-native-first-impressions.png",
    alt: "React Native: First Impressions"
}
publishDate: "2024-01-22 09:00"
category: "Devlog"
author: "Audrey Downey"
tags: [devlog, react-native]
---

As I casually browsed through YouTube's vast landscape of coding tutorials and tech discussions, React Native made a recurring appearance. Devs from various corners of the internet spoke about it, each sharing a sentiment that hovered somewhere between intrigue and reservation. What struck me as unusual was the absence of extreme opinions – no overwhelming cheers, nor resounding jeers. It was an enigma, acknowledged by many, yet truly understood by only a few.

"Easy to work with," they said. But the air carried a peculiar weight – a subtle lack of genuine enjoyment echoed in the narratives. It was a paradox, and it piqued my interest.

It's with these ideas that I delved headfirst into exploring React Native, in the pursuit of completing part 10 of the [Full-Stack Open Course](https://fullstackopen.com/) I'm currently studying. Here's a summary of my initial impressions:


## Here's what the Project looks like so far:

As I'm writing this article, I've not yet completed the part, but here's what I've made so far:

![Rate Repository App](https://media.discordapp.net/attachments/1198228623719669830/1199119314914115604/ezgif-1-1bc17c8304.gif?ex=65c161e3&is=65aeece3&hm=e1c33a8183442513be0df36dd4f9719606c1f7914dcee5d4c05cd327772f14dd&=&width=310&height=670)

It's pretty simple; it queries repositories from an external API and features them in a list. There's also a secure JWT token authentication function.

## My Impressions

React Native is still new to me, and I'll need to put a lot more time working with it to really feel like I get a good grasp of it, but here are my first impressions:

### 💙 Here are some of the things I've liked so far:

1. **It's built on top of React**: Making it intuitive and easy to understand for developers coming from a React background.
2. **Great Tools & Libraries**: A lot of popular react libraries and tools are also available for the React Native ecosystem. In my case, some of those for me are: Tailwind, Jest & Lucide Icons.
3. **Great API with great documentation**: Finding the information I needed was very smooth and definitely contributed positively to the dev experience.

### ❌ Here are some of the things I've not liked as much:

1. **Problems with making Tailwind work**: I spent a lot of time trying to make Tailwind work with the application without success. For a while, I almost made it work, but the Tailwind code wasn't getting properly compiled, and I couldn't use the `tailwind.config.js` variables, despite following the instructions.

2. **Debugging can be really tricky**: Error messages given by the compiler are ambiguous; it's often been really difficult to figure out where the problems were happening. Maybe that's because I got so used to using Typescript over the past year? At the beginning of the project, I also didn't manage to set up the React Native Debugger to work with my remote development environment (I wanted to develop using my physical iOS phone rather than an emulator).

   While those problems could maybe have been solved given a bit more time, it's undeniable there's a level of extra complexity compared to web development.

3. **Flexbox Gap does not work**: I know that's small, but it really annoyed me a lot while styling.

## Conclusion

React Native seems to me like a great tool, and I think the fact that it's built on top of React makes it much easier to learn for anyone who knows React. Nonetheless, I definitely personally don't find it as enjoyable as developing for the web. My next personal project is probably not going to be a React Native App, but I'd be okay working with it again in the future.

![Three phones with nature](https://cdn.midjourney.com/c052f0a8-ce79-4bb7-9d59-d273fd8f1bd6/0_1.webp)

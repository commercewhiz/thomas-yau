---
draft: false
title: "React Functional vs. Class Components: What's the Difference?"
snippet: ""
image: {
    src: "assets/blog/react-functional-vs-class-components.png",
    alt: "full stack web development"
}
publishDate: "2023-07-17 09:00"
category: "Devlog"
author: "Audrey Downey"
tags: [react, components]
---
 
When I first tried out React a couple years ago, I learned Class Components first, but now, it appears that the industry has shifted in favor of Functional Components.  Since I've been diving back into React, I've been wondering: What's the difference?  What why this shift?  Here's what I found out.

## Functional Components
Functional components are a type of component in React that are primarily defined as JavaScript functions. They are also known as "stateless functional components" because they don't have their own internal state management; instead, to manage state, they use hooks.

```javascript
import React from 'react';

interface GreetingProps {
name: string
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

Class Components
Class components can have additional methods and lifecycle methods that handle various aspects of the component's behavior. For example, you can define the componentDidMount() method to execute code after the component is mounted in the DOM, or the componentDidUpdate() method to perform actions when the component's props or state change.
import React, { Component } from 'react';

class Example extends Component {
  componentDidMount() {
    console.log('Component mounted!');
  }

  render() {
    return <h1>Example Component</h1>;
  }
}

export default Example;

## Conclusion
Class components provide more explicit control over the component's lifecycle and state management compared to **Functional Components**. However, with the introduction of **React Hooks**, many of the same capabilities can be achieved using functional components with simpler and more concise code.

I think **Functional Components** are definitely making my development experience a lot easier, as it removes the needs for managing internal state and functions.  That's an abstraction I'm definitely glad we shifted towards, although I would like to get a bit more familiar with Class Components for the sake of better understanding what goes on underneath the hood.
---
draft: false
title: "Javascript in 60 seconds (and jQuery)"
snippet: "A quick introduction to Javascript"
image: {
    src: "assets/blog/javascript-in-60-sec.png",
    alt: "full stack web development"
}
publishDate: "2022-05-13 12:15"
category: "Workshop"
author: "Audrey Downey"
tags: [javascript, jquery]
---

## What is "Javascript"?

It's a small dynamic language similar to PHP. Its so popular now, that you can use it for writing server side code (instead of PHP), and also make apps for mobiles and tablets. Did you know Discord and Spotify are written in JS? Crazy eh?

All browsers have Javascript engines. So that lets us use JS inside HTML web pages - browsers understand the JS and can execute it. JS in a browser lets us control the browser and mess about with the HTML page after its been received from a web server.

Web sites now are super dynamic. Look at Facebook: as you're clicking around your feed, hitting a like button, replying on a post, all of your actions are changing the page without the page completely reloading. This is all JS! JS is running in response to all of your actions on the page and updating the page after sending/receiving data from Facebook. Do you also notice how Twitter constantly refreshes with tweets when you leave it open? Yep, that'd be JS...magical stuff!
Now that pages don't have to fully refresh with every little action that you do, you save tons of bandwidth too!

## What does it look like?

It's really simple! Well, all but one thing. First, here are variables:

```jsx
var name = "Martin";
var counter = 10;
```

Here's a function:

```jsx
function someFunction()
{
    // Stuff goes here...
}
```

Here's how we call a function:

```jsx
someFunction();
```

All looks familiar right? Very similiar to PHP so far. Now, here's the key difference... Functions, can be stored in variables! What?! Check it out:

```jsx
var someVar = function()
    {
        // Some stuff.   
    }
```

Let's break that down. A variable name 'someVar', is being assigned some function code... The way the function is written, it doesn't have a name. It does have brackets for us to use parameters though, just like normal functions. So now that we have a variable, that represents a function, how do we call it? Just like regular functions:

```jsx
someVar();
```

Thats the biggest difference in JS compared to other languages. It may not be apparent right now why this is powerful, but just understand that a variable can represent a runnable function.

## Using classes in Javascript

Yep, we can do classes...kinda. The syntax is a little different to other languages. Here's a special function that constructs a new object (constructor):

```jsx
function Car()
{
    [this.name](http://this.name/) = "Audi";
    this.colour = "Red";

this.getInfo = function()
        {
            return [this.name](http://this.name/) + ' ' + this.colour;
        }
}
```

The properties and functions for the class are defined in the constructor. Then, here's how we use the constructor to create instances:

```jsx
var myCar = new Car();
```

Then like other languages, we just access the properties on the instance:

```jsx
[myCar.name](http://mycar.name/) = "BMW";
myCar.colour = "Blue";
myCar.getInfo();
```

## So, how do I put JS code in a web page?

You use a script block, like this:

```jsx
<script type="text/javascript">
    // Javascript goes here
</script>
```

You can also have JS code in its own file. The browser just downloads the JS from the file you specify:

```jsx
<script type="text/javascript" src="myjavascript.js"></script>
```

## When does JS run?

As the browser is loading the page, and working down the lines of HTML, if it sees a script tag with JS inside, it will run it. So if your script blocks are at the top of the page, it runs as the page is starting to load. If its at the bottom of the page, it will run at the end as the page finished loading.

## When else can it run?

The browser has lots of events that it triggers to run JS. Some examples are when you click on buttons, or move the mouse over a link, or when you scroll the page. These are all "Events". You can define some JS to run whenever these events occurr.

---

# Now lets talk JQuery!

## Ok, what is it and why should I care?

JQuery is a JS library of really helpful functions - it's not a language. It let's us interact with the HTML on the page and work with the browser events much easier than just using plain JS by itself.

## How do I load it?

Slap this in your <head> of your page:

```jsx
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

## How do I use it?

When JQuery is loaded, you use it via a variable named '$'. Yep, you read that right. There is a variable with the name of a dollar sign. Javascript allows you to use dollar signs in variable names. The '$' variable is an object with all the handy JQuery functions inside. We can also call '$' like a function, like this:

```jsx
$();
```

Most of the time, this is how we will use JQuery, as a function.

Let's show off simple example of JQuery and how it allows us to manipulate the HTML page.

Remember how we can pass functions around as variables in JS? JQuery lets us pass a function to it, and it will only run that function when the page has finished loading completely. This mean it doesn't matter where you put your JS in your HTML, it will only run when the browser has completely finished building the page, loading in scripts, initializing CSS etc. This is what it looks like:

```jsx
$(function()
{
    // Code here will only run when the page has finished loading!
});
```

Most of the time, this is where you will place JS code on your page.

Now on to some basic page manipulation. When we execute JQuery, we "query" the page. JQuery uses what we call a 'CSS Selector', which is basically the same syntax that you use when writing CSS. A quick reminder of some basic CSS:

```jsx
#byId { }
.byClass { }
byElementName { }
byElementNameAndAttribute[someAttributeName=someValue] { }
```

So normally you'd see CSS like this for applying styles to a bunch of HTML elements. Well we use this CSS syntax for asking JQuery what nodes we want to find. Here's some examples:

```jsx
var elementById = $("#myElementId");    // Use JQuery to find a single element by its id.
var elementsByClass = $(".myClass");    // Use JQuery to find all elements with a class.
var elementsByType = $("input");    // Use JQuery to find all <input> elements.
```

You can provide any CSS selector to the JQuery function. JQuery will then return one or many
elements for you to work with. Here's some basic ways of working with a node after we query it:

```jsx
var myElement = $("#myElementId");        // Finds a node in the HTML with id='myElementId'
```

```jsx
myElement.addClass("highlight");        // Adds a new CSS class to the node.
myElement.removeClass("someClass");        // Removes a CSS from the node.
myElement.attr("src", "someValue");        // Sets an attribute on the node.
myElement.css("color", "blue");            // Sets a CSS style on the node.
myElement.remove();                // Removes the node from the page!
```

JQuery can also construct new nodes, and we can later add them to the page. Like this:

```jsx
var myNewNode = $("<p>This is a new P tag</p>");    // Creates a new HTML node.
var body = $("body");        // Get the body node so we can add our new node to it.
body.append(myNewNode);        // Inserts our new <p> node at the end of the body tag.
```

That's pretty powerful stuff! Mess about with nodes, attributes, CSS properties, and add/remove
nodes from the HTML page.

<aside>
💡 For more information about JQuery's functions for messing with elements, go here: https://api.jquery.com/category/manipulation/

</aside>

## Events

The final thing we have to talk about are events. The browser triggers events when certain things happen on the page. Such as, mouse clicks (buttons, on labels/images etc.), moving the mouse, scrolling the page, typing in a text box.

With the help of JQuery, we can hook some JS code to run when these events trigger. We would usually hook up the events inside the JQuery ready function we saw earlier. So using the JQuery ready function, let's see how we hook up events:

```jsx
$(function()
{
    // Code runs here when the page finishes loading.
// Get a button on our page by its ID.
    var myButton = $("#myButton");
// Create a variable that holds a function that we will use for our event.
    var buttonClick = function()
    {
        alert("Hello World!");    // Pops up a browser message box.
    }
// Hook our function to the click event of our button.
    myButton.click(buttonClick);
}
```

<aside>
💡 For a reference to other types of events you can hook in to, see here: https://api.jquery.com/category/events/

</aside>
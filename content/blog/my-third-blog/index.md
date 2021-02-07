---
title: Android Game Editor & Player
date: '2020-10-10T12:00:00.00Z'
description: 'Android app to make and play adventure games, built in Android Studio with Java and Kotlin'
---

![Title](./title.png)

Built an Android app for making small, graphical adventure games and playing them with a team of four. Although the demo game we created for the application wasn't the prettiest, it has all the tools for people to make lovelier alternatives!

The design was object-oriented: first there was the game object, then the pages (individual screens for the locations in the game), then the shapes present in each page (the characters, scenery, and so on). One of my main responsibilities was the shapes - creating the class, building out a UI for users to edit and create them, and hooking up that code with everyone else's. 

![Shape Editor](./shape_editor.png)

I also created two additional features we bundled into the game editor: a pixel art editor and a procedural art generator. Users could save any of the images and then use them in their games. The pixel art editor was a great exercise in learning how more complicated data storage works in Android Studio, and that I'm not the best artist:

![Pixel Art Editor](./pixel_art.png)

The procedural art generator used [L-systems](https://en.wikipedia.org/wiki/L-system#:~:text=An%20L%2Dsystem%20consists%20of,generated%20strings%20into%20geometric%20structures.) to generate a wide variety of plants, tiles, and more:

![Random Generator](./random_generator.png)

Unfortunately I can't share the source code online, as it was a final project for my Object-Oriented Programming class; the screenshots of it in action perhaps don't do it justice.

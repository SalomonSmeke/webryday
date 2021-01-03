# Webryday Calendar

_Analytics are not yet implemented._

My [Simone Giertz](https://www.simonegiertz.com) [calendar](https://www.simonegiertz.com/every-day-calendar) hasn't shipped but I want to start tracking how bad I am at keeping goals _now_.  

A habit-tracking calendar for the web, using `window.localstorage` to keep track of days, analytics preferences (minimal), and if you have seen the welcome pop-up. Nothing else is stored or sent to me or anyone, anything that might be stored in-future would only be to save further preferences (light theme?).  

Note: if Simone or someone representing her asks me to take it down, down it goes. I have no intention of making money off her design nor taking business away from her. Go check out Simone's [youtube](https://www.youtube.com/channel/UC3KEoMzNz8eYnwBC34RaKCQ) and [twitter](https://twitter.com/SimoneGiertz); possibly get your hands on the real [calendar](https://www.simonegiertz.com/every-day-calendar) at [Simone's shopify](https://simonegiertz.myshopify.com).  

Warning: _Everything is stored in `localstorage`, so make sure to "export" your data if you're going to be clearing your browser data all the time._

## Privacy Information

There are three levels of analytics preferences that you can select when you first load the calendar, they can be modified at any time.  

1. Off: Collect **nothing**. Don't even load the analytics stuff.
2. Minimal: Collect visit count, nothing more ever.
3. Fun (default): Collect visit count, and possibly more in the future. Nothing creepy ever. Anything that is added here will be with the express purpose of making **fun** data-viz stuff down the line if this gets traction (hence the name).

<details>
  <summary>No judgement if you pick <i>Off</i>, I get it.</summary>
  <img src="https://imgs.xkcd.com/comics/privacy_opinions_2x.png" alt="XKCD comic on Privacy Opinions, hotlinked from xkcd.com/1269" />
</details>

## Acks

Hips and Hoorays to ☕💁‍♂️ [Griffin Moe](https://github.com/gmoe) for his help with this, and for being a great friend.
Big 🆙s to Simone for the concept, design, idea, and just her whole thing.
Many 🙏 to the `preact` and `preact-cli` team, as well as all the dependencies I use, honestly the `package.json["devDependencies"]` is a list of stars.

# spacex dashboard

[Live Demo](https://secure-wildwood-40137.herokuapp.com/launches)

(it's hosted on a free Heroku dyno, which may take some time to spin up)

## Prerequisites

Node 10.15.3<br>
NPM 6.4.1<br>
Ember CLI 3.8.1<br>

## Installation

* `git clone git@github.com:ozywuli/ab-spacex.git`
* `cd ab-spacex`
* `npm install`

(Tested fresh installs on Mac and Windows WLS. Let me know if you run into any issues.)

## Running / Development

* `npm start`
* Visit app at [http://localhost:4200](http://localhost:4200).
* Visit tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

## Initial Thoughts

Ember is a fantastic SPA framework, especially for a project like this one where you need to consume API resources and provide multiple dynamic views. Unfortunately, I have not had the opportunity to develop in Ember for over a year, so I knew beforehand it'd be slow going if I decide to do this assignment with Ember. I wanted to use React because that's what I've been working with most for the past year, but since AuditBoard is an Ember shop, I figured it'd be better to use the tools of my potential future employer, and get comfortable with it fast.

## Approaches

__Build a dashboard that shows Launches and Rockets using the Space X Api, you can find detail about api here__

Ember provides two tools out of the box (as far as I know) that help developers to consume API resources. One is Jquery, which has methods like `.ajax` and `.getJSON` that help you make and handle most ajax requests. The other is Ember Data, a more complicated tool that provides adapters and serializers for managing data from any sources. I was planning on avoiding Ember Data altogether because I didn't have much experience with it and instead just use jquery to make simple ajax requests. But then I read the next requirement:

__Create a data model for a ‘Launch’ and a ‘Rocket’. Also make sure to include any relationships between Launches and the Rocket’s used.__

This sounded to me like Ember Data should be used since it provides features like models for the front end. At my previous two companies, we preferred handling model logic on the server/backend and just have the front end be a dumb consumer of resources. This is simple and clearly demarcates the front and back ends. But one advantage of using Ember Data is that it makes it easier for the client app to save data for offline use, which can be a market advantage for enterprise applications (such as those made at AuditBoard).

__There should be 2 tabs: launches and rockets like. Clicking the Launch tab should render a list of cards for launches and clicking the Rockets tab should render a list of rockets. (Figure 1)__

I considered keeping the Launches and Rockets index on the same route so that when user clicks on either of the buttons, Ember would check which button is click and display the corresponding data. But I decided to separate them into two routes and have Ember Routing handle showing either Launches or Rockets depending on what button the user clicks. This has at least two advantages:

1. When user only looks at the Launches view, the app only consumes one API endpoint, so the app ends up loading less data and provides a more performant experience for the user. If Launches and Rockets were bundled together in a single route, two endpoints would have to be consumed. Of course, you can write code that conditionally loads the endpoints, but Ember's route files provide a cleaner way to separate how they load.

2. Users can use their browser history and navigate the Launches and Rockets views. This is especially advantageous for power users who need to move around fast.

__Below the tab are cards that should render the image of the launch, description, and two buttons: View Detail, View Rocket or View Launches__

This part is where I first add a bit of animation. When user hovers over a card, two buttons fade and slide up into view.

__Clicking on View Detail should go to another screen to view the launch or the rocket detail__

Here I created another dynamic segment for the Launches and Rockets details page. In addition to consuming a 3rd party API, the details page also needs to retrieve comments from a local store. How I might approach this problem if I was running a server would be by creating an endpoint that proxies to the SpaceX API, retrieves the resources, and then merges it the corresponding comments data on the server. Then it just feeds it all as one resource to the front end.

However, the requirements recommend using Mirage to generate fake data and API stubs since I don't have access to the server. I don't have enough experience with Mirage to mimic my server solution, so I ended up just creating separate endpoints for the comments data. When users open a details page, the app first loads the 3rd party resource related to that detail. Afterwards, another request is made to the Mirage service that returns comments data related to the specific detail. The request originates from the component level after it has mounted. While the comments resource is being fetched, a loading icon animates until the resource is consumed.

__There should be 2 icons for switching between table view and list view__

For this part of the exercise, I used query params to control whether to show either table/grid or list view. This has the advantage of persisting state of the layout views to the browser history and lets users navigate back and forth between layout views. I also considered using localStorage to save the user's view setting in combination with query params.

This is also where I make first use of [Liquid Fire](https://ember-animation.github.io/liquid-fire/), which lets Ember developers create smoother transitions between routes and states. When users tab between layout views, the old elements are faded out and then new elements fade and slide in one by one for a smooth experience.

If I had more time to work on this, at least one thing I would do to improve the animations is to animate only those cards/items within the viewport. As of now, all of them are animated, even those not in view, which is an unnecessary resource drain.

## Tests

I wrote a few basic tests for computed properties in these files:

- `el-radio-test`
- `grid-item-test`
- `launches-test`
- `details-page-test`

## Notes on CSS

I use SASS to help manage the CSS for this assignment. All styles are written from scratch and related styles are grouped by directories (in this case there are only two: components and settings).

If I had more time, I'd do at least the following to improve the styles:

- Identify and DRY repeated styles like colors, font sizes, and media queries using a combination of variables, mixins, and custom functions.
- Create more util classes to better compose bigger and more specific classes
- Create more specific setting files

## Conclusion

That's all. I hope to hear back from you soon. I know that I may not have all the experience you are looking for, but I'm excited to learn and grow and expand my skills. I'm also excited to join a new team and help deliver great products on the web!
# TaskForce

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
TaskForce is a TaskRabbit-inspired app built on Rails and Backbone. Users can
hire Taskers to perform tasks for the, monitor the status of their tasks,
and rate taskers.

Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create tasks
- [ ] View potential Taskers for a task
- [ ] Submit tasks for approval by a user
- [ ] Accept tasks
- [ ] Mark tasks as completed
- [ ] View new tasks, accepted tasks, and pending tasks
- [ ] Review tasks

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Task Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create tasks using
a simple text form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Taskers (~2 days)
I will add API routes to serve user profile data as JSON, then add Backbone
models and collections that fetch data from those routes. Users will be
displayed based on whether they match the submitted form data for the task
requested. Users will be able to view the details of a user's profile.
By the end of this phase, users will be able to create tasks and
submit them to the user inside a single Backbone app.

[Details][phase-two]

### Phase 3: Approving, Updating, and Displaying Tasks (~1 day)
I will need to add a `TaskShow` view in which the details of a task are displayed. The user will have the ability to mark tasks as complete. Later this will trigger a notification to the other user (tasker or requester).

[Details][phase-three]

### Phase 4: Viewing Task Feed (~1 day)
I will need to add a `TaskIndex` view containing a feed of the user's tasks,
and indicating their status. Ultimately, this will be the page users see after logging in.

[Details][phase-four]

### Phase 5: User Reviews (~1-2 days)
I'll start by adding a `Comment` subview that uses the `User`'s `Comment` association to serve a list of comments ordered reverse chronogically and indicating the `Commenter`'s relation to the `User` being reviewed. On the Backbone side, I'll make a `FeedShow` view whose `posts` collection fetches
from the new route.

[Details][phase-five]

## Stretch Goal: Searching for Tasks (~2 days)
I'll need to add a `search` route to the Task view. On the Backbone side, there
will be a `SearchResults` composite view that has a `TaskList`subview. This
view will use the plain old 'tasks' collection, but it will fetch from the
new `search` route.

[Details][stretch]

### Other Bonus Features


- [ ] Map of task locations
- [ ] Activity history (previous tasks)
- [ ] Multiple sessions/session management
- [ ] User avatar upload

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[stretch-one]: ./docs/phases.stretch.md

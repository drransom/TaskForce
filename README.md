# TaskForce

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
TaskForce is a clone of TaskRabbit built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create tasks
- [ ] View potential Taskers
- [ ] Submit tasks for approval
- [ ] Accept tasks
- [ ] Mark tasks as completed
- [ ] View new tasks, accepted tasks, and pending tasks
- [ ] Comment on both users and tasks
- [ ] Search for tasks by location
- [ ] Search for tasks by subject

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

### Phase 2: Viewing Taskers (~1 day)
I will add API routes to serve Tasker profile data as JSON, then add Backbone
models and collections that fetch data from those routes. Taskers will be
displayed based on whether they match the submitted form data. By the end of
this phase, users will be able to create tasks and submit them to the Tasker
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Approving, Updating, and Displaying Tasks (~2 days)
I plan to use third-party libraries to add functionality to the `TaskForm` and
`TaskShow` views in this phase. I'll need to add a Markdown editor to the
`TaskForm`, and make sure that the Markdown is properly escaped and formatted in
the `TaskShow` view. Edits will be submitted by the task requester and the
Tasker and must be submitted for approval by the counterparty.

[Details][phase-three]

### Phase 4: Viewing Task Feed (~1-2 days)
I will need to add a `UserTasks` view with subviews for requested tasks,
pending tasks, completed tasks, and closed-out tasks. Ultimately, this will be
the page users see after logging in.


### Phase 4: User Comments (~1-2 days)
I'll start by adding a `Comment` subview that uses the `User` or `Task`'s
polymorphic `Comment` association to serve a list of comments ordered reverse
chronogically and indicating the `Commenter`'s relation to the `Commentable`.
I'll add CSS tags ordered chronologically. On the Backbone side, I'll make a
`FeedShow` view whose `posts` collection fetches from the new route.  

[Details][phase-four]

### Phase 5: Searching for Tasks (~2 days)
I'll need to add a `search` route to the Task view. On the Backbone side, there
will be a `SearchResults` composite view that has a `TaskIndex`subviews. This
view will use the plain old 'tasks' collections, but it will fetch from the
new `search` route.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Map of task locations
- [ ] Activity history (previous tasks)
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

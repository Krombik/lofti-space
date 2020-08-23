# React blog app

> ### React codebase containing examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) API.

## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all dependencies
- `npm run start` to start the local server

### Making requests to the backend API

You can view [the API spec here](https://github.com/GoThinkster/productionready/blob/master/api) which contains all routes & responses for the server.

The source code for the backend server (available for Node, Rails and Django) can be found in the [main RealWorld repo](https://github.com/gothinkster/realworld).

## Functionality overview

The example application is a social blogging site. It uses a custom API for all requests, including authentication.

**General functionality:**

- Authenticate users via JWT (login/register modal/page + logout button in header)
- CRU\* users (sign up & settings modals/pages - no deleting required)
- CRUD Articles
- CR\*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

**The general page breakdown looks like this:**

- Every page has same layout:
  - Header component:
    - Site logo (link to home page)
    - Sing in/up (opens sign in/up modal) buttons for unauthorized user
    - New post (opens editor modal), user profile (link to profile of current user) and logout buttons for authorized user
    - Site settings button
      - Switch between dark/light theme (stored in localstorage)
      - Select of articles count per page (stored in localstorage)
  - Page component
  - Modal component
  - ErrorAlert component
- Home page (URL: /)
  - Tabs with list of articles
    - Feed of current user (only shown to authorized user)
    - Global (last articles)
    - Tabs opened by user, can be closed and dragged (stored in localstorage)
    - Add new tab (by tag) button
  - List of articles previews by current tab, every item contains:
    - Author avatar (link to author profile)
    - Author username (link to author profile)
    - Date the article was created or edited
    - Like button (disabled for unauthorized user)
    - Likes count
    - Title
    - Description
    - Read more button (opens article modal and change url to article page)
    - List of tags (each element is a link to a tag tab)
  - Pagination and load more button for list of articles (displayed only if the number of pages exceeds 1)
- User (profile) page (URL: /user/{username})
  - User avatar
  - Username
  - User settings (only shown to current user)
  - Subscribe button (shown only to non-current user and disabled for unauthorized user)
  - User bio
  - Tabs with list of articles:
    - Last articles of user
    - User's favorite articles
  - List of articles previews by current tab (same as at home page)
- Article page/modal (URL: /articles/{slug})
  - Article title
  - Like button (disabled for unauthorized user)
  - Likes count
  - Delete/Edit article buttons (only shown to article's author)
  - Article text (with markdown render)
  - Comment section
    - Comments count
    - New comment section (only shown to authorized user)
      - Textarea
      - Submit button
    - Comments list
      - Comment text
      - Comment author avatar (link to author profile)
      - Comment author username (link to author profile)
      - Comment post date
      - Delete comment (only shown to comment's author)
- Sign in (URL: /login) & sign up (URL: /register) modals/pages
  - Use JWT (stored in localstorage)
- Settings (URL: /settings) modal/page
  - Edit user info (change email, username, bio, image, password)
- Editor modal/page to create (URL: /new) or edit (URL: /articles/{slug}/edit) articles
  - Stored changing data at localstorage until edit/create or reset button will be pressed
  - Every item in tag list is editable, removable and draggle (drag make no sense because api)

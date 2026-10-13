# MyVault — Personal Digital Media Library

**Organize your files. Watch your videos. Access your digital collection in one place.**

MyVault is a lightweight, responsive personal media library website designed to organize and access videos, documents, and other digital files stored in Google Drive.

The website provides a centralized interface for browsing a personal collection, searching for content, filtering files by category, marking favorites, and playing supported videos directly within the website using the embedded Google Drive player.

The project is built with vanilla HTML, CSS, and JavaScript. It does not require a JavaScript framework, database, backend server, or paid hosting service for its initial version.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Project Objectives](#2-project-objectives)
3. [Key Features](#3-key-features)
4. [Technology Stack](#4-technology-stack)
5. [Project Architecture](#5-project-architecture)
6. [Project Structure](#6-project-structure)
7. [Requirements](#7-requirements)
8. [Installation and Setup](#8-installation-and-setup)
9. [Running the Website Locally](#9-running-the-website-locally)
10. [Google Drive Integration](#10-google-drive-integration)
11. [Managing the Media Library](#11-managing-the-media-library)
12. [Supported File Types](#12-supported-file-types)
13. [Website Interface](#13-website-interface)
14. [JavaScript Functionality](#14-javascript-functionality)
15. [Local Storage](#15-local-storage)
16. [Responsive Design](#16-responsive-design)
17. [Deployment and Hosting](#17-deployment-and-hosting)
18. [Storage and Bandwidth Considerations](#18-storage-and-bandwidth-considerations)
19. [Security and Privacy](#19-security-and-privacy)
20. [Known Limitations](#20-known-limitations)
21. [Troubleshooting](#21-troubleshooting)
22. [Development Roadmap](#22-development-roadmap)
23. [Development Principles](#23-development-principles)
24. [Contribution and Maintenance](#24-contribution-and-maintenance)
25. [License](#25-license)

---

# 1. Project Overview

MyVault is a personal digital library application that separates a website's interface from the files it displays.

The website provides the interface for organizing and accessing digital content, while Google Drive stores the actual files.

This architecture makes it possible to build and host a lightweight website without uploading large videos and documents directly to the website hosting provider.

For example, a user can maintain a collection of educational videos, programming tutorials, personal reference materials, entertainment videos, PDFs, Word documents, presentations, and ZIP archives.

The user can browse the collection through MyVault and play supported videos inside the website rather than navigating to a separate Google Drive page.

### The Problem

Personal files often become difficult to manage when they are distributed across folders, shared links, and different storage locations.

Finding a particular video or document may require opening Google Drive, navigating through folders, and searching manually.

MyVault addresses this organizational problem by providing a centralized, searchable interface for a personal digital collection.

### The Solution

MyVault combines:

* A responsive website interface.
* A manually configured media catalogue.
* Embedded Google Drive video playback.
* Search and category filtering.
* Browser-based favorites and recently watched history.
* Support for linking to documents and other files.
* Free static website hosting options.

### Project Status

**Current stage:** Initial functional prototype.

The website interface and client-side interactions have been implemented. Google Drive integration currently uses manually configured file IDs and links.

Automatic file discovery, Google account authentication, automated synchronization, and backend services are not included in the current version.

---

# 2. Project Objectives

The primary objective is to build a personal website that makes it easier to manage and access a growing digital collection.

Specific objectives include:

1. Provide a single interface for browsing personal videos and files.
2. Play supported Google Drive videos directly inside the website.
3. Organize content using categories.
4. Search the library by title, description, category, and file type.
5. Allow users to mark and revisit favorite items.
6. Maintain a browser-based list of recently watched videos.
7. Support desktop, tablet, and mobile screen sizes.
8. Store media files separately from the website code.
9. Minimize hosting and maintenance costs.
10. Establish a foundation for future Google Drive API integration.

The initial implementation prioritizes simplicity, maintainability, and low operating costs.

---

# 3. Key Features

## 3.1 Personal Media Library

The main library displays configured videos and other files as individual cards.

Each card can display:

* File title.
* Description.
* Category.
* File type.
* Date associated with the entry.
* A representative symbol.
* An action button.
* A favorite button.

The catalogue is defined in JavaScript.

## 3.2 Embedded Video Playback

MyVault uses an HTML `<iframe>` to embed the Google Drive preview player.

When a user selects a configured video, the website constructs an embedded-player URL using that video's Google Drive file ID.

The video is then displayed in the website's built-in player section.

The user does not need to navigate to Google Drive merely to initiate playback.

However, Google Drive permissions, account requirements, processing status, and playback restrictions still apply.

## 3.3 Search

The search interface filters the media catalogue as the user types.

The search checks the following fields:

* Title.
* Description.
* Category.
* File type.

Search is performed locally in the browser against the entries already defined in the JavaScript catalogue.

It does not search the user's entire Google Drive account.

## 3.4 Category Filtering

The initial interface provides these categories:

* All.
* Education.
* Technology.
* Entertainment.
* Other.

Categories are defined by each media entry.

The categories can be customized or expanded to suit the user's collection.

## 3.5 Favorites

Users can mark or unmark individual items as favorites.

Favorite selections are saved in browser `localStorage`.

The Favorites navigation item displays the selected entries.

Favorites are browser-specific and are not automatically synchronized between devices.

## 3.6 Recently Watched

When a user opens a video, its ID is added to the recent-history list.

The list:

* Places the most recently opened video first.
* Avoids duplicate entries.
* Retains up to 20 recent video IDs.
* Is saved in browser `localStorage`.

This records videos opened through the website. It does not detect whether a video was watched to completion.

## 3.7 Sorting

The library supports two sorting options:

* Name: A–Z.
* Newest first.

The sorting is performed in the browser.

The newest-first option uses the date associated with each media entry.

## 3.8 Dark Mode

The interface includes a theme toggle.

Users can switch between light and dark themes.

The selected theme is stored in browser `localStorage`.

## 3.9 Responsive Layout

The layout adapts to different screen sizes.

On larger screens, the application uses a sidebar and a multi-column card grid.

On smaller screens, the sidebar becomes a collapsible navigation panel and the library uses a single-column layout.

## 3.10 File Links

The library supports entries for non-video files.

These entries can link to files stored in Google Drive.

In the current version, selecting a non-video file opens its configured URL in a separate browser tab.

The website does not download or upload the file itself.

---

# 4. Technology Stack

MyVault uses standard browser technologies.

| Technology                       | Purpose                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| HTML5                            | Defines the website's content and structure.                                           |
| CSS3                             | Controls layout, styling, themes, animations, and responsiveness.                      |
| JavaScript                       | Implements search, filtering, navigation, playback, favorites, and other interactions. |
| Google Drive                     | Stores the actual videos and other digital files.                                      |
| Google Drive Preview Player      | Provides embedded video playback.                                                      |
| Browser Local Storage            | Saves favorites, recent-history IDs, and theme preferences.                            |
| Git                              | Optional version control for tracking source-code changes.                             |
| GitHub Pages or Cloudflare Pages | Optional static website hosting.                                                       |

### Frameworks and Libraries

The current implementation does not require:

* React.
* Next.js.
* Vue.
* Angular.
* Bootstrap.
* Tailwind CSS.
* jQuery.
* A database.
* A backend framework.

The application uses vanilla JavaScript, which makes the source code easier to study and maintain without framework-specific dependencies.

### Runtime Requirements

The website runs in a modern browser with support for:

* HTML5.
* CSS Grid and Flexbox.
* JavaScript.
* Browser Local Storage.
* Embedded content through iframes.

A development server is recommended for local testing.

---

# 5. Project Architecture

MyVault follows a simple static-site architecture.

```text
                       USER
                         |
                         v
                +------------------+
                |  Web Browser     |
                |                  |
                |  MyVault UI      |
                +------------------+
                         |
             +-----------+-----------+
             |           |           |
             v           v           v
          HTML/CSS   JavaScript   LocalStorage
             |           |           |
             |           v           |
             |      Media Catalogue  |
             |           |           |
             +-----------+-----------+
                         |
                         v
                 Google Drive URLs
                         |
                         v
                Google Drive Service
                         |
                         v
                 Embedded Video Player
```

The diagram illustrates the logical architecture rather than the exact network request sequence.

### 5.1 Presentation Layer

The presentation layer consists of `index.html` and `style.css`.

It defines the page structure, visual design, navigation, player area, search input, category controls, and media cards.

### 5.2 Application Logic Layer

The application logic resides in `script.js`.

It manages the catalogue, filters, card rendering, playback selection, favorites, recent history, and theme switching.

### 5.3 Storage Layer

Google Drive stores the media files.

The browser stores local preferences and lists of selected media IDs.

There is no application database in the initial version.

### 5.4 Important Architectural Distinction

The media catalogue and the actual files are separate.

For example, the catalogue may contain a video title and its Google Drive file ID, but the video itself remains stored in Google Drive.

This separation avoids including large media files in the static website deployment.

---

# 6. Project Structure

The project contains three main files.

```text
MyVault/
│
├── index.html
│
├── style.css
│
├── script.js
│
└── README.md
```

### `index.html`

Contains the website structure, including:

* Sidebar navigation.
* Header.
* Search bar.
* Featured section.
* Statistics cards.
* Video player.
* Category filters.
* Media library container.
* Footer.

It loads the stylesheet and JavaScript file.

### `style.css`

Contains:

* Global design variables.
* Light and dark theme colors.
* Sidebar styling.
* Header and search styling.
* Featured banner.
* Statistics cards.
* Video player layout.
* Media cards.
* Empty-state styling.
* Responsive breakpoints.
* Reduced-motion support.

### `script.js`

Contains:

* Media catalogue.
* Local Storage helpers.
* HTML escaping.
* Google Drive URL generation.
* Statistics updates.
* Media-card generation.
* Search and filtering.
* Sorting.
* Video playback.
* File-link handling.
* Favorites management.
* Recently watched history.
* Navigation.
* Dark mode.
* Mobile sidebar interactions.

### `README.md`

Documents how to install, configure, run, maintain, and extend the application.

---

# 7. Requirements

To develop or use MyVault, you need:

1. A computer or mobile device with a modern web browser.
2. A text editor or IDE, such as Visual Studio Code, for development.
3. A Google account if you intend to store media in Google Drive.
4. Internet access to load remotely hosted files.
5. Google Drive sharing permissions that permit the intended playback or access.

For local development, a web server such as Visual Studio Code's Live Server extension is recommended.

Node.js is not required for the current implementation.

---

# 8. Installation and Setup

## Step 1: Create the project folder

Create a folder named:

```text
MyVault
```

## Step 2: Create the source files

Inside the folder, create:

```text
index.html
style.css
script.js
```

Create `README.md` as well if you want the documentation stored with the source code.

## Step 3: Add the source code

Copy the HTML implementation into `index.html`.

Copy the CSS implementation into `style.css`.

Copy the JavaScript implementation into `script.js`.

Make sure all three files are in the same directory.

## Step 4: Configure your media catalogue

Open `script.js` and locate the `mediaLibrary` array.

Replace the demonstration entries with your own media metadata and Google Drive file IDs.

Do not leave placeholder IDs if you expect the corresponding videos to play.

## Step 5: Save your changes

Save all files before testing the website.

---

# 9. Running the Website Locally

## Option A: Open the HTML File

Double-click `index.html` to open the website in a browser.

Some features may work, but embedded playback and browser security behavior can vary when opening files directly from the filesystem.

## Option B: Use Visual Studio Code

1. Open Visual Studio Code.
2. Select **File → Open Folder**.
3. Choose the `MyVault` directory.
4. Install the Live Server extension if necessary.
5. Right-click `index.html`.
6. Select **Open with Live Server**.

The website should open at a local HTTP address.

For example:

```text
http://127.0.0.1:5500/
```

The exact port may differ.

### Recommended Testing Procedure

After launching the website:

1. Confirm that the home page loads.
2. Test the search field.
3. Switch between categories.
4. Add and remove favorites.
5. Change the color theme.
6. Open a configured video.
7. Close the player and confirm that playback stops.
8. Test the website at mobile and desktop widths.
9. Refresh the page and check whether saved preferences remain.

---

# 10. Google Drive Integration

Google Drive is the media-storage provider for the initial version.

## 10.1 Uploading a Video

1. Open Google Drive.
2. Upload your video.
3. Wait until the upload finishes.
4. Locate the uploaded file.
5. Open its sharing settings if necessary.
6. Copy its file link.

## 10.2 Extracting the File ID

A typical Google Drive file URL looks like this:

```text
https://drive.google.com/file/d/FILE_ID/view
```

The `FILE_ID` portion identifies the file.

For example, in this illustrative URL:

```text
https://drive.google.com/file/d/abc123XYZ/view
```

The ID is:

```text
abc123XYZ
```

Use the actual file ID from your own Google Drive link.

## 10.3 Configuring a Video

Add the file ID to a video entry in `script.js`.

Example:

```javascript
{
    id: 101,
    title: "Introduction to Programming",
    description: "An introductory programming lesson.",
    category: "Education",
    type: "video",
    driveId: "YOUR_ACTUAL_FILE_ID",
    date: "2026-10-13",
    symbol: "JS"
}
```

Replace `YOUR_ACTUAL_FILE_ID` with the real ID.

## 10.4 How the Embedded Player Works

The application constructs the following URL:

```text
https://drive.google.com/file/d/FILE_ID/preview
```

The resulting URL is assigned to the iframe's `src` attribute.

The browser then loads Google's embedded preview player inside the MyVault page.

The JavaScript implementation uses the `getDriveEmbedURL()` function to generate the URL.

## 10.5 Google Drive Sharing Permissions

The embedded player must be able to access the requested file.

Depending on the file's permissions and Google's current behavior, you may need to:

* Sign in to the appropriate Google account.
* Grant access to the account viewing the video.
* Configure the file's general access settings.
* Wait for Google Drive to finish processing the video.

If a video is shared with anyone who has the link, other people who obtain that link may also be able to access it.

For private files, do not assume that embedding a video makes it secure or that hiding a link provides access control.

## 10.6 Limitations of Google Drive Embedding

Google Drive is primarily a cloud file-storage and collaboration service, not a dedicated video-streaming platform.

Consequently:

* Playback may be restricted for some files.
* Processing may be necessary after uploading.
* Large files may take time to become available.
* Heavy traffic can result in temporary playback restrictions.
* Playback controls and appearance are controlled by Google.
* The embedded player may not behave exactly like a custom HTML video player.

The application does not bypass Google Drive permissions or playback restrictions.

---

# 11. Managing the Media Library

## 11.1 Adding a Video

Add a new object to the `mediaLibrary` array in `script.js`.

Example:

```javascript
{
    id: 102,
    title: "Advanced JavaScript",
    description: "A lesson on advanced JavaScript concepts.",
    category: "Education",
    type: "video",
    driveId: "YOUR_ACTUAL_FILE_ID",
    date: "2026-10-13",
    symbol: "JS"
}
```

Each entry should have a unique numeric ID.

### Required Video Properties

| Property      | Purpose                                    |
| ------------- | ------------------------------------------ |
| `id`          | Unique identifier within the catalogue.    |
| `title`       | Display name of the video.                 |
| `description` | Short description shown on its card.       |
| `category`    | Category used for filtering.               |
| `type`        | Must be `video` for video entries.         |
| `driveId`     | Google Drive file ID.                      |
| `date`        | Date used by the sorting feature.          |
| `symbol`      | Text or symbol displayed in the thumbnail. |

## 11.2 Adding a Document

Example:

```javascript
{
    id: 103,
    title: "Software Engineering Notes",
    description: "Personal software engineering study notes.",
    category: "Education",
    type: "file",
    url: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view",
    fileType: "PDF",
    date: "2026-10-13",
    symbol: "PDF"
}
```

The `url` should be the actual file URL.

When the user clicks the file's action button, MyVault opens the configured URL in a new tab.

## 11.3 Adding New Categories

The initial interface defines categories in two places:

1. The category-filter buttons in `index.html`.
2. The category property of each media object in `script.js`.

To add a category, add a corresponding filter button and assign that category to the relevant media entries.

For example:

```html
<button class="category-button" data-category="Research">
    Research
</button>
```

The button will work with the existing category-filter JavaScript.

The category names must match exactly.

## 11.4 Unique IDs

Every media entry should have a unique `id`.

Duplicate IDs may cause favorites, recent-history records, and item selection to refer to the wrong entry.

---

# 12. Supported File Types

MyVault is designed to catalogue multiple kinds of digital files.

| File type               | Current behavior                                                        |
| ----------------------- | ----------------------------------------------------------------------- |
| MP4 video               | Can use the embedded Google Drive player when supported and accessible. |
| Other video formats     | Depend on Google Drive's preview and playback support.                  |
| PDF                     | Opens the configured Google Drive link.                                 |
| Word document           | Opens the configured Google Drive link.                                 |
| PowerPoint presentation | Opens the configured Google Drive link.                                 |
| ZIP archive             | Opens the configured Google Drive link.                                 |
| Images                  | Opens the configured Google Drive link.                                 |
| Other files             | Can be catalogued using the generic file-entry structure.               |

The ability to store a file in Google Drive does not guarantee that Google Drive can preview or play that file in an embedded player.

In particular, this implementation does not directly stream arbitrary file URLs through the browser's native video player.

---

# 13. Website Interface

The interface consists of several main sections.

## 13.1 Sidebar

The sidebar provides navigation to:

* Home.
* All Videos.
* Favorites.
* Recently Watched.
* My Files.

On mobile devices, the sidebar can be opened using the menu button.

## 13.2 Header

The header displays the current section title and description.

It also contains the theme toggle and a decorative profile avatar.

The avatar is a visual element; it is not connected to an authentication system.

## 13.3 Search Bar

The search bar filters the current view based on the user's input.

The results update as the user types.

## 13.4 Featured Banner

The home page contains a welcome banner with an Explore My Library button.

Selecting the button scrolls to the media library.

## 13.5 Statistics Cards

The statistics section displays:

* Total video entries.
* Total other-file entries.
* Number of favorites.

These values are derived from the configured catalogue and current browser preferences.

They do not represent Google Drive storage usage or the total number of files in the user's account.

## 13.6 Video Player

The player section contains an embedded Google Drive player.

Selecting a configured video loads it into this section.

The user can close the player to stop playback and return to the placeholder state.

## 13.7 Media Cards

Each card represents a video or other file.

Cards display the item's metadata and provide the appropriate action.

## 13.8 Footer

The footer displays the website name and current year.

---

# 14. JavaScript Functionality

The JavaScript implementation is divided into logical sections.

| Function             | Responsibility                                       |
| -------------------- | ---------------------------------------------------- |
| `loadStoredArray()`  | Retrieves a saved array from Local Storage.          |
| `saveValue()`        | Saves a value in Local Storage.                      |
| `escapeHTML()`       | Escapes HTML-sensitive characters in displayed text. |
| `getMediaById()`     | Finds a catalogue entry by ID.                       |
| `hasValidDriveId()`  | Performs basic validation of a configured Drive ID.  |
| `getDriveEmbedURL()` | Constructs the Google Drive preview URL.             |
| `getDriveShareURL()` | Constructs the regular Google Drive file URL.        |
| `getItemURL()`       | Returns the configured URL for an item.              |
| `updateStatistics()` | Updates the summary cards.                           |
| `createMediaCard()`  | Creates a media-card element.                        |
| `getFilteredMedia()` | Applies search, category, view, and sorting rules.   |
| `renderLibrary()`    | Renders the current library results.                 |
| `playVideo()`        | Loads a selected video into the embedded player.     |
| `closePlayer()`      | Stops playback by resetting the iframe.              |
| `openFile()`         | Opens a configured non-video file link.              |
| `toggleFavorite()`   | Adds or removes an item from favorites.              |
| `applyTheme()`       | Applies the selected color theme.                    |
| `openSidebar()`      | Opens the mobile navigation panel.                   |
| `closeSidebar()`     | Closes the mobile navigation panel.                  |

The application initializes itself by updating the displayed year and rendering the media catalogue.

---

# 15. Local Storage

MyVault uses browser Local Storage to persist selected preferences.

The current implementation uses these keys:

| Key                 | Stored data                                |
| ------------------- | ------------------------------------------ |
| `myvault-favorites` | Array of favorite media IDs.               |
| `myvault-recent`    | Array of recently opened video IDs.        |
| `myvault-theme`     | Selected theme, such as `light` or `dark`. |

## 15.1 Persistence

These values normally remain available after refreshing the page or closing and reopening the browser.

However, Local Storage can be cleared by the user, browser settings, private browsing behavior, or site-data cleanup.

## 15.2 Browser-Specific Data

Local Storage is associated with the website's browser origin.

Therefore:

* Favorites on one computer do not automatically appear on another.
* Recent history is not shared across devices.
* Theme preferences are not synchronized with Google Drive.

## 15.3 Storage Limitations

Local Storage is appropriate for small preference records, not large video files.

MyVault does not store its videos inside Local Storage.

---

# 16. Responsive Design

The CSS uses Flexbox, CSS Grid, and media queries to adapt the interface to different screen sizes.

The implementation includes responsive rules for:

* Large desktop screens.
* Smaller desktop and tablet screens.
* Mobile screens.

At narrower widths, the layout changes to reduce horizontal scrolling and make controls easier to use.

The media grid changes from three columns to two columns and eventually one column.

The sidebar becomes a collapsible panel on mobile devices.

Actual appearance may vary depending on screen dimensions, browser behavior, and embedded-player requirements.

---

# 17. Deployment and Hosting

MyVault can be deployed as a static website.

The hosting provider serves the website files; Google Drive continues to store the media.

## 17.1 GitHub Pages

GitHub Pages can host the HTML, CSS, and JavaScript files.

Official website:

https://pages.github.com/

Basic deployment procedure:

1. Create a GitHub repository.
2. Add `index.html`, `style.css`, `script.js`, and `README.md`.
3. Push the project to the repository.
4. Open the repository's Pages settings.
5. Configure the publishing source.
6. Wait for deployment to complete.
7. Open the published website.

GitHub Pages is intended for static hosting and is not a replacement for a backend or private file-storage service.

## 17.2 Cloudflare Pages

Cloudflare Pages is another option for hosting the static application.

Official website:

https://pages.cloudflare.com/

The application can be deployed using a Git repository or an appropriate direct-upload workflow.

No server-side build step is required for the current three-file implementation.

## 17.3 What Gets Deployed?

Only the website's source files need to be published:

```text
index.html
style.css
script.js
README.md
```

The video files themselves remain in Google Drive.

This reduces the amount of data that must be deployed whenever the website is updated.

## 17.4 Custom Domains

A custom domain can be configured through a suitable hosting provider.

A custom domain is optional and is not required to run the initial application.

## 17.5 Public Website Considerations

A static website does not provide private access control by itself.

If deployed publicly, its source code and configured media IDs may be visible to visitors.

Anyone with sufficient information and appropriate file permissions may be able to access the linked content.

Do not place private credentials or API secrets in the client-side JavaScript.

---

# 18. Storage and Bandwidth Considerations

The intended media collection may eventually reach approximately 20 GB.

MyVault keeps the website code separate from that collection.

## 18.1 Website Storage

The website's HTML, CSS, JavaScript, and documentation should remain comparatively small.

The total size of the media library does not need to be included in the website deployment.

## 18.2 Google Drive Storage

Google Drive holds the actual media files.

The available storage depends on the user's Google account and applicable storage plan.

A 20 GB collection may exceed the storage available under a free account, depending on the account's current quota and other stored data.

## 18.3 Bandwidth

Streaming a video consumes network data.

For example, a 1 GB video watched from beginning to end can require approximately 1 GB of downloaded data, although the actual amount varies with buffering, playback quality, seeking, and how the video is delivered.

If the same video is watched multiple times, additional data may be consumed.

## 18.4 Playback Reliability

A large collection is not necessarily a problem for the website's interface, but it may create storage, network, and playback considerations.

Google Drive can impose restrictions on certain files or usage patterns.

The application does not guarantee uninterrupted playback or unlimited bandwidth.

## 18.5 Recommended Strategy

For the initial personal version:

* Keep the media in Google Drive.
* Keep the website code in a separate project folder.
* Use the static website as the library interface.
* Test several real videos before adding the entire collection.
* Monitor the storage available in your Google account.

---

# 19. Security and Privacy

Although MyVault is a personal project, security and privacy remain important.

## 19.1 No Authentication System

The current implementation does not include:

* User registration.
* Login and logout.
* Session management.
* Role-based access control.
* Backend authorization.

The presence of a profile avatar does not imply that a user account exists.

## 19.2 Google Drive Permissions

The privacy of a video depends on its Google Drive sharing permissions.

If a file is shared with anyone who has the link, that link may be used by other people to access the file.

Hiding the link in the user interface does not make the underlying file private.

## 19.3 No API Credentials in Client Code

Do not put Google OAuth client secrets, service-account private keys, passwords, or other confidential credentials in `script.js`.

Anything included in a public static website should be treated as potentially visible to visitors.

If the project later integrates the Google Drive API, authentication and token handling must be designed appropriately.

## 19.4 HTML Escaping

The current JavaScript uses `escapeHTML()` when rendering catalogue metadata inside HTML templates.

This helps prevent catalogue text containing HTML-sensitive characters from being interpreted as markup.

However, HTML escaping is only one defensive measure and does not replace comprehensive security testing.

## 19.5 External Content

Embedded content is loaded from Google Drive.

Google controls the embedded player and its behavior.

The website cannot guarantee that Google Drive will always be available or that every video will be playable.

## 19.6 Local Storage

Favorites, theme preferences, and recent-history IDs are stored in the browser.

They are not protected by a server-side authorization system.

Avoid using this storage mechanism for passwords, authentication tokens, or confidential information.

## 19.7 Secure Future Development

If authentication or automated file management is introduced, consider:

* OAuth 2.0 for Google account authorization.
* Appropriate token storage and lifecycle management.
* Least-privilege API scopes.
* Server-side validation where a backend is used.
* Secure handling of private files.
* HTTPS.
* Dependency and configuration reviews.
* Error handling and logging that do not expose sensitive information.

---

# 20. Known Limitations

The current version is a functional prototype rather than a fully automated media-management platform.

| Limitation                 | Current behavior                                                 |
| -------------------------- | ---------------------------------------------------------------- |
| Manual catalogue           | New media entries must be added to JavaScript.                   |
| No Drive synchronization   | Changes in Google Drive do not automatically update the library. |
| No authentication          | The website does not have a login system.                        |
| No database                | Media metadata is stored in the JavaScript source file.          |
| Browser-specific favorites | Favorites are not synchronized across devices.                   |
| Browser-specific history   | Recently watched entries are stored locally.                     |
| No upload interface        | Files must be uploaded directly to Google Drive.                 |
| No automated thumbnails    | The interface uses symbols and CSS backgrounds.                  |
| No storage dashboard       | Google Drive quota and usage are not displayed.                  |
| No playback analytics      | The application does not measure watch time or completion.       |
| Limited player control     | Playback is managed by the embedded Google Drive player.         |
| No automated backups       | The project does not independently back up media or preferences. |

These limitations should be considered before using the project as a long-term, cross-device file-management solution.

---

# 21. Troubleshooting

## 21.1 A Video Does Not Play

**Possible causes:**

* The Drive ID is incorrect.
* The file has not finished processing.
* The file is inaccessible to the viewing account.
* The sharing permissions do not permit playback.
* Google Drive has temporarily restricted playback.
* The browser or network is blocking embedded content.

**Recommended checks:**

1. Verify the file ID.
2. Open the regular Drive link.
3. Confirm that the appropriate Google account can access the file.
4. Review the sharing settings.
5. Test another video.
6. Inspect browser developer tools for relevant errors.

## 21.2 The Website Shows a Placeholder Instead of a Video

The player remains in its placeholder state until a valid video is selected.

If the selected item contains a placeholder ID such as `REPLACE_WITH_VIDEO_ID_1`, the application displays a demonstration-video message instead of attempting playback.

Replace the placeholder with the real Google Drive file ID.

## 21.3 A Document Does Not Open

Check that the entry has:

* `type: "file"`.
* A valid `url`.
* The correct Google Drive file ID.
* Appropriate sharing permissions.

The example catalogue contains placeholder document URLs that must be replaced.

## 21.4 Favorites Disappear

Possible causes include:

* Browser Local Storage was cleared.
* The website was opened under a different origin.
* The browser is using private browsing.
* Storage is disabled or unavailable.

Favorites are not stored in Google Drive.

## 21.5 Search Returns No Results

Check the spelling of the search term.

Also confirm that the selected navigation view and category match the expected item.

The current search only covers the locally configured catalogue.

## 21.6 The Mobile Menu Does Not Open

Confirm that:

* `script.js` is loading correctly.
* The menu button has the ID `menuButton`.
* The sidebar has the ID `sidebar`.
* The overlay has the ID `sidebarOverlay`.

Open the browser console and check for JavaScript errors.

## 21.7 Changes Do Not Appear After Deployment

Possible causes include:

* The latest files were not committed.
* The deployment has not finished.
* The browser is showing cached content.
* A file was edited in the wrong project directory.

Verify the deployed files and refresh the browser.

---

# 22. Development Roadmap

The following roadmap describes possible future improvements. These features are proposals and are not part of the current implementation.

## Phase 1: Core Prototype

**Status: Implemented in the initial source code**

* [x] Responsive website structure.
* [x] Sidebar navigation.
* [x] Media catalogue.
* [x] Search.
* [x] Category filters.
* [x] Sorting.
* [x] Google Drive embedded-player integration.
* [x] Favorites.
* [x] Recently watched history.
* [x] Dark mode.
* [x] Mobile navigation.
* [x] Basic documentation.

Actual Google Drive playback still requires configuring real file IDs and suitable permissions.

## Phase 2: Improved Library Management

Potential improvements:

* [ ] Dedicated thumbnail images.
* [ ] Additional categories.
* [ ] User-defined playlists.
* [ ] Better file metadata.
* [ ] File-size display.
* [ ] Improved loading and error states.
* [ ] Keyboard accessibility improvements.
* [ ] A dedicated video-watching page.
* [ ] Better empty states.
* [ ] More comprehensive testing.

## Phase 3: Google Drive API Integration

Potential improvements:

* [ ] Google OAuth integration.
* [ ] Google Drive API configuration.
* [ ] Retrieve files from a selected Drive folder.
* [ ] Automatically populate the library.
* [ ] Read supported file metadata.
* [ ] Generate catalogue entries from Drive results.
* [ ] Add pagination for large collections.
* [ ] Handle expired authentication.
* [ ] Provide synchronization and error reporting.

These features require additional implementation and appropriate Google Cloud configuration.

API access and quota requirements must be reviewed before implementation.

## Phase 4: Personalization

Potential improvements:

* [ ] User-defined categories.
* [ ] Playlists.
* [ ] Resume-position tracking where technically supported.
* [ ] Notes attached to media items.
* [ ] Custom sorting.
* [ ] More advanced search.
* [ ] Export and import of catalogue metadata.
* [ ] Optional preference synchronization.

## Phase 5: Privacy and Access Control

Potential improvements:

* [ ] Optional authentication.
* [ ] Private library configuration.
* [ ] Secure OAuth integration.
* [ ] Better management of restricted files.
* [ ] Clear separation between public metadata and private content.

A login screen alone would not make a static website secure. Genuine access control requires appropriate enforcement of permissions and protected resources.

## Phase 6: Testing and Reliability

Potential improvements:

* [ ] Automated JavaScript tests.
* [ ] Browser compatibility testing.
* [ ] Accessibility testing.
* [ ] Responsive-layout regression tests.
* [ ] Error reporting.
* [ ] Performance testing.
* [ ] Dependency and security reviews.
* [ ] Backup and recovery procedures.

---

# 23. Development Principles

MyVault should continue to follow these principles as the project grows.

### 23.1 Simplicity

Prefer the simplest implementation that meets the actual requirement.

Introduce frameworks or backend services only when they provide a clear benefit.

### 23.2 Separation of Concerns

Keep the user interface, styling, application logic, and media storage conceptually separate.

### 23.3 Maintainability

Use clear function names, consistent formatting, and descriptive documentation.

As the catalogue grows, consider separating media metadata into a dedicated JSON file or retrieving it from an API.

### 23.4 Privacy by Design

Do not expose private files unnecessarily.

Do not treat obscured links or client-side JavaScript as a security boundary.

### 23.5 Reliability

Provide useful error messages and test the application with actual files before relying on it.

### 23.6 Progressive Development

Build the project in small, testable stages.

Verify each new feature before introducing additional complexity.

---

# 24. Contribution and Maintenance

MyVault is a personal project, but its structure supports future development.

When modifying the application:

1. Keep the source files organized.
2. Test changes locally before deploying them.
3. Verify video playback after modifying the player logic.
4. Check responsive layouts after changing the CSS.
5. Ensure that new catalogue entries have unique IDs.
6. Update this README when adding major functionality.
7. Do not commit passwords, private keys, or confidential tokens.
8. Maintain backups of important source files and media.

Git can be used to track changes to the source code.

A simple workflow is:

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Initial MyVault implementation"
```

If the project already uses Git, do not run `git init` again unnecessarily.

---

# 25. License

No formal license has been selected for this project.

Until a license is added, do not assume that third parties have permission to redistribute or reuse the project.

If the project is later published publicly, choose an appropriate license based on your intended usage and distribution terms.

Files stored in Google Drive may also have their own copyright and usage restrictions. Hosting a file or embedding its player does not grant permission to redistribute copyrighted material.

---

## Final Summary

MyVault is a lightweight personal digital library built with HTML, CSS, and JavaScript.

It uses Google Drive to store videos and other files while providing a separate website interface for browsing the collection.

Its initial implementation supports embedded video playback, search, categories, favorites, recently watched history, sorting, dark mode, and responsive navigation.

The main architectural advantage is that the website code remains separate from the media files, making it practical to host the interface on a free static hosting platform while keeping the collection in Google Drive.

The next major development milestone is **Google Drive API integration**, which would allow the library to discover and organize files automatically rather than requiring manual catalogue updates.

**Project name:** MyVault
**Project type:** Personal media library website
**Current version:** Initial prototype
**Frontend:** HTML5, CSS3, vanilla JavaScript
**Media storage:** Google Drive
**Database:** None
**Backend:** None
**Deployment model:** Static website hosting
**Primary goal:** Provide a simple, searchable interface for accessing a personal collection of videos and digital files.

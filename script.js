"use strict";

/* ======================================
   1. YOUR MEDIA LIBRARY
====================================== */

// Add your videos and files to this array.
//
// For Google Drive videos:
// Replace the example ID with the actual ID.
//
// For other files:
// Use the share link in the "url" property.
//
// Keep only files you own or have permission to use.

const mediaLibrary = [

    {
        id: 1,
        title: "Introduction to JavaScript",
        description: "Learn the fundamentals of JavaScript programming.",
        category: "Education",
        type: "video",
        driveId: "1Aeudo7CtuYq63zy21XTngcd_Lw4lDb2B",
        date: "2026-10-10",
        symbol: "JS"
    },

    {
        id: 2,
        title: "Web Development Fundamentals",
        description: "An introduction to HTML, CSS and web development.",
        category: "Technology",
        type: "video",
        driveId: "1C9UBk_a1H0pIzUWlQ2hWHdlGk8w9TsBT",
        date: "2026-10-11",
        symbol: "</>"
    },

    {
        id: 3,
        title: "My Favorite Entertainment Videos",
        description: "A collection of videos for relaxation and entertainment.",
        category: "Entertainment",
        type: "video",
        driveId: "1Aeudo7CtuYq63zy21XTngcd_Lw4lDb2B",
        date: "2026-10-12",
        symbol: "♪"
    },

    {
        id: 4,
        title: "Personal Reference Video",
        description: "A personal video saved for future reference.",
        category: "Other",
        type: "video",
        driveId: "1Aeudo7CtuYq63zy21XTngcd_Lw4lDb2B",
        date: "2026-10-13",
        symbol: "▶"
    },

    {
        id: 5,
        title: "JavaScript Learning Notes",
        description: "A document containing programming notes.",
        category: "Education",
        type: "file",
        url: "https://drive.google.com/file/d/1HWfRVXSGDkQ_utP9-7jF4sUQ0pqtdYlM/view?usp=sharing",
        fileType: "DOCUMENT",
        date: "2026-10-13",
        symbol: "DOC"
    },

    {
        id: 6,
        title: "Web Development Resources",
        description: "A collection of resources for learning web development.",
        category: "Technology",
        type: "file",
        url: "https://drive.google.com/file/d/1HWfRVXSGDkQ_utP9-7jF4sUQ0pqtdYlM/view?usp=sharing",
        fileType: "FILE",
        date: "2026-10-13",
        symbol: "ZIP"
    }

];


/* ======================================
   2. SAVE AND RESTORE PREFERENCES
====================================== */

// These preferences belong to this browser.
//
// They are not synchronized between devices.

function loadStoredArray(key) {

    try {

        const saved = localStorage.getItem(key);

        if (!saved) {
            return [];
        }

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed) ? parsed : [];

    } catch (error) {

        console.warn("Could not load saved preferences.");

        return [];

    }

}


function saveValue(key, value) {

    try {

        localStorage.setItem(key, JSON.stringify(value));

    } catch (error) {

        console.warn("Could not save browser preferences.");

    }

}


let favorites = loadStoredArray("myvault-favorites");

let recentVideos = loadStoredArray("myvault-recent");

let currentView = "home";

let currentCategory = "All";

let currentVideoId = null;


/* ======================================
   3. SELECT HTML ELEMENTS
====================================== */

const mediaGrid = document.getElementById("mediaGrid");

const searchInput = document.getElementById("searchInput");

const categoryFilters = document.getElementById("categoryFilters");

const sortSelect = document.getElementById("sortSelect");

const emptyState = document.getElementById("emptyState");

const videoPlayer = document.getElementById("videoPlayer");

const playerPlaceholder = document.getElementById("playerPlaceholder");

const playerSection = document.getElementById("playerSection");

const playingTitle = document.getElementById("playingTitle");

const playingCategory = document.getElementById("playingCategory");

const playerDescription = document.getElementById("playerDescription");

const openDriveButton = document.getElementById("openDriveButton");

const closePlayerButton = document.getElementById("closePlayerButton");

const pageTitle = document.getElementById("pageTitle");

const pageSubtitle = document.getElementById("pageSubtitle");

const libraryTitle = document.getElementById("libraryTitle");

const resultCount = document.getElementById("resultCount");


/* ======================================
   4. HELPER FUNCTIONS
====================================== */

// Escape text before inserting it into HTML.

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function (character) {

        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[character];

    });

}


// Get a media item by its ID.

function getMediaById(id) {

    return mediaLibrary.find(function (item) {

        return item.id === Number(id);

    });

}


// Check whether a Google Drive video ID is configured.

function hasValidDriveId(item) {

    if (!item || !item.driveId) {
        return false;
    }

    return /^[a-zA-Z0-9_-]+$/.test(item.driveId)
        && !item.driveId.startsWith("REPLACE_WITH_");

}


// Convert a Google Drive video ID into an embed URL.

function getDriveEmbedURL(item) {

    return "https://drive.google.com/file/d/"
        + encodeURIComponent(item.driveId)
        + "/preview";

}


// Convert a Google Drive video ID into a normal share URL.

function getDriveShareURL(item) {

    return "https://drive.google.com/file/d/"
        + encodeURIComponent(item.driveId)
        + "/view";

}


// Get the URL for an item.

function getItemURL(item) {

    if (item.type === "video" && hasValidDriveId(item)) {

        return getDriveShareURL(item);

    }

    if (item.type === "file" && item.url) {

        return item.url;

    }

    return null;

}


/* ======================================
   5. UPDATE STATISTICS
====================================== */

function updateStatistics() {

    const videos = mediaLibrary.filter(function (item) {

        return item.type === "video";

    });

    const files = mediaLibrary.filter(function (item) {

        return item.type === "file";

    });

    document.getElementById("videoCount").textContent = videos.length;

    document.getElementById("fileCount").textContent = files.length;

    document.getElementById("favoriteCount").textContent = favorites.length;

}


/* ======================================
   6. BUILD A MEDIA CARD
====================================== */

function createMediaCard(item) {

    const card = document.createElement("article");

    card.className = "media-card";

    const isFavorite = favorites.includes(item.id);

    const isVideo = item.type === "video";

    const thumbnailClass = item.category.toLowerCase();

    const symbol = escapeHTML(item.symbol || "▶");

    const title = escapeHTML(item.title);

    const description = escapeHTML(item.description);

    const category = escapeHTML(item.category);

    const itemType = isVideo ? "VIDEO" : escapeHTML(item.fileType || "FILE");

    const actionLabel = isVideo ? "Watch →" : "Open file →";

    const action = isVideo ? "watch" : "open";

    card.innerHTML = `

        <div class="media-thumbnail ${thumbnailClass}">

            <span class="thumbnail-symbol">${symbol}</span>

            <span class="file-badge">${itemType}</span>

            <button
                class="favorite-button ${isFavorite ? "active" : ""}"
                data-action="favorite"
                data-id="${item.id}"
                aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
                aria-pressed="${isFavorite}"
            >
                ${isFavorite ? "★" : "☆"}
            </button>

            ${isVideo ? '<div class="play-overlay">▶</div>' : ""}

        </div>

        <div class="media-info">

            <span class="media-category">${category}</span>

            <h3>${title}</h3>

            <p class="media-description">${description}</p>

            <div class="card-footer">

                <span class="card-date">${item.date}</span>

                <button
                    class="card-action"
                    data-action="${action}"
                    data-id="${item.id}"
                >
                    ${actionLabel}
                </button>

            </div>

        </div>

    `;

    return card;

}


/* ======================================
   7. FILTER THE LIBRARY
====================================== */

function getFilteredMedia() {

    const query = searchInput.value.trim().toLowerCase();

    let results = mediaLibrary.filter(function (item) {

        const matchesSearch = [

            item.title,
            item.description,
            item.category,
            item.fileType || ""

        ].some(function (value) {

            return String(value).toLowerCase().includes(query);

        });

        const matchesCategory =
            currentCategory === "All"
            || item.category === currentCategory;

        let matchesView = true;

        if (currentView === "videos") {

            matchesView = item.type === "video";

        } else if (currentView === "files") {

            matchesView = item.type === "file";

        } else if (currentView === "favorites") {

            matchesView = favorites.includes(item.id);

        } else if (currentView === "recent") {

            matchesView = recentVideos.includes(item.id);

        }

        return matchesSearch && matchesCategory && matchesView;

    });


    // Sort the results.

    if (sortSelect.value === "newest") {

        results.sort(function (a, b) {

            return b.date.localeCompare(a.date);

        });

    } else {

        results.sort(function (a, b) {

            return a.title.localeCompare(b.title);

        });

    }

    return results;

}


/* ======================================
   8. RENDER THE LIBRARY
====================================== */

function renderLibrary() {

    const results = getFilteredMedia();

    mediaGrid.replaceChildren();

    results.forEach(function (item) {

        mediaGrid.appendChild(createMediaCard(item));

    });

    emptyState.hidden = results.length !== 0;

    resultCount.textContent =
        results.length + (results.length === 1 ? " item" : " items");

    updateStatistics();

}


/* ======================================
   9. PLAY A VIDEO
====================================== */

function playVideo(id) {

    const item = getMediaById(id);

    if (!item || item.type !== "video") {
        return;
    }

    if (!hasValidDriveId(item)) {

        alert(
            "This is a demonstration video. "
            + "Replace its sample ID with your Google Drive video ID."
        );

        return;

    }

    currentVideoId = item.id;

    videoPlayer.src = getDriveEmbedURL(item);

    videoPlayer.hidden = false;

    playerPlaceholder.hidden = true;

    playingTitle.textContent = item.title;

    playingCategory.textContent = item.category;

    playerDescription.textContent = item.description;

    openDriveButton.hidden = false;

    // Put the video at the top of the recent list.

    recentVideos = [

        item.id,

        ...recentVideos.filter(function (recentId) {

            return recentId !== item.id;

        })

    ].slice(0, 20);

    saveValue("myvault-recent", recentVideos);

    renderLibrary();

    playerSection.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* ======================================
   10. CLOSE THE PLAYER
====================================== */

function closePlayer() {

    // Reset the iframe to stop playback.

    videoPlayer.src = "about:blank";

    videoPlayer.hidden = true;

    playerPlaceholder.hidden = false;

    playingTitle.textContent = "No video selected";

    playingCategory.textContent = "Choose a video to begin.";

    playerDescription.textContent =
        "Select a video from your library.";

    openDriveButton.hidden = true;

    currentVideoId = null;

}


closePlayerButton.addEventListener("click", closePlayer);


/* ======================================
   11. OPEN A NON-VIDEO FILE
====================================== */

function openFile(id) {

    const item = getMediaById(id);

    if (!item || item.type !== "file") {
        return;
    }

    if (!item.url || item.url === "https://drive.google.com/") {

        alert(
            "Replace this demonstration link with the "
            + "actual Google Drive file link."
        );

        return;

    }

    // Open the file in a separate tab.

    window.open(item.url, "_blank", "noopener,noreferrer");

}


/* ======================================
   12. FAVORITES
====================================== */

function toggleFavorite(id) {

    const item = getMediaById(id);

    if (!item) {
        return;
    }

    if (favorites.includes(item.id)) {

        favorites = favorites.filter(function (favoriteId) {

            return favoriteId !== item.id;

        });

    } else {

        favorites.push(item.id);

    }

    saveValue("myvault-favorites", favorites);

    renderLibrary();

}


/* ======================================
   13. HANDLE CARD BUTTONS
====================================== */

mediaGrid.addEventListener("click", function (event) {

    const button = event.target.closest("button[data-action]");

    if (!button) {
        return;
    }

    const action = button.dataset.action;

    const id = Number(button.dataset.id);

    if (action === "favorite") {

        toggleFavorite(id);

    } else if (action === "watch") {

        playVideo(id);

    } else if (action === "open") {

        openFile(id);

    }

});


/* ======================================
   14. SEARCH AND SORT
====================================== */

searchInput.addEventListener("input", renderLibrary);

sortSelect.addEventListener("change", renderLibrary);


/* ======================================
   15. CATEGORY FILTERS
====================================== */

categoryFilters.addEventListener("click", function (event) {

    const button = event.target.closest("button[data-category]");

    if (!button) {
        return;
    }

    currentCategory = button.dataset.category;

    document.querySelectorAll(".category-button").forEach(
        function (categoryButton) {

            categoryButton.classList.toggle(

                "active",

                categoryButton === button

            );

        }
    );

    renderLibrary();

});


/* ======================================
   16. NAVIGATION
====================================== */

const navigationTitles = {

    home: {

        title: "My Library",

        subtitle: "Your personal digital collection.",

        libraryTitle: "Your Collection"

    },

    videos: {

        title: "All Videos",

        subtitle: "Browse your video collection.",

        libraryTitle: "Video Library"

    },

    favorites: {

        title: "Favorites",

        subtitle: "Your favorite items in one place.",

        libraryTitle: "Favorite Items"

    },

    recent: {

        title: "Recently Watched",

        subtitle: "Return to videos you watched recently.",

        libraryTitle: "Recent Videos"

    },

    files: {

        title: "My Files",

        subtitle: "Find your documents and other files.",

        libraryTitle: "File Library"

    }

};


document.querySelectorAll(".nav-item").forEach(function (button) {

    button.addEventListener("click", function () {

        currentView = button.dataset.view;

        document.querySelectorAll(".nav-item").forEach(
            function (navItem) {

                navItem.classList.toggle(

                    "active",

                    navItem === button

                );

            }
        );

        const details = navigationTitles[currentView];

        pageTitle.textContent = details.title;

        pageSubtitle.textContent = details.subtitle;

        libraryTitle.textContent = details.libraryTitle;

        // Show the welcome banner only on Home.

        document.getElementById("heroSection").hidden =
            currentView !== "home";

        // Reset category filters when changing sections.

        currentCategory = "All";

        document.querySelectorAll(".category-button").forEach(
            function (categoryButton) {

                categoryButton.classList.toggle(

                    "active",

                    categoryButton.dataset.category === "All"

                );

            }
        );

        searchInput.value = "";

        renderLibrary();

        closeSidebar();

    });

});


/* ======================================
   17. HERO BUTTON
====================================== */

document.getElementById("exploreButton").addEventListener(
    "click",
    function () {

        document.getElementById("librarySection").scrollIntoView({

            behavior: "smooth"

        });

    }
);


/* ======================================
   18. OPEN THE SELECTED VIDEO IN DRIVE
====================================== */

openDriveButton.addEventListener("click", function () {

    if (currentVideoId === null) {
        return;
    }

    const item = getMediaById(currentVideoId);

    const url = getItemURL(item);

    if (url) {

        window.open(url, "_blank", "noopener,noreferrer");

    }

});


/* ======================================
   19. DARK MODE
====================================== */

const themeButton = document.getElementById("themeButton");

function applyTheme(theme) {

    const dark = theme === "dark";

    document.body.classList.toggle("dark-theme", dark);

    themeButton.textContent = dark ? "☀" : "☾";

    themeButton.setAttribute(

        "aria-label",

        dark ? "Switch to light theme" : "Switch to dark theme"

    );

}


let savedTheme = "light";

try {

    savedTheme = localStorage.getItem("myvault-theme") || "light";

} catch (error) {

    console.warn("Could not load the saved theme.");

}

applyTheme(savedTheme);


themeButton.addEventListener("click", function () {

    const newTheme = document.body.classList.contains("dark-theme")

        ? "light"

        : "dark";

    applyTheme(newTheme);

    try {

        localStorage.setItem("myvault-theme", newTheme);

    } catch (error) {

        console.warn("Could not save the theme preference.");

    }

});


/* ======================================
   20. MOBILE SIDEBAR
====================================== */

const sidebar = document.getElementById("sidebar");

const sidebarOverlay = document.getElementById("sidebarOverlay");

const menuButton = document.getElementById("menuButton");


function openSidebar() {

    sidebar.classList.add("open");

    sidebarOverlay.classList.add("visible");

}


function closeSidebar() {

    sidebar.classList.remove("open");

    sidebarOverlay.classList.remove("visible");

}


menuButton.addEventListener("click", openSidebar);

sidebarOverlay.addEventListener("click", closeSidebar);


/* ======================================
   21. INITIALIZE WEBSITE
====================================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

renderLibrary();
const feeds = document.getElementById("feeds");

const RSS_URLS = [
  "https://lukadjo.tumblr.com/rss",
  "https://epprbcu.tumblr.com/rss",
  "https://the-tutorial.tumblr.com/rss",
];

async function fetchFeeds() {
    const promises = RSS_URLS.map(async (url) => {
    /*const response = await fetch(url, { mode: "no-cors", });*/
    const response = await fetch(url, {
          mode: "cors",
          proxy: "https://cors-anywhere.herokuapp.com/",
    });
    const text = await response.text();
    return new DOMParser().parseFromString(text, "text/xml");
});

const feedsData = await Promise.all(promises);

for (const feedData of feedsData) {
    const feedItems = feedData.querySelectorAll("item");

    for (const feedItem of feedItems) {
        const div = document.createElement("div");
        div.classList.add("feed-item");

        const img = document.createElement("img");
        img.src = feedItem.querySelector("img").src;
        div.appendChild(img);

        const h2 = document.createElement("h2");
        h2.textContent = feedItem.querySelector("title").textContent;
        div.appendChild(h2);

        const p = document.createElement("p");
        p.textContent = feedItem.querySelector("description").textContent;
        div.appendChild(p);

        feeds.appendChild(div);
    }
}
}

fetchFeeds();

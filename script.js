const feedUrl = document.getElementById("feed-url").value;
const feedItemsList = document.getElementById("feed-items");

fetch(feedUrl)
  .then(response => response.json())
  .then(data => {
    for (const item of data.items) {
      const li = document.createElement("li");
      li.textContent = item.title;
      feedItemsList.appendChild(li);
    }
  });
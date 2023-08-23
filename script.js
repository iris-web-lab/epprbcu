const feedly = require('feedly');

const feedUrl = 'https://blog.google/rss/';

const feed = feedly.createFeed(feedUrl);

feed.on('load', () => {
    const items = feed.items;

    const ul = document.createElement('ul');

    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item.title;
        ul.appendChild(li);
    }

    document.getElementById('feed').appendChild(ul);
});

feed.fetch();
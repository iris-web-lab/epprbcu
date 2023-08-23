const feedUrl = 'https://blog.google/rss/';

const feed = new Nanofeed(feedUrl);

feed.on('update', () => {
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
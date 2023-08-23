<?php

if ($_POST) {
    $rss_link = $_POST['rss_link'];

    // Get the RSS feed
    $rss_feed = simplexml_load_file($rss_link);

    // Loop through the RSS feed items
    foreach ($rss_feed->channel->item as $item) {
        echo '<h2>' . $item->title . '</h2>';
        echo '<p>' . $item->description . '</p>';
        echo '<p><a href="' . $item->link . '">Read more</a></p>';
    }
}

?>
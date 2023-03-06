import { apiPlugin, storyblokInit } from '@storyblok/react';

function initStoryblok (components) {
  return storyblokInit({
    accessToken: 'VaU1xW9KROy5MHltLZHiNwtt',
    use: [apiPlugin],
    components: components,
  });
};

export default {initStoryblok};
import type { ISbStoriesParams} from '@storyblok/react';

import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react';
import { ComponentList } from '../components/ComponentList';

function initStoryblok () {
  storyblokInit({
    accessToken: '',
    use: [apiPlugin],
    components: ComponentList,
  });
};

async function getStory(slug: string, isDraft?: boolean) {
  initStoryblok();
  let sbParams: ISbStoriesParams = {
    version: isDraft ? 'draft' : 'published',
  };
  
  return await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
}

export default {initStoryblok, getStory};
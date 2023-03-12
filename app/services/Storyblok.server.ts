import type { ISbStoriesParams, StoryblokClient } from '@storyblok/js';
import { storyblokInit, apiPlugin } from '@storyblok/js';

let storyblokInstance: StoryblokClient = null;

const initStoryblok = () => {
  const { storyblokApi } = storyblokInit({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
  });

  storyblokInstance = storyblokApi;
};

const getStory = async (slug: string, isDraft: boolean = true) => {
  let sbParams: ISbStoriesParams = {
    version: isDraft ? 'draft' : 'published',
  };
  
  let { data } = await storyblokInstance.get(`cdn/stories/${slug}`, sbParams);
  
  return data?.story;
};

export default { initStoryblok,getStory };
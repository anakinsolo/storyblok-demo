import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
  useStoryblokState,
  StoryblokComponent
} from '@storyblok/react';
import StoryblokServer from '../services/Storyblok.server';
import PageComponent from '~/components/Page';

// export const loader = async ({params}: LoaderArgs) => {
// const slug = params.slug ?? 'home';
// let {data} = await StoryblokServer.getStory(slug, true);
// return json(data?.story);
// };
 
export default function Page() {
  // let story = useLoaderData();
  
  // story = useStoryblokState(story);
  return (
    // <StoryblokComponent blok={story.content} />
    <PageComponent />
  );
}
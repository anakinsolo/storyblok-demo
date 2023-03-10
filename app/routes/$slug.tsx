import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
 
import type {
  ISbStoriesParams} from '@storyblok/react';
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent
} from '@storyblok/react';
import Layout from '~/components/Layout';
 
export const loader = async ({ params }) => {
  console.log(params);
  const slug = params.slug ?? 'home';
 
  let sbParams: ISbStoriesParams = {
    version: 'draft',
  };
 
  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
 
  return json(data?.story);
};
 
export default function Page() {
  let story = useLoaderData();
 
  story = useStoryblokState(story);
  console.log(story.content.body[0].headline);
  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}
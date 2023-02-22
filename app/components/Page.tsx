import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

const Page = ({blok}) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
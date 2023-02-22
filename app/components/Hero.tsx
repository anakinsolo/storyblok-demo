import { storyblokEditable } from '@storyblok/react';

const Hero = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h1> {blok.title} </h1>
    </div>
  );
};

export default Hero;
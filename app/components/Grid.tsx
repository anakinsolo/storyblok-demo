import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
 
const Grid = ({ blok }) => {
  return (
    <ul {...storyblokEditable(blok)} key={blok._uid}>
      {blok.columns.map((blok) => (
        <li key={blok._uid}>
          <StoryblokComponent blok={blok} />
        </li>
      ))}
    </ul>
  );
};
 
export default Grid;
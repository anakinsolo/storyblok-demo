import { json } from '@remix-run/node';
import { getStoryblokApi } from '@storyblok/react';
import { useEffect } from 'react';


const Navigation = () => {
  useEffect(() => {
    const getMenuItems = async () => {
      let { data } = await getStoryblokApi().get('cdn/stories/menu/navigation');
      
    };
    
    getMenuItems();
  }, []);

  return (
    <div className='flex flex-row space-x-3 bg-slate-500'>
      <div>Logo</div>
      <ul className='flex'>
        <li className='text-l text-center font-bold mb-4 pt-10 lg:text-3xl'>About</li>
        <li className='text-l text-center font-bold mb-4 pt-10 lg:text-3xl'>Contact</li>
      </ul>
    </div>
  );
};

export default Navigation;
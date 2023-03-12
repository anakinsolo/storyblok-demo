const Navigation = ({ story }) => {
  const { content } = story;
  const { body } = content;
  return (
    <div className='flex flex-row space-x-3 bg-slate-500'>
      <div className='text-l text-center font-bold mb-4 pt-10 lg:text-3xl'>Logo</div>
      <ul className='flex'>
        {body.map((item) => {
          console.log(item.item_link);
          const { item_link } = item;
          return (<a key={item._uid} href={item_link.url} className='text-l text-center font-bold mb-4 pt-10 lg:text-3xl'>{item.item_name}</a>);
        })}
      </ul>
    </div>
  );
};

export default Navigation;
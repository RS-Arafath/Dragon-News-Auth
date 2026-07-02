import Marquee from 'react-fast-marquee';
import AnimatedButton from '@/components/ui/animated-button';
import { getNewsByCategoryId } from '@/lib/data';
const categoryIds = ['01', '02', '03','04','05','06']; 
const BreakingNews = async () => {
  const newsArrays = await Promise.all(
    categoryIds.map((id) => getNewsByCategoryId(id)),
  );

  
  const allNews = newsArrays.flat();

  return (
    <div className="flex justify-between items-center bg-gray-200 p-3">
      <AnimatedButton className="btn bg-red-600 text-white">    
        Breaking News
      </AnimatedButton>
      <Marquee direction="left" pauseOnHover={true}>
        {allNews.map((item) => (
          <span key={item._id} className="mx-6 whitespace-nowrap font-medium">
            {item.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;

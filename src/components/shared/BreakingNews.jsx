import Marquee from 'react-fast-marquee';
import AnimatedButton from '@/components/ui/animated-button';
const BreakingNews = () => {
  return (
    <div className=" flex justify-between  items-center bg-gray-200  p-3">
      <AnimatedButton className="btn bg-red-600 text-white">
        Breaking News
      </AnimatedButton>
      <Marquee direction="left" pauseOnHover={true}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae qui
        dolores quibusdam, deleniti quae sit, ullam accusantium atque vero ipsa
        perspiciatis a vel soluta repellendus non nam optio nostrum distinctio
        consequatur iure? Dicta recusandae ad reprehenderit quae corrupti, error
        nesciunt?
      </Marquee>
    </div>
  );
};

export default BreakingNews;

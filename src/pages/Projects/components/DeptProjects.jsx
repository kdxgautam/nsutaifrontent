import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";

const DeptProjects = ({dept}) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1200, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };

      
    return (
      <div className='mb-[150px] mt-[50px] mx-[50px]'>
        <h1 className='mb-1 font-sans text-4xl antialiased font-semibold-300 leading-snug  tracking-normal text-white  m-auto  w-fit rounded-xl   p-[20px]'>{dept}</h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          infinite={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="bg-[#131417] m-[20px] rounded-xl box-border">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/> 
        </Carousel>
      </div>
    )
};

export default DeptProjects;

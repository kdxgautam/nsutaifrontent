import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";


const DeptProjects = ({dept, projects}) => {

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
      <div className='mb-[10rem] mt-[4px] mx-[2.5px]'>
        <h1 className='mb-1 font-inter  font-semibold-500 leading-snug sm:2xl lg:4xl text-3xl tracking-normal text-white text-center m-auto  w-fit rounded-xl   p-[20px]'>{dept}</h1>
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
          className="bg-[#131417] m-[1rem] rounded-xl box-border">
              {projects.length>0 && projects.map((project)=><ProjectCard project={project} />)}
        </Carousel>
      </div>
    )
};

export default DeptProjects;

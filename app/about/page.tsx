import Intro from "../components/Intro";
import TimeLine from "../components/TimeLine";
import TextHeader from "../components/TextHeader";
import {timelineData} from "../data/data";
import Gallery from "../components/Gallery";


const Contact = async () => {
  // const req = await fetch(
  //   `https://dev-bien.pantheonsite.io/wp-json/wp/v2/components?slug=my-work-experience&_=${new Date().getTime()}`,
  //   { cache: "no-store" }
  // );
  // const pages = await req.json();
  // const page = pages[0];
  // const timelineData = page.acf.components[0].item;

  

  return (
    <div className='flex flex-col items-center justify-between pt-20 pb-10'>
      <Intro />
      <TextHeader
        title="Browser my work Experience"
        body="Detailed timeline showcasing my professional journey, highlighting key roles, achievements, and skills acquired throughout my career."
        align='text-left'
        link=''
      />
      <TimeLine timelineData={timelineData} />
      <Gallery />
    </div>
  );
};

export default Contact;

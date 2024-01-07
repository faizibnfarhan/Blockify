import { Button } from "@/component/ui/button"
import Footer from "@/app/inner-components/footer/page"
import Navbar from "@/app/inner-components/navbar/page"
import Hero from "./inner-components/hero/page"
import Trusted from "./inner-components/trusted/page"
import CoursesContainer from "./inner-components/courses-carousel/page"
import Achievements from "./inner-components/achievements/page"
import Feedback from "./inner-components/feedback/page"
import Newsletter from "./inner-components/newsletter/page"


export default function Home({props}) { 
  return (  
    <div className="px-4 lg:px-0">
      {/** Header */}
      <Navbar/>
   
      {/** Body */}
      <div className="container pt-10">
          <Hero/>
      </div>
      <div className="container">
          <Trusted/>
      </div>

      <div className="container mx-auto justify-center pt-28">
      <div className='lg:mx-14 mt-2 mb-12 space-y-4'>
            <h1 className='text-2xl font-bold'>
                Our Courses
            </h1>
            <p className='text-sm font-normal text-gray-500'>
                Find the best relevant course for yourself and upgrade your knowledge in blockchain industry ✨ 👨‍💻.
            </p>
        </div>
        <div className="block md:mb-10 lg:mb-10 md:flex space-y-8 md:space-y-0 lg:space-y-0 lg:flex items-center md:basis-1/3 lg:basis-1/3 justify-between">
        <CoursesContainer title="Hello" ratings="10" img="/Saly-1.png" price="$50" tag="Blockchain" />
        <CoursesContainer title="Hello" ratings="10" img="/Saly-1.png" price="$50" tag="Blockchain" />
        <CoursesContainer title="Hello" ratings="10" img="/Saly-1.png" price="$50" tag="Blockchain" />
        </div>
        <div className="block md:flex mt-8 space-y-8 md:space-y-0 lg:space-y-0 lg:flex items-center md:basis-1/3 lg:basis-1/3 justify-between">
        <CoursesContainer title="Hello" ratings="10" img="/Saly-1.png" price="$50" tag="Blockchain" />
        <CoursesContainer title="Hello" ratings="10" img="/Saly-1.png" price="$50" tag="Blockchain" />
        <CoursesContainer title="Hello" ratings="10" img="/Saly-1.png" price="$50" tag="Blockchain" />
        </div>
      </div>

      <div className="container">
        <Achievements/>
      </div>
      <div className=" mx-auto w-[100%] lg:w-[90%] xl:w-[68%] md:w-[70%] container">
        <h1 className="text-2xl font-bold">
          Students Feedback
        </h1>
        <p className="text-sm font-normal text-gray-500 py-4 mb-12">
          Hear what our students think about us and they share their experiences.
        </p>
          <div className="lg:flex  mb-10 items-center space-y-10 block lg:space-x-8 md:space-y-4 lg:space-y-4">
            <Feedback username="Muhammad Faiz Khan" profession="Software Developer"/>
            <Feedback username="Jhon Doe" profession="Web Designer"/>
            <Feedback username="Qureshi M." profession="Blockchain Developer"/>
          </div>
          <div className="lg:flex items-center space-y-10 block lg:space-x-8 lg:space-y-4 md:space-y-4">
            <Feedback username="Muhammad Faiz Khan" profession="Software Developer"/>
            <Feedback username="Jhon Doe" profession="Web Designer"/>
            <Feedback username="Qureshi M." profession="Blockchain Developer"/>
          </div>
        </div>
      <div className="container mx-auto xl:w-[60%] lg:w-[90%] w-[100%]">
          <Newsletter/>
        </div>
      {/** Footer */}
      <Footer/>
    </div>
   
  )
}

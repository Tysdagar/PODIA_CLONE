import {
  Navbar,
  Hero,
  HeadingContent,
  Cards,
  SectionImg,
  Testimonial,
  CTA,
  Footer,
} from "./components";
import {
  HeadingContentOne,
  HeadingContentTwo,
  SectionCourses,
  SectionDownloads,
  SectionCoaching,
  SectionWebinars,
  TestimonialOne,
  TestimonialTwo,
  TestimonialThree,
} from "./components/constants/textComponents";

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-[#FDFBF9] max-w-[85rem] m-auto md:px-[4.8888888889rem] sm:px-[2.2222222222rem] p-[20px] flex flex-col items-center">
        <Hero />
        <HeadingContent
          title={HeadingContentOne.title}
          description={HeadingContentOne.description}
        />
        <Cards />
        <HeadingContent
          title={HeadingContentTwo.title}
          description={HeadingContentTwo.description}
        />
        <SectionImg
          label={SectionCourses.label}
          title={SectionCourses.title}
          description={SectionCourses.description}
          linkTitle={SectionCourses.linkTitle}
          imgSection={SectionCourses.SectionImg}
        />
        <Testimonial
          description={TestimonialOne.description}
          author={TestimonialOne.author}
          rating={5}
        />
        <SectionImg
          label={SectionDownloads.label}
          title={SectionDownloads.title}
          description={SectionDownloads.description}
          linkTitle={SectionDownloads.linkTitle}
          imgSection={SectionDownloads.SectionImg}
        />
        <Testimonial
          description={TestimonialTwo.description}
          author={TestimonialTwo.author}
          rating={5}
        />
        <SectionImg
          label={SectionCoaching.label}
          title={SectionCoaching.title}
          description={SectionCoaching.description}
          linkTitle={SectionCoaching.linkTitle}
          imgSection={SectionCoaching.SectionImg}
        />
        <Testimonial
          description={TestimonialThree.description}
          author={TestimonialThree.author}
          rating={5}
        />
        <SectionImg
          label={SectionWebinars.label}
          title={SectionWebinars.title}
          description={SectionWebinars.description}
          linkTitle={SectionWebinars.linkTitle}
          imgSection={SectionWebinars.SectionImg}
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas 
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="max-w-7xl mx-auto relative z-0">
          <h2 className="ml-[80px] text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills & Tech.
          </h2>
        </div>
        <Tech />
        <Works />
        {/*<Feedbacks />*/}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

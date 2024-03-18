"use client"

import BackButton from "@/app/components/BackToTopButton"

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function ResumePage() {
  const size = useWindowSize();
  const scrollY = useScroll();

  const stretchedWindowClass = ["w-10/12 h-full flex justify-center mx-auto font-light",
                                "h-full",
                                "h-full pl-8 ml-4 mx-auto w-4/5"]
  const slimWindowClass = ["w-10/12 h-full flex flex-wrap justify-center mx-auto font-light",
                           "h-full",
                           "h-full mt-6 mx-auto w-full"]

  return (
    <main className="bg-rose-100 text-black my-auto flex-col flex flex-wrap ">
      <Navigation />
      { scrollY > 500 &&
      <div className={"transition duration-500 opacity-100"}>
        <BackButton url="#Navbar" />
      </div>}

      <div className="w-screen bg-pink-50 flex-col pb-12">
        <h1 className=" mx-auto justify-center flex py-4 mb-12 text-4xl">RESUME</h1>

        {/* Double-sided pane */}
        <div className={size.width < 1280 ? slimWindowClass[0] : stretchedWindowClass[0]}>
          {/* First Side */}
          <div className={size.width < 1280 ? slimWindowClass[1] : stretchedWindowClass[1]}>
            <h2 className=" text-3xl pb-12 font-normal">🌸 <span className="ml-6">Experience</span></h2>

            {/* Experience Field */}
            <div className="">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">Cyferd | Internship </h3>
                <h3 className="ml-auto pr-4">01/23 - 04/23</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>

              <ul className="mt-4 space-y-1">

                <li>• Collaborated with the solution expert of Cyferd to develop an innovative mental health application using Cyferd technology, implementing JSON coding</li>
                <li>• Crafted PowerPoint presentations showcasing application's front-end features, boosting user satisfaction</li>
                <li>• Achieved recognition as a Certified Cyferd Modeller for exceptional contributions to project development and implementation</li>
                <li>• Utilized engineering principles to drive innovation and collaboration, supporting business objectives in a dynamic team setting</li>
                <li>• Applied Lean principles and process optimization, achieving a 15% reduction in production cycle time and a 20% increase in operational efficiency</li>

                <li>• Reference: <a className="hover:bg-rose-300" href="mailto:haider.al-seaidy@cyferd.com">haider.al-seaidy@cyferd.com</a> </li>
              </ul>
            </div>

            {/* IT Volunteering */}
            <div className="mt-6">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">IT Volunteering Support Specialist </h3>
                <h3 className="ml-auto pr-4">01/22 - 06/22</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Saudi Arabia, Jeddah</h3>
              </div>
              <ul className="mt-4">
                <li>• Resolved campus computer issues for 100+ users</li>
              </ul>
            </div>

            <div className="mt-6">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">Data Entry | Freelance</h3>
                <h3 className="ml-auto pr-4">04/23 - Present</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4 space-y-1">
                <li>• Input financial data, including transactions, invoices, receipts, and payment details using Excel</li>
                <li>• Enter and categorize expenses, which helps in tracking and managing the company’s spending. Did proper categorization to ensure accurate financial reporting</li>
                <li>• Accuracy, attention to detail, and adherence to financial regulations</li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">Team Lead | The Body Shop</h3>
                <h3 className="ml-auto pr-4">01/23 - 02/24</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4">
                <li>• Produced financial reports detailing cost breakdowns and profitability analysis, supporting strategic decision-making for the body shop department, highlighting strong analytical skills, business acumen, and customer service skills</li>
              </ul>
            </div>

            <h2 className=" text-3xl pb-12 mt-10">🌸 <span className="ml-6">Projects</span></h2>
            <div className="">
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">Capstone Project</h3>
                <h3 className="ml-auto pr-4">01/23 - 04/23</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto pr-4 italic"> TailwindCSS, React.JS, Next.JS, Node.JS, Firebase</h3>
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4 space-y-1">
                <li>• Led Capstone team to develop dynamic cat breeding website</li>
                <li>• Utilized React.js, Next.js, Node.js for scalability and front end, Firebase for real-time database</li>
                <li>• Leveraged Visual Studio Code for coding, debugging, and Git/GitHub version control, achieving a boost in code quality and deployment efficiency</li>
                <li>• Employed UML diagrams for system architecture, following agile and scrum methodologies</li>
                <li>• Designed and developed an admin dashboard using React.js; streamlined management of 50+ cat breeds, 100 cats, and interactive site content, focusing in a increase in user satisfaction, and site content</li>
                <li>• Implemented Tailwind CSS for responsive design</li>
              </ul>
            </div>
          </div>

          {/* Second Side */}
          <div className={size.width < 1280 ? slimWindowClass[2] : stretchedWindowClass[2]}>
            <h2 className=" text-3xl pb-12 font-normal">🌸 <span className="ml-6">Education</span></h2>

            <div className="w-full flex justify-space mx-auto">
              <h3 className="mr-1  justify-start text-2xl font-normal">Southern Alberta <br/>Institute of Technology</h3>
              <h3 className=" ml-auto text-nowrap pr-4">09/22 - 04/24</h3>
            </div>
            <div className="w-full flex justify-space mx-auto">
              <h3 className="mr-auto pr-4">Diploma in Software Development - Global Campus Scholarship Award</h3>
              <h3 className="ml-auto pr-4 text-nowrap text-right">Calgary, AB</h3>
            </div>

            <h2 className=" text-3xl mt-8 font-normal">🌸 <span className="ml-6">Skills</span></h2>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Languages</h3>
              <p>Python, C-Sharp, SQL, Node.js, React Native, Next.js, XML, JavaScript, HTML5/CSS, JSON, Gradle</p>
            </div>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Frameworks</h3>
              <p>React Native, Next.js, Node.js, Flask, FastAPI, .NET Framework, XNA Framework</p>
            </div>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Developer Tools</h3>
              <p>Git, VS Code, Visual Studio, Figma, MySQL, Oracle, SQLite, ASP.NET Core, Android Studio</p>
            </div>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Skills</h3>
              <p>AutoCad, Use Cases, Test cases/scripts, Agile Methodologies, Emerging technologies, Software Development Life
Cycle, Requirements Gathering, Application Development, Microsoft Office, MS Project, Debugging, Quality Assurance, Prototyping, Documentation, Programming, Business
Requirements, Software Troubleshooting, Technical Analysis, Data Analysis, Resource Management, Project
Management, Lean principles, Engineering principles, Stakeholder Management, Cost Analysis, Economic principles, Defect Management</p>
            </div>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Suitability</h3>
              <p>Time Management, Problem-solving, Interpersonal skills, Communication, Written Communication,
Collaborative, Organized, Team player, Flexibility, Analytical, Presentation, Customer Reporting tools, Key Performance
Indicators, Financial Reporting, Customer service</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
     
    // Call handler right away so state gets updated with initial window size
    handleScroll();
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
    }, []); // Empty array ensures that effect is only run on mount
  return scrollY;
}

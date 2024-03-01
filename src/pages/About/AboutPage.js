import ProfileCard from "./components/ProfileCard";
import DepartmentsList from "./components/DepartmentsList";
import DepartmentsMob from "./components/DepartmentsMob";
import { useEffect, useState } from "react";
const host = process.env.REACT_APP_BACKEND;

const AboutPage = () => {
  const [originalprofile, originalsetProfile] = useState([
    {
      id: 0,
      name: "Mohit Chaurasiya",
      image:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png",
      post: "Founder",
      about:
        "Research Associate at Harvard University, Researcher at NUS, Visiting Scholar at UVA and Mentor at MIT Policy Hackathon 2022.",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin: "https://www.linkedin.com/in/mohitc02/",
      department: "core",
    },
    {
      id: 1,
      name: "Harshit Kumar",
      image:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png",
      post: "President",
      about: "Research paper (STCAI), NLP, CV, DL, ML",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin: "https://www.linkedin.com/in/harshit-kumar-/",
      department: "core",
    },
    {
      id: 2,
      name: "Poojan Vachharajani",
      image:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png",
      post: "Vice President",
      about:
        "Data Scientist and Python Developer @Topcoder, NLP/RNN/LSTM, Social Network Analysis, Spatial Analysis",
      github: "https://github.com/pj-mathematician",
      linkedin:
        "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADlYcAsBPlT1HEatLMHPj3JepVqAnCGBDwE&keywords=poojan%20vachharajani&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c329c87a-faf8-4ce4-bb80-8894f6d939dd&sid=pDc&spellCorrectionEnabled=false",
      department: "core",
    },
    {
      id: 3,
      name: "Chaitanya Giri",
      image:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png",
      post: "Vice President",
      about: "Full Stack Developer, DL, NLP, CV, LSTM.",
      github: "https://github.com/Chaitanya134",
      linkedin: "https://www.linkedin.com/in/chaitanya-giri/",
      department: "core",
    },
    {
      id: 4,
      name: "Parth Mahajan",
      image:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png",
      post: "Director",
      about:
        "Full Stack Developer with 1.5+ years of professional experience in designing and implementing",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin:
        "https://www.linkedin.com/in/parthmahajan08/?originalSubdomain=in",
      department: "core",
    },
    {
      id: 5,
      name: "Roshan Shankar",
      image: "https://i.imgur.com/TxTSjjE.jpg",
      post: "Advisor",
      about:
        "PhD Candidate at Princeton, MS & MPA from Stanford, NSIT Batch of 2011.",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin: "https://www.linkedin.com/company/nsut-ai/",
      department: "core",
    },
    {
      id: 6,
      name: "Yugal Raj Jain",
      image: "https://i.imgur.com/ggkmHCr.jpg",
      post: "Advisor",
      about: "MEngg from MIT, Ex-Tesla, NSIT Batch of 2015.",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin: "https://www.linkedin.com/company/nsut-ai/",
      department: "core",
    },
    {
      id: 7,
      name: "Dhruv Mullick",
      image: "https://i.imgur.com/pnu2pe5.png",
      post: "Advisor",
      about:
        "MS, Computer Science at University of Alberta, Ex - Amazon, Alberta Machine Learning Institute (AMII).",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin: "https://www.linkedin.com/company/nsut-ai/",
      department: "core",
    },
    {
      id: 8,
      name: "Lohit Malik",
      image: "https://i.imgur.com/jv4rjhk.jpg",
      post: "Advisor",
      about:
        "PhD at Princeton University, Ex - Research at IITD, Universite de Lorraine",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin: "https://www.linkedin.com/company/nsut-ai/",
      department: "core",
    },
    {
      id: 9,
      name: "Amisha Bhaskar",
      image: "https://i.imgur.com/Df6jFYP.png",
      post: "Advisor",
      about:
        "PhD at University of Maryland, College Park, Data Scientist @OYO.",
      github:
        "https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
      linkedin: "https://www.linkedin.com/company/nsut-ai/",
      department: "core",
    },
  ]);

  const [profile, setProfile] = useState(originalprofile);

  const displayMembers = (e) => {
    const d = e.target.textContent;

    if (d === "ALL") {
      setProfile(originalprofile);
    } else {
      let department = originalprofile.filter(
        (event) => event.department === d
      );
      setProfile([...department]);
    }
  };
  console.log(profile);

  console.log(host);
  const fetchProfile = async () => {
    console.log(host);
    let res = await fetch(host + "/members/all");
    let resdata = await res.json();
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <main className="overflow-hidden">
        <div className="text-center pt-44 pb-12">
          <h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">
            About NSUT.AI
          </h1>
        </div>
        <div className="flex justify-center items-center w-full ">
          <img
            src="/images/about.jpg"
            alt="aboutimage"
            className=" rounded-[4rem] h-full w-1/2  "
          />
        </div>
        <div className="pt-12 flex items-center justify-center">
          <p className="text-center text-[#BBBCC0] font-light text-[0.8rem] md:text-[1.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis <br />
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu
            <br />
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in
            <br />
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="text-center pt-36 pb-12">
          <h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">
            Departments
          </h1>
        </div>
        <div className="md:flex items-center justify-center hidden ">
          <DepartmentsList />
        </div>
        <div className=" items-center justify-center md:hidden md:max-xl:hidden xl:hidden ">
          <DepartmentsMob />
        </div>
        <div className="text-center pt-36 pb-12">
          <h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">
            Core Department
          </h1>
        </div>
        <div className="flex justify-center items-center gap-2 xl:px-[33rem] font-light md:max-xl:text-sm px-[2rem] md:max-xl:px-[2rem] pb-[4rem] ">
          <div
            onClick={displayMembers}
            className="hover:bg-[#415ED0] py-10 cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1"
          >
            Software Department
          </div>
          <div
            onClick={displayMembers}
            className="hover:bg-[#415ED0] py-10 cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1"
          >
            Research Department
          </div>
          <div
            onClick={displayMembers}
            className="hover:bg-[#415ED0] py-10 cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[3rem] xl:w-[4rem]  xl:h-[1.8rem] text-center pt-1"
          >
            core
          </div>
          <div
            onClick={displayMembers}
            className="hover:bg-[#415ED0] py-10 cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1"
          >
            AI&ML Department
          </div>
          <div
            onClick={displayMembers}
            className="hover:bg-[#415ED0] py-10 cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1"
          >
            Graphics Department
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {profile.length !== 0 ? (
            profile.map((event) => (
              <ProfileCard
                key={profile.id}
                id={event.id}
                name={event.name}
                image={event.image}
              />
            ))
          ) : (
            <h1 className="text-white">No profile found</h1>
          )}
        </div>
        <div className="pt-44"></div>
      </main>
    </>
  );
};

export default AboutPage;

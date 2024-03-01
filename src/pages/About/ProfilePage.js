import Footer from "../../components/footer";
import ProfileCard from "./components/ProfileCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const host = process.env.REACT_APP_BACKEND;

const ProfilePage = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([
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

  const [profile, setProfile] = useState(detail[id]);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("AdminToken");

      try {
        const res = await fetch(`${host}/members/${id}`, {
          method: "GET",
          headers: {
            token: token,
          },
        });
        const resdata = await res.json();
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <main>
          <div className="flex justify-center items-center pt-[4rem]">
            <ProfileCard
              id={profile.id}
              name={profile.name}
              image={profile.image}
            />
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex-col justify-center items-center xl:w-[80rem] xl:h-[40rem] w-[30rem] bg-[#121216] rounded-[4rem]">
              <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[4rem]">
                Department:
              </h2>
              {
                <h4
                  key={profile.department}
                  className="font-light pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] opacity-70"
                >
                  {profile.department}
                </h4>
              }
              <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[2rem] ">
                Bio:
              </h2>
              {
                <h4
                  key={profile.about}
                  className="font-light  pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] opacity-70 align-left"
                >
                  {profile.about}
                </h4>
              }

              <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[4rem] ">
                Skills:
              </h2>
              <div className=" pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem]">
                <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">
                  React
                </button>
                <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">
                  Javascript
                </button>
                <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">
                  Tailwind
                </button>
                <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">
                  Figma
                </button>
              </div>

              <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[4rem]">
                Connect at:
              </h2>
              <div className="pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] pb-[2rem] flex">
                <a href={profile.github} target="_blank">
                  <img
                    src="/images/github.png"
                    alt="github link"
                    className="w-[3rem]"
                  ></img>
                </a>
                <a href={profile.linkedin} target="_blank">
                  <img src="/images/linkedin.png" alt="linkedin link"></img>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-52">
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default ProfilePage;

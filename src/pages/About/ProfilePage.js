import Footer from "../../components/footer";
import ProfileCard from "./components/ProfileCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const host = "http://localhost:4000";

const ProfilePage = () => {
  const { id } = useParams();
  console.log(id);
  const [profile, setProfile] = useState();

  const fetchthings = async () => {
    const token = localStorage.getItem("AdminToken");
    if (!token) {
      alert("Not authorised");
      return;
    }

    const res = await fetch(`${host}/members/${id}`, {
      method: "GET",
      headers: {
        token: token,
      },
    });
    const resdata = await res.json();
    console.log(resdata);
    setProfile(resdata);
    console.log(profile);
  };

  useEffect(() => {
    fetchthings();
  }, []);

  return (
    <>
      <main>
        <div className="flex justify-center items-center pt-[4rem]">
          <ProfileCard
            id={profile._id}
            name={profile.name}
            image={profile.image}
          />
        </div>
        <div className="flex items-center justify-center ">
          <div className="flex-col justify-center items-center xl:w-[80rem] xl:h-[40rem] w-[30rem] bg-[#121216] rounded-[4rem]">
            <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[4rem]">
              Department:
            </h2>
            {profile.department.map((e) => {
              <h4 className="font-light pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] opacity-70">
                e
              </h4>;
            })}
            <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[2rem] ">
              Achievements:
            </h2>
            {profile.achievements.map((e) => {
              <h4 className="font-light  pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] opacity-70 align-left">
                e
              </h4>;
            })}

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
              <a href={profile.social.github} target="_blank">
                <img
                  src="/images/github.png"
                  alt="github link"
                  className="w-[3rem]"
                ></img>
              </a>
              <a href={profile.social.linkedin} target="_blank">
                <img src="/images/linkedin.png" alt="kinkedin link"></img>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-52">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default ProfilePage;

import { useNavigate } from "react-router-dom";

const ProfileCard = ({ key, id, name, image }) => {
  const navigation = useNavigate();
  const navig = () => {
    navigation(`/profile/${id}`);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center  justify-items-center m-auto sm:w-2/3">
        <div
          className="flex justify-center items-center h-40 w-38"
          onClick={navig}
        >
          <img
            className="rounded-full w-full h-full "
            alt="profilepicture"
            src={image}
          />
        </div>
        <div className="w-[8rem] py-4 md:max-xl:w-[12rem] xl:w-[16rem] text-xl flex justify-center items-center">
          <h6 className="font-light text-[0.8rem]">{name}</h6>
        </div>
      </div>
    </>
  );
};
export default ProfileCard;

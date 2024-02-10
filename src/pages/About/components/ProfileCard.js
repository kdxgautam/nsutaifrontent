const ProfileCard = () => {
    return (
        <>
        <div className="py-[3rem]">
        <div className="flex justify-center items-center"><img className="rounded-[96rem] h-[8rem] w-[8rem] xl:h-[16rem] xl:w-[16rem] md:max-xl:w-[12rem] md:max-xl:h-[12rem]" alt="profilepicture" src="profile.jpg"/></div>
        <div className="w-[8rem] py-4 md:max-xl:w-[12rem] xl:w-[16rem] flex justify-center items-center"><h6 className="font-light text-[0.8rem]">Member Name</h6></div>
        </div>
            
        </>
    )
}
export default ProfileCard
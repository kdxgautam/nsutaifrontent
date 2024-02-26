const ProfileCard = () => {
    return (
        
        <>
            <div className="flex flex-col justify-center items-center  justify-items-center m-auto sm:w-2/3">
                <div className="flex justify-center items-center h-40 w-38">
                    <img className="rounded-full w-2/3 h-full " alt="profilepicture" src="/images/profile.jpg" />
                </div>
                <div className="w-[8rem] py-4 md:max-xl:w-[12rem] xl:w-[16rem] text-xl flex justify-center items-center">
                    <h6 className="font-light text-[0.8rem]">Member Name</h6>
                </div>
            </div>

        </>
    )
}
export default ProfileCard
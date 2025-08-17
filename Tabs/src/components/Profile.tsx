import { useState, type ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://th.bing.com/th/id/R.0d9b24189f42fb3f2563ef854b41ab0f?rik=QROqPZ61pRQ2IQ&pid=ImgRaw&r=0"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://images.icon-icons.com/11/PNG/256/customer_person_people_man_user_client_1629.png"
  );

  // Handlers for image changes
  const handleBannerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Background"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload">
            <FaCamera size={24} />
            <input
              type="file"
              id="banner-upload"
              accept="image/*"
              className="hidden"
              onChange={handleBannerChange}
            />
          </label>
        </button>

        {/* Channel Logo */}
        <div className="flex items-center ml-4 mt-[2rem]">
          <img
            src={profileUrl}
            alt="Channel Logo"
            className="w-40 h-40 object-cover rounded-full border-4 border-white relative"
          />
          <button className="absolute ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={24} />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
        </div>

        {/* Channel Details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">PhatDotDev</h1>
          <p>👁️ 2 views</p>
          <p className="mt-2">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;

import swimmingImg from "../../../assets/qZone1.png"
import classImg from "../../../assets/qZone2.png"
import playGroundImg from "../../../assets/qZone3.png"

import { FaGithub, FaGoogle, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div>
            {/* Login with section */}
            <div>
                <h3 className="text-2xl font-semibold">Login With</h3>

                {/* Login button */}
                <div className="space-y-2 mt-6">
                    {/* Login With Google Button */}
                    <button className="btn btn-outline text-lg text-sky-600 font-medium">
                        <FaGoogle />
                        Login With Google
                    </button>

                    {/* Login With Github Button */}
                    <button className="btn btn-outline text-lg font-medium">
                        <FaGithub />
                        Login With Github
                    </button>
                </div>
            </div>

            {/* Find Us On section */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold">Find Us On</h3>

                {/* Login button */}
                <div className="mt-4">
                    <div className="flex items-center gap-2 border border-[#E7E7E7] py-4 pl-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F3F3F3] border border-[#E7E7E7]">
                            <FaFacebookF className="text-[#3B599C]" />
                        </div>
                        <p className="text-[#706F6F] font-medium">Facebook</p>
                    </div>
                    <div className="flex items-center gap-2 border border-[#E7E7E7] py-4 pl-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F3F3F3] border border-[#E7E7E7]">
                            <FaTwitter className="text-[#58A7DE]" />
                        </div>
                        <p className="text-[#706F6F] font-medium">Twitter</p>
                    </div>
                    <div className="flex items-center gap-2 border border-[#E7E7E7] py-4 pl-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F3F3F3] border border-[#E7E7E7]">
                            <FaInstagram className="text-[#D82D7E]" />

                        </div>
                        <p className="text-[#706F6F] font-medium">Instagram</p>
                    </div>
                </div>
            </div>

            {/* Q-Zone */}
            <div className="bg-[#F3F3F3] mt-5 p-5 space-y-3">
                <h3 className="text-2xl font-semibold">Q-Zone</h3>

                <img src={swimmingImg} alt={`${swimmingImg} image`} />
                <img src={classImg} alt={`${classImg} image`} />
                <img src={playGroundImg} alt={`${playGroundImg} image`} />
            </div>
        </div>
    );
};

export default RightSidebar;
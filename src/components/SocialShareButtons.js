import React from "react";
import Button from "@/components/Button";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialShareButtons = () => {
  return (
    <div className="text-center my-8">
      <h2 className="text-xl font-bold">Partager l'article</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <Button
          className="bg-[#2e2e2e] text-white w-32 h-12 flex items-center justify-center"
          onClick={() => console.log("Share to Facebook")}>
          <FaFacebook className="mr-2 text-2xl" /> Facebook
        </Button>
        <Button
          className="bg-[#2e2e2e] text-white w-32 h-12 flex items-center justify-center"
          onClick={() => console.log("Share to LinkedIn")}>
          <FaLinkedin className="mr-2 text-2xl" /> LinkedIn
        </Button>
        <Button
          className="bg-[#2e2e2e] text-white w-32 h-12 flex items-center justify-center"
          onClick={() => console.log("Share via Email")}>
          <FaEnvelope className="mr-2 text-2xl" /> Email
        </Button>
      </div>
    </div>
  );
};

export default SocialShareButtons;

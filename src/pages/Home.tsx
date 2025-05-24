import ReUsableCard from "@/components/Reusable/ReUsableCard";
import CommonWrapper from "../common/CommonWrapper";

const Home = () => {
  return (
    <CommonWrapper>
      <div className="h-screen bg-website-color-lightGreen">
        <h1 className="text-5xl">Welcome to Home Page...</h1>
        <ReUsableCard
          avatarSrc="/path-to-avatar.jpg"
          name="John Doe"
          rating={4.5}
          location="Dhaka, Bangladesh"
          status="Available"
          offerSkill="Web Development"
          exchangeSkill="Graphic Design"
          verifiedType="blue"

        />
      </div>
    </CommonWrapper>
  );
};

export default Home;

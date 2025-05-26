import HomeHero from "@/components/HomeComponents/HomeHero";
import CommonWrapper from "../common/CommonWrapper";
import ReUsableCard from "../components/Reusable/ReUsableCard";
import { MatchCardProps } from "../components/Reusable/ReUsableCard";

const dummyData: MatchCardProps[] = [
  {
    avatarSrc: "https://i.pravatar.cc/100?img=1",
    name: "Alice Johnson",
    rating: 4.8,
    location: "New York, USA",
    status: "Available",
    offerSkill: "Graphic Design",
    exchangeSkill: "Web Development",
    verifiedType: "blue",
  },
  {
    avatarSrc: "https://i.pravatar.cc/100?img=2",
    name: "Bob Smith",
    rating: 4.6,
    location: "London, UK",
    status: "Busy",
    offerSkill: "Photography",
    exchangeSkill: "Content Writing",
    verifiedType: "orange",
  },
  {
    avatarSrc: "https://i.pravatar.cc/100?img=3",
    name: "Carol Lee",
    rating: 4.9,
    location: "Berlin, Germany",
    status: "Available",
    offerSkill: "UI/UX Design",
    exchangeSkill: "SEO",
    verifiedType: "blue",
  },
  {
    avatarSrc: "https://i.pravatar.cc/100?img=4",
    name: "Daniel Kim",
    rating: 5.0,
    location: "Seoul, South Korea",
    status: "Available",
    offerSkill: "Video Editing",
    exchangeSkill: "Script Writing",
    verifiedType: "none",
  },
  {
    avatarSrc: "https://i.pravatar.cc/100?img=5",
    name: "Eva Brown",
    rating: 4.7,
    location: "Toronto, Canada",
    status: "Busy",
    offerSkill: "Voice Over",
    exchangeSkill: "Animation",
    verifiedType: "blue",
  },
  {
    avatarSrc: "https://i.pravatar.cc/100?img=6",
    name: "Frank Zhao",
    rating: 4.5,
    location: "Beijing, China",
    status: "Available",
    offerSkill: "Translation",
    exchangeSkill: "Proofreading",
    verifiedType: "orange",
  },
];

const Home = () => {
  return (
    <CommonWrapper>
      <div>
        <HomeHero />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-18 py-12">
        {dummyData.map((user, index) => (
          <ReUsableCard key={index} {...user} />
        ))}
      </div>
    </CommonWrapper>
  );
};

export default Home;

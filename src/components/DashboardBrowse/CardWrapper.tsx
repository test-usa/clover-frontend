import ReUsableCard from "../Reusable/ReUsableCard";

export interface MatchCardProps {

    avatarSrc: string;

    name: string;

    rating: number;

    location: string;

    status: "Available" | "Busy";

    offerSkill: string;

    exchangeSkill: string;

    verifiedType?: "blue" | "orange" | "none";

}
const CardWrapper = () => {
    const users: MatchCardProps[] = [
        {
            avatarSrc: "https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg",
            name: "Eric Yates",
            rating: 4.7,
            location: "London, UK",
            status: "Available",
            offerSkill: "Graphic Design",
            exchangeSkill: "Frontend Development",
            verifiedType: "blue",
        },
        {
            avatarSrc: "https://www.shutterstock.com/image-photo/portrait-happy-young-asian-woman-600nw-1858164334.jpg",
            name: "Neha Mayumi",
            rating: 4.9,
            location: "Tokyo, Japan",
            status: "Busy",
            offerSkill: "Content Writing",
            exchangeSkill: "SEO Optimization",
            verifiedType: "orange",
        },
        {
            avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9F7aRc0I5KJxVfeKHxNg0T0PGtfzc59ixpA&s",
            name: "Carlos Rivera",
            rating: 4.6,
            location: "Madrid, Spain",
            status: "Available",
            offerSkill: "Video Editing",
            exchangeSkill: "Motion Graphics",
            verifiedType: "none",
        }
    ];

    return (
        <>
            <h1 className="text-[28px] font-bold mt-10 mb-6">Matches For You</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((item, idx) => (
                    <ReUsableCard
                        key={idx}
                        avatarSrc={item.avatarSrc}
                        name={item.name}
                        rating={item.rating}
                        location={item.location}
                        status={item.status}
                        offerSkill={item.offerSkill}
                        exchangeSkill={item.exchangeSkill}
                        verifiedType={item.verifiedType}
                    />
                ))}
            </div>
            <h1 className="text-[28px] font-bold mt-10 mb-6">Featured</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((item, idx) => (
                    <ReUsableCard
                        key={idx}
                        avatarSrc={item.avatarSrc}
                        name={item.name}
                        rating={item.rating}
                        location={item.location}
                        status={item.status}
                        offerSkill={item.offerSkill}
                        exchangeSkill={item.exchangeSkill}
                        verifiedType={item.verifiedType}
                    />
                ))}
            </div>
        </>
    )
}

export default CardWrapper
import Matches from "@/components/DashboaredHome/Matches";
import Summary from "@/components/DashboaredHome/Summary";

type TActivites = {
  title: string;
  time: string;
}[]

const activites: TActivites = [
  {
    title: 'You marked the swap Branding & Identity for Web Development with Eric Yates as completed.',
    time: '1 hour ago'
  },
  {
    title: 'You marked the swap Branding & Identity for Web Development with Eric Yates as completed.',
    time: '1 hour ago'
  },
  {
    title: 'You marked the swap Branding & Identity for Web Development with Eric Yates as completed.',
    time: '1 hour ago'
  },
]

const DashboardHome = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-5xl">Hi Dwiky!</h1>
        <p className="mb-7">Ready to swap skills?</p>
      </div>
      <div>
        <Summary />
      </div>
      <Matches />
      <div>
        <h1 className="text-3xl font-bold mt-10 mb-6">Recent Activities</h1>
        {
          activites.map((item, i) => (
            <div key={i} className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                <p className="text-base text-typo-600">{item.title}</p>
                <p className="text-base text-typo-600">{item.time}</p>
              </div>
              <hr className="text-gray-200 mt-2" />
            </div>

          ))
        }
      </div>
    </div>
  );
};

export default DashboardHome;

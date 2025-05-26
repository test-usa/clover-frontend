import summary1 from '../../assets/refresh-fill.png';
import summary2 from '../../assets/inbox-archive-fill.png';
import summary3 from '../../assets/Group.png';
import summary4 from '../../assets/money-dollar-circle-fill.png';

type TSummary = {
  count: string;
  title: string;
};

const DashboardSummary = ({ count, title }: TSummary) => {
  let img;
  if (title === 'Active Swaps') {
    img = summary1;
  } else if (title === 'Proposals') {
    img = summary2;
  } else if (title === 'New Message') {
    img = summary3;
  } else {
    img = summary4;
  }

  const bgColorMap: { [key: string]: string } = {
    'Active Swaps': 'bg-green-50',
    'Proposals': 'bg-orange-50',
    'New Message': 'bg-rose-50',
    'Balance': 'bg-violet-50',
  };

  const iconBgMap: { [key: string]: string } = {
    'Active Swaps': 'bg-green-100',
    'Proposals': 'bg-orange-100',
    'New Message': 'bg-rose-100',
    'Balance': 'bg-violet-100',
  };

  const bgClass = bgColorMap[title] || 'bg-gray-50';
  const iconBgClass = iconBgMap[title] || 'bg-gray-100';

  return (
    <div className={`${bgClass} p-4 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs shadow-sm`}>
      <div className="flex items-center justify-between">
        <div className={`${iconBgClass} p-2 rounded-lg flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12`}>
          <img src={img} alt={title} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-gray-900 text-xl sm:text-2xl font-semibold leading-none">
            {count}
          </span>
        </div>
      </div>
      <h1 className="text-gray-500 text-sm sm:text-base mt-4 sm:mt-5">{title}</h1>
    </div>
  );
};

export default DashboardSummary;

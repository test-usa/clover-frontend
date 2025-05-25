import DashboardSummary from '../Reusable/DashboardSummary';

const summary = [
  { count: '01', title: 'Active Swaps' },
  { count: '11', title: 'Proposals' },
  { count: '03', title: 'New Message' },
  { count: '157', title: 'Balance' },
];

const Summary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 py-4">
      {summary.map((item, index) => (
        <DashboardSummary key={index} title={item.title} count={item.count} />
      ))}
    </div>
  );
};

export default Summary;

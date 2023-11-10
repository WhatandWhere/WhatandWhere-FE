import '../components/design-files-css/TodayFilterComponent.css';

const TodayFilterComponent = ({ onFilterToday }) => {
  return (
    <div className="today-filter-container">
      <span className="today-filter-text">Today's Event</span>
      <input type="checkbox" onChange={onFilterToday} />
    </div>
  );
};

export default TodayFilterComponent;

import './FilterParams.css';
import { filterIsEmpty, displayFilterParams } from '../../scripts/FilterUtilities';

function FilterParams(props) {
  if (filterIsEmpty(props.filter))
    return null;

  return (
    <div className="active-filters">
      <span className="active-filters-label">Active filters:</span>
      {displayFilterParams(props.filter)}
    </div>
  );
}

export default FilterParams;

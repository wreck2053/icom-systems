import './Filter.css';
import { createBrandsCheckboxes, handleChange, handleSubmit, handleReset } from '../../scripts/FilterUtilities';
import { useState } from 'react';

function Filter(props) {
  const [filter, setFilter] = useState(props.filter);
  const brands = Object.values(props.brands);

  return (
    <form className="filter-panel" onSubmit={event => handleSubmit(event, filter, props.setGlobalFilter)}>
      <div className="filter-panel-header">
        <h3 className="filter-heading">Filters</h3>
        <button type="reset" className="filter-reset" onClick={() => handleReset(setFilter)}>
          Reset
        </button>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">Type</h4>
        <div className="filter-checkboxes">
          {['SSD', 'HDD', 'Other'].map(type => (
            <label key={type} className="custom-checkbox">
              <input
                type="checkbox"
                name={type}
                onChange={event => handleChange('Type', event, setFilter)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">Usage</h4>
        <div className="filter-checkboxes">
          {['External', 'Internal'].map(usage => (
            <label key={usage} className="custom-checkbox">
              <input
                type="checkbox"
                name={usage}
                onChange={event => handleChange('Usage', event, setFilter)}
              />
              {usage}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">Capacity</h4>
        <select
          className="filter-select"
          onChange={event => handleChange('Capacity', event, setFilter)}
        >
          <option value={null}>Select Capacity</option>
          <option value="256GB">256GB or More</option>
          <option value="512GB">512GB or More</option>
          <option value="1TB">1TB or More</option>
          <option value="2TB">2TB or More</option>
          <option value="4TB">4TB or More</option>
          <option value="8TB">8TB or More</option>
          <option value="16TB">16TB or More</option>
        </select>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">Brand</h4>
        <div className="filter-checkboxes">
          {createBrandsCheckboxes(brands, handleChange, setFilter)}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">Search</h4>
        <input
          type="text"
          name="Name"
          className="filter-search"
          placeholder="Search by product name..."
        />
      </div>

      <button type="submit" className="filter-submit">Apply Filters</button>
    </form>
  );
}

export default Filter;

import React from "react";

function CountrySelector({ countries, searchTerm, onSearch, selectedRegion, onFilter, onSelectCountry }) {
  const regions = ["All", ...new Set(countries.map(c => c.region).filter(Boolean))];

  return (
    <div className="selector">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      <select
        value={selectedRegion}
        onChange={(e) => onFilter(e.target.value)}
        className="filter-dropdown"
      >
        {regions.map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
      <div className="country-list">
        {countries.map(country => (
          <button
            key={country.cca3}
            onClick={() => onSelectCountry(country)}
            className="country-button"
          >
            {country.name.common}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CountrySelector;

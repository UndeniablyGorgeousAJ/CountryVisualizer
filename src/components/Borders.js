import React from "react";

function Borders({ codes, countries, onSelect }) {
  if (!codes || !countries.length) return <span>None</span>;

  const borderCountries = countries.filter(c => codes.includes(c.cca3));

  return (
    <div className="borders">
      {borderCountries.map(c => (
        <button key={c.cca3} onClick={() => onSelect(c)} className="border-button">
          {c.name.common}
        </button>
      ))}
    </div>
  );
}

export default Borders;

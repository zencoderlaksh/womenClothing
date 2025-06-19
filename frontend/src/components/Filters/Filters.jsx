import React, { useState } from 'react';

const FILTERS = [
  {
    title: 'Sort By',
    options: ['Featured', 'Best Seller', 'Price: Low To High', 'Price: High To Low',],
  },
  {
    title: 'Size',
    options: ['XS / US (0-4)', 'S / US (4-6)', 'M / US (6-10)', 'L / US (10-14)', 'XL / US (12-16)'],
  },
  {
    title: 'Color',
    options: ['Black', 'Red', 'Green', 'Yellow', 'Dark Blue', 'Purple', 'Pink', 'Light Blue', 'Orange', 'White'],
  },
  {
    title: 'Collection',
    options: ['In Stock', 'Out Of Stock'],
  },
  {
    title: 'Fabric',
    options: ['Cotton', 'Linen', 'Wool', 'Silk', 'Cashmere'],
  },
];

const FilterPanel = () => {
  const [openSections, setOpenSections] = useState({});
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleFilterChange = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const clearAll = () => setSelectedFilters([]);

  return (
    <>
      <div className="w-full max-w-sm p-4">
        {/* Selected filters */}
        <h3 className="text-3xl font-semibold text-[#0C0C0C] mb-4">Filters</h3>
        <div className="flex flex-col gap-2 mb-4">
          {selectedFilters.map((filter) => (
            <div
              key={filter}
              className="flex items-center justify-between rounded bg-[#D1D9CF] text-[#0C0C0C] px-3 py-1 text-sm"
            >
              {filter}
              <button
                onClick={() =>
                  setSelectedFilters(selectedFilters.filter((f) => f !== filter))
                }
                className="ml-2 text-black text-[20px] font-semibold cursor-pointer"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {selectedFilters.length > 0 && (
          <div className="flex flex-col sm:flex-row w-[300px] justify-center sm:gap-x-4 gap-y-2 mb-4">
            <button
              onClick={clearAll}
              className="bg-red-700 text-white text-sm px-4 py-1.5 rounded text-center cursor-pointer"
            >
              Clear All Filters
            </button>
            <button className="bg-green-800 text-white text-sm px-4 py-1.5 rounded text-center cursor-pointer">
              Applied Filters
            </button>
          </div>

        )}

        {/* Accordion Filters */}
        {FILTERS.map((filter) => (
          <div key={filter.title} className="mb-2 w-[300px]">
            <div
              className="flex justify-between items-center bg-[#748C70] text-white p-3 font-semibold"
            >
              <span>{filter.title}</span>
              <button
                onClick={() => toggleSection(filter.title)}
                className="text-xl font-normal focus:outline-none cursor-pointer"
              >
                {openSections[filter.title] ? '−' : '+'}
              </button>
            </div>

            {openSections[filter.title] && filter.options.length > 0 && (
              <div className="bg-white px-4 py-3 space-y-2 border rounded mt-2">
                {filter.options.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input 
                      type="checkbox"
                      checked={selectedFilters.includes(option)}
                      onChange={() => handleFilterChange(option)}
                      className="accent-green-700 cursor-pointer"
                    />
                    <span className="text-sm text-gray-800 cursor-pointer">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterPanel;

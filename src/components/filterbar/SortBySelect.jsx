// SortBySelect.jsx
import React from 'react';
import Select from 'react-select';
import { FaCheck, FaTimes } from 'react-icons/fa';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? '#375470' : '#102130',
    color: '#FFFFFF',
    padding: '8px',
    borderRadius: '4px', // Optionen abgerundet
    display: 'flex',
    alignItems: 'center',
  }),
  control: (provided) => ({
    ...provided,
    width: '285px',
    background: '#FF4654',
    color: '#FFFFFF',
    borderRadius: '4px', // Select-Box abgerundet
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#FFFFFF',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    path: { fill: 'white' }, // Spitze des Pfeils sichtbar
  }),
  multiValue: (provided) => ({
    ...provided,
    background: '#FF4654',
    borderRadius: '4px', // Hintergrundfarbe für ausgewählte Option
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#FFFFFF',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#FFFFFF',
    svg: { fill: '#FFFFFF' }, // X-Icon Farbe
    '&:hover': {
      background: '#FF4654', // Hintergrundfarbe beim Hover über das X-Icon
    },
  }),
};

const options = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'Release(asc)', label: 'Release Date(asc)' },
  { value: 'Release(desc)', label: 'Release Date(desc)' },
  { value: 'alphabetical', label: 'Alphabetical' },
];

const SortBySelect = (props) => {
  const handleChange = (selectedOption) => {
    // Nur die erste ausgewählte Option verwenden
    const selectedValue = selectedOption ? selectedOption.value : null;
    props.func(selectedValue);
  };

  return (
    <Select
      options={options}
      isSearchable={false}
      placeholder="SORT BY"
      onChange={handleChange}
      styles={customStyles}
      components={{
        DropdownIndicator: () => (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L6 2L11 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        MultiValueRemove: ({ innerProps }) => <FaTimes {...innerProps} />,
        MultiValue: ({ innerProps, children }) => (
          <div {...innerProps}>
            {children}
            <FaCheck style={{ marginLeft: '8px' }} />
          </div>
        ),
      }}
      isMulti={false} // Nur eine Option auswählbar machen
    />
  );
};

export default SortBySelect;

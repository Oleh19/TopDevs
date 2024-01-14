/* eslint-disable @typescript-eslint/no-explicit-any */

export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    height: 36,
    width: 132,
    backgroundColor: '#151515',
    border: '1px solid #ccc',
    borderRadius: 6,
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: 8,
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: 6,
    border: 'none',
    backgroundColor: '#1F1F1F',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#0000001A',
    cursor: 'pointer',
    color: state.isSelected ? 'rgba(255, 255, 255, 0.50)' : 'white',
    ':active': {
      backgroundColor: 'none',
    },
    ':hover': {
      backgroundColor: 'none',
      color: 'rgba(255, 255, 255, 0.50)',
    },
    ':focus': {
      backgroundColor: 'none',
    },
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'rgba(255, 255, 255, 0.50)' : 'white',
  }),
};

export const options = [
  { value: 'title', label: 'Title' },
  { value: 'author', label: 'Author' },
  { value: 'rating', label: 'Rating' },
];

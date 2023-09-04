import Select from "react-select";
import css from "./FilterDropdown.module.css";

interface IProps {
  options: Array<string>;
  placeholder?: string;
  onSelectOption?: (timezone: string) => void;
}

const FilterDropdown = ({ placeholder, options, onSelectOption }: IProps) => {
  const filteredOptionsParsed = options.map((option) => {
    return { value: option, label: option };
  });

  return (
    <Select
      className={css.container}
      classNamePrefix="select"
      isClearable={true}
      isSearchable={true}
      name="color"
      options={filteredOptionsParsed}
      onChange={(optionSelected) => {
        if (optionSelected) onSelectOption?.(optionSelected?.value);
      }}
      placeholder={placeholder}
    />
  );
};

export default FilterDropdown;

import { DatePicker, DatePickerDomRef, Input, InputDomRef, Ui5CustomEvent } from '@ui5/webcomponents-react';
import styles from './MovieFilters.module.css';
import { useStore } from '@/app/context/storeContext';

type DatePickerChangeEventDetail = {
  value: string;
  valid: boolean;
};

export const MovieFilters = () => {
  const { currentYear, releaseYear, query, setQuery, setReleaseYear } = useStore();

  const handleYearOnChange = (event: Ui5CustomEvent<DatePickerDomRef, DatePickerChangeEventDetail>) => {
    setReleaseYear(event.detail.value);
  };

  const handleQueryOnChange = (event: Ui5CustomEvent<InputDomRef>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <DatePicker
        formatPattern="yyyy"
        placeholder="YYYY"
        value={releaseYear}
        maxDate={currentYear}
        onChange={handleYearOnChange}
      />
      <Input type="Text" placeholder="Search movies..." onChange={handleQueryOnChange} className={styles.searchInput} />
    </div>
  );
};

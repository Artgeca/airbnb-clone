import {
  DateRange, Range, RangeKeyDict,
} from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  value, disabledDates, onChange,
}) => (
  <DateRange
    rangeColors={['#262626']}
    ranges={[value]}
    date={new Date()}
    onChange={onChange}
    direction='vertical'
    showDateDisplay={false}
    minDate={new Date()}
    disabledDates={disabledDates}
  />
);

export default Calendar;

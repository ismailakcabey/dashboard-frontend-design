import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import DateIcon from '../../../src/assets/chevron-down.svg';
const DateCmp = () => {
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = 'MMMM D'; // "July 18" formatı
        return(
            <RangePicker  picker="date" className="text-sm font-normal font-inter"
            format={dateFormat} // Tarih formatını belirtin
            suffixIcon={<img src={DateIcon} alt="Date Icon" />}
            />
        )
}

export default DateCmp
import React from 'react';

import { CalendarDateShape } from '../CalendarDateShape';
import { Calendar } from '../Calendar';
import { Story } from '../../../typings/stories';

export default { title: 'Calendar' };

export const CalendarWithBottomSeparator: Story = () => {
  const [date, setDate] = React.useState('12.05.2022');

  return <Calendar value={date} onValueChange={setDate} />;
};
CalendarWithBottomSeparator.storyName = 'Calendar with bottom separator';
CalendarWithBottomSeparator.parameters = {
  creevey: {
    skip: {
      reason: "8px and 2022 themes don't affect the bottom separator",
      in: /^(?!\b(chrome|chromeDark|firefox|firefoxDark)\b)/,
    },
  },
};

const CustomDayItem: React.FC<{ date: CalendarDateShape }> = ({ date }) => {
  const isEven = (num: number): boolean => num % 2 === 0;
  const backgroundColor = isEven(date.date) ? { backgroundColor: 'green' } : { backgroundColor: 'transparent' };

  return <div style={{ borderRadius: '50%', ...backgroundColor }}>{date.date}</div>;
};

export const CalendarWithCustomDates: Story = () => {
  return <Calendar value={'30.08.2023'} renderDay={(date) => <CustomDayItem date={date} />} />;
};

import style from './style.css';

import { MONTH_ABBREVIATIONS } from '../constants';
import { THEME_TO_CLASSNAME } from '../settings/constants';

const Day = ({monthId, dayId, dayState, dispatch}) => {
  const UID = `${monthId} ${dayId}`;
  return <div class={style.day}>
    <input
      type='checkbox'
      name={UID}
      id={UID}
      checked={dayState}
      onChange={() => dispatch({ type: 'toggle', monthId, dayId })}
    />
    <label class={dayState ? style.checked : ''} htmlFor={UID}>{dayId + 1}</label>
  </div>
};

const Calendar = ({state, themeSetting, dispatch}) => {
  return (
    <div class={`${style.calendar} ${style.[THEME_TO_CLASSNAME[themeSetting]] || ''}`}>
      {MONTH_ABBREVIATIONS.map((abbr, monthId) => (
        <section id={abbr}>
          <header>{abbr}</header>
          {state[monthId].map((dayState, dayId) => (
            <Day
              key={`${monthId} ${dayId}`}
              monthId={monthId}
              dayId={dayId}
              dayState={dayState}
              dispatch={dispatch}
            />
          ))}
        </section>
      ))}
    </div>
  )
};

export default Calendar;

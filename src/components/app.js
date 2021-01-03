import { useReducer } from 'preact/hooks';

import Settings from './settings';
import Fonts from './fonts';
import Calendar from './calendar';

import { initialCalendarState, initialSettingsState, YEAR } from './constants';
import { calendarReducer, settingReducer } from './util';

// TODO: validate and repair loaded state.
const initialStates = {
  cal: localStorage.getItem(YEAR) ? JSON.parse(localStorage.getItem(YEAR)) : initialCalendarState,
  set: localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings')) : initialSettingsState,
}

const App = () => {
  const [calState, calendarDispatch] = useReducer(calendarReducer, initialStates['cal']);
  const [setState, settingDispatch] = useReducer(settingReducer, initialStates['set']);

  return [
    <Fonts />,
    <div id='app'>
      <Settings state={setState} dispatch={settingDispatch} calendarDispatch={calendarDispatch} />
      <Calendar state={calState} themeSetting={setState.themeSetting} dispatch={calendarDispatch}  />
    </div>
  ];
}

export default App;

import { YEAR, settingStateMachines, stateMachineSideEffects } from './constants';

const downloadData = (data) => {
  const elem = window.document.createElement('a');
  elem.href = window.URL.createObjectURL(new Blob([data], {type: 'application/json'}));
  elem.download = `Webryday_Calendar_${YEAR}.json`;
  document.body.appendChild(elem);
  elem.click();
  document.body.removeChild(elem);
}

// TODO: Some of these should be effects but whatever.
const settingReducer = (state, {action}) => {
  switch (action) {
    case 'export': {
      downloadData(localStorage.getItem(YEAR));
      return state;
    }
    default: {
      const _ns = JSON.stringify(Object.assign(
        state,
        {[action]: settingStateMachines[action][state[action]]},
        stateMachineSideEffects[action],
      ))
      localStorage.setItem('settings', _ns);
      return JSON.parse(_ns);
    }
  }
}

const calendarReducer = (state, {type, ...action}) => {
  switch (type) {
    case 'toggle': {
      state[action.monthId][action.dayId] = !state[action.monthId][action.dayId];
      const _ns = JSON.stringify(state);
      localStorage.setItem(YEAR, _ns);
      return JSON.parse(_ns);
    }
    case 'import': {
      localStorage.setItem(YEAR, action.state);
      return JSON.parse(action.state);
    }
    default:
      throw new Error('unknown reducer action key');
  }
}

export { settingReducer, calendarReducer };

const dateFormatter = new Intl.DateTimeFormat(undefined, { month: 'short' });

const N_MONTHS = 12;
const YEAR = new Date().getFullYear();
const MONTH_ABBREVIATIONS = Array(N_MONTHS).fill(0).map((_, i) =>
  dateFormatter.format(new Date(YEAR, i + 1, 0)).substring(0, 3).toLowerCase()
)

const initialCalendarState = MONTH_ABBREVIATIONS.reduce((acc, _, month) => ([
  ...acc,
  Array(new Date(YEAR, month + 1, 0).getDate()).fill(false)
]), []);

const boolStateMachine = { true: false, false: true};
const stateMachineSideEffects = { settingsOpen: {deleteDisabled: true} };

const settingStateMachines = {
  themeSetting: {
    acc: 'fa',
    fa: 'acc',
  },
  analyticsSetting: {fun: 'min', min: 'no', no: 'fun'},
  settingsOpen: boolStateMachine,
  deleteDisabled: boolStateMachine,
};

const initialSettingsState = {
  themeSetting: 'acc',
  analyticsSetting: 'fun',
  settingsOpen: true,
  deleteDisabled: true,
};

export {
  N_MONTHS,
  YEAR,
  MONTH_ABBREVIATIONS,
  initialCalendarState,
  settingStateMachines,
  stateMachineSideEffects,
  initialSettingsState,
}

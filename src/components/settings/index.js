import style from './style.css';
import { INTRO_JSX, SOCIAL_JSX, SETTING_TO_TEXT, SETTING_VALUE_TO_TEXT, THEME_TO_CLASSNAME } from './constants';

const ActionButton = ({action, state, dispatch, override}) => {
  const prefix = SETTING_TO_TEXT[action];
  const text_value = SETTING_VALUE_TO_TEXT?.[state?.[action]];
  return (
    <span class={style.action_btn}>
      <input type='button' name={action} id={action} onClick={(() => dispatch({action}))} />
      <label title={prefix} htmlFor={action}>
        {override || (text_value === undefined ? prefix : `${prefix}: ${text_value}`)}
      </label>
    </span>
  )
};

const handleUpload = (event) => {
  return event.target.files[0].text();
}

const ImportFacade = ({dispatch}) => (
  <span class={style.action_btn}>
    <input type='file' name='import' id='import' onChange={(e) => handleUpload(e).then(
      (state) => dispatch({type: 'import', state}),
      () => alert('Could not import file.')
    ).then(console.log, console.error)} />
    <label title={'import'} htmlFor={'import'}>{SETTING_TO_TEXT['import']}</label>
  </span>
);

const Settings = ({state, dispatch, calendarDispatch}) => (state.settingsOpen ? (
  <div class={`${style.settings} ${style.[THEME_TO_CLASSNAME[state.themeSetting]] || ''}`}>
    <div class={style.close_open}>
      <ActionButton action={'settingsOpen'} state={state} dispatch={dispatch} override={'×'} />
    </div>
    {INTRO_JSX}
    {SOCIAL_JSX}
    <section class={style.preference_grid}>
      <ActionButton action={'themeSetting'} state={state} dispatch={dispatch} />
      <ActionButton action={'analyticsSetting'} state={state} dispatch={dispatch} />
      <ActionButton action={'export'} state={state} dispatch={dispatch} />
      <ImportFacade dispatch={calendarDispatch} />
    </section>
  </div>
) : (
  <div class={`${style.close_open} ${style.[THEME_TO_CLASSNAME[state.themeSetting]] || ''}`}>
    <ActionButton action={'settingsOpen'} state={state} dispatch={dispatch} override={'⚙'} />
  </div>
));

export default Settings;

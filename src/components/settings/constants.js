import style from './style.css'

const INTRO_JSX = [
  <heading>Webryday Calendar</heading>,
  <section>
    {'The Webryday Calendar is a virtual habit-tracking calendar in the style of Simone Giertz\'s "Everyday Calendar". Take a look at '}
      <a target='_blank' rel='noopener noreferrer' href='https://www.simonegiertz.com' title='simonegiertz.com' >{'Simone\'s website'}</a>
    {', where you can order the physical original calendar!'}
  </section>
];

const SOCIAL_JSX = (
  <nav>
    <a target='_blank' rel='noopener noreferrer' class={style.github} title='GitHub Social' href='https://github.com/SalomonSmeke' />
    <a target='_blank' rel='noopener noreferrer' class={style.ssmeke} title='Website' href='https://ssmeke.io' />
    <a target='_blank' rel='noopener noreferrer' class={style.bug} title='Bug Report' href='https://github.com/SalomonSmeke/webryday/issues' />
    <a target='_blank' rel='noopener noreferrer' class={style.info} title='Readme' href='https://github.com/SalomonSmeke/webryday' />
  </nav>
);

const SETTING_TO_TEXT = {
  themeSetting: 'Theme',
  analyticsSetting: 'Analytics',
  settingsOpen: 'Toggle Settings',
  export: 'Export',
  import: 'Import',
};

const SETTING_VALUE_TO_TEXT = {
  acc: 'Accessible',
  fa: 'Faithful',
  no: 'TBD',
  min: 'TBD',
  fun: 'TBD',
};

const THEME_TO_CLASSNAME = {
  acc: 'accessible',
  fa: '',
}

export { INTRO_JSX, SOCIAL_JSX, SETTING_TO_TEXT, SETTING_VALUE_TO_TEXT, THEME_TO_CLASSNAME }

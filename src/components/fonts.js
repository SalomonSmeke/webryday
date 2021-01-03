const FONT_BASE = "//fonts.googleapis.com/css2?family=Assistant:wght@300&display=swap";
const GLYPHS = [
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ...'abcdefghijklmnopqrstuvwxyz',
  ...'0123456789',
  ...'-/*., ',
];
const FONT_URI = `${FONT_BASE}&text=${encodeURIComponent(GLYPHS.join(''))}`;

const Fonts = () => [
  <link rel="preconnect" href="//fonts.gstatic.com" />,
  <link rel="stylesheet" href={FONT_URI} />,
];

export default Fonts;

/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-sass-guidelines'],
  rules: {
    'max-nesting-depth': [2],
    'media-feature-name-disallowed-list': [
      'max-width',
      { message: 'Use min-width for a mobile-first approach.' },
    ],
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
  },
};

export default config;

module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  rules: {
    'max-nesting-depth': [
      2,
      {
        ignoreAtRules: ['each', 'media', 'screen', 'supports', 'include'],
      },
    ],
    'media-feature-name-disallowed-list': [
      'max-width',
      { message: 'Use min-width for a mobile-first approach.' },
    ],
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
  },
};

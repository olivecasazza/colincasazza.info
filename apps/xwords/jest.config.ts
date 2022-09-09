/* eslint-disable */
export default {
  displayName: 'xwords',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/xwords',
};

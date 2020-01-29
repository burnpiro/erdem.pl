// @flow
import getIcon from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('twitter')).toBe(ICONS.TWITTER);
  expect(getIcon('github')).toBe(ICONS.GITHUB);
  expect(getIcon('email')).toEqual(ICONS.EMAIL);
  expect(getIcon('linkedin')).toEqual(ICONS.LINKEDIN);
  expect(getIcon('instagram')).toEqual(ICONS.INSTAGRAM);
  expect(getIcon('gitlab')).toEqual(ICONS.GITLAB);
  expect(getIcon('rss')).toEqual(ICONS.RSS);
});

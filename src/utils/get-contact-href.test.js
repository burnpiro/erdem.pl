// @flow
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://www.twitter.com/#');
  expect(getContactHref('github', '#')).toBe('https://github.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('linkedin', '#')).toBe('https://www.linkedin.com/in/#');
  expect(getContactHref('instagram', '#')).toBe('https://www.instagram.com/#');
  expect(getContactHref('gitlab', '#')).toBe('https://www.gitlab.com/#');
  expect(getContactHref('rss', '#')).toBe('#');
});

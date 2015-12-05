import Ember from 'ember';

export function twitterUrl(params/*, hash*/) {
  const [username] = params;
  return `https://twitter.com/${username}`;
}

export default Ember.Helper.helper(twitterUrl);

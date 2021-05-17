jest.mock('gh-got');
jest.mock('gl-got');

const cache = require('../lib/workers/global/cache');

global.platform = jest.genMockFromModule('../lib/platform/github');
global.logger = require('./_fixtures/logger');

global.renovateUsername = 'renovate-testing';
global.repoCache = {};
global.pass = 'f7a9e24777ec23212c54d7a350bc5bea5477fdbb';

cache.init();

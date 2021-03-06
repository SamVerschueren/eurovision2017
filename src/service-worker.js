'use strict';
importScripts('./build/sw-toolbox.js');

const VERSION = 'v0.2.3';

self.toolbox.options.cache = {
	name: 'eurovision2017-' + VERSION
};

// pre-cache our key assets
self.toolbox.precache(
	[
		'./build/main.js',
		'./build/main.css',
		'./build/polyfills.js',
		'index.html',
		'manifest.json'
	]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;

import jsdom from 'jsdom';

require.extensions['.css'] = () => '';

require.extensions['.scss'] = () => '';

if (!global.window) {

  	const baseMarkup = '<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>Tests!</title></head><body></body></html>';
  	const window = jsdom.jsdom(baseMarkup).defaultView;

  	global.window = window;
  	global.document = window.document;
  	global.navigator = window.navigator;
  	global.self = window;
  	global.XMLHttpRequest = window.XMLHttpRequest;

}

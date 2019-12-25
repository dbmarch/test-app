# test-app
JS Client / JS Express Server to C++ backend

Client code is at the top level
Server code is in the server subfolder.

go into server folder.
npi i
npm start
(Server starts up on port 3001)

then start new shell in main folder
npm i
npm start
(Client launches web interface)


The tutorial I followed to integrate Node with C++:
https://itnext.io/a-simple-guide-to-load-c-c-code-into-node-js-javascript-applications-3fcccf54fd32


Dependencies:
https://www.npmjs.com/package/node-gyp
https://github.com/nodejs/node-gyp


npm -g node-gyp

This also requires python.


if npm gets corrupt:  (Error: Cannot find module 'graceful-fs')
curl https://npmjs.org/install.sh | sudo bash


Examples of add-ons
https://github.com/nodejs/node-addon-examples



Another tutorial I was researching:
https://medium.com/netscape/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff

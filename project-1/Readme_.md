OS Version: OS X 10.11.4
Platform: Mac
Thrift Version: 0.9.3
NPM version: 3.9.3
Language: Node.js


Setup Instructions:

1) Install and Build the Thrift library.(Detailed instructions here- https://thrift.apache.org/)

2) Generate the thrift files for Node.js by running:

thrift -r --gen js:node kvstore.thrift

3) Create Node.js application for kvserver:

-> npm init
-> npm install thrift --save
-> Create kvserver.js file that will have the server side code.

4) Start the server in a terminal window:

node kvserver

5) Create Node.js application for kvclient:

-> npm init
-> npm install thrift --save
-> Create kvclient.js file that will have the client side code.

6) Start the client in a separate terminal window with the appropriate parameters:

node kvclient -server localhost:3000 -set waqid wmv214
node kvclient -server localhost:3000 -get waqid
node kvclient -server localhost:3000 -del waqid

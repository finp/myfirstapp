# myfirstapp

A simple app using json-query to parse a json file.

As a technical writer I wanted to review the description text in https://github.com/feedhenry/fh-template-apps/blob/master/global.json

and...

I wanted to learn some node

## Setup 

1. Install npm and node.

2. Install json-query
`npm install json-query`


## Using json-query

1. Require the json-query module (see more at https://www.npmjs.com/package/json-query)

2. Set up the data, I just pasted into the c.js file

3. Used the example at https://github.com/mmckegg/json-query/blob/master/examples/deep-select-match.js to develop my query.

The actual query is 

`show[**]:select(id,name, description)`

This allows me view the description in the context of the name and id (so that any edits are directed back to the right place in the master file).







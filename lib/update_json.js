#!/home/raymond/.nvm/versions/node/v8.9.4/bin/node
//this script is to keep the github and IPFS references to the Web Component Library up-to-date

'use strict'

const fs = require('fs')
const path = require('path')
var request = require('request');
var _ = require('underscore')
var fileFunctions = require('./fileFunctions.js')

var pwc_user_agent='polymer web components'
var components_endpoint="https://api.github.com/repos/musicsmithnz/polymer_web_components/git/trees/d0d6571f1e06de57a1be7a9b98e82a8bd303000b"
var options={ url: "", headers: { 'User-Agent': pwc_user_agent}}
var data={}

function setOptions(endpoint, user_agent){
    options = {
        url: endpoint,
        headers: {
              'User-Agent': user_agent
        }
    };

}
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
        data = data.tree
        var dataLen = data.length;
        var str="["
        for (var i = 0; i < dataLen; i++) {
            str+="{ \"url\" : \"" + data[i].url+"\", \"path\" : \""+data[i].path + "\" }"
            if (i+1 != dataLen){
                str+=","
            }
        }
        str+="]"
        fileFunctions.writeFile('./polymer_web_components.json',str)
        //  fs.writeFile('./polymer_web_components.json', JSON.stringify(data), 'utf-8', function(err) {
        //       if (err) throw err
        //})
    }
}
setOptions(components_endpoint, pwc_user_agent)
request(options, callback);



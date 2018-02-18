#!/home/raymond/.nvm/versions/node/v8.9.4/bin/node

'use strict'

const fs = require('fs')
const path = require('path')    
const s = require("underscore.string")
const program = require("commander")
const fileFunctions = require(path.join(__dirname,"/lib/fileFunctions.js"))
var https = require('https');


program
    .option('-l, --list [search_term]', 'list components matching search term')
    .parse(process.argv)

var component_name= program.args;

var main_html_file=path.join(__dirname,"index.html")

function readFile(base_file){
    return fs.readFileSync(base_file, {encoding: 'utf-8'})
}
function writeFile(file_name, file_body){
    fs.writeFile(file_name, file_body, function(err) {
        if(err) {
            return console.log(err)
        }
    }) 
}
function insertString( inputString, insertString, atString){
    var modifiedString = inputString.replace(new RegExp(atString,'g'),atString + "\n\t\t\t" + insertString)
    return modifiedString
}
function insertModuleReference(new_component_source, main_html_file){
    var script_tag = "<script type=\"module\" src=\""+new_component_source+"\"></script>"
    var main_html_body = readFile(main_html_file)
    main_html_body = insertString( main_html_body, script_tag, '<!--MODULES-->')
    writeFile(main_html_file, main_html_body)
}
function downloadFile(path, url){
    var file = fs.createWriteStream(path);
    var request = https.get(url, function(response) {
          response.pipe(file);
    });
}
function addElement(component_name){
    console.log("adding new component...")
    var component_file=component_name+".js"
    var components_list=fileFunctions.readJsonFile('polymer_web_components.json')
    //    console.log(components_list)
    for ( var i=0; i< components_list.length; i++){
        if (components_list[i].path == component_file) {
            console.log("component found: "+components_list[i].path)
            downloadFile("src/components/"+components_list[i].path, "cdn.rawgit.com/musicsmithnz/polymer_web_components/master/components/"+components_list[i].path)
            insertModuleReference('/src/components/' + components_list[i].path, main_html_file)
        }
    }
}
addElement(component_name)

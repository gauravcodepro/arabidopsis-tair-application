/*
  electron app init for the arabidopsis package
  Author Gaurav Sablok
  Universitat Potsdam
  Date: 2024-6-16
 */

const electron = require('electron');
const url = require('url');
const path = require('path')
const {app, BrowserWindow, Menu} = electron;
let main;
const menuTemplate = [
    {
        label: "Arabidopsis information"
    },
    {
        label: "Genotypes"
    },
    {
        label: "Ontologies"
    },
    {
        label:"Enrichment"
    },
    {
        label: "Genomtrack visualization"
    },
    {
        label:"Exit Arabidopsis"
    },
    {
        label: "Analyze your data",
        
        submenu:[
            {
                label: "upload your gene ontology"
            },
            {
                label: "upload your Arabidopsis AGI"
            },
            {
                label: "convert your AGI to NCBI"
            },
            {
                label: "analyze your AGI"
            }   
        ]
    }
]

app.on('ready', () => {

    const menu = Menu.buildFromTemplate(menuTemplate);

   Menu.setApplicationMenu(menu);

    main = new BrowserWindow({});

    main.loadURL(url.format({
        pathname: path.join(__dirname, "main.html"),
        protocol: 'file'

    }));

});

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
        label: "Arabidopsis TAIR"
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
        label: "Genome visualization"
    },
    {
        label: "Analyze your data",
        
        submenu:[
            {
                label: "gene ontology"
            },
            {
                label: "Arabidopsis AGI"
            },
            {
                label: "AGI to NCBI"
            },
            {
                label: "AGI-Protein"
            }   
        ]
    },
    {
        label:"Exit Arabidopsis"
    },
]

app.on('ready', () => {

    const menu = Menu.buildFromTemplate(menuTemplate);

   Menu.setApplicationMenu(menu);

    main = new BrowserWindow({
        icon: 'iconapplication/tairapplication.png'
    });

    main.loadURL(url.format({
        pathname: path.join(__dirname, "main.html"),
        protocol: 'file'

    }));

});

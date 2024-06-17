# arabidopsis-multi-app

- a arabidopsis multipage desktop application electron, slint, javascript.
- all functionalities of TAIR with in a single desktop application.
- interacts with TAIR API.
- The application on a desktop will open like this

<img src = "https://github.com/gauravcodepro/arabidopsis-tair-application/blob/main/app-preview1.png", height = 400>
<img src = "https://github.com/gauravcodepro/arabidopsis-tair-application/blob/main/app-preview2.png", height = 400>
<img src = "https://github.com/gauravcodepro/arabidopsis-tair-application/blob/main/app-preview3.png", height = 400>
<img src = "https://github.com/gauravcodepro/arabidopsis-tair-application/blob/main/app-preview4.png", height = 400>

- You have a custom menu for viewing everything with the TAIR and a sub menu for analyzing your own data with TAIR direct API.
- 2024-6-17: Entry point build
- 2024-7-: Release date

```
npm install electron --save --legacy-peer-deps
https://github.com/gauravcodepro/arabidopsis-multi-app.git
cd arabidopsis-multi-app
npm start
```
- to build the deb and rpm package 
```
git clone https://github.com/gauravcodepro/arabidopsis-multi-app.git
sudo apt-get install rpm
sudo npx electron-forge import
npm run make
```
- the application compiled will be located in the out folder with the deb and the rpm builds and macos builds.
  
Gaurav \
Academic Staff Member \
Bioinformatics \
Institute for Biochemistry and Biology \
University of Potsdam \
Potsdam,Germany

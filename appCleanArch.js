const fs = require('fs');
const path = require('path');


const mainFolders = ['app', 'core','config'];

const appFolders = ['data','domain', 'presentation',];

const coreFolders = ['api', 'errors','functions', 'shimmer' , "utils" , 'widgets' , 'extensions' , 'middleware'];

const configFolders = ['icons' , 'routes' , 'themes'];

const domainLayerFolder = ['entities' , "repositories" , "use_cases"];

const dataLayerFolder = ['data_source' , "repositories" , "models"];


const presentationFolder = ['controllers' , "views" , "widgets"];


const configIconsFiles = ['icons_broken.dart'];
const configRoutsFiles = ['app_routes.dart'];
const configThemesFiles = ['app_themes.dart'];

const coreApiFiles = ['api_services.dart' , 'api_services_implementation.dart' , "end_points.dart","network_info.dart"];
const coreErrorFiles = ['failures.dart'];
const coreShimmerFiles = ['shimmer_featured_list_view.dart'];
const coreUtilsFiles = ['app_assets.dart' , "app_colors.dart" , 'app_constants' , 'app_strings' , "app_styles" , ''];
const coreServiceLocatorFiles = ['service_locator.dart'];
const coreExtensionFiles = ['extensions.dart'];



for(let i = 0; i<mainFolders.length ; i++){

    fs.mkdir(path.join(__dirname, `${mainFolders[i]}`), (err) => {
        if (err) {
            return console.error(err);
        }else{


            for(let j = 0; j<appFolders[i].length;j++){

                fs.mkdir(path.join(__dirname, `${mainFolders[i]}`,`${appFolders[i][j]}`), (err) => {
                    // if (err) {
                    //     return console.error(err);
                    // }
                    // if(i===2){
                    //     constructsFiles.forEach(val=>{
                    //         //   fs.createWriteStream(__dirname+'/core/constructs'+ `/${val}.dart`)
                    //         fs.writeFile(__dirname+'/core/constructs'+ `/${val.name}.dart`,val.content,err=>{})
                    //     })
                    //
                    // }
                    console.log('Directory created successfully!');
                });

            }




        }
        console.log('Directory created successfully!');
    });




}

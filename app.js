const fs = require('fs');
const path = require('path');


const mainFolders = ['app','base', 'core'];


const appFolders = ['bindings','controllers', 'middlewares','models','services','utilities','views'];

const baseFolders = ['controllers', 'models','services'];

const coreFolders = ['constructs'];

const constructsFiles = [
    {'name':'components',
    'content':'import \'package:get/get.dart\';\n' +
        '\n' +
        'abstract class Component extends GetView{\n' +
        '\n' +
        '}'} ,
    {'name':'controller',
        'content':'import \'package:get/get.dart\';\n' +
            '\n' +
            'abstract class Controller extends GetxController with StateMixin{\n' +
            '\n' +
            '\n' +
            '\n' +
            '}'} ,
    {'name':'model',
        'content':'abstract class Model {\n' +
            '\n' +
            '  Map<String ,dynamic> toMap();\n' +
            '\n' +
            '\n' +
            '}'} ,
    {'name':'page',
        'content':'import \'package:get/get.dart\';\n' +
            'import \'package:woman_project/newPattern/core/constructs/screen.dart\';\n' +
            '\n' +
            '// ignore: must_be_immutable\n' +
            'abstract class Page extends GetPage{\n' +
            '\n' +
            '  late String name;\n' +
            '  late Screen screen;\n' +
            '  late Bindings? binding;\n' +
            '  late List<GetMiddleware>? middleware;\n' +
            '  Page({\n' +
            '  required this.name,required this.screen ,String? title,\n' +
            '   this.binding,\n' +
            '  List<GetMiddleware>? middleware}) : super(\n' +
            '      name: name,\n' +
            '      page: ()=> screen,\n' +
            '      middlewares:middleware,\n' +
            '      binding: binding\n' +
            '\n' +
            '  );\n' +
            '\n' +
            '}'} ,
    {'name':'screen',
        'content':'import \'package:get/get.dart\';\n' +
            '\n' +
            'abstract class Screen<Controller> extends GetView<Controller>{\n' +
            '\n' +
            '\n' +
            '}'} ,
    {'name':'service',
        'content':'import \'package:get/get.dart\';\n' +
            '\n' +
            'abstract class Service<Model> extends GetConnect {\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '}'} ];


const subFolders = [appFolders,baseFolders, coreFolders];





 for(let i = 0; i<mainFolders.length ; i++){

     fs.mkdir(path.join(__dirname, `${mainFolders[i]}`), (err) => {
         if (err) {
             return console.error(err);
         }else{

             for(let j = 0; j<subFolders[i].length;j++){

                 fs.mkdir(path.join(__dirname, `${mainFolders[i]}`,`${subFolders[i][j]}`), (err) => {
                     if (err) {
                         return console.error(err);
                     }
                     if(i===2){
                         constructsFiles.forEach(val=>{
                          //   fs.createWriteStream(__dirname+'/core/constructs'+ `/${val}.dart`)
                             fs.writeFile(__dirname+'/core/constructs'+ `/${val.name}.dart`,val.content,err=>{})
                         })

                     }
                     console.log('Directory created successfully!');
                 });

             }




         }
         console.log('Directory created successfully!');
     });




 }



// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Directory created successfully!');
// });
//
//
// fs.createWriteStream(__dirname+"/test/ddd.dart")
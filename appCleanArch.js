const fs = require('fs');
const path = require('path');


const mainFolders = ['app', 'core','config'];

const appFolders = ['data','domain', 'presentation',];

const coreFolders = ['api', 'errors','functions', 'shimmer' , "utils" , 'shared_widgets' , 'extensions' , 'middleware','services'];

const configFolders = ['icons' , 'routes' , 'themes'];

const domainLayerFolder = ['entities' , "repositories" , "use_cases"];

const dataLayerFolder = ['data_source' , "repositories" , "models"];


const presentationFolder = ['controllers' , "views" , "widgets" , "binding" , "pages"];


const configIconsFiles = ['icons_broken.dart'];
const configRoutsFiles = ['app_routes.dart'];
const configThemesFiles = ['app_themes.dart'];

const coreApiFiles = ['api_services.dart' , 'api_services_implementation.dart' , "end_points.dart","network_info.dart"];
const coreErrorFiles = ['failures.dart'];
const coreShimmerFiles = ['shimmer_featured_list_view.dart'];
const coreUtilsFiles = ['app_assets.dart' , "app_colors.dart" , 'app_constants.dart' , 'app_strings.dart' , "app_styles.dart" ,"internationalization.dart" ];
const coreServiceLocatorFiles = ['service_locator.dart'];
const coreExtensionFiles = ['extensions.dart'];


const classes = ['Login' , "Home" , 'Reconciliations' , 'Reports' , 'Terminal' , 'Transactions'];

function generateFolders() {

    mainFolders.forEach((main)=>{

        fs.mkdir(path.join(__dirname, `${main}`), (err) => {
            if (err) {
                return console.error(err);
            }else{

                switch (main){
                    case "app":
                        appFolders.forEach((app)=>{
                            fs.mkdir(path.join(__dirname,"app" , `${app}`), (err) => {

                                switch (app){
                                    case "data":
                                        dataLayerFolder.forEach((data)=>{
                                            fs.mkdir(path.join(__dirname,"app", 'data',`${data}`), (err) => {

                                                if(data==="data_source"){
                                                    fs.mkdir(path.join(__dirname,"app", 'data',`data_source`,"local_data_source"),(err)=>{
                                                        classes.forEach((file)=>{
                                                            fs.writeFile(path.join(__dirname,"app", 'data',"data_source","local_data_source",`${file.toLowerCase()}_local_source.dart`),"",err=>{});
                                                        })
                                                    })
                                                    fs.mkdir(path.join(__dirname,"app", 'data',`data_source`,"remote_data_source"),(err)=>{
                                                        classes.forEach((file)=>{
                                                            fs.writeFile(path.join(__dirname,"app", 'data',"data_source","remote_data_source",`${file.toLowerCase()}_remote_source.dart`),"",err=>{});
                                                        })
                                                    })

                                                }
                                            })
                                        });
                                        break;
                                    case "domain":
                                        domainLayerFolder.forEach((domain)=>{
                                            fs.mkdir(path.join(__dirname,"app", 'domain',`${domain}`), (err) => {})
                                        });
                                        break;
                                    case "presentation":
                                        presentationFolder.forEach((presentation)=>{
                                            fs.mkdir(path.join(__dirname,"app", 'presentation',`${presentation}`), (err) => {


                                                classes.forEach((file)=>{
                                                    fs.writeFile(path.join(__dirname,"app", 'presentation',"views",`${file.toLowerCase()}_view.dart`),"",err=>{});
                                                    fs.writeFile(path.join(__dirname,"app", 'presentation',"controllers",`${file.toLowerCase()}_controller.dart`),"",err=>{});
                                                    fs.writeFile(path.join(__dirname,"app", 'presentation',"pages",`${file.toLowerCase()}_page.dart`),"",err=>{});
                                                    fs.writeFile(path.join(__dirname,"app", 'presentation',"binding",`${file.toLowerCase()}_binding.dart`),"",err=>{});


                                                })

                                            })
                                        });
                                        break;
                                }
                            })
                        });
                        break;

                    case "core":
                        coreFolders.forEach((core)=>{
                            fs.mkdir(path.join(__dirname,"core" ,`${core}`), (err) => {})
                        });
                        break;

                    case "config":
                        configFolders.forEach((config)=>{
                            fs.mkdir(path.join(__dirname,"config" ,`${config}`), (err) => {})
                        });
                        break;
                }


            }})

        setTimeout(()=>{
            fs.writeFile(path.join(__dirname,"config", 'icons',`${configIconsFiles[0]}`),"",err=>{});
            fs.writeFile(path.join(__dirname,"config", 'routes',`${configRoutsFiles[0]}`),"",err=>{});
            fs.writeFile(path.join(__dirname,"config", 'themes',`${configThemesFiles[0]}`),"",err=>{});

            coreApiFiles.forEach((file)=>{fs.writeFile(path.join(__dirname,"core", 'api',`${file}`),"",err=>{});})
            fs.writeFile(path.join(__dirname,"core", 'errors',`${coreErrorFiles[0]}`),"",err=>{});
            fs.writeFile(path.join(__dirname,"core", 'shimmer',`${coreShimmerFiles[0]}`),"",err=>{});
            coreUtilsFiles.forEach((file)=>{fs.writeFile(path.join(__dirname,"core", 'utils',`${file}`),"",err=>{});})

            fs.writeFile(path.join(__dirname,"core", 'extensions',`${coreExtensionFiles[0]}`),"",err=>{});
            fs.writeFile(path.join(__dirname,"core", 'services',`${coreServiceLocatorFiles[0]}`),"",err=>{});


        },2000);
    });

}

generateFolders()
//fill this string
const endPoint = "";
const contentAppRoutes = "";

const contentEndPoints = 'abstract class EndPoints {\n' +
    `  static const String baseUrl = \'${endPoint}\';\n`  +
    '}\n';

const contentApiService = "abstract class ApiServices {\n" +
    "  Future<List<dynamic>> get({required String endPoint});\n" +
    "}\n";

const contentApiServicesImplementation = "import 'api_services.dart';\n" +
    "import 'end_points.dart';\n" +
    "import 'package:dio/dio.dart';\n" +
    "\n" +
    "class ApiServicesImplementation implements ApiServices {\n" +
    "  Dio? _dio;\n" +
    "\n" +
    "  ApiServicesImplementation() {\n" +
    "    BaseOptions baseOptions = BaseOptions(\n" +
    "      baseUrl: EndPoints.baseUrl,\n" +
    "      receiveDataWhenStatusError: true,\n" +
    "      connectTimeout: 10 * 1000, //10 second\n" +
    "      receiveTimeout: 10 * 1000,\n" +
    "    );\n" +
    "    _dio = Dio(baseOptions);\n" +
    "  }\n" +
    "\n" +
    "  @override\n" +
    "  Future<List<dynamic>> get({\n" +
    "    required String endPoint,\n" +
    "    Map<String, dynamic>? queryParameters,\n" +
    "  }) async {\n" +
    "    Response response =\n" +
    "        await _dio!.get(endPoint,queryParameters: queryParameters);\n" +
    "    return response.data['items'];\n" +
    "  }\n" +
    "}";

const contentFailures = "import 'package:dio/dio.dart';\n" +
    "\n" +
    "abstract class Failure {\n" +
    "  final String error;\n" +
    "\n" +
    "  const Failure(this.error);\n" +
    "}\n" +
    "\n" +
    "class ServerFailure extends Failure {\n" +
    "  ServerFailure(super.error);\n" +
    "  factory ServerFailure.fromDioError(DioError dioError) {\n" +
    "    switch (dioError.type) {\n" +
    "      case DioErrorType.connectTimeout:\n" +
    "        return ServerFailure('Connection timeout with ApiServer');\n" +
    "      case DioErrorType.sendTimeout:\n" +
    "        return ServerFailure('Send timeout with ApiServer');\n" +
    "      case DioErrorType.receiveTimeout:\n" +
    "        return ServerFailure('Receive timeout with ApiServer');\n" +
    "      case DioErrorType.response:\n" +
    "        return ServerFailure.fromDioResponse(\n" +
    "          dioError.response!.statusCode!,\n" +
    "          dioError.response!.data,\n" +
    "        );\n" +
    "      case DioErrorType.cancel:\n" +
    "        return ServerFailure('Request to ApiServer was canceled');\n" +
    "      case DioErrorType.other:\n" +
    "        if (dioError.message.contains('SocketException')) {\n" +
    "          return ServerFailure('No Internet Connection');\n" +
    "        } else {\n" +
    "          return ServerFailure('Unexpected Error, Please try again!');\n" +
    "        }\n" +
    "      default:\n" +
    "        return ServerFailure('Opps there was an error, Please try again!');\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  factory ServerFailure.fromDioResponse(int statsCode, dynamic response) {\n" +
    "    switch (statsCode) {\n" +
    "      case 401:\n" +
    "      case 402:\n" +
    "      case 403:\n" +
    "        return ServerFailure(response['error']['message']);\n" +
    "      case 404:\n" +
    "        return ServerFailure('Your request not found, Please try later!');\n" +
    "      case 500:\n" +
    "        return ServerFailure('Internal server error, Please try later!');\n" +
    "      default:\n" +
    "        return ServerFailure('Opps there was an error, Please try again!');\n" +
    "    }\n" +
    "  }\n" +
    "}\n";

const contentAppAssets = "const String path = 'assets/';\n" +
    "\n" +
    "abstract class AppAssets {\n" +
    "  static const logo = '$path/logo.png';\n" +
    "  static const fontGtSectraFine = 'GT Sectra Fine';\n" +
    "}";




// for(let i = 0; i<mainFolders.length ; i++){
//
//     fs.mkdir(path.join(__dirname, `${mainFolders[i]}`), (err) => {
//         if (err) {
//             return console.error(err);
//         }else{
//
//
//             for(let j = 0; j<appFolders[i].length;j++){
//
//                 fs.mkdir(path.join(__dirname, `${mainFolders[i]}`,`${appFolders[i][j]}`), (err) => {
//                     // if (err) {
//                     //     return console.error(err);
//                     // }
//                     // if(i===2){
//                     //     constructsFiles.forEach(val=>{
//                     //         //   fs.createWriteStream(__dirname+'/core/constructs'+ `/${val}.dart`)
//                     //         fs.writeFile(__dirname+'/core/constructs'+ `/${val.name}.dart`,val.content,err=>{})
//                     //     })
//                     //
//                     // }
//                     console.log('Directory created successfully!');
//                 });
//
//             }
//
//
//
//
//         }
//         console.log('Directory created successfully!');
//     });
//
//
//
//
// }

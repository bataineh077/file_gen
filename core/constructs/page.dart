import 'package:get/get.dart';
import 'package:woman_project/newPattern/core/constructs/screen.dart';

// ignore: must_be_immutable
abstract class Page extends GetPage{

  late String name;
  late Screen screen;
  late Bindings? binding;
  late List<GetMiddleware>? middleware;
  Page({
  required this.name,required this.screen ,String? title,
   this.binding,
  List<GetMiddleware>? middleware}) : super(
      name: name,
      page: ()=> screen,
      middlewares:middleware,
      binding: binding

  );

}
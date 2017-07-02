"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, { path: 'home', component: home_component_1.HomeComponent }];
var AppRoutingModule = function () {
    function AppRoutingModule() {}
    return AppRoutingModule;
}();
AppRoutingModule = __decorate([core_1.NgModule({
    imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
    exports: [router_1.NativeScriptRouterModule]
})], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQkFBeUM7QUFHekMsdUJBQXVFO0FBRXZFLCtCQUFzRDtBQUV0RCxJQUFNLEFBQU0sU0FBVyxDQUNyQixFQUFFLEFBQUksTUFBRSxBQUFFLElBQUUsQUFBVSxZQUFFLEFBQU8sU0FBRSxBQUFTLFdBQUUsQUFBTSxBQUFFLFVBQ3BELEVBQUUsQUFBSSxNQUFFLEFBQU0sUUFBRSxBQUFTLFdBQUcsaUJBQWEsQUFBRSxBQUM1QyxBQUFDO0FBTUYsSUFBYSxBQUFnQjtBQUE3QixnQ0FBZ0MsQ0FBQztBQUFELFdBQUEsQUFBQztBQUFqQyxBQUFpQztBQUFwQixBQUFnQixzQ0FKcEI7QUFDTCxBQUFPLGFBQUUsQ0FBQyxTQUF3Qix5QkFBQyxBQUFPLFFBQUMsQUFBTSxBQUFDLEFBQUM7QUFDbkQsQUFBTyxhQUFFLENBQUMsU0FBd0IsQUFBQyxBQUN0QyxBQUFDO0FBSFEsQ0FBVCxJQUlZLEFBQWdCLEFBQUk7QUFBcEIsMkJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9ob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogIEhvbWVDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
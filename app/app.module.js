"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var user_service_1 = require("./home/user.service");
var home_component_1 = require("./home/home.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent,
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            forms_1.NativeScriptFormsModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
        ],
        providers: [
            user_service_1.UserService,
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFFbkUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyxvREFBa0Q7QUFDbEQsd0RBQXNEO0FBcUJ0RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFuQnJCLGVBQVEsQ0FBQztRQUNULFNBQVMsRUFBRTtZQUNWLDRCQUFZO1NBQ1o7UUFDRCxPQUFPLEVBQUU7WUFDUix3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtZQUN0QiwrQkFBdUI7U0FDdkI7UUFDRCxZQUFZLEVBQUU7WUFDYiw0QkFBWTtZQUNWLDhCQUFhO1NBQ2Y7UUFDQSxTQUFTLEVBQUU7WUFDVCwwQkFBVztTQUNaO1FBQ0QsT0FBTyxFQUFFLENBQUUsdUJBQWdCLENBQUU7S0FDOUIsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL2hvbWUvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRib290c3RyYXA6IFtcblx0XHRBcHBDb21wb25lbnQsXG5cdF0sXG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRNb2R1bGUsXG5cdFx0QXBwUm91dGluZ01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcblx0XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVXNlclNlcnZpY2UsXG4gIF0sXG4gIHNjaGVtYXM6IFsgTk9fRVJST1JTX1NDSEVNQSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var HomeComponent = function () {
    function HomeComponent(userService) {
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            return _this.users = users;
        }, function (error) {
            return _this.errorMessage = error;
        });
    };
    return HomeComponent;
}();
HomeComponent = __decorate([core_1.Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html'
}), __metadata("design:paramtypes", [user_service_1.UserService])], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQkFBa0Q7QUFFbEQsNkJBQTZDO0FBTzdDLElBQWEsQUFBYTtBQU16QiwyQkFBb0IsQUFBd0I7QUFBeEIsYUFBVyxjQUFYLEFBQVcsQUFBYSxBQUFJO0FBQUM7QUFFaEQsNEJBQVEsV0FBUjtBQUFBLG9CQU1BO0FBTEEsQUFBSSxhQUFDLEFBQVcsWUFBQyxBQUFRLEFBQUUsV0FDdEIsQUFBUyxVQUNSLFVBQUEsQUFBSztBQUFJLG1CQUFBLEFBQUksTUFBQyxBQUFLLFFBQVYsQUFBYSxBQUFLO0FBQUEsV0FDM0IsVUFBQSxBQUFLO0FBQUksbUJBQUEsQUFBSSxNQUFDLEFBQVksZUFBakIsQUFBNEIsQUFBSztBQUFBLEFBQzNDLEFBQUMsQUFDUDtBQUFDO0FBQ0YsV0FBQSxBQUFDO0FBZkQsQUFlQztBQWZZLEFBQWEsbUNBTGhCO0FBQ1QsQUFBUSxjQUFFLEFBQU07QUFDaEIsQUFBUSxjQUFFLEFBQU0sT0FBQyxBQUFFO0FBQ25CLEFBQVcsaUJBQUUsQUFBdUIsQUFDcEMsQUFBQztBQUpTLENBQVYsb0NBV2lDLGVBQVcsZ0JBTmhDLEFBQWEsQUFlekI7QUFmWSx3QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdob21lJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VycztcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICB1c2VycyA9PiB0aGlzLnVzZXJzID0gdXNlcnMsXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPHN0cmluZz5lcnJvclxuICAgICAgKTtcblx0fVxufVxuIl19
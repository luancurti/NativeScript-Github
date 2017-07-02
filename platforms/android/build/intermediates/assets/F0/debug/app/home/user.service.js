"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var UserService = function () {
    function UserService(http) {
        this.http = http;
        this._userUrl = 'https://api.github.com/users';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this._userUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return UserService;
}();
UserService = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [http_1.Http])], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFCQUEyQztBQUMzQyxxQkFBK0M7QUFFL0MsMkJBQTZDO0FBQzdDLFFBQWlDO0FBQ2pDLFFBQStCO0FBQy9CLFFBQW1DO0FBR25DLElBQWEsQUFBVztBQUd0Qix5QkFBb0IsQUFBVTtBQUFWLGFBQUksT0FBSixBQUFJLEFBQU07QUFGdEIsYUFBUSxXQUFHLEFBQThCLEFBQUMsQUFFaEI7QUFBQztBQUVuQywwQkFBUSxXQUFSO0FBQ0UsQUFBTSxvQkFBTSxBQUFJLEtBQUMsQUFBRyxJQUFDLEFBQUksS0FBQyxBQUFRLEFBQUMsVUFDaEMsQUFBRyxJQUFDLFVBQUMsQUFBa0I7QUFBSyxtQkFBQSxBQUFRLFNBQVIsQUFBUyxBQUFJLEFBQUU7QUFBQSxBQUFDLFNBRHhDLEFBQUksRUFFUixBQUFLLE1BQUMsQUFBSSxLQUFDLEFBQVcsQUFBQyxBQUFDLEFBQzdCO0FBQUM7QUFFTywwQkFBVyxjQUFuQixVQUFvQixBQUFlO0FBQ2pDLEFBQU0sZUFBQyxhQUFVLFdBQUMsQUFBSyxNQUFDLEFBQUssTUFBQyxBQUFJLEFBQUUsT0FBQyxBQUFLLFNBQUksQUFBYyxBQUFDLEFBQUMsQUFDaEU7QUFBQztBQUNILFdBQUEsQUFBQztBQWRELEFBY0M7QUFkWSxBQUFXLDBCQUR2QixPQUFVLEFBQUUsK0NBSWUsT0FBSSxTQUhuQixBQUFXLEFBY3ZCO0FBZFksc0JBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlclVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIGdldFVzZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX3VzZXJVcmwpXG4gICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxufVxuIl19
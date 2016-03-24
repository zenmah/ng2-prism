/* */ 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('prismjs/components/prism-nginx');
var core_1 = require('angular2/core');
var Nginx = (function () {
    function Nginx(el) {
        this.el = el;
    }
    Nginx.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'nginx';
    };
    Nginx = __decorate([
        core_1.Directive({
            selector: 'codeblock[nginx]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Nginx);
    return Nginx;
})();
exports.Nginx = Nginx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdpbnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZ2lueC50cyJdLCJuYW1lcyI6WyJOZ2lueCIsIk5naW54LmNvbnN0cnVjdG9yIiwiTmdpbngubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFHcEQ7SUFPRUEsZUFBb0JBLEVBQWFBO1FBQWJDLE9BQUVBLEdBQUZBLEVBQUVBLENBQVdBO0lBQUtBLENBQUNBO0lBRXZDRCx3QkFBUUEsR0FBUkE7UUFFRUUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBU0EsSUFBSUEsQ0FBQ0EsRUFBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDdEVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBO0lBQ3BDQSxDQUFDQTtJQWJIRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsa0JBQWtCQTtTQUM3QkEsQ0FBQ0E7O2NBYURBO0lBQURBLFlBQUNBO0FBQURBLENBQUNBLEFBZkQsSUFlQztBQVpZLGFBQUssUUFZakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW5naW54JztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjb2RlYmxvY2tbbmdpbnhdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ2lueCB7XG5cbiAgY29kZWJsb2NrOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBnZXQgdGhlIGhvc3RcbiAgICB0aGlzLmNvZGVibG9jayA9ICg8YW55PnRoaXMuZWwpLmludGVybmFsRWxlbWVudC5jb21wb25lbnRWaWV3LmNvbnRleHQ7XG4gICAgdGhpcy5jb2RlYmxvY2subGFuZ3VhZ2UgPSAnbmdpbngnO1xuICB9XG5cbn1cbiJdfQ==
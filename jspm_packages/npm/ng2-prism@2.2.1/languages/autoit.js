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
require('prismjs/components/prism-autoit');
var core_1 = require('angular2/core');
var Autoit = (function () {
    function Autoit(el) {
        this.el = el;
    }
    Autoit.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'autoit';
    };
    Autoit = __decorate([
        core_1.Directive({
            selector: 'codeblock[autoit]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Autoit);
    return Autoit;
})();
exports.Autoit = Autoit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0b2l0LnRzIl0sIm5hbWVzIjpbIkF1dG9pdCIsIkF1dG9pdC5jb25zdHJ1Y3RvciIsIkF1dG9pdC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsUUFBTyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUdwRDtJQU9FQSxnQkFBb0JBLEVBQWFBO1FBQWJDLE9BQUVBLEdBQUZBLEVBQUVBLENBQVdBO0lBQUtBLENBQUNBO0lBRXZDRCx5QkFBUUEsR0FBUkE7UUFFRUUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBU0EsSUFBSUEsQ0FBQ0EsRUFBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDdEVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQWJIRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsbUJBQW1CQTtTQUM5QkEsQ0FBQ0E7O2VBYURBO0lBQURBLGFBQUNBO0FBQURBLENBQUNBLEFBZkQsSUFlQztBQVpZLGNBQU0sU0FZbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWF1dG9pdCc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY29kZWJsb2NrW2F1dG9pdF0nXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9pdCB7XG5cbiAgY29kZWJsb2NrOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBnZXQgdGhlIGhvc3RcbiAgICB0aGlzLmNvZGVibG9jayA9ICg8YW55PnRoaXMuZWwpLmludGVybmFsRWxlbWVudC5jb21wb25lbnRWaWV3LmNvbnRleHQ7XG4gICAgdGhpcy5jb2RlYmxvY2subGFuZ3VhZ2UgPSAnYXV0b2l0JztcbiAgfVxuXG59XG4iXX0=
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
require('prismjs/components/prism-rest');
var core_1 = require('angular2/core');
var Rest = (function () {
    function Rest(el) {
        this.el = el;
    }
    Rest.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'rest';
    };
    Rest = __decorate([
        core_1.Directive({
            selector: 'codeblock[rest]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Rest);
    return Rest;
})();
exports.Rest = Rest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc3QudHMiXSwibmFtZXMiOlsiUmVzdCIsIlJlc3QuY29uc3RydWN0b3IiLCJSZXN0Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxRQUFPLCtCQUErQixDQUFDLENBQUE7QUFDdkMscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBR3BEO0lBT0VBLGNBQW9CQSxFQUFhQTtRQUFiQyxPQUFFQSxHQUFGQSxFQUFFQSxDQUFXQTtJQUFLQSxDQUFDQTtJQUV2Q0QsdUJBQVFBLEdBQVJBO1FBRUVFLElBQUlBLENBQUNBLFNBQVNBLEdBQVNBLElBQUlBLENBQUNBLEVBQUdBLENBQUNBLGVBQWVBLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBO1FBQ3RFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFiSEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGlCQUFpQkE7U0FDNUJBLENBQUNBOzthQWFEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQUFDQSxBQWZELElBZUM7QUFaWSxZQUFJLE9BWWhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1yZXN0JztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjb2RlYmxvY2tbcmVzdF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc3Qge1xuXG4gIGNvZGVibG9jazphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmKSB7ICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gZ2V0IHRoZSBob3N0XG4gICAgdGhpcy5jb2RlYmxvY2sgPSAoPGFueT50aGlzLmVsKS5pbnRlcm5hbEVsZW1lbnQuY29tcG9uZW50Vmlldy5jb250ZXh0O1xuICAgIHRoaXMuY29kZWJsb2NrLmxhbmd1YWdlID0gJ3Jlc3QnO1xuICB9XG5cbn1cbiJdfQ==
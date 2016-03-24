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
require('prismjs/components/prism-c');
require('prismjs/components/prism-bison');
var core_1 = require('angular2/core');
var Bison = (function () {
    function Bison(el) {
        this.el = el;
    }
    Bison.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'bison';
    };
    Bison = __decorate([
        core_1.Directive({
            selector: 'codeblock[bison]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Bison);
    return Bison;
})();
exports.Bison = Bison;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaXNvbi50cyJdLCJuYW1lcyI6WyJCaXNvbiIsIkJpc29uLmNvbnN0cnVjdG9yIiwiQmlzb24ubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFFBQU8sNEJBQTRCLENBQUMsQ0FBQTtBQUNwQyxRQUFPLGdDQUFnQyxDQUFDLENBQUE7QUFDeEMscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBR3BEO0lBT0VBLGVBQW9CQSxFQUFhQTtRQUFiQyxPQUFFQSxHQUFGQSxFQUFFQSxDQUFXQTtJQUFLQSxDQUFDQTtJQUV2Q0Qsd0JBQVFBLEdBQVJBO1FBRUVFLElBQUlBLENBQUNBLFNBQVNBLEdBQVNBLElBQUlBLENBQUNBLEVBQUdBLENBQUNBLGVBQWVBLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBO1FBQ3RFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFiSEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGtCQUFrQkE7U0FDN0JBLENBQUNBOztjQWFEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQUFDQSxBQWZELElBZUM7QUFaWSxhQUFLLFFBWWpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJpc29uJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjb2RlYmxvY2tbYmlzb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBCaXNvbiB7XG5cbiAgY29kZWJsb2NrOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBnZXQgdGhlIGhvc3RcbiAgICB0aGlzLmNvZGVibG9jayA9ICg8YW55PnRoaXMuZWwpLmludGVybmFsRWxlbWVudC5jb21wb25lbnRWaWV3LmNvbnRleHQ7XG4gICAgdGhpcy5jb2RlYmxvY2subGFuZ3VhZ2UgPSAnYmlzb24nO1xuICB9XG5cbn1cbiJdfQ==
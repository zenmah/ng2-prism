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
require('prismjs/components/prism-handlebars');
var core_1 = require('angular2/core');
var Handlebars = (function () {
    function Handlebars(el) {
        this.el = el;
    }
    Handlebars.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'handlebars';
    };
    Handlebars = __decorate([
        core_1.Directive({
            selector: 'codeblock[handlebars]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Handlebars);
    return Handlebars;
})();
exports.Handlebars = Handlebars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlYmFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZWJhcnMudHMiXSwibmFtZXMiOlsiSGFuZGxlYmFycyIsIkhhbmRsZWJhcnMuY29uc3RydWN0b3IiLCJIYW5kbGViYXJzLm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxRQUFPLHFDQUFxQyxDQUFDLENBQUE7QUFDN0MscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBR3BEO0lBT0VBLG9CQUFvQkEsRUFBYUE7UUFBYkMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBV0E7SUFBS0EsQ0FBQ0E7SUFFdkNELDZCQUFRQSxHQUFSQTtRQUVFRSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFTQSxJQUFJQSxDQUFDQSxFQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUN0RUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsR0FBR0EsWUFBWUEsQ0FBQ0E7SUFDekNBLENBQUNBO0lBYkhGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSx1QkFBdUJBO1NBQ2xDQSxDQUFDQTs7bUJBYURBO0lBQURBLGlCQUFDQTtBQUFEQSxDQUFDQSxBQWZELElBZUM7QUFaWSxrQkFBVSxhQVl0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20taGFuZGxlYmFycyc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY29kZWJsb2NrW2hhbmRsZWJhcnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBIYW5kbGViYXJzIHtcblxuICBjb2RlYmxvY2s6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZikgeyAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGdldCB0aGUgaG9zdFxuICAgIHRoaXMuY29kZWJsb2NrID0gKDxhbnk+dGhpcy5lbCkuaW50ZXJuYWxFbGVtZW50LmNvbXBvbmVudFZpZXcuY29udGV4dDtcbiAgICB0aGlzLmNvZGVibG9jay5sYW5ndWFnZSA9ICdoYW5kbGViYXJzJztcbiAgfVxuXG59XG4iXX0=
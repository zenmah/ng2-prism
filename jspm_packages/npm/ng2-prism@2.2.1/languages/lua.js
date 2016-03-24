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
require('prismjs/components/prism-lua');
var core_1 = require('angular2/core');
var Lua = (function () {
    function Lua(el) {
        this.el = el;
    }
    Lua.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'lua';
    };
    Lua = __decorate([
        core_1.Directive({
            selector: 'codeblock[lua]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Lua);
    return Lua;
})();
exports.Lua = Lua;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibHVhLnRzIl0sIm5hbWVzIjpbIkx1YSIsIkx1YS5jb25zdHJ1Y3RvciIsIkx1YS5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsUUFBTyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RDLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUdwRDtJQU9FQSxhQUFvQkEsRUFBYUE7UUFBYkMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBV0E7SUFBS0EsQ0FBQ0E7SUFFdkNELHNCQUFRQSxHQUFSQTtRQUVFRSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFTQSxJQUFJQSxDQUFDQSxFQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUN0RUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDbENBLENBQUNBO0lBYkhGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO1NBQzNCQSxDQUFDQTs7WUFhREE7SUFBREEsVUFBQ0E7QUFBREEsQ0FBQ0EsQUFmRCxJQWVDO0FBWlksV0FBRyxNQVlmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1sdWEnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2NvZGVibG9ja1tsdWFdJ1xufSlcbmV4cG9ydCBjbGFzcyBMdWEge1xuXG4gIGNvZGVibG9jazphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmKSB7ICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gZ2V0IHRoZSBob3N0XG4gICAgdGhpcy5jb2RlYmxvY2sgPSAoPGFueT50aGlzLmVsKS5pbnRlcm5hbEVsZW1lbnQuY29tcG9uZW50Vmlldy5jb250ZXh0O1xuICAgIHRoaXMuY29kZWJsb2NrLmxhbmd1YWdlID0gJ2x1YSc7XG4gIH1cblxufVxuIl19
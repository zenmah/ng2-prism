/* */ 
"format cjs";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from 'angular2/src/core/di';
import { ViewMetadata } from '../metadata/view';
import { ComponentMetadata } from '../metadata/directives';
import { stringify, isBlank, isPresent } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { Map } from 'angular2/src/facade/collection';
import { reflector } from 'angular2/src/core/reflection/reflection';
/**
 * Resolves types to {@link ViewMetadata}.
 */
export let ViewResolver = class {
    constructor() {
        /** @internal */
        this._cache = new Map();
    }
    resolve(component) {
        var view = this._cache.get(component);
        if (isBlank(view)) {
            view = this._resolve(component);
            this._cache.set(component, view);
        }
        return view;
    }
    /** @internal */
    _resolve(component) {
        var compMeta;
        var viewMeta;
        reflector.annotations(component).forEach(m => {
            if (m instanceof ViewMetadata) {
                viewMeta = m;
            }
            if (m instanceof ComponentMetadata) {
                compMeta = m;
            }
        });
        if (isPresent(compMeta)) {
            if (isBlank(compMeta.template) && isBlank(compMeta.templateUrl) && isBlank(viewMeta)) {
                throw new BaseException(`Component '${stringify(component)}' must have either 'template' or 'templateUrl' set.`);
            }
            else if (isPresent(compMeta.template) && isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("template", component);
            }
            else if (isPresent(compMeta.templateUrl) && isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("templateUrl", component);
            }
            else if (isPresent(compMeta.directives) && isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("directives", component);
            }
            else if (isPresent(compMeta.pipes) && isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("pipes", component);
            }
            else if (isPresent(compMeta.encapsulation) && isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("encapsulation", component);
            }
            else if (isPresent(compMeta.styles) && isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("styles", component);
            }
            else if (isPresent(compMeta.styleUrls) && isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("styleUrls", component);
            }
            else if (isPresent(viewMeta)) {
                return viewMeta;
            }
            else {
                return new ViewMetadata({
                    templateUrl: compMeta.templateUrl,
                    template: compMeta.template,
                    directives: compMeta.directives,
                    pipes: compMeta.pipes,
                    encapsulation: compMeta.encapsulation,
                    styles: compMeta.styles,
                    styleUrls: compMeta.styleUrls
                });
            }
        }
        else {
            if (isBlank(viewMeta)) {
                throw new BaseException(`Could not compile '${stringify(component)}' because it is not a component.`);
            }
            else {
                return viewMeta;
            }
        }
        return null;
    }
    /** @internal */
    _throwMixingViewAndComponent(propertyName, component) {
        throw new BaseException(`Component '${stringify(component)}' cannot have both '${propertyName}' and '@View' set at the same time"`);
    }
};
ViewResolver = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], ViewResolver);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X3Jlc29sdmVyLnRzIl0sIm5hbWVzIjpbIlZpZXdSZXNvbHZlciIsIlZpZXdSZXNvbHZlci5jb25zdHJ1Y3RvciIsIlZpZXdSZXNvbHZlci5yZXNvbHZlIiwiVmlld1Jlc29sdmVyLl9yZXNvbHZlIiwiVmlld1Jlc29sdmVyLl90aHJvd01peGluZ1ZpZXdBbmRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCO09BQ3hDLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCO09BQ3RDLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0I7T0FFakQsRUFBTyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtPQUNyRSxFQUFDLGFBQWEsRUFBQyxNQUFNLGdDQUFnQztPQUNyRCxFQUFDLEdBQUcsRUFBQyxNQUFNLGdDQUFnQztPQUUzQyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlDQUF5QztBQUdqRTs7R0FFRztBQUNIO0lBQUFBO1FBRUVDLGdCQUFnQkE7UUFDaEJBLFdBQU1BLEdBQUdBLElBQUlBLEdBQUdBLEVBQXNCQSxDQUFDQTtJQW1GekNBLENBQUNBO0lBakZDRCxPQUFPQSxDQUFDQSxTQUFlQTtRQUNyQkUsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFFdENBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNoQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBRURGLGdCQUFnQkE7SUFDaEJBLFFBQVFBLENBQUNBLFNBQWVBO1FBQ3RCRyxJQUFJQSxRQUEyQkEsQ0FBQ0E7UUFDaENBLElBQUlBLFFBQXNCQSxDQUFDQTtRQUUzQkEsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDeENBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFlBQVlBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM5QkEsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsWUFBWUEsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLENBQUNBO1FBQ0hBLENBQUNBLENBQUNBLENBQUNBO1FBRUhBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckZBLE1BQU1BLElBQUlBLGFBQWFBLENBQ25CQSxjQUFjQSxTQUFTQSxDQUFDQSxTQUFTQSxDQUFDQSxxREFBcURBLENBQUNBLENBQUNBO1lBRS9GQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0RBLElBQUlBLENBQUNBLDRCQUE0QkEsQ0FBQ0EsVUFBVUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFFM0RBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNsRUEsSUFBSUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQSxhQUFhQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUU5REEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pFQSxJQUFJQSxDQUFDQSw0QkFBNEJBLENBQUNBLFlBQVlBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO1lBRTdEQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDNURBLElBQUlBLENBQUNBLDRCQUE0QkEsQ0FBQ0EsT0FBT0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFFeERBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwRUEsSUFBSUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQSxlQUFlQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUVoRUEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxJQUFJQSxDQUFDQSw0QkFBNEJBLENBQUNBLFFBQVFBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO1lBRXpEQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDaEVBLElBQUlBLENBQUNBLDRCQUE0QkEsQ0FBQ0EsV0FBV0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFFNURBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFFbEJBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNOQSxNQUFNQSxDQUFDQSxJQUFJQSxZQUFZQSxDQUFDQTtvQkFDdEJBLFdBQVdBLEVBQUVBLFFBQVFBLENBQUNBLFdBQVdBO29CQUNqQ0EsUUFBUUEsRUFBRUEsUUFBUUEsQ0FBQ0EsUUFBUUE7b0JBQzNCQSxVQUFVQSxFQUFFQSxRQUFRQSxDQUFDQSxVQUFVQTtvQkFDL0JBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLEtBQUtBO29CQUNyQkEsYUFBYUEsRUFBRUEsUUFBUUEsQ0FBQ0EsYUFBYUE7b0JBQ3JDQSxNQUFNQSxFQUFFQSxRQUFRQSxDQUFDQSxNQUFNQTtvQkFDdkJBLFNBQVNBLEVBQUVBLFFBQVFBLENBQUNBLFNBQVNBO2lCQUM5QkEsQ0FBQ0EsQ0FBQ0E7WUFDTEEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxNQUFNQSxJQUFJQSxhQUFhQSxDQUNuQkEsc0JBQXNCQSxTQUFTQSxDQUFDQSxTQUFTQSxDQUFDQSxrQ0FBa0NBLENBQUNBLENBQUNBO1lBQ3BGQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDTkEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDbEJBLENBQUNBO1FBQ0hBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBRURILGdCQUFnQkE7SUFDaEJBLDRCQUE0QkEsQ0FBQ0EsWUFBb0JBLEVBQUVBLFNBQWVBO1FBQ2hFSSxNQUFNQSxJQUFJQSxhQUFhQSxDQUNuQkEsY0FBY0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsdUJBQXVCQSxZQUFZQSxxQ0FBcUNBLENBQUNBLENBQUNBO0lBQ2xIQSxDQUFDQTtBQUNISixDQUFDQTtBQXRGRDtJQUFDLFVBQVUsRUFBRTs7aUJBc0ZaO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7Vmlld01ldGFkYXRhfSBmcm9tICcuLi9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7Q29tcG9uZW50TWV0YWRhdGF9IGZyb20gJy4uL21ldGFkYXRhL2RpcmVjdGl2ZXMnO1xuXG5pbXBvcnQge1R5cGUsIHN0cmluZ2lmeSwgaXNCbGFuaywgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtNYXB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5cbmltcG9ydCB7cmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb24nO1xuXG5cbi8qKlxuICogUmVzb2x2ZXMgdHlwZXMgdG8ge0BsaW5rIFZpZXdNZXRhZGF0YX0uXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3UmVzb2x2ZXIge1xuICAvKiogQGludGVybmFsICovXG4gIF9jYWNoZSA9IG5ldyBNYXA8VHlwZSwgVmlld01ldGFkYXRhPigpO1xuXG4gIHJlc29sdmUoY29tcG9uZW50OiBUeXBlKTogVmlld01ldGFkYXRhIHtcbiAgICB2YXIgdmlldyA9IHRoaXMuX2NhY2hlLmdldChjb21wb25lbnQpO1xuXG4gICAgaWYgKGlzQmxhbmsodmlldykpIHtcbiAgICAgIHZpZXcgPSB0aGlzLl9yZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9jYWNoZS5zZXQoY29tcG9uZW50LCB2aWV3KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3Jlc29sdmUoY29tcG9uZW50OiBUeXBlKTogVmlld01ldGFkYXRhIHtcbiAgICB2YXIgY29tcE1ldGE6IENvbXBvbmVudE1ldGFkYXRhO1xuICAgIHZhciB2aWV3TWV0YTogVmlld01ldGFkYXRhO1xuXG4gICAgcmVmbGVjdG9yLmFubm90YXRpb25zKGNvbXBvbmVudCkuZm9yRWFjaChtID0+IHtcbiAgICAgIGlmIChtIGluc3RhbmNlb2YgVmlld01ldGFkYXRhKSB7XG4gICAgICAgIHZpZXdNZXRhID0gbTtcbiAgICAgIH1cbiAgICAgIGlmIChtIGluc3RhbmNlb2YgQ29tcG9uZW50TWV0YWRhdGEpIHtcbiAgICAgICAgY29tcE1ldGEgPSBtO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzUHJlc2VudChjb21wTWV0YSkpIHtcbiAgICAgIGlmIChpc0JsYW5rKGNvbXBNZXRhLnRlbXBsYXRlKSAmJiBpc0JsYW5rKGNvbXBNZXRhLnRlbXBsYXRlVXJsKSAmJiBpc0JsYW5rKHZpZXdNZXRhKSkge1xuICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBDb21wb25lbnQgJyR7c3RyaW5naWZ5KGNvbXBvbmVudCl9JyBtdXN0IGhhdmUgZWl0aGVyICd0ZW1wbGF0ZScgb3IgJ3RlbXBsYXRlVXJsJyBzZXQuYCk7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KGNvbXBNZXRhLnRlbXBsYXRlKSAmJiBpc1ByZXNlbnQodmlld01ldGEpKSB7XG4gICAgICAgIHRoaXMuX3Rocm93TWl4aW5nVmlld0FuZENvbXBvbmVudChcInRlbXBsYXRlXCIsIGNvbXBvbmVudCk7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KGNvbXBNZXRhLnRlbXBsYXRlVXJsKSAmJiBpc1ByZXNlbnQodmlld01ldGEpKSB7XG4gICAgICAgIHRoaXMuX3Rocm93TWl4aW5nVmlld0FuZENvbXBvbmVudChcInRlbXBsYXRlVXJsXCIsIGNvbXBvbmVudCk7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KGNvbXBNZXRhLmRpcmVjdGl2ZXMpICYmIGlzUHJlc2VudCh2aWV3TWV0YSkpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dNaXhpbmdWaWV3QW5kQ29tcG9uZW50KFwiZGlyZWN0aXZlc1wiLCBjb21wb25lbnQpO1xuXG4gICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudChjb21wTWV0YS5waXBlcykgJiYgaXNQcmVzZW50KHZpZXdNZXRhKSkge1xuICAgICAgICB0aGlzLl90aHJvd01peGluZ1ZpZXdBbmRDb21wb25lbnQoXCJwaXBlc1wiLCBjb21wb25lbnQpO1xuXG4gICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudChjb21wTWV0YS5lbmNhcHN1bGF0aW9uKSAmJiBpc1ByZXNlbnQodmlld01ldGEpKSB7XG4gICAgICAgIHRoaXMuX3Rocm93TWl4aW5nVmlld0FuZENvbXBvbmVudChcImVuY2Fwc3VsYXRpb25cIiwgY29tcG9uZW50KTtcblxuICAgICAgfSBlbHNlIGlmIChpc1ByZXNlbnQoY29tcE1ldGEuc3R5bGVzKSAmJiBpc1ByZXNlbnQodmlld01ldGEpKSB7XG4gICAgICAgIHRoaXMuX3Rocm93TWl4aW5nVmlld0FuZENvbXBvbmVudChcInN0eWxlc1wiLCBjb21wb25lbnQpO1xuXG4gICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudChjb21wTWV0YS5zdHlsZVVybHMpICYmIGlzUHJlc2VudCh2aWV3TWV0YSkpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dNaXhpbmdWaWV3QW5kQ29tcG9uZW50KFwic3R5bGVVcmxzXCIsIGNvbXBvbmVudCk7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KHZpZXdNZXRhKSkge1xuICAgICAgICByZXR1cm4gdmlld01ldGE7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgVmlld01ldGFkYXRhKHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogY29tcE1ldGEudGVtcGxhdGVVcmwsXG4gICAgICAgICAgdGVtcGxhdGU6IGNvbXBNZXRhLnRlbXBsYXRlLFxuICAgICAgICAgIGRpcmVjdGl2ZXM6IGNvbXBNZXRhLmRpcmVjdGl2ZXMsXG4gICAgICAgICAgcGlwZXM6IGNvbXBNZXRhLnBpcGVzLFxuICAgICAgICAgIGVuY2Fwc3VsYXRpb246IGNvbXBNZXRhLmVuY2Fwc3VsYXRpb24sXG4gICAgICAgICAgc3R5bGVzOiBjb21wTWV0YS5zdHlsZXMsXG4gICAgICAgICAgc3R5bGVVcmxzOiBjb21wTWV0YS5zdHlsZVVybHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0JsYW5rKHZpZXdNZXRhKSkge1xuICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBDb3VsZCBub3QgY29tcGlsZSAnJHtzdHJpbmdpZnkoY29tcG9uZW50KX0nIGJlY2F1c2UgaXQgaXMgbm90IGEgY29tcG9uZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZpZXdNZXRhO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3Rocm93TWl4aW5nVmlld0FuZENvbXBvbmVudChwcm9wZXJ0eU5hbWU6IHN0cmluZywgY29tcG9uZW50OiBUeXBlKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXG4gICAgICAgIGBDb21wb25lbnQgJyR7c3RyaW5naWZ5KGNvbXBvbmVudCl9JyBjYW5ub3QgaGF2ZSBib3RoICcke3Byb3BlcnR5TmFtZX0nIGFuZCAnQFZpZXcnIHNldCBhdCB0aGUgc2FtZSB0aW1lXCJgKTtcbiAgfVxufVxuIl19
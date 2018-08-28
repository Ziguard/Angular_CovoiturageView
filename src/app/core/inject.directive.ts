import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[componentInject]'
})
export class InjectDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}

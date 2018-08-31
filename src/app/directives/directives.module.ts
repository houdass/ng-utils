import { NgModule } from '@angular/core';
import { StructuralComponent } from './structural/structural.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { ElementRefHighlightDirective } from './element-ref/element-ref-highlight.directive';
import { RendererComponent } from './renderer/renderer.component';
import { RendererHighlightDirective } from './renderer/renderer-highlight.directive';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import { HostbindingHighlightDirective } from './hostbinding/hostbinding-highlight.directive';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { HostlistenerHighlightDirective } from './hostlistener/hostlistener-highlight.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [DirectivesRoutingModule, SharedModule],
  declarations: [
    DirectivesComponent,
    StructuralComponent,
    AttributeComponent,
    ElementRefComponent,
    ElementRefHighlightDirective,
    RendererComponent,
    RendererHighlightDirective,
    HostbindingComponent,
    HostbindingHighlightDirective,
    HostlistenerComponent,
    HostlistenerHighlightDirective
  ]
})
export class DirectivesModule {}

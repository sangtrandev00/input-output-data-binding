import { Component, Input } from '@angular/core'; // First, import Input
import { booleanAttribute } from '@angular/core'; // First, import booleanAttribute
@Component({
  selector: 'app-item-detail-metadata',
  templateUrl: './item-details-metadata.component.html'
})


export class ItemDetailMetadataComponent {
  @Input({required: true}) item!: string; // Second, decorate the property with required metadata

  @Input({transform: booleanAttribute}) itemAvailability!: boolean; // Second, decorate the property with transform
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
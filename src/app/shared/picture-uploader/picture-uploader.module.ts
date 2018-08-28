import { CommonModule }                                                                      from '@angular/common';
import { NgModule }                                                                          from '@angular/core';
import { FormsModule }                                                                       from '@angular/forms';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule } from '@angular/material';
import { PictureUploaderComponent }                                                          from './picture-uploader.component';

@NgModule({
    imports     : [
        CommonModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatExpansionModule
    ],
    exports: [PictureUploaderComponent],
    declarations: [PictureUploaderComponent]
})
export class PictureUploaderModule {
}

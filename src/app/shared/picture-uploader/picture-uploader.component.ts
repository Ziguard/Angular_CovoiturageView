import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

class ImageSlot {
    constructor(public file?: File, public src?: Blob) {}

    isEmpty() {
        return !this.file || !this.src;
    }
}

@Component({
    selector   : 'picture-uploader',
    templateUrl: './picture-uploader.component.html',
    styleUrls  : ['./picture-uploader.component.scss']
})
export class PictureUploaderComponent implements OnInit {

    count: number = 3;
    selIndex: number = -1;

    @ViewChild("inputFile") inputFile: ElementRef;

    images: ImageSlot[] = [];
    @Input("fixedWidth") fixedWidth: number;
    @Input("fixedHeight") fixedHeight: number;

    constructor() {
    }

    ngOnInit() {
        this.fixedWidth = this.fixedWidth || 150;
        this.fixedHeight = this.fixedHeight || 150;

        // prevent Drag'n'Drop loading
        window.addEventListener("dragover", this.absorbe, false);
        window.addEventListener("drop", this.absorbe, false);

        for (let i = 0; i < this.count; i++) {
            this.images.push(new ImageSlot);
        }
    }

    handleFileSelection(index: number) {
        this.selIndex = index;
        this.inputFile.nativeElement.click();
    }

    handleFileInput(files: FileList, imageIndex?: number) {
        if (files.length == 0 || !files[0]) return;

        if (imageIndex == undefined || imageIndex < 0)
            imageIndex = this.selIndex;

        let file = files[0];
        let reader = new FileReader();

        reader.onload = () =>
            this.images[imageIndex] = new ImageSlot(file, reader.result);

        reader.readAsDataURL(file);
    }

    absorbe(ev: Event) {
        ev = ev || event;
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    }

    handleDrop(ev: any, imageIndex: number) {
        this.absorbe(ev);
        this.handleFileInput(ev.dataTransfer.files, imageIndex);
    }

    public removeImage(index: number) {
        this.ensureImageIndex(index);
        this.images[index] = new ImageSlot;
    }

    private ensureImageIndex(index: number) {
        if (index == undefined || index < 0 || index >= this.images.length)
            throw new Error("Image index is out of bound (0-" + (this.images.length-1));
    }

    public getImages(): File[] {
        return this.images
            .filter(img => !img.isEmpty())
            .map(img => img.file);
    }

    public getCount(): number {
        return this.images
            .filter(img => !img.isEmpty())
            .length;
    }
}


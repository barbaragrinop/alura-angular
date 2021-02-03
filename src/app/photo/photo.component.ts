import { Component } from "@angular/core";

@Component({ //aqui se referencia para poder ser puxado
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {
    description = '  ';
    url='';
}
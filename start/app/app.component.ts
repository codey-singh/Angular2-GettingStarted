import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: 
    `<div>
        <h1>{{pageTitle}}<h1>
        <p>My first Component</p> 
    <div>`
})
export class AppComponent{
    pageTitle: string = `Acme Product Management`;
}
import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() username = new EventEmitter<string>();
  @Output() usernameOut = new EventEmitter<string>();
  @Input() accesso = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  azione() {
    console.log(this.username);
    this.usernameOut = this.username;
  }

}

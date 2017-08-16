/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 serverCreated = false;
allowNewServer = false;
serverName = 'Test Server';
serverCreationStatus = 'No Server was Created';
servers = ['Testserver', 'Testserver 2']; 

  constructor() { 
     setTimeout(()=>{
      this.allowNewServer = true;
    },2000); 
  }

  ngOnInit() {
  }
   onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  } 
}
 */
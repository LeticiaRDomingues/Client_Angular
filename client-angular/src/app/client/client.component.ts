import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  clients: Client[] = [];
  constructor (private clientService: ClientService){}

  ngOnInit():void{
    this.loadClients();
  }
  loadClients(){
    this.clientService.getClients().subscribe(
      {
        next: data => this.clients = data,
        error:()=>console.log("Erro ao chamar o endpoint")
      }
    )
  }

}

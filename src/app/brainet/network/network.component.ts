import { Component } from '@angular/core';


import { ClusterComponent } from '../cluster/cluster.component';  // ClusterComponent is a child component of NetworkComponent

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [ClusterComponent],
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {
  boxes: string [] = [];
  addNewBox(value: string){
    const newBox = `item ${this.boxes.length + 1},${value}`;
    this.boxes.push(newBox);

  }
}


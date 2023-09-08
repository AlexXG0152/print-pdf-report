import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  data = [
    'ALPHA 4460 DATA 1',
    'ALPHA 4460 DATA 2',
    'ALPHA 4460 DATA 3',
    'ALPHA 4460 DATA 4',
    'ALPHA AIR B41 6449 DATA 1',
    'ALPHA AIR B41 6449 DATA 2',
    'ALPHA AIR B41 6449 DATA 3',
    'ALPHA AIR B41 6449 DATA 4',
    'ALPHA 4480 DATA 1',
    'ALPHA 4480 DATA 2',
    'ALPHA SPARE 1',
    'ALPHA SPARE 2',
    'ALPHA SPARE 3',
    'ALPHA SPARE 4',
    'ALPHA SPARE 5',
    'ALPHA SPARE 6',
    'BETA 4460 DATA 1',
    'BETA 4460 DATA 2',
    'BETA 4460 DATA 3',
    'BETA 4460 DATA 4',
    'BETA AIR B41 6449 DATA 1',
    'BETA AIR B41 6449 DATA 2',
    'BETA AIR B41 6449 DATA 3',
    'BETA AIR B41 6449 DATA 4',
    'BETA 4480 DATA 1',
    'BETA 4480 DATA 2',
    'BETA SPARE 1',
    'BETA SPARE 2',
    'BETA SPARE 3',
    'BETA SPARE 4',
    'BETA SPARE 5',
    'BETA SPARE 6',
    'GAMMA 4460 DATA 1',
    'GAMMA 4460 DATA 2',
    'GAMMA 4460 DATA 3',
    'GAMMA 4460 DATA 4',
    'GAMMA AIR B41 6449 DATA 1',
    'GAMMA AIR B41 6449 DATA 2',
    'GAMMA AIR B41 6449 DATA 3',
    'GAMMA AIR B41 6449 DATA 4',
    'GAMMA 4480 DATA 1',
    'GAMMA 4480 DATA 2',
    'GAMMA SPARE 1',
    'GAMMA SPARE 2',
    'GAMMA SPARE 3',
    'GAMMA SPARE 4',
    'GAMMA SPARE 6',
    'GAMMA SPARE 5',
  ];

  numbers: string[] = [];

  getRandomNumber() {
    const min = 0.14;
    const max = 0.68;
    return `${Math.random() * (max - min) + min}`.slice(0, 4);
  }

  ngOnInit(): void {
    for (let index = 0; index < 48; index++) {
      this.numbers.push(this.getRandomNumber());
    }
  }
}

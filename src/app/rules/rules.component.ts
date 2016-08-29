import { Component } from '@angular/core';
import {
  TableOptions,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';

@Component({
  selector: 'rules',
  templateUrl: 'rules.template.html'
})

export class RulesComponent {
  rows = [];

  options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto',
    columns: [
      new TableColumn({ name: 'Rule Name', prop: 'rule_name' }),
      new TableColumn({ name: 'Rule Type', prop: 'rule_type' }),
      new TableColumn({ name: 'Alert Type', prop: 'alert_type' })
    ]
  });

  constructor() {
    this.fetch((data) => {
      console.log(data);
      this.rows.push(...data);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:8000/api/alert');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
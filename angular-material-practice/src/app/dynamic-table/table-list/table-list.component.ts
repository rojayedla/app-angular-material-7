import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

interface ColumnItem {
  alias: string;
  defaultOperator: string;
  defaultView: boolean;
  name: string;
  operators: string[];
  outputName: string;
  type: string;
  reference: string;
  typeData: any;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: ColumnItem[];
   @Input() activeColumns: string[];
  @ContentChild(TemplateRef)template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}

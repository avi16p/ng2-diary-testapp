import { Component, OnInit } from '@angular/core';
import {
  IMdlTableModelItem,
  MdlDefaultTableModel
} from '../../../node_modules/angular2-mdl/components';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";


export interface ITableItem extends IMdlTableModelItem {
  material: string;
  quantity: number;
  unitPrice: number;
}

@Component({
  selector: 'app-generic-link',
  templateUrl: './generic-link.component.html',
  styleUrls: ['./generic-link.component.css']
})
export class GenericLinkComponent implements OnInit {

  private tableData: [ITableItem] = [
    {material: 'Acrylic (Transparent)', quantity: 25, unitPrice: 2.90, selected: true},
    {material: 'Plywood (Birch)', quantity: 50, unitPrice: 1.25, selected: false},
    {material: 'Laminate (Gold on Blue)', quantity: 10, unitPrice: 2.35, selected: false}
  ];
  protected selected: Array<ITableItem> = new Array<ITableItem>();

  public tableModel = new MdlDefaultTableModel([
    {key: 'material', name: 'Material', sortable: true},
    {key: 'quantity', name: 'Quantity', sortable: true, numeric: true},
    {key: 'unitPrice', name: 'Unit price', numeric: true}
  ]);

  dbItems: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.dbItems = af.database.list('/tasks'); // TODO
  }

  ngOnInit() {
    this.tableModel.addAll(this.tableData);
    this.selected = this.tableData.filter( data => data.selected);
  }

  clickButton(){
    console.log("click")
  }

  onDialogShow(dialogRef: any){
    console.log('show');
    console.log(dialogRef)
  }

  onDialogHide(){
    console.log("hide")
  }
  protected selectionChanged($event) {
    this.selected = $event.value;
  }

  public activeIndex = 0;
  public disableTargaryens = true;


  public tabChanged({index}) {
    this.activeIndex = index;
  }
}

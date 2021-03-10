import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { columns } from 'src/app/core/model/tablecolumns.interface';

@Component({
  selector: 'app-nebular-table',
  templateUrl: './nebular-table.component.html',
  styleUrls: ['./nebular-table.component.scss']
})
export class NebularTableComponent implements OnInit {

  @Output() addResource: EventEmitter<any> = new EventEmitter();
  @Output() editResource: EventEmitter<any> = new EventEmitter();
  @Output() deleteResource: EventEmitter<any> = new EventEmitter();
  @Input()
  cols:columns[];

  @Input()
  addModal:any

  @Input()
  resources:any;

  @Input()
  colToIgnore:string;

  @ContentChild('customtd',{static: false}) customtdTemplateRef: TemplateRef<any>;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  add(){
    console.log("pronto per aggiungere una nuova risorsa");
    this.addResource.emit();
  }

  open(dialog: TemplateRef < any > , resource:any) {
    this.dialogService.open(dialog, {
      context: `sei sicuro di voler eliminare ${resource.name} ${resource.surname}?`
    }).onClose.subscribe(event => {
      if(event=="delete"){
        this.deleteResource.emit(resource.id);
      }
    });
  }

  editresource(resource:any){
    this.editResource.emit(resource);
  }
}

import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { TableComponent } from '../table.component';
import { Beneficiaries } from '../../../model/beneficiary';

@Component({
  selector: 'app-table-mobile-beneficiaries',
  templateUrl: './table-mobile-beneficiaries.component.html',
  styleUrls: ['./table-mobile-beneficiaries.component.scss']
})
export class TableMobileBeneficiariesComponent extends TableComponent {

    @Output() updating = new EventEmitter<number>();
    @Output() selected = new EventEmitter<number[]>();

    selectedList;

    ngOnInit() {
        super.checkData();
        this.sendSortedData();
    }

    getImageName(t2: String) {
        return( t2.substring(25).split('.')[0] );
    }

    update(selectedBeneficiary: Beneficiaries) {

        this.updating.emit(selectedBeneficiary.id);
    }

    sendSelectedBeneficiaries(benefId: any) {
        this.selectedList.push(benefId);
        // 
    }

    sendSortedData() {
        this.selectedList = new Array();

        if(this.data && this.data.filteredData) {
            this.data.filteredData.forEach(
                element => {
                    this.selectedList.push(element.id);
                }
            )
        }

        this.selected.emit(this.selectedList);
    }
}
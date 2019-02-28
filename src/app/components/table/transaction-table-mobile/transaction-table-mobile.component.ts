import { Component, OnInit, Input } from '@angular/core';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';


@Component({
  selector: 'app-transaction-table-mobile',
  templateUrl: './transaction-table-mobile.component.html',
  styleUrls: ['../table-mobile/table-mobile.component.scss']
})
export class TransactionTableMobileComponent extends TransactionTableComponent {

    loading = true;
    //
    // constructor(
    //     public mapperService: Mapper,
    //     public dialog: MatDialog,
    //     public distributionService: DistributionService,
    //     public snackBar: MatSnackBar) {
    //         super(mapperService, dialog, _cacheService, snackBar);
    //     }

}

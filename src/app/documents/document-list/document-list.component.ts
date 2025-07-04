import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  documents: Document[] = [];
  private dlChanged: Subscription;
  constructor(private documentsService: DocumentsService) {}
  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
    this.dlChanged = this.documentsService.documentListChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    );
  }

  ngOnDestroy() {
    this.dlChanged.unsubscribe();
  }
}

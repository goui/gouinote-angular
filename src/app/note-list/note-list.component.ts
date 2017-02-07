import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note';
import { NetworkService } from '../service/network-service';
import { ModelService } from '../service/model-service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  isAddingAuthorized: boolean;

  noteList: Note[];

  modalAction = new EventEmitter<string | MaterializeAction>();
  params = [];

  noteContent: string;

  constructor(private route: ActivatedRoute, private networkService: NetworkService, private modelService: ModelService) { }

  ngOnInit() {
    this.isAddingAuthorized = this.route.snapshot.data['isAddingAuthorized'];
    this.getAllNotes();
  }

  getAllNotes() {
    this.networkService.getNoteList().subscribe(
      next => {
        this.noteList = next;
      },
      error => {
        alert(JSON.stringify(error));
      },
      () => {
        // TODO
      }
    );
  }

  openModal() {
    this.modalAction.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalAction.emit({ action: 'modal', params: ['close'] });
  }

  addNote() {
    if (this.noteContent !== undefined && this.noteContent.length > 0) {
      this.networkService.addNote(this.modelService.getConnectedUser().nickname, this.noteContent).subscribe(
        next => {
          // TODO
        },
        error => {
          alert(JSON.stringify(error));
        },
        () => {
          this.getAllNotes();
        }
      )
      this.closeModal();
    } else {
      alert('Note is empty!');
    }
  }

}

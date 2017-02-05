import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note';
import { NetworkService } from '../service/network-service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  isAddingAuthorized: boolean;

  noteList: Note[];

  constructor(private route: ActivatedRoute, private service: NetworkService) { }

  ngOnInit() {
    this.isAddingAuthorized = this.route.snapshot.data['isAddingAuthorized'];
    this.service.getNoteList().subscribe(
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

  onClick() {

  }

}

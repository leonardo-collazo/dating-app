import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from "../layout/nav/nav";

@Component({
  imports: [Nav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = 'Dating app';
  protected members = signal<any>([]);

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => this.members.set(response),
      error: error => console.log(error),
      complete: () => console.log('Completed the http request')
    })
  }
}

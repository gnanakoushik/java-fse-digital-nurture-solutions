import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<section class="card"><h2>Page Not Found</h2><p>The requested page does not exist.</p></section>',
  styles: ['.card { padding: 16px; margin-top: 16px; }']
})
export class NotFoundComponent {}

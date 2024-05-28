import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.css"],
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styles: ``,
})
export class HomeComponent {}
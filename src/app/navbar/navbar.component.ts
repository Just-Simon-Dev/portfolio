// src/app/navbar/navbar.component.ts
import { Component, inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgForOf,
    NgIf,
  ]
})
export class NavbarComponent {
  title: string;
  component_names: string[] = ["Home", "About", "Projects", "Contact", "FAQ"];
  isHandset: boolean = false;
  isSidenavVisible: boolean = false;
  private breakpointObserver = inject(BreakpointObserver);

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor() {
    this.title = "Portfolio";
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isHandset = result.matches;
      });
  }

}

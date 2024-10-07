import { Component } from "@angular/core";
import { Router } from '@angular/router';
import * as DarkReader from "darkreader";

@Component({
  selector: "app-accessibility",
  template: `
    <div class="accessibility">
      <button
        alt="Altos niveles de contraste"
        title="Altos niveles de contraste"
        (click)="toggleContrast()"
        style="background: url(/assets/constrastIcon.png); background-size: contain;"
      ></button>
      <button
        alt="Aumentar el tamaño del texto"
        title="Aumentar el tamaño del texto"
        (click)="increaseFontSize()"
        style="background: url(/assets/biggerLetterIcon.png); background-size: contain;"
      ></button>
      <button
        alt="Reducir el tamaño del texto"
        title="Reducir el tamaño del texto"
        (click)="decreaseFontSize()"
        style="background: url(/assets/smallerLetterIcon.png); background-size: contain;"
      ></button>
      <button
        alt="Ir al centro de relevo"
        title="Ir al centro de relevo"
        (click)="goToRelayCenter()"
        style="background: url(/assets/relayCenterIcon.png); background-size: contain;"
      ></button>
    </div>
  `,
  styles: [
    `
      .accessibility {
        position: fixed;
        top: calc(50vh - 100px);
        right: 0;
        display: flex;
        flex-direction: column;
        padding: 5px;
        background-color: #004884 !important;
        border-radius: 10px;
        z-index: 1000;
      }
      .accessibility button {
        width: 35px;
        height: 35px;
        margin: 5px;
        border: 0;
        background-color: transparent;
        padding: 0;
      }
      .accessibility button img {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  standalone: true,
})

export class AccessibilityComponent {
  fontSize = 16;
  contrastMode = false;
  // para la detección de movil se puede usar una librería como ngx-device-detector o un servicio que detecte el tamaño de la pantalla
  mobile = false;

  constructor(private router: Router) {}

  increaseFontSize() {
    if (
      (this.fontSize <= 28 && !this.mobile) ||
      (this.fontSize <= 20 && this.mobile)
    ) {
      this.fontSize += 2;
      document.getElementsByTagName(
        "html"
      )[0].style.fontSize = `${this.fontSize}px`;
    }
  }

  decreaseFontSize() {
    if (
      (this.fontSize >= 12 && !this.mobile) ||
      (this.fontSize >= 12 && this.mobile)
    ) {
      this.fontSize -= 2;
      document.getElementsByTagName(
        "html"
      )[0].style.fontSize = `${this.fontSize}px`;
    }
  }

  goToRelayCenter(): void {
    window.open("https://centroderelevo.gov.co/632/w3-channel.html", "_blank");
  }

  toggleContrast() {
    this.contrastMode = !this.contrastMode;
    if (this.contrastMode) {
      DarkReader.enable({
        brightness: 100,
        contrast: 100,
        sepia: 0,
      });
    } else {
      DarkReader.disable();
    }
  }
}

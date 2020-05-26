import { Component } from "@angular/core";

@Component({
  selector: "ui-step-button",
  template: `
    <div class="step-button " tabindex="0">
      <svg
        class="material-icons"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>

      <span>New Component</span>
    </div>
  `,
  styles: [
    `
      .step-button {
        border-radius: 4px;
        border: 1px solid #eee;
        background-color: #fafafa;
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        line-height: 24px;
      }

      .step-button {
        cursor: pointer;
      }

      .step-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
      }

      .step-button:hover .material-icons path {
        fill: rgb(105, 103, 103);
      }
    `,
  ],
})
export class StepButtonComponent {
  constructor() {}
}

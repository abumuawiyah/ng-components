import { Component } from "@angular/core";

@Component({
  selector: "ui-footer",
  template: `
    <!-- Footer -->
    <footer>
      Love Angular?&nbsp;
      <a
        href="https://github.com/angular/angular"
        target="_blank"
        rel="noopener"
      >
        Give our repo a star.
        <div class="github-star-badge">
          <svg
            class="material-icons"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          Star
        </div>
      </a>
      <a
        href="https://github.com/angular/angular"
        target="_blank"
        rel="noopener"
      >
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            fill="#1976d2"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </a>
    </footer>
  `,
  styles: [
    `
      footer {
        margin-top: 8px;
        display: flex;
        align-items: center;
        line-height: 20px;
      }

      footer a {
        display: flex;
        align-items: center;
      }

      .github-star-badge {
        color: #24292e;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 3px 10px;
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 3px;
        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
        margin-left: 4px;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
          Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
      }

      .github-star-badge:hover {
        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
        border-color: rgba(27, 31, 35, 0.35);
        background-position: -0.5em;
      }

      .github-star-badge .material-icons {
        height: 16px;
        width: 16px;
        margin-right: 4px;
      }

      svg#clouds {
        position: fixed;
        bottom: -160px;
        left: -230px;
        z-index: -10;
        width: 1920px;
      }
    `,
  ],
})
export class FooterComponent {
  constructor() {}
}

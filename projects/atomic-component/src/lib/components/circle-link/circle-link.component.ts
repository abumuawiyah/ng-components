import { Component } from "@angular/core";

@Component({
  selector: "ui-circle-link",
  template: `
    <a
      class="circle-link"
      title="Animations"
      href="https://angular.io/guide/animations"
      target="_blank"
      rel="noopener"
    >
      <svg
        id="Group_20"
        data-name="Group 20"
        xmlns="http://www.w3.org/2000/svg"
        width="21.813"
        height="23.453"
        viewBox="0 0 21.813 23.453"
      >
        <path
          id="Path_15"
          data-name="Path 15"
          d="M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z"
          transform="translate(-4088.702 -972.736)"
          fill="#ffa726"
        />
        <path
          id="Path_16"
          data-name="Path 16"
          d="M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z"
          transform="translate(-4170.633 -972.736)"
          fill="#fb8c00"
        />
        <path
          id="Path_17"
          data-name="Path 17"
          d="M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z"
          transform="translate(-4125.003 -1058.315)"
          fill="#ffe0b2"
        />
        <path
          id="Path_18"
          data-name="Path 18"
          d="M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z"
          transform="translate(-4125.003 -1036.757)"
          fill="#fff3e0"
        />
        <path
          id="Path_19"
          data-name="Path 19"
          d="M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z"
          transform="translate(-4125.003 -1015.199)"
          fill="#fff"
        />
      </svg>
    </a>
  `,
  styles: [
    `
      .circle-link {
        height: 40px;
        width: 40px;
        border-radius: 40px;
        margin: 8px;
        background-color: white;
        border: 1px solid #eeeeee;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: 1s ease-out;
      }

      .circle-link:hover {
        transform: translateY(-0.25rem);
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class CircleLinkComponent {
  constructor() {}
}

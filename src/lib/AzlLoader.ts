import { css, html, LitElement } from 'lit';

export class BubbleLoader extends LitElement {
  static override get styles() {
    return [
      css`
        .bubble-loader,
        .bubble-loader:before,
        .bubble-loader:after {
          display: block;
          border-radius: 50%;
          width: var(--bbl-loader-width, 2.5em);
          height: var(--bbl-loader-width, 2.5em);
          animation-fill-mode: both;
          animation: bblFadInOut 1.8s infinite ease-in-out;
        }

        .bubble-loader {
          margin: 1.7rem auto;
          color: var(--bbl-loader-color, #353535);
          font-size: 7px;
          position: relative;
          text-indent: -9999em;
          transform: translateZ(0);
          animation-delay: -0.16s;
        }

        .bubble-loader:before,
        .bubble-loader:after {
          content: '';
          position: absolute;
          top: 0;
        }

        .bubble-loader:before {
          left: -3.5em;
          animation-delay: -0.32s;
        }

        .bubble-loader:after {
          left: 3.5em;
        }

        @keyframes bblFadInOut {
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }

          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }
      `,
    ];
  }

  //
  override render() {
    return html`
      <span class="bubble-loader"> </span>
      <slot></slot>
    `;
  }
}

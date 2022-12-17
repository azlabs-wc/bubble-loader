import { BubbleLoader } from './lib/AzlLoader.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-bbl-loader': BubbleLoader;
  }
}

export { BubbleLoader };

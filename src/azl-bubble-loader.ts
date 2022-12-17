import { BubbleLoader } from './lib/AzlLoader.js';

export function registerElement(name: string, elementClass: any) {
  if (
    typeof window !== 'undefined' &&
    window !== null &&
    typeof window.customElements !== 'undefined' &&
    window.customElements !== null
  ) {
    window.customElements.define(name, elementClass);
  }
}

// Register bubble loader as web component
registerElement('azl-loader', BubbleLoader);

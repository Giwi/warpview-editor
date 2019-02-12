/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@giwisoft/wc-tabs';

import {
  Config,
} from './lib/config';

declare global {

  namespace StencilComponents {
    interface WarpViewEditor {
      'config': Config | string;
      'debug': boolean;
      'displayMessages': boolean;
      'execute': () => void;
      'heightLine': number;
      'heightPx': number;
      'horizontalLayout': boolean;
      'showDataviz': boolean;
      'showExecute': boolean;
      'tabbed': boolean;
      'theme': string;
      'url': string;
      'warpscript': string;
      'widthPx': number;
    }
  }

  interface HTMLWarpViewEditorElement extends StencilComponents.WarpViewEditor, HTMLStencilElement {}

  var HTMLWarpViewEditorElement: {
    prototype: HTMLWarpViewEditorElement;
    new (): HTMLWarpViewEditorElement;
  };
  interface HTMLElementTagNameMap {
    'warp-view-editor': HTMLWarpViewEditorElement;
  }
  interface ElementTagNameMap {
    'warp-view-editor': HTMLWarpViewEditorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'warp-view-editor': JSXElements.WarpViewEditorAttributes;
    }
  }
  namespace JSXElements {
    export interface WarpViewEditorAttributes extends HTMLAttributes {
      'config'?: Config | string;
      'debug'?: boolean;
      'displayMessages'?: boolean;
      'heightLine'?: number;
      'heightPx'?: number;
      'horizontalLayout'?: boolean;
      'onWarpViewEditorDatavizRequested'?: (event: CustomEvent) => void;
      'onWarpViewEditorErrorEvent'?: (event: CustomEvent) => void;
      'onWarpViewEditorLoaded'?: (event: CustomEvent) => void;
      'onWarpViewEditorStatusEvent'?: (event: CustomEvent) => void;
      'onWarpViewEditorWarpscriptChanged'?: (event: CustomEvent) => void;
      'onWarpViewEditorWarpscriptResult'?: (event: CustomEvent) => void;
      'showDataviz'?: boolean;
      'showExecute'?: boolean;
      'tabbed'?: boolean;
      'theme'?: string;
      'url'?: string;
      'warpscript'?: string;
      'widthPx'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WarpViewRawResult {
      'config': object;
      'heightLine': number;
      'heightPx': number;
      'result': any[];
      'theme': string;
    }
  }

  interface HTMLWarpViewRawResultElement extends StencilComponents.WarpViewRawResult, HTMLStencilElement {}

  var HTMLWarpViewRawResultElement: {
    prototype: HTMLWarpViewRawResultElement;
    new (): HTMLWarpViewRawResultElement;
  };
  interface HTMLElementTagNameMap {
    'warp-view-raw-result': HTMLWarpViewRawResultElement;
  }
  interface ElementTagNameMap {
    'warp-view-raw-result': HTMLWarpViewRawResultElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'warp-view-raw-result': JSXElements.WarpViewRawResultAttributes;
    }
  }
  namespace JSXElements {
    export interface WarpViewRawResultAttributes extends HTMLAttributes {
      'config'?: object;
      'heightLine'?: number;
      'heightPx'?: number;
      'result'?: any[];
      'theme'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WarpViewResult {
      'config': object;
      'result': any[];
      'theme': string;
    }
  }

  interface HTMLWarpViewResultElement extends StencilComponents.WarpViewResult, HTMLStencilElement {}

  var HTMLWarpViewResultElement: {
    prototype: HTMLWarpViewResultElement;
    new (): HTMLWarpViewResultElement;
  };
  interface HTMLElementTagNameMap {
    'warp-view-result': HTMLWarpViewResultElement;
  }
  interface ElementTagNameMap {
    'warp-view-result': HTMLWarpViewResultElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'warp-view-result': JSXElements.WarpViewResultAttributes;
    }
  }
  namespace JSXElements {
    export interface WarpViewResultAttributes extends HTMLAttributes {
      'config'?: object;
      'result'?: any[];
      'theme'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

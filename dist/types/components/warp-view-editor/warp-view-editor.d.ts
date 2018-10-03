import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class WarpViewEditor {
    el: HTMLStencilElement;
    url: string;
    theme: string;
    warpscript: string;
    showDataviz: boolean;
    horizontalLayout: boolean;
    config: any;
    displayMessages: boolean;
    widthPx: number;
    heightLine: number;
    heightPx: number;
    warpViewEditorStatusEvent: EventEmitter;
    warpViewEditorErrorEvent: EventEmitter;
    warpViewEditorWarpscriptChanged: EventEmitter;
    warpViewEditorWarpscriptResult: EventEmitter;
    warpViewEditorDatavizRequested: EventEmitter;
    warpViewEditorLoaded: EventEmitter;
    result: any[];
    status: string;
    error: string;
    loading: boolean;
    private WARPSCRIPT_LANGUAGE;
    private ed;
    private edUid;
    private monacoTheme;
    private _innerCode;
    private _config;
    /**
     *
     * @param {string} newValue
     * @param {string} _oldValue
     */
    themeHandler(newValue: string, _oldValue: string): void;
    warpscriptHandler(newValue: string, _oldValue: string): void;
    /**
     *
     */
    componentWillLoad(): void;
    /**
     *
     */
    componentDidUnload(): void;
    /**
     *
     */
    componentDidLoad(): void;
    /**
     *
     * @param {string[]} tags
     * @param {string} name
     * @returns {monaco.languages.CompletionItemKind}
     */
    private static getType;
    /**
     *
     * @param {UIEvent} _event
     * @param {string} theme
     */
    setTheme(_event: UIEvent, theme: string): void;
    /**
     *
     * @param {UIEvent} _event
     */
    execute(_event: UIEvent): void;
    /**
     *
     * @param {UIEvent} _event
     */
    requestDataviz(_event: UIEvent): void;
    /**
     *
     * @param {number} elapsed
     * @returns {string}
     */
    private static formatElapsedTime;
    render(): JSX.Element;
}
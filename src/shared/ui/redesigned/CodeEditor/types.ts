import type { editor } from 'monaco-editor';

export type { IDisposable } from 'monaco-editor';
export type CodeEditorElement = editor.IStandaloneCodeEditor;
export type GlobalOptions = editor.IEditorOptions & editor.IGlobalEditorOptions;
export type InitOptions = editor.IEditorConstructionOptions

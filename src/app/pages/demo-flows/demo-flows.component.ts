/*
 *  Copyright 2020 SenX S.A.S.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Config} from '../../../../projects/warpview-editor-ng/src/lib/model/config';
import {WarpViewEditorComponent} from '../../../../projects/warpview-editor-ng/src/lib/elements/warp-view-editor/warp-view-editor.component';

@Component({
  selector: 'warpview-demo',
  templateUrl: './demo-flows.component.html',
  styleUrls: ['./demo-flows.component.scss']
})
export class DemoFlowsComponent implements OnInit {
  @ViewChild('editor') editor: WarpViewEditorComponent;
  visible = false;
  config = {
    messageClass: 'alert alert-info message',
    errorClass: 'alert alert-danger error',
    execButton: {class: 'btn btn-success'},
    datavizButton: {class: 'btn btn-success'},
    readOnly: false,
    hover: true,
    editor: {
      enableDebug: true, quickSuggestionsDelay: 3000,
      suggestOnTriggerCharacters: false,
      rawResultsReadOnly: false
    }
  } as Config;
  warpscript2 = '-5372520086604731500';
  warpscript = `@training/dataset0()
// warp.store.hbase.puts.committed is the number of datapoints committed to
// HBase since the restart of the Store daemon
data = FETCH([ TOKEN, '~warp.*committed', { 'cell': 'prod' }, NOW, d(9) ])
return MAP([ data, mapper.rate(), 1, 0, 0 ])`;
  ctrlClick: any;
  breakpoint: any;
  size: any;
  warpscriptAttr: string;
  editorLoaded: any;

  constructor() {
  }

  ngOnInit() {
    this.visible = true;
  }

  abort() {
    this.editor.abort();
  }

  exec() {
    this.editor.execute();
  }

  warpViewEditorCtrlClick(event) {
    this.ctrlClick = event.detail;
  }

  warpViewEditorBreakPoint(event) {
    this.breakpoint = event.detail;
  }

  warpViewEditorSize(event) {
    this.size = event.detail;
  }

  inject() {
    this.warpscriptAttr = Math.random().toString(36);
  }

  warpViewEditorLoaded($event: any) {
    this.editorLoaded = {'editorLoaded': $event};
  }
}

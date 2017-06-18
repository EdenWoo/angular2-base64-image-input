import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-sixty-four-input',
  templateUrl: './base-sixty-four-input.component.html',
  styleUrls: ['./base-sixty-four-input.component.css']
})
export class BaseSixtyFourInputComponent implements OnInit {
  private base64textString: String = '';

  constructor() { }

  ngOnInit() {
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
}

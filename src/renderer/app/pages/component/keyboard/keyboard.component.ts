import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './keyboard.component.html',
  styleUrls: [
    '../../../../../../node_modules/simple-keyboard/build/css/index.css'
  ]
})
export class KeyboardComponent implements OnInit {
  value = '';
  keyboard: Keyboard;

  constructor() {
  }

  ngOnInit(): void {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onChange = (input: string) => {
    this.value = input;
  };
  onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      this.handleShift();
    }
  };
  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };
  handleShift = () => {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';
    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message;

  constructor() {
<<<<<<< HEAD
    setTimeout(a => {console.log(this.message);
    }, 1000);

=======
>>>>>>> 744881fe28c817c26761ee0177e724f928f4b385
  }

  ngOnInit() {
  }

}

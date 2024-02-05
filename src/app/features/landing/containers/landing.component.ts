import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChatGPTService } from '../services/chatgpt.service';
import { IHttpChatGPTMessageResponse } from '../models/chatgpt.models';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  messageFromChatGPT: string = '';

  constructor(private chatGPTService: ChatGPTService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.chatGPTService
      .sendMessage({ message: 'who are you?' })
      .subscribe((res: IHttpChatGPTMessageResponse) => {
        this.messageFromChatGPT = res.reply;
        this.ref.markForCheck();
      });
  }
}

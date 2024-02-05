import { Injectable } from '@angular/core';
import { ChatGPTHttpService } from './chatgpt-http.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IHttpChatGPTMessageParams, IHttpChatGPTMessageResponse } from '../models/chatgpt.models';

@Injectable({
  providedIn: 'root',
})
export class ChatGPTService {
  constructor(private chatGPTHttpService: ChatGPTHttpService) {}

  sendMessage(params: IHttpChatGPTMessageParams): Observable<IHttpChatGPTMessageResponse> {
    return this.chatGPTHttpService.sendMessage(params).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
}

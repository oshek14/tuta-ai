import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpChatGPTMessageParams, IHttpChatGPTMessageResponse } from '../models/chatgpt.models';

@Injectable({
  providedIn: 'root',
})
export class ChatGPTHttpService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  sendMessage(params: IHttpChatGPTMessageParams) {
    return this.http.post<IHttpChatGPTMessageResponse>(
      `${this.apiUrl}/message`,
      params
    );
  }
}

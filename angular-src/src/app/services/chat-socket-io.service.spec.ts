import { TestBed } from '@angular/core/testing';

import { ChatSocketIOService } from './chat-socket-io.service';

describe('ChatSocketIOService', () => {
  let service: ChatSocketIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatSocketIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

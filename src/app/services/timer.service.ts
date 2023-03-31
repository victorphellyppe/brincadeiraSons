import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  public timeBegan = null;
  public timeStopped: any = null;
  public stoppedDuration: any = 0;
  public started = null;
  public running = false;
  public blankTime = '00:00:00';
  public time = '00:00:00';

  constructor() {}

  start() {
    if (this.running) return;
    if (this.timeBegan === null) {
      this.reset();
      this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) {
      let newStoppedDuration: any = +new Date() - this.timeStopped;
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }
    this.started = setInterval(this.clockRunning.bind(this), 10);
    this.running = true;
  }

  stop() {
    this.running = false;
    this.timeStopped = new Date();
    clearInterval(this.started);
  }

  reset() {
    this.running = false;
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;
  }

  zeroPrefix(num, digit) {
    let zero = '';
    for (let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }

  clockRunning() {
    let currentTime: any = new Date();
    let timeElapsed: any = new Date(
      currentTime - this.timeBegan - this.stoppedDuration
    );
    let hour = timeElapsed.getUTCHours();
    let min = timeElapsed.getUTCMinutes();
    let sec = timeElapsed.getUTCSeconds();
    this.time =
      this.zeroPrefix(hour, 2) +
      ':' +
      this.zeroPrefix(min, 2) +
      ':' +
      this.zeroPrefix(sec, 2);
  }
}

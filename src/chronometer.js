class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback){printTimeCallback()};
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime%60)
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let timer = value.toString()
    if (timer.length < 2){
      return "0" + timer;
    }
    return timer.slice(0,2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    return
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes+":"+seconds;
  }
}

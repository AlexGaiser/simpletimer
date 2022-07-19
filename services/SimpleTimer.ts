import { SimpleEventEmitter } from "./EventEmitter";

export const getTimer = (time: number) => {
  return new SimpleTimer(time);
};

type EventListener = (...fn: any) => void;

const TIMER_INTERVAL = 50;
export class SimpleTimer {
  private emitter: SimpleEventEmitter;
  private startTime: number;
  private endTime: number;
  private interval;
  private duration = 0;

  constructor(duration: number) {
    this.duration = duration;
    this.startTime = Date.now();
    this.endTime = Date.now();
    this.emitter = new SimpleEventEmitter();
    this.interval = setInterval(() => "hello", 500);
    clearInterval(this.interval);
  }

  get currentTime() {
    return Date.now();
  }

  get timeRemaining() {
    return this.endTime - this.currentTime;
  }

  onTick(fn: EventListener) {
    this.emitter.on("tick", fn);
  }

  onTimeEnd(fn: EventListener) {
    this.emitter.on("end", fn);
  }

  onTimeStart(fn: EventListener) {
    this.emitter.on("start", fn);
  }

  stop() {
    clearInterval(this.interval);
  }

  start() {
    this.startTime = Date.now();
    this.endTime = Date.now() + this.duration;
    this.emitter.emit("start", this.timeRemaining);

    this.interval = setInterval(() => {
      console.log("time", this.timeRemaining);

      if (this.timeRemaining <= 0) {
        this.emitter.emit("end", 0);
        this.stop();
      } else {
        this.emitter.emit("tick", this.timeRemaining);
      }
    }, TIMER_INTERVAL);
  }
}

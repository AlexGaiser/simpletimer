interface IEvents {
  [event: string]: any[];
}

interface Emitter {
  emit: () => void;
}

export class SimpleEventEmitter {
  private events: IEvents;

  constructor() {
    this.events = {};
  }

  on(name: string, listener: (...v: any) => any) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(listener);
  }

  emit(name: string, ...v: any) {
    if (this.events[name]) {
      this.events[name].forEach((l) => l(v));
    }
    return v;
  }
}

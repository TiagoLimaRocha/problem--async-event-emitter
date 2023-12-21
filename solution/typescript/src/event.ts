import { EventNotFoundError } from './exceptions';

export class Event {
  private readonly eventTimestamp: number;

  constructor(
    private readonly eventName: string,
    private readonly handler: Function
  ) {
    this.eventTimestamp = Date.now();
  }

  public async execute(args: any[]) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.handler(...args));
      } catch (err) {
        reject(err);
      }
    });
  }

  get name() {
    return this.eventName;
  }

  get timestamp() {
    return this.eventTimestamp;
  }
}

export class AsyncEventEmitter {
  private events: Map<string, Event>;

  constructor() {
    this.events = new Map<string, Event>();
  }

  public async emit(eventName: string, ...args: any[]) {
    return new Promise((resolve, reject) => {
      try {
        if (!this.events.has(eventName)) {
          reject(new EventNotFoundError(`Event ${eventName} does not exist`));
        }

        const event = this.events.get(eventName)!;
        resolve(event.execute(args));
      } catch (error) {
        reject(error);
      }
    });
  }

  public async on(eventName: string, handler: Function) {
    return new Promise((resolve, reject) => {
      try {
        const event = new Event(eventName, handler);
        this.events.set(eventName, event);

        resolve(event);
      } catch (error) {
        reject(error);
      }
    });
  }
}

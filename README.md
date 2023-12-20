# Problem: Asynchronous Event Emitter

## Background

You are tasked with creating an event-driven system that handles events asynchronously. This system should allow for registering event handlers, emitting events, and ensuring that event handlers are executed asynchronously.

## Task

**Event Emitter Class**: Create a TypeScript class named AsyncEventEmitter. This class should manage event listeners and be able to emit events.

**Registering Event Handlers**: Implement a method on(eventName: string, handler: Function) in the AsyncEventEmitter class. This method should allow registering handlers for a specific event.

**Emitting Events Asynchronously**: Implement an emit(eventName: string, ...args: any[]) method. When an event is emitted, all registered handlers for that event should be invoked asynchronously.

**Handling Concurrency**: Ensure that if multiple events are emitted in quick succession, their handlers are executed concurrently, not blocking each other.

**Error Handling in Event Handlers**: Implement error handling such that if an event handler throws an error, it does not stop the execution of other event handlers for the same event.

**Types/Interfaces**: Define appropriate interfaces or types for events and handlers. Ensure your implementation is type-safe.

**Testing**: Write a few test cases to demonstrate that your AsyncEventEmitter works as expected. Show that handlers are executed asynchronously and that errors in handlers are managed properly.

## Requirements

- Use an explicitly typed language for the implementation.
- Focus on the asynchronous aspect of the event emitter to handle events and callbacks.
- Ensure your code is well-organized and follows best practices for readability and maintainability.

This exercise tests your ability to work with a strictly typed language in creating an asynchronous system, managing concurrency, and handling errors effectively. It also challenges you to think about the event-driven programming model in an asynchronous context.

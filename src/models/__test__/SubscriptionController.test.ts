import { SubscriptionController } from '../SubscriptionController';

describe('SubscriptionController', () => {
  it('should subscribe and return a function to unsubscribe', () => {
    const subscriptionController = new SubscriptionController();

    const callback = jest.fn();
    const unsubscribe = subscriptionController.subscribe(callback);

    expect(typeof unsubscribe).toBe('function');

    subscriptionController.destroy();
  });

  it('should emit data to all subscribers', () => {
    const subscriptionController = new SubscriptionController<string>();

    const callback1 = jest.fn();
    const callback2 = jest.fn();

    subscriptionController.subscribe(callback1);
    subscriptionController.subscribe(callback2);

    const data = 'test data';

    subscriptionController.emit(data);

    // After emitting, the callbacks should have been called with the data
    expect(callback1).toHaveBeenCalledWith(data);
    expect(callback2).toHaveBeenCalledWith(data);

    subscriptionController.destroy();
  });

  it('should unsubscribe all subscribers', () => {
    const subscriptionController = new SubscriptionController<string>();

    const callback1 = jest.fn();
    const callback2 = jest.fn();

    subscriptionController.subscribe(callback1);
    subscriptionController.subscribe(callback2);

    const data = 'test data';

    subscriptionController.emit(data);

    // After emitting, the callbacks should have been called with the data
    expect(callback1).toHaveBeenCalledWith(data);
    expect(callback2).toHaveBeenCalledWith(data);

    subscriptionController.unsubscribeAll();

    subscriptionController.emit(data);

    // After emitting, the callbacks should not have been called with the data
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);

    subscriptionController.destroy();
  });

  it('should destroy and unsubscribe all subscribers', () => {
    const subscriptionController = new SubscriptionController<string>();

    const callback1 = jest.fn();
    const callback2 = jest.fn();

    subscriptionController.subscribe(callback1);
    subscriptionController.subscribe(callback2);

    const data = 'test data';

    subscriptionController.emit(data);

    // After emitting, the callbacks should have been called with the data
    expect(callback1).toHaveBeenCalledWith(data);
    expect(callback2).toHaveBeenCalledWith(data);

    subscriptionController.destroy();

    subscriptionController.emit(data);

    // After emitting, the callbacks should not have been called with the data
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });
});

function delayedAction(callback) {
    setTimeout(() => {
      callback('таймер завершився');
    }, 3000);
}

jest.useFakeTimers(); 

test('перевіряємо, що delayedAction викликає колбек після 3 секунд', () => {
  const callback = jest.fn(); 

  delayedAction(callback);

  expect(callback).not.toHaveBeenCalled();

  jest.advanceTimersByTime(3000);

  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith('таймер завершився');
});
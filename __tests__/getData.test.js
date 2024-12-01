async function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('дані отримано через async/await');
      }, 1500);
    });
  }

test('перевіряємо, що getData повертає праильні дані', async () => { 
    const data = await getData();
    expect(data).toBe('дані отримано через async/await')
});
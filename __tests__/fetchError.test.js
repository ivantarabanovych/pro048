function fetchError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('щось пішло не так'));
      }, 1000);
    });
}

test('перевірка що fetchError відхиляється з правильною помилкою', async () => {
    await expect(fetchError()).rejects.toThrow('щось пішло не так');
});
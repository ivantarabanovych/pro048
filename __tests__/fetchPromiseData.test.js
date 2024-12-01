function fetchPromiseData() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('обіцянка виконана');
        }, 2000);
    });
}

test('перевірка що fetchPromiseData повертає правильні дані', async () =>{
    const data = await fetchPromiseData();
    expect(data).toBe('обіцянка виконана');
});
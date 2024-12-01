function fetchData(callback){
    setTimeout(() =>{
        callback('дані отримано');
    }, 1000);
}
module.exports = fetchData;

test('перевірка на отримання правильних даних', (done) => {
    function callback(data){
        try{
            expect(data).toBe('дані отримано');
            done();
        }catch (error){
            done(error);
        }
    }

    fetchData(callback);
})
const temperature = document.getElementById('temperature');
const unit = document.getElementById('unit');
const answerTem = document.getElementById('answerTem');

// 輸入溫度會自動計算
temperature.addEventListener('input', () => {
    reFresh()
})

// 改變溫度單位會自動計算, 下拉選單為change
unit.addEventListener('change', () => {
    reFresh()
})
// 可讓前兩者addEventListener都共用該function功能
function reFresh(a, b) {
    let tempAnswer = translateTem(temperature.value, unit.value);
    answerTem.innerText = tempAnswer;
};

// toFixed(n) 可取小數點到第n位 四捨五入
function translateTem(temp, unitType) {
    let resTem = '溫度換算結果'
    switch (unitType) {
        case 'temC':
            // 攝氏轉華氏
            resTem = `華氏溫度為${((temp * 9) / 5 + 32).toFixed(1)}℉`
            break;
        case 'temF':
            // 華氏轉攝氏
            resTem = `攝氏溫度為${((temp - 32) * 5 / 9).toFixed(1)}℃`
            break;
    }
    return resTem;

}
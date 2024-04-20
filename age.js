    //抓取HTML中的元素
    const userBirthday = document.getElementById('userBirthday');
    const AgeResult = document.getElementById('AgeResult')
    // 事件聆聽, 使用者有輸入完才計算
    if (userBirthday) {
        userBirthday.addEventListener("change", () => {
            if (userBirthday.value) { // 只有在 userBirthday 有值的情況下才執行
                // 計算歲數, 用a傳值來取代userBirthday.value這一串, 讓算式看起來精簡
                let AgeRes = translator(userBirthday.value);
                AgeResult.innerText = AgeRes;
            } else {
                AgeResult.innerText = "請輸入生日";
            }
        });
    }

    function translator(age) {
        // 公式：今天日期 - 出生日期 / 1年(毫秒) 1000 * 60 *60 *24 * 365.25 => 含每四年一閏月, 故補上0.25天
        // console.log(new Date() - new Date(userBirthday.value))呈現的是毫秒
        // .toFixed(1)後方小數點只取到後面1位
        return `目前為${((new Date() - new Date(age)) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)}歲`
    }
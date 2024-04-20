const btn = document.getElementById("btn");
const clearBtn = document.getElementById("clearBtn");

btn.addEventListener("click", function () {
  event.preventDefault(); // 阻止表單的默認提交行為
  // getElementById一起開始只取了物件 +.value才取到數值
  const tall = document.getElementById("tall").value;
  const weight = document.getElementById("weight").value;
  // BMI = 體重(公斤)/身高(公尺)的平方
  const BMI = weight / ((tall / 100) * (tall / 100));
  // toFixed(2)可以鎖定數值只保留小數點後兩位
  const BMInum = BMI.toFixed(2);
  // const常數 let變數
  let result = "";

  switch (true) {
    // switch 語句的每個 case 需以一個單一值的比較
    // 像 18.5 < BMInum <24 這種寫法就為錯誤
    case BMInum < 18.5:
      result = "體重過輕";
      break;
    case BMInum >= 18.5 && BMInum < 24:
      result = "體重正常";
      break;
    case BMInum >= 24 && BMInum < 27:
      result = "體重過重";
      break;
    case BMInum >= 27 && BMInum < 30:
      result = "輕度肥胖";
      break;
    case BMInum >= 30 && BMInum < 35:
      result = "中度肥胖";
      break;
    default:
      result = "重度肥胖";
      break;
  }

  answer.innerHTML = `
        <div id="answer">
            <h5>您的BMI為 ${BMInum}</h5>
            <h5>您的狀態為 ${result}</h5>
        </div>
    `;
});

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // 清空原本填寫的數值
  // tall.value = ''; 太簡略的寫法可能造成無法正常運行
  // weight.value = '';
  document.getElementById("tall").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("answer").innerHTML = ""; //清空畫面文字
});

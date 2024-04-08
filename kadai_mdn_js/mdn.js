//現在の日付
const today = new Date();

//年を取得
const year = today.getFullYear();

//月を取得
const month = today.getMonth() +1;

//日を取得
const day = today.getDate();

//出力
console.log(today.getFullYear()+'年', today.getMonth()+1 +'月', today.getDate()+'日');
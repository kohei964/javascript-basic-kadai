//ボタンを取得
const addBtn = document.getElementById('btn');

//非表示にするテキストを定義
const hiddenText = document.getElementById('text');

//2秒後に表示するテキスト
const addText = document.getElementById('add-text')

addBtn.addEventListener('click', ()=> {
    //テキストを非表示
    hiddenText.style.display ='none';

    setTimeout(()=>{
        addText.style.display ='block';
    },2000)

});
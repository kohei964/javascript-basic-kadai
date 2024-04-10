
//ボタンを定義
const atBtn = document.getElementById('btn');

//表示が消えるテキストを定義
const atText = document.getElementById('text');

//表示されるテキストを作成
const addText = document.getElementById('add-text');

atBtn.addEventListener('click',()=>{
    //「ボタンをクリックしてください」を非表示
    atText.style.display='none';

    //「ボタンをクリックしました」を表示
    addText.style.display='block';
});



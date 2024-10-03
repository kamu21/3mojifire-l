//問題
const question = [
    {
        q: "貝",
        a: ["あ", "さ", "り"]
    },
    {
        q: "動物",
        a: ["あ", "し", "か"]
    },
    {
        q: "動物",
        a: ["ア", "ヒ", "ル"]
    },
        {
        q: "動物",
        a: ["イ", "タ", "チ"]
    },
    {
        q: "哺乳類",
        a: ["イ", "ル", "カ"]
    },
    {
        q: "魚",
        a: ["イ", "ワ", "シ"]
    },
        {
        q: "鳥",
        a: ["イ", "ン", "コ"]
    },
    {
        q: "動物",
        a: ["ウ", "サ", "ギ"]
    },
    {
        q: "鳥",
        a: ["オ", "ウ", "ム"]
    },
        {
        q: "動物",
        a: ["カ", "エ", "ル"]
    },
    {
        q: "鳥",
        a: ["カ", "モ", "メ"]
    },
    {
        q: "鳥",
        a: ["カ", "ラ", "ス"]
    },
        {
        q: "動物",
        a: ["キ", "ツ", "ネ"]
    },
    {
        q: "動物",
        a: ["キ", "リ", "ン"]
    },
    {
        q: "哺乳類",
        a: ["ク", "ジ", "ラ"]
    },
        {
        q: "動物",
        a: ["コ", "ア", "ラ"]
    },
    {
        q: "動物",
        a: ["ゴ", "リ", "ラ"]
    },
    {
        q: "砂漠にいるらしい",
        a: ["サ", "ソ", "リ"]
    },
        {
        q: "貝",
        a: ["シ", "ジ", "ミ"]
    },
    {
        q: "鳥",
        a: ["ス", "ズ", "メ"]
    },
    {
        q: "動物",
        a: ["タ", "ヌ", "キ"]
    },
        {
        q: "鳥",
        a: ["ツ", "バ", "メ"]
    },
    {
        q: "爬虫類",
        a: ["ト", "カ", "ゲ"]
    },
    {
        q: "虫",
        a: ["ト", "ン", "ボ"]
    },
            {
        q: "ミッキーマウスのモデル",
        a: ["ネ", "ズ", "ミ"]
    },
    {
        q: "動物",
        a: ["パ", "ン", "ダ"]
    },
    {
        q: "北海道に生息",
        a: ["ヒ", "グ", "マ"]
    },
        {
        q: "動物",
        a: ["ヒ", "ツ", "ジ"]
    },
    {
        q: "動物",
        a: ["モ", "グ", "ラ"]
    },
    {
        q: "動物",
        a: ["ラ", "ク", "ダ"]
    },
    {
        q: "果物",
        a: ["イ", "チ", "ゴ"]
    },
        {
        q: "野菜",
        a: ["キ", "ノ", "コ"]
    },
    {
        q: "野菜",
        a: ["ゴ", "ボ", "ウ"]
    },
    {
        q: "花",
        a: ["サ", "ク", "ラ"]
    },
        {
        q: "果物",
        a: ["ス", "イ", "カ"]
    },
    {
        q: "花",
        a: ["ス", "ミ", "レ"]
    },
    {
        q: "野菜",
        a: ["セ", "ロ", "リ"]
    },
        {
        q: "果物",
        a: ["バ", "ナ", "ナ"]
    },
    {
        q: "果物",
        a: ["パ", "イ", "ン"]
    },
    {
        q: "果物",
        a: ["ブ", "ド", "ウ"]
    },
        {
        q: "ポチッと押す",
        a: ["ボ", "タ", "ン"]
    },
    {
        q: "果物",
        a: ["み", "か", "ん"]
    },
    {
        q: "秋の葉",
        a: ["も", "み", "じ"]
    },
        {
        q: "果物",
        a: ["り", "ん", "ご"]
    },
    {
        q: "酸っぱい",
        a: ["レ", "モ", "ン"]
    },
    {
        q: "辛い",
        a: ["わ", "さ", "び"]
    },
        {
        q: "身体",
        a: ["あ", "た", "ま"]
    },
    {
        q: "身体",
        a: ["お", "で", "こ"]
    },
    {
        q: "身体",
        a: ["お", "な", "か"]
    },
            {
        q: "身体",
        a: ["せ", "な", "か"]
    },
    {
        q: "身体",
        a: ["て", "く", "び"]
    },
    {
        q: "身体",
        a: ["ひ", "と", "み"]
    },
        {
        q: "身体",
        a: ["ほ", "く", "ろ"]
    },
    {
        q: "身体",
        a: ["ま", "つ", "げ"]
    },
    {
        q: "身体",
        a: ["ま", "ゆ", "げ"]
    },
];

//top画面
const scenetop = document.querySelector("#start");
//game画面
const scecegame = document.querySelector("#game");
//正解不正解表示画面
const next = document.querySelector("#next");
const field = document.querySelector("#field");
const select = document.querySelectorAll(".select");
const answer = document.querySelectorAll(".answer");

//選択された答えを順番に格納
let answers = [];
//問題番号を管理
let questionnum = 0;


init();
function init() {
    changescene(scecegame, scenetop);
    scenetop.addEventListener('click', gamestart, false);
}

function changescene(hiddenscene, visiblescene) {
    hiddenscene.classList.add("is-hidden");
    hiddenscene.classList.remove("is-visible");
    visiblescene.classList.add("is-visible");
}

function gamestart() {
    changescene(scenetop, scecegame);
    showQuestion()
}

// 【JavaScript】配列の要素をランダムに表示する(ブックマーク)を応用して追加
function shuffle(array) {
    for(let i = (question.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * (i - 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// クイズ開始時に選択肢をシャッフル
shuffle(question);

//並べ替えクイズの処理
function showQuestion() {
    //答えを格納している配列を初期化
    answers.length = 0; 
    for (let i = 0; i < 3; i++) {
        answer[i].textContent = i + 1;
    }

    //問題の解答シャッフル Fisher–Yatesアルゴリズムを用いる
    //値渡しコピーで配列に代入
    let shufflea = question[questionnum].a.concat(); 
    for (let i = shufflea.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = shufflea[i];
        shufflea[i] = shufflea[r];
        shufflea[r] = tmp;
    }

    //問題文挿入
    document.querySelector("h1").textContent = question[questionnum].q;
    //回答選択肢挿入
    for (let i = 0; i < shufflea.length; i++) {
        select[i].classList.remove('is-hidden');
        select[i].textContent = shufflea[i];
    }

    let count = 0;
    //選択された答えを消す 
    for (let i = 0; i < shufflea.length; i++) {
        select[i].onclick = () => {
            console.log(count);
            select[i].classList.add('is-hidden');
            //選択された答えを移動
            answer[count].textContent = select[i].textContent;
            answers.push(answer[count].textContent);
            count += 1;
            if (count == shufflea.length) {
                count = 0;
                Judgment();
            }
        }
    }
}

//正解かどうか判定
function Judgment() {
    changescene(scecegame, next);
    if (JSON.stringify(question[questionnum].a) == JSON.stringify(answers)) {
        next.innerHTML = "<p style='font-size:5em;color:#008000;'>正解です！</p><button onclick='nextquestion()'>さぁ、次に進みましょう　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　！！！</button>";

    } else {
        next.innerHTML = "<p style='font-size:5em;color:#008080;'>いいですね！</p><button onclick='nextquestion()'>さぁ、次に進みましょう　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　！！！</button>";
    }
}

//次の問題ボタンが押された時の処理
function nextquestion() {
    questionnum++
    if (Object.keys(question).length > questionnum) {
        changescene(next, scecegame);
        showQuestion();
    } else {
        questionnum = 0;
        changescene(next, scecegame);
        showQuestion();
    }
}

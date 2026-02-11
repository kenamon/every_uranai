const btn = document.getElementById("btn");
const birthdayInput = document.getElementById("birthday");
const resultBox = document.getElementById("result");
const resultTitle = document.getElementById("result-title");
const resultMain = document.getElementById("result-main");
const zodiacSpan = document.getElementById("zodiac");

// 星座判定
function getZodiac(month, day) {
  const m = month;
  const d = day;
  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "おひつじ座";
  if ((m === 4 && d >= 20) ||  (m === 5 && d <= 20)) return "おうし座";
  if ((m === 5 && d >= 21) || (m === 6 && d <= 21)) return "ふたご座";
  if ((m === 6 && d >= 22) || (m === 7 && d <= 22)) return "かに座";
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "しし座";
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "おとめ座";
  if ((m === 9 && d >= 23) || (m === 10 && d <= 23)) return "てんびん座";
  if ((m === 10 && d >= 24) || (m === 11 && d <= 22)) return "さそり座";
  if ((m === 11 && d >= 23) || (m === 12 && d <= 21)) return "いて座";
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "やぎ座";
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "みずがめ座";
  if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) return "うお座";
  return "？？座";
}

// 今日の運勢メッセージ
const todayLuckMessages = [
  "小さな一歩が大きな変化につながる日。気になっていたことを5分だけ触ってみると流れが生まれます。",
  "直感で『これだ』と思った方向に進むと、予想外のチャンスが舞い込みそう。",
  "今日はスピードよりも丁寧さが吉。ゆっくりでも確実に進めると成果が出ます。",
  "迷ったら『楽しい方』を選ぶと良い展開に。",
  "ひとつの行動が domino のように良い連鎖を生む日。",
  "いつもより少しだけ柔らかい言葉を選ぶと、関係がぐっと良くなります。",
  "久しぶりの人に連絡すると、思わぬヒントがもらえるかも。",
  "相手の話を最後まで聞くと、信頼が深まる日。",
  "ありがとうを一言添えるだけで、空気が明るくなります。",
  "無理に合わせず、自分のペースを大切にすると良い距離感が保てます。",
  "今日は『短時間集中』が鍵。15分だけでも一気に進みます。",
  "難しい問題ほど、視点を変えると突破口が見える日。",
  "机の上を少し片づけると、頭の中も整理されて効率アップ。",
  "以前のメモを見返すと、今の課題に役立つヒントが見つかります。",
  "今日は新しい知識がスッと入ってくる日。学びに最適。",
  "深呼吸をゆっくり3回するだけで、気持ちが軽くなります。",
  "今日は体が『休むタイミング』を教えてくれる日。無理せずいこう。",
  "温かい飲み物が心を整えてくれます。",
  "5分の散歩がリフレッシュに最適。",
  "いつもより少し早く寝ると、明日の調子がぐっと良くなります。",
  "いつもと違う道を歩くと、小さな発見がありそう。",
  "ラッキーカラーのものを身につけると気分が上がります。",
  "今日は『偶然の良い出来事』が起こりやすい日。",
  "直感で選んだものが意外と当たり。",
  "小さな親切が巡り巡って自分に返ってくる日。"
];

// 運勢を選ぶ
function getTodayLuck(seed) {
  return todayLuckMessages[seed % todayLuckMessages.length];
}

btn.addEventListener("click", () => {
  const value = birthdayInput.value;
  if (!value) {
    alert("誕生日を入力してください。");
    return;
  }

  // 誕生日
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const zodiac = getZodiac(month, day);

  // 今日の日付を取得
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  // 毎日違う結果にするために今日の日付も入れて計算する
  const seed = (year + month + day) + (todayYear + todayMonth + todayDay);
  const luck = getTodayLuck(seed);

  // 表示
  resultTitle.textContent = "今日の運勢";
  resultMain.textContent = luck;
  zodiacSpan.textContent = `${zodiac} / ${year}年${month}月${day}日生まれ`;

  resultBox.style.display = "block";
});

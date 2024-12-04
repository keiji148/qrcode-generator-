// ボタンと入力フィールドを取得
const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const qrcodeContainer = document.getElementById('qrcode');

// QRコード生成イベント
generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (!name) {
        alert("名前を入力してください！");
        return;
    }

    // 既存のQRコードをクリア
    qrcodeContainer.innerHTML = "";

    // 新しいキャンバス要素を作成
    const canvas = document.createElement('canvas');
    qrcodeContainer.appendChild(canvas);

    // QRコードを生成
    QRCode.toCanvas(canvas, name, { width: 200 }, (error) => {
        if (error) {
            console.error(error);
            alert("QRコード生成に失敗しました！");
        }
    });
});

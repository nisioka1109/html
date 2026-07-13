const hamburger = document.querySelector('.hamburger');
const menuText = document.querySelector('.hamburger_text');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    gsap.to(menuText, {
        opacity: 0,      // 徐々に透明に
        filter: 'blur(10px)', // ぼかす
        duration: 0.2,
        onComplete: () => {
            menuText.textContent =
                hamburger.classList.contains('active')
                    ? 'CLOSE'
                    : 'MENU';
            gsap.fromTo(
                menuText,
                {
                    opacity: 0,
                    filter: 'blur(10px)'
                },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 0.3
                }
            );
        }
    });
});



const logoCount = 20; // 表示するイラストの枚数

for (let i = 0; i < logoCount; i++) {
    const img = document.createElement("img"); // img要素を作成

    // 1～13の中からランダムな数字を取得
    const randomNum = Math.floor(Math.random() * 13) + 1;

    // ランダムで選ばれた画像を設定（illust1.png～illust13.png）
    img.src = `../images/illust${randomNum}.png`;

    // CSSのクラスを付与
    img.classList.add("bg-logo");

    // 横位置を0～100vwの間でランダムに配置
    img.style.left = Math.random() * 100 + "vw";

    // 縦位置を0～100vhの間でランダムに配置
    img.style.top = Math.random() * 100 + "vh";

    // -45°～45°の間でランダムな角度を作る
    const angle = Math.random() * 90 - 45;

    // 画像を回転させる
    img.style.transform = `rotate(${angle}deg)`;

    // 30px～120pxの間でランダムなサイズを作る
    const size = 30 + Math.random() * 90;

    // 幅を設定（高さは画像比率で自動調整）
    img.style.width = `${size}px`;

    // bodyの一番最後に画像を追加
    document.body.appendChild(img);
}
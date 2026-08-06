const hamburger = document.querySelector('.hamburger');
const menuText = document.querySelector('.hamburger_text');
const modal = document.querySelector('.drawer');

hamburger.addEventListener('click', () => {
    // ハンバーガー
    hamburger.classList.toggle('active');

    // ドロワーメニュー
    modal.classList.toggle('active');

    // MENU ⇔ CLOSE
    gsap.to(menuText, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.2,
        onComplete: () => {
            menuText.textContent =
                hamburger.classList.contains('active')
                    ? 'CLOSE'
                    : '';

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

// ESCキーで閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {

        // ドロワーを閉じる
        modal.classList.remove('active');

        // ハンバーガーも元に戻す
        hamburger.classList.remove('active');

        // CLOSE → MENU
        gsap.to(menuText, {
            opacity: 0,
            filter: 'blur(10px)',
            duration: 0.2,
            onComplete: () => {
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
    }
});
// ドロワーの外側をクリックしたら閉じる
document.addEventListener('click', (e) => {
    if (
        modal.classList.contains('active') &&
        !modal.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        modal.classList.remove('active');
        hamburger.classList.remove('active');

        gsap.to(menuText, {
            opacity: 0,
            filter: 'blur(10px)',
            duration: 0.2,
            onComplete: () => {

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
    }
});


const logoCount = 20; // 表示するイラストの枚数

for (let i = 0; i < logoCount; i++) {
    const img = document.createElement("img"); // img要素を作成

    // 1～13の中からランダムな数字を取得
    const randomNum = Math.floor(Math.random() * 16) + 1;

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

//第一種動物取扱登録情報についてのやつ
const animalBtn = document.querySelector('.footer_animal');
const animalModal = document.querySelector('.animal_modal');

animalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    animalModal.classList.add('active');
});

// 背景クリックで閉じる
animalModal.addEventListener('click', (e) => {
    if (e.target === animalModal) {
        animalModal.classList.remove('active');
    }
});

// ESCキーで閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        animalModal.classList.remove('active');
    }
});

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


gsap.from(".banner h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".banner",
        start: "top 60%", // bannerの上端が画面の60%の位置に来たら開始
        toggleActions: "play none none none",
    }
});
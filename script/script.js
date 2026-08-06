const wrapper = document.querySelector('.instagram_wrapper');//<section class="instagram_wrapper">を取得

if (
    wrapper.scrollLeft >= //現在のスクロール位置が
    wrapper.scrollWidth - wrapper.clientWidth //スクロール可能な最大値に達したら
) {
    wrapper.scrollLeft = 0;//先頭に戻る
}


//__________________ローディング______________________
// ページ内の画像やCSSなど、すべての読み込みが完了したら実行
window.addEventListener('load', () => {
    // すでにローディングを表示したことがあるか確認
    const loaded = sessionStorage.getItem('loaded');
    // 表示済みならローディング画面を削除して終了
    if (loaded) {
        document.querySelector('.loading').remove();
        return;
    }
    // 「表示済み」という情報を保存
    sessionStorage.setItem('loaded', 'true');
    // GSAPのタイムラインを作成
    const tl = gsap.timeline();
    // ① ロゴをフェードイン
    tl.to('.loading_logo', {
        opacity: 1,
        duration: 1.5
    })
        // ② 少し待ってからフェードアウト
        .to('.loading_logo', {
            opacity: 0,
            duration: 0.5,
            delay: 0.5
        })
        // ③ ローディング画面全体をフェードアウト
        .to('.loading', {
            opacity: 0,
            duration: 0.5,
            // アニメーション終了後に実行
            onComplete: () => {
                // loading要素をHTMLから削除
                document.querySelector('.loading').remove();
            }
        });
});

//______________________ハンバーガーメニュー__________________









//About１つ目
gsap.from(
    '.about .about_text > *, .about_photo',
    {
        y: 50, //50pxしたから上がってくる
        opacity: 0,//透明な状態かいら開始
        filter: 'blur(10px)',//１０pxぼやっとさせる
        duration: 0.6,//アニメーションにかかる時間
        stagger: 0.1,//各要素のアニメーションのずれ
        scrollTrigger: {
            trigger: '.about',//トリガー
            start: 'top 50%', // aboutが画面の70%位置に来たら発火
            toggleActions: 'play none none none',//一度だけ再生
        }
    }
);


//About２つ目
// 親全体
gsap.from(".menu", {
    opacity: 0,
    y: 50,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".menu",
        start: "top 50%",
    }
});

// 子要素
gsap.from(".menu_photo, .menu_text > *", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".menu",
        start: "top 50%",
    }
});
gsap.from(
    '.instagram_title, .instagram_photo_item, .instagram .btn',
    {
        y: 50, //50pxしたから上がってくる
        opacity: 0,//透明な状態かいら開始
        filter: 'blur(10px)',//１０pxぼやっとさせる
        duration: 0.6,//アニメーションにかかる時間
        stagger: 0.1,//各要素のアニメーションのずれ
        scrollTrigger: {
            trigger: '.instagram',//トリガー
            start: 'top 50%', // aboutが画面の70%位置に来たら発火
            toggleActions: 'play none none none',//一度だけ再生
        }
    }
);

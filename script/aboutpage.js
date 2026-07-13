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

gsap.from(
    '.twoabout_photo, .twoabout_text > *',
    {
        y: 50, //50pxしたから上がってくる
        opacity: 0,//透明な状態かいら開始
        filter: 'blur(10px)',//１０pxぼやっとさせる
        duration: 0.6,//アニメーションにかかる時間
        stagger: 0.1,//各要素のアニメーションのずれ
        scrollTrigger: {
            trigger: '.twoabout',//トリガー
            start: 'top 50%', // twoaboutが画面の70%位置に来たら発火
            toggleActions: 'play none none none',//一度だけ再生
        }
    }
);
// 背景ごと owner 全体を表示
gsap.from(".owner", {
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".owner",
        start: "top 50%",
        toggleActions: "play none none none",
    }
});

// テキストを順番に表示
gsap.from(".owner_text > *", {
    y: 50,
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.6,
    stagger: 0.15,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".owner",
        start: "top 50%",
        toggleActions: "play none none none",
    }
});


gsap.from(
    '.other > section',
    {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.other',
            start: 'top 50%',
            toggleActions: 'play none none none',
        }
    }
);

gsap.from(
    '.goods_title, .goods_item',
    {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.goods',
            start: 'top 50%',
            toggleActions: 'play none none none',
        }
    }
);
gsap.from(
    '.events_title, .events_item',
    {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.events',
            start: 'top 50%',
            toggleActions: 'play none none none',
        }
    }
);
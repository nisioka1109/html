gsap.from(
    '.reservation .subtitle, .reservation_text p, .reservation_btn .btn',
    {
        y: 50, // 下から上へ
        opacity: 0, // 透明から表示
        filter: 'blur(10px)', // ぼかし
        duration: 0.6, // アニメーション時間
        stagger: 0.15, // 順番に表示
        scrollTrigger: {
            trigger: '.reservation',
            start: 'top 70%',
            toggleActions: 'play none none none',
        }
    }
);
gsap.from(
    '.policy_text .subtitle, .policy_text li',
    {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
        stagger: 0.15, // タイトル→liを1つずつ表示
        scrollTrigger: {
            trigger: '.policy_text',
            start: 'top 70%',
            toggleActions: 'play none none none',
        }
    }
);
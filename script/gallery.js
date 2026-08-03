const gallery = document.querySelector(".gallery");

imagesLoaded(gallery, () => {
    new Masonry(gallery, {
        itemSelector: ".gallery_item",
        columnWidth: ".gallery_item",
        percentPosition: true,
        gutter: 20
    });

    gsap.from(".gallery_item", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out"
    });
});



//モーダルを開いた時のスクリプト
const galleryImages = document.querySelectorAll(".gallery_item img");
const photoModal = document.querySelector(".photogallery_modal");
const photoModalImg = document.querySelector(".photogallery_modal_content img");
const prevBtn = document.querySelector(".photogallery_modal_prev");
const nextBtn = document.querySelector(".photogallery_modal_next");
const header = document.querySelector(".header");
const floating = document.querySelector(".floating");
let currentIndex = 0;
// 画像を表示
function showImage(index) {
    currentIndex = index;
    photoModalImg.src = galleryImages[currentIndex].src;
}
// モーダルを開く
function openModal(index) {
    showImage(index);
    photoModal.classList.add("active");
    gsap.to([header, floating], {
        opacity: 0,
        y: -30,
        duration: 0.3,
        pointerEvents: "none"
    });
}
// モーダルを閉じる
function closeModal() {
    photoModal.classList.remove("active");
    gsap.to([header, floating], {
        opacity: 1,
        y: 0,
        duration: 0.3,
        pointerEvents: "auto"
    });
}
// ギャラリークリック
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(index);
    });
});
// 次へ
nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});
// 前へ
prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    showImage(currentIndex);
});
// 背景クリックで閉じる
photoModal.addEventListener("click", (e) => {
    if (e.target === photoModal) {
        closeModal();
    }
});
// キーボード操作
document.addEventListener("keydown", (e) => {
    if (!photoModal.classList.contains("active")) return;
    switch (e.key) {
        case "Escape":
            closeModal();
            break;
        case "ArrowLeft":
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = galleryImages.length - 1;
            }
            showImage(currentIndex);
            break;
        case "ArrowRight":
            currentIndex++;
            if (currentIndex >= galleryImages.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
            break;
    }
});
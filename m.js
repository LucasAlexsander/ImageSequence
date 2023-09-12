const html = document.documentElement,
  canvas = document.getElementById('hero-lightpass'),
  context = canvas.getContext('2d'),
  backgroundAnimation = document.querySelector('.background-animation'),
  textosBackgorund = document.querySelectorAll('#background-texts p'),
  frameCount = 148,
  currentFrame = (e) =>
    `https://lucasalexsander.github.io/ImageSequence/midia/backgroundFrame_${e.toString()}.jpg`,
  preloadImages = () => {
    for (let e = 1; e < 148; e++) {
      let t = new Image();
      t.src = currentFrame(e);
    }
  },
  img = new Image();
(img.src = currentFrame(1)),
  (canvas.width = 1158),
  (canvas.height = 770),
  (img.onload = function () {
    context.drawImage(img, 0, 0);
  });
const updateImage = (e) => {
  (img.src = currentFrame(e)), context.drawImage(img, 0, 0);
};
window.addEventListener('scroll', () => {
  let e = backgroundAnimation.getBoundingClientRect().top,
    t = backgroundAnimation.getBoundingClientRect().bottom,
    n = html.scrollHeight - window.innerHeight,
    a = e / n;
  if (e <= 0 && t >= 0) {
    let r = Math.min(147, Math.ceil(148 * a));
    requestAnimationFrame(() => updateImage(-1 * r + 1));
  }
}),
  preloadImages();

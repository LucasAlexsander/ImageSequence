const html = document.documentElement;
const canvas = document.getElementById('hero-lightpass');
const context = canvas.getContext('2d');
const backgroundAnimation = document.querySelector('.background-animation');

const textosBackgorundAux =
  document.querySelector('#background-texts').children;
const textosBackgorund = Array.from(textosBackgorundAux);

const frameCount = 148;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, '0')}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1158;
canvas.height = 770;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

// Altura máxima
console.log(backgroundAnimation.clientHeight);

window.addEventListener('scroll', () => {
  const elementoTop = backgroundAnimation.getBoundingClientRect().top;
  const elementoBottom = backgroundAnimation.getBoundingClientRect().bottom;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = elementoTop / maxScrollTop;

  console.log(img);

  if (elementoTop <= 0 && elementoBottom >= 0) {
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount),
    );
    requestAnimationFrame(() => updateImage(frameIndex * -1 + 1));

    textosBackgorund.forEach((texto, index) => {
      if (
        texto.getBoundingClientRect().top <= 400 &&
        texto.getBoundingClientRect().top >= -10
      ) {
        // texto.classList.add('visible');
        let number = (texto.getBoundingClientRect().top - 400) * -0.01;
        texto.style.opacity = number;
      } else {
        texto.classList.remove('visible');
      }
    });
  }
});

preloadImages();

const html = document.documentElement;
const img = document.getElementById('hero-lightpass');
const backgroundAnimation = document.querySelector('.background-animation');

const textosBackgorundAux =
  document.querySelector('#background-texts').children;
const textosBackgorund = Array.from(textosBackgorundAux);

const maxImage = 330;
const frameCount = 660;
const currentFrame = (index) => `midia/BackgroundFrame_${index.toString()}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < maxImage; i++) {
    img.src = currentFrame(i);
  }
};

img.src = currentFrame(1);
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  if (index <= maxImage) {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  }
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

// Lista de imágenes
const totalImages = 1502; // Número total de imágenes
const images = Array.from({ length: totalImages }, (_, i) => `images/@OnlyShareOfficial TELEGRAM (${i + 1}).jpg`);
let currentIndex = 0; // Índice inicial

// Referencias a elementos
const currentImage = document.getElementById("current-image");
const imageInfo = document.getElementById("image-info");
const imageNumberInput = document.getElementById("image-number");
const goToImageBtn = document.getElementById("go-to-image");

// Función para actualizar la imagen
function updateImage() {
  if (images[currentIndex]) {
    currentImage.src = images[currentIndex];
    currentImage.alt = `Imagen ${currentIndex + 1}`;
    imageInfo.textContent = `Imagen ${currentIndex + 1} de ${totalImages}`;
  } else {
    console.error(`No se encontró la imagen en el índice ${currentIndex}`);
  }
}

// Función para avanzar a la siguiente imagen
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages; // Avanza al siguiente índice
  updateImage();
}

// Función para retroceder a la imagen anterior
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Retrocede al índice anterior
  updateImage();
}

// Función para ir a una imagen específica
function goToImage() {
  const imageNumber = parseInt(imageNumberInput.value, 10);
  if (imageNumber >= 1 && imageNumber <= totalImages) {
    currentIndex = imageNumber - 1; // Ajustar a índice basado en 0
    updateImage();
  } else {
    alert(`Por favor, introduce un número entre 1 y ${totalImages}.`);
  }
}

// Manejadores de clics en la imagen
currentImage.addEventListener("click", (event) => {
  const rect = currentImage.getBoundingClientRect();
  const clickX = event.clientX - rect.left; // Posición del clic relativa a la imagen
  const imageWidth = rect.width;

  if (clickX > imageWidth / 2) {
    nextImage(); // Clic en la derecha, pasa a la siguiente imagen
  } else {
    prevImage(); // Clic en la izquierda, regresa a la imagen anterior
  }
});

// Manejadores de teclado para cambiar de imagen
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "ArrowLeft") {
    prevImage();
  }
});

// Manejador de clic en "Ir a la imagen"
goToImageBtn.addEventListener("click", goToImage);

// Inicializa la galería con la primera imagen
updateImage();

window.addEventListener('DOMContentLoaded', (event) => {
    const gallery = document.querySelector('.gallery');
    const imageInput = document.querySelector('#image-input');
  
    imageInput.addEventListener('change', (event) => {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const imageSrc = event.target.result;
          const image = document.createElement('img');
          image.src = imageSrc;
          gallery.appendChild(image);
        };
  
        reader.readAsDataURL(file);
      }
    });
  });
  
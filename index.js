import myImage from './images/modern.jpg';

console.log(myImage);

console.log('Hello World!, Hello JavaScript!');

const imgElement = document.createElement('img');
imgElement.src = myImage; // Используем импортированное изображение
document.body.appendChild(imgElement);
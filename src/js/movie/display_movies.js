import card from './movie-card';

export default function(movieArray) {
  const mainDiv = document.getElementById('main-content');
  movieArray.forEach((item, i) => {
    console.log(item);
    let { title } = item;
    var p = document.createElement('div');
    div.className = 'movie-card';
    div.innerHTML = title;
    mainDiv.appendChild(div);
  });
}

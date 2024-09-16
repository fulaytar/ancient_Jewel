console.log('reviews');
import reviews from '../img/reviews/reviews-data.js'
console.log(reviews)

const reviewsList = document.getElementById('reviews-list');

reviews.forEach(data => {
    const review =
    `
            <li class="review">
          <img class="reviews-img" src="${data.img}" alt="">
          <div>
            <p>${data.name} :</p>
            <p>${data.text}</p>
          </div>
          <ul class="stars-list">
            <li class="star">
              <svg class="star-icon" width="10" height="9">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon" width="10" height="9">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon" width="10" height="9">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon" width="10" height="9">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon" width="10" height="9">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
          </ul>
        </li>
    `

    reviewsList.innerHTML += review
})

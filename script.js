const gameDetail = document.getElementsByClassName('card-detail')

for(let i = 0; i < gameDetail.length; i++){
  gameDetail[i].addEventListener('click', event => {
    const game = event.target.dataset.bsGame

    const gameTitle = document.querySelector('#games-title')
    gameTitle.textContent = `${game}`

    const detailImage = document.querySelector('#detail-image')
    detailImage.setAttribute('src', `./assets/games/${game}.png`)
  })
}



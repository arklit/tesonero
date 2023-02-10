export function handlerHover() {

  const cards = document.querySelectorAll('.main__box .main__card');
  cards.forEach((item) => {
    const itemSvg = item.querySelector('svg');
    itemSvg.addEventListener('mouseover', (e) => {
      const picture = e.currentTarget
      const path = picture.querySelectorAll('path');
      const rect = picture.querySelectorAll('rect')
      const circle = picture.querySelectorAll('circle')
      path.forEach(item => item.setAttribute('style', 'stroke: #00C368'))
      rect.forEach(item => item.setAttribute('style', 'stroke: #00C368'))
      circle.forEach(item => item.setAttribute('style', 'stroke: #00C368'))
    })
    itemSvg.addEventListener('mouseout', (e) => {
      const picture = e.currentTarget
      const path = picture.querySelectorAll('path');
      const rect = picture.querySelectorAll('rect')
      const circle = picture.querySelectorAll('circle')
      path.forEach(item => item.removeAttribute('style', 'stroke: #00C368'))
      rect.forEach(item => item.removeAttribute('style', 'stroke: #00C368'))
      circle.forEach(item => item.removeAttribute('style', 'stroke: #00C368'))
    })
  })
}
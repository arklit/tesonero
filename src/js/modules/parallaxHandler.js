export function parallaxHandler() {
  window.addEventListener('scroll', e => {
    let value = window.scrollY
  document.documentElement.style.setProperty('--scrollTop', `${value}px`)
})
}
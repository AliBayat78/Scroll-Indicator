const progress = document.querySelector('.progress-bar')

window.addEventListener('scroll', () => {
  const winHeight = window.scrollY
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  let scrolled = (winHeight / scrollHeight) * 100
  progress.style.width = `${scrolled}%`
})

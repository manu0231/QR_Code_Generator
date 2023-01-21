const wrapper = document.querySelector('.wrapper')
const getInput = wrapper.querySelector('#code_input')
const qrBtn = wrapper.querySelector('.form button')
const qrcodeBox = wrapper.querySelector('#qrcode')
const qrImg = wrapper.querySelector('#qrcode img')

qrBtn.addEventListener('click', () => {
  const qrvalue = getInput.value
  if (!qrvalue) return
  qrBtn.innerText = 'Generating QR Code ...'
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
  qrImg.addEventListener('load', () => {
    qrBtn.innerText = 'Generate QR Code'
    wrapper.classList.remove('h-[196px]')
    qrcodeBox.classList.remove('opacity-0')
    wrapper.classList.add('h-[450px]')
    qrcodeBox.classList.add('pointer-events-auto ease duration-200 opacity-100')
  })
})

getInput.addEventListener('keyup', () => {
  if (!getInput.value) {
    qrBtn.innerText = 'Generate QR Code'
    wrapper.classList.add('h-[196px]')
    wrapper.classList.remove('h-[450px]')
    qrcodeBox.classList.add('opacity-0')
    qrcodeBox.classList.remove(
      'pointer-events-auto ease duration-200 opacity-100'
    )
  }
})

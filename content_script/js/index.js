let CURRENT_STATE = 'UNKNOWN'
const settings = {
    enabled: true
}

chrome.storage.local.get(['mv-enabled'], function (result) {
    settings.enabled = result['mv-enabled'] !== undefined ? result['mv-enabled'] : true
})

function fullScreen() {
    const container = document.querySelector('main')?.querySelector('div')?.lastChild?.firstChild?.firstChild

    const clone = container?.cloneNode(true)
    const lightbox = document.createElement('div')
    lightbox.style.position = 'fixed'
    lightbox.style.top = 0
    lightbox.style.left = 0
    lightbox.style.width = '100%'
    lightbox.style.height = '100%'
    lightbox.style.zIndex = 10000
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)'
    document.body.appendChild(lightbox)
    lightbox.appendChild(clone)
}

function addControls() {
    const container = document.querySelector('main')?.querySelector('div')?.querySelector('div')?.querySelector('div')?.querySelector('div').lastChild
    const btn = container?.firstChild
    const better = btn.cloneNode(true)
    better.firstChild.innerHTML = ''
    const icon = document.createElement('img')
    icon.width = 24; icon.height = 24
    icon.src = chrome.runtime.getURL('assets/icon48.png')
    icon.style.position = 'relative'
    better.firstChild.appendChild(icon)
    better.addEventListener('click', () => {
        fullScreen()
    })
    container.appendChild(better)
    console.log('ADD CONTROLS', container, btn, better)
}

console.group('BETTER MUSESCORE :')
addControls()
console.groupEnd()

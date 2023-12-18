export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const mouseDownEvent = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 20
})

export const mouseUpEvent = new MouseEvent('mouseup', {
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 20
})

export async function talk(something: string) {
    const el = document.querySelector('.askt-utterance__record')
    if (!el) return alert('no element found')
    el.dispatchEvent(mouseDownEvent)
    await sleep(1000)
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(something))
    await sleep(3500)
    el.dispatchEvent(mouseUpEvent)
}

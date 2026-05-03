let buttonRetirarModal = document.querySelector(".retirar-modal")

buttonRetirarModal.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

      if (!tab.url.includes("netflix.com")) {
        alert("Esse controle só funciona na Netflix");
        return;
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {

            let modal = document.querySelector(".netflix-sans-font-loaded")

            if (modal) {
                modal.remove()
            }
        }
    })
})

let buttonSelecionarVideo = document.querySelector(".selecionar-video")

buttonSelecionarVideo.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    if (!tab.url.includes("netflix.com")) {
        alert("Esse controle só funciona na Netflix");
        return;
    }


    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            let video = document.querySelector('video');
            video.play()
        }
    })
})

let buttonpauseiniciar = document.querySelector(".pause-continuar")

buttonpauseiniciar.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    if (!tab.url.includes("netflix.com")) {
        alert("Esse controle só funciona na Netflix");
        return;
    }


    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            let video = document.querySelector('video')
            if (video) video.pause()
        }
    })
})

let buttonmuted = document.querySelector(".control-mudo")
var courrentState = false

buttonmuted.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })
    if (!tab.url.includes("netflix.com")) {
        alert("Esse controle só funciona na Netflix");
        return;
    }


    courrentState = !courrentState

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        args: [courrentState],
        func: (state) => {
            let video = document.querySelector("video")
            video.muted = state
        }
    })
})

let buttonback10sec = document.querySelector(".control-fullScreen")

buttonback10sec.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })
    if (!tab.url.includes("netflix.com")) {
        alert("Esse controle só funciona na Netflix");
        return;
    }


    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            let video = document.querySelector("video");
            video.requestFullscreen()
        }
    })
})

let buttonAumentarVolume = document.querySelector(".volumeUP")

buttonAumentarVolume.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })
    if (!tab.url.includes("netflix.com")) {
        alert("Esse controle só funciona na Netflix");
        return;
    }


    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            let video = document.querySelector("video");
            video.muted = false
            video.volume = Math.min(1, video.volume + 0.2);
            console.log(video.volume)
        }
    })
})

let buttonDiminuirVolume = document.querySelector(".volumeDown")

buttonDiminuirVolume.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    if (!tab.url.includes("netflix.com")) {
        alert("Esse controle só funciona na Netflix");
        return;
    }


    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            let video = document.querySelector("video");
            if (video.volume > 0) {
                video.muted = false;
            }
            video.volume = Math.max(0, video.volume - 0.2);
            console.log(video.volume)
        }
    })
})
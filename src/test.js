let string = `
/*你好，我是一名前端切图狗
接下来我要画一只皮卡丘，首先我们给皮肤上色
注：此css代码由less编译而来，因此比较冗长*/
      .skin {
        position: relative;
        height: 100vh;
        background-color: #ffe600;
        overflow: hidden;
      }
/*然后我们画一只可爱的小鼻子*/
      .skin .nose {
        position: relative;
        left: 50%;
        top: 145px;
        margin-left: -10px;
        width: 0px;
        height: 0px;
        border: 10px solid #000;
        border-color: #000 transparent transparent;
        border-bottom: none;
        z-index: 10;
      }
      .skin .nose:hover {
        transform-origin: center bottom;
        animation: wave 0.3s infinite linear;
      }
      .skin .nose .yuan {
        position: absolute;
        width: 20px;
        height: 6px;
        top: -16px;
        left: -10px;
        border-radius: 14px 14px 0 0;
        background-color: #000;
      }
/*我们画两只小眼睛和滴溜溜的眼珠子*/
      .skin .eye {
        border: 2px solid #000;
        width: 64px;
        height: 64px;
        position: absolute;
        left: 50%;
        top: 100px;
        margin-left: -32px;
        background-color: #2e2e2e;
        border-radius: 50%;
      }
      .skin .eye::before {
        content: "";
        display: block;
        background-color: #fff;
        width: 30px;
        height: 30px;
        border: 3px solid #000;
        border-radius: 50%;
        position: relative;
        left: 8px;
        top: 2px;
      }
      .skin .left {
        transform: translateX(-100px);
      }
      .skin .right {
        transform: translateX(100px);
      }
/*我们画皮卡丘的两个唇瓣子*/
      .skin .mouth {
        width: 160px;
        height: 160px;
        position: absolute;
        left: 50%;
        top: 175px;
        margin-left: -80px;
      }
      .skin .mouth .up {
        position: relative;
        top: -10px;
        z-index: 1;
      }
      .skin .mouth .up .lip {
        border: 3px solid #000;
        height: 30px;
        width: 78px;
        border-top-color: transparent;
        border-right-color: transparent;
        background-color: #ffe600;
      }
      .skin .mouth .up .lip::before {
        content: "";
        display: block;
        width: 7px;
        height: 30px;
        background-color: #ffe600;
      }
      .skin .mouth .up .lip.leftl {
        border-radius: 0 0 0 50px;
        position: relative;
        transform: rotate(-15deg);
      }
      .skin .mouth .up .lip.leftl::before {
        position: absolute;
        right: -5px;
        bottom: 0;
      }
      .skin .mouth .up .lip.leftl::after {
        content: "";
        display: block;
        width: 80px;
        height: 5px;
        position: absolute;
        right: 0;
        top: -5px;
        background-color: #ffe600;
      }
      .skin .mouth .up .lip.rightl {
        border-radius: 0 0 50px 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: rotate(15deg);
      }
      .skin .mouth .up .lip.rightl::before {
        position: absolute;
        left: -5px;
        bottom: 0;
      }
/*我们画皮卡丘的嘴巴*/  
      .skin .mouth .down {
        height: 160px;
        position: absolute;
        top: 0;
        width: 100%;
        overflow: hidden;
      }
/*我们画皮卡丘的小舌头*/  
      .skin .mouth .down .yuan1 {
        border: 1px solid black;
        width: 140px;
        height: 500px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -70px;
        border-radius: 65%;
        background-color: #9b000a;
        overflow: hidden;
      }
      .skin .mouth .down .yuan1 .yuan2 {
        position: absolute;
        bottom: -170px;
        left: 50%;
        margin-left: -80px;
        width: 160px;
        height: 300px;
        background-color: #ff485f;
        border-radius: 100px;
      }
/*我们画皮卡丘的小脸蛋子*/ 
      .skin .facel {
        position: absolute;
        left: 50%;
        border: 2px solid black;
        width: 88px;
        height: 88px;
        top: 200px;
        margin-left: -200px;
        background-color: red;
        border-radius: 50%;
      }
      .skin .facer {
        position: absolute;
        left: 50%;
        border: 2px solid black;
        width: 88px;
        height: 88px;
        top: 200px;
        margin-left: 112px;
        background-color: red;
        border-radius: 50%;
      }
/*好了，这只皮卡丘送给你*/
`
let string2=''
const player = {
    n:1,
    id:undefined,
    time:100,
    init: () => {
        demo.innerText = string.substr(0, player.n)
        demo2.innerHTML = string.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n++  
        if(string[player.n]==='\n'){
            string2+='<br>'
        }else if (string[player.n] === ' ') {
            // 如果是空格
            string2 += '&nbsp'
        } else {
            // 如果不是回车就照搬
            string2 += string[player.n]
        }
        demo.innerHTML = string2
        demo2.innerHTML = string.substr(0,player.n)
        demo.scrollTop = demo.scrollHeight
        if (player.n > string.length-2) {
            window.clearInterval(player.id)
            return
        }
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.time = 140
        player.pause()
        player.play()
    },
    normal: () => {
        player.time = 70
        player.pause()
        player.play()
    },
    fast: () => {
        player.time = 0
        player.pause()
        player.play()
    }
}

player.init()

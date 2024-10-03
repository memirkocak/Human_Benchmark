const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const body = document.querySelector('body')

function reactionTime(){
const reactionTime = document.querySelector('#reactionTime');

    reactionTime.addEventListener('click',()=>{
        header.remove()
        main.remove()
        footer.remove()
        
        body.innerHTML = `
            <div class="reactionTime">
                <p id="reactionTime-time">00:00</p>
                <button class="reactionTime-timeBtn">WAIT GREEN...</button>
            </div>
        `

        let randomTime = Math.floor(Math.random() * 2000 + 1000)
        console.log(randomTime);
        const btnTime = document.querySelector('.reactionTime-timeBtn')
        const reactionTimeText = document.querySelector('#reactionTime-time')

        
        const setIntervalTime = setInterval(() => {
            randomTime--;
            console.log(randomTime);
            if(randomTime <= 0){
                btnTime.textContent = 'CLICK !!!'
                btnTime.style.backgroundColor = '#9BFF59'
                let seconde = 0;
                let miliseconde = 0;
                const TimeTextInterval = setInterval(() => {
                    let reactionTimeTextInt = `${seconde} : ${miliseconde}`;
                    miliseconde++;
                    if(miliseconde >= 100){
                        seconde++;
                        miliseconde = 0;
                    }
                    reactionTimeText.textContent = reactionTimeTextInt
                    console.log(reactionTimeTextInt);
                }, 10);
                btnTime.addEventListener('click',()=>{
                    clearInterval(TimeTextInterval)
                })
                clearInterval(setIntervalTime)
            }
        }, 1);

    })
}
reactionTime()

function verbalMemory(){

    const words = [
        { word: "apple" },
        { word: "banana" },
        { word: "cat" },
        { word: "dog" },
        { word: "elephant" },
        { word: "flower" },
        { word: "guitar" },
        { word: "house" },
        { word: "island" },
        { word: "jungle" },
        { word: "kite" },
        { word: "lion" },
        { word: "mountain" },
        { word: "notebook" },
        { word: "ocean" },
        { word: "pencil" },
        { word: "queen" },
        { word: "river" },
        { word: "sun" },
        { word: "tree" },
        { word: "umbrella" },
        { word: "violin" },
        { word: "window" },
        { word: "xylophone" },
        { word: "yacht" },
        { word: "zebra" },
        { word: "airplane" },
        { word: "book" },
        { word: "car" },
        { word: "desk" },
        { word: "ear" },
        { word: "frog" },
        { word: "glasses" },
        { word: "hat" },
        { word: "ice" },
        { word: "jacket" },
        { word: "key" },
        { word: "lamp" },
        { word: "moon" },
        { word: "necklace" },
        { word: "orange" },
        { word: "pizza" },
        { word: "quilt" },
        { word: "rain" },
        { word: "shoe" },
        { word: "table" },
        { word: "umbrella" },
        { word: "vase" },
        { word: "watch" },
        { word: "x-ray" },
        { word: "yogurt" },
        { word: "zoo" },
        { word: "ball" },
        { word: "cup" },
        { word: "door" },
        { word: "engine" },
        { word: "forest" },
        { word: "garden" },
        { word: "horse" },
        { word: "internet" },
        { word: "juice" },
        { word: "kangaroo" },
        { word: "lemon" },
        { word: "mirror" },
        { word: "newspaper" },
        { word: "octopus" },
        { word: "piano" },
        { word: "quokka" },
        { word: "rabbit" },
        { word: "snake" },
        { word: "train" },
        { word: "umbrella" },
        { word: "volcano" },
        { word: "whale" },
        { word: "xenon" },
        { word: "yawn" },
        { word: "zipper" },
        { word: "ant" },
        { word: "box" },
        { word: "chair" },
        { word: "dolphin" },
        { word: "eagle" },
        { word: "fire" },
        { word: "globe" },
        { word: "heart" },
        { word: "ink" },
        { word: "jar" },
        { word: "kangaroo" },
        { word: "leopard" },
        { word: "milk" },
        { word: "nest" },
        { word: "owl" },
        { word: "pen" },
        { word: "queen" },
        { word: "rose" },
        { word: "stone" },
        { word: "telephone" },
        { word: "umbrella" },
        { word: "violin" },
        { word: "wolf" },
        { word: "xylophone" },
        { word: "yak" },
        { word: "zucchini" }
      ];

    const verbalMemoryBtn = document.querySelector('#verbalMemory')

    verbalMemoryBtn.addEventListener('click',()=>{
        header.remove()
        main.remove()
        footer.remove()

        body.innerHTML=`
            <div class="verbalMemory">
            <button id="startBtn">START</button>

            <div class="verbalMemoryGame">
                <div>
                    <p>Lives | <span id='livesSpan'>3</span></p>
                    <p>Score | <span id='scoreSpan'>0</span></p>
                </div>
                
                <p id='word'>word</p>

                <div>
                    <button id="seenBtn">SEEN</button>
                    <button id="newBtn">NEW</button>
                </div>
            </div>
        </div>
        `

        const startBtn = document.querySelector('#startBtn')
        const verbalMemoryGame = document.querySelector('.verbalMemoryGame')
        const word = document.querySelector('#word')
        let wordsArr = [];
        const newWordBtn = document.querySelector('#newBtn')
        const seenWordBtn = document.querySelector('#seenBtn')
        const livesSpan = document.querySelector('#livesSpan')
        const scoreSpan = document.querySelector('#scoreSpan')
        let lives = 3;
        let score = 0;
        startBtn.addEventListener('click',()=>{
            verbalMemoryGame.style.display = 'flex'
            startBtn.style.display = 'none'
            let randomWord = Math.floor(Math.random() * words.length)
            word.textContent = words[randomWord].word

            newWordBtn.addEventListener('click',()=>{
                //faire une verification pour dire si il y a le mot dans le wordsArr on enleve une vie (lives) si le mot n est pas dans le wordsArr on l ajoute dans (wordsArr)
            })

        })
                                    
    })
}
verbalMemory()
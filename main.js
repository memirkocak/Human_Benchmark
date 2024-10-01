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


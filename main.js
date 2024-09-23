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
                <p id="reactionTime-time">aaa</p>
                <button class="reactionTime-timeBtn">WAIT GREEN...</button>
            </div>
        `

        let randomTime = Math.floor(Math.random() * 10000 + 1000)
        console.log(randomTime);
        const btnTime = document.querySelector('.reactionTime-timeBtn')

        const setIntervalTime = setInterval(() => {
            randomTime--;
            console.log(randomTime);
            if(randomTime <= 0){
                clearInterval(setIntervalTime)
            }
        }, 1);

        function TimeClear(){

        }

    })
}
reactionTime()


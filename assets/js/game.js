startGame = () => {
    let enemyHealth = 20;
    let direction = 'right';
    const character = document.getElementById('character');
    const gamespace = document.getElementById('gamespace');
    const kratos = document.getElementById('kratos');
    const axe = document.getElementById('axe');
    const boc = document.getElementById('boc');
    const boo = document.getElementById('boo');
    const thor = document.getElementById('enemy');
    const score = document.getElementById('score');
    score.textContent = enemyHealth + " / 20" 
    const playAgainBtn = document.getElementById('playAgain');
    const myAudio = document.getElementById('myAudio');
    myAudio.volume = "0.1";
    const themeMusic = document.getElementById('themeMusic');
    const muteButton = document.getElementById('muteButton');
    const unMuteButton = document.getElementById('unMuteButton');
    const goBack = document.getElementById('goBack');
    const mybody = document.getElementById('mybody');
    const damageDiv = document.getElementById('damage');
    const mybg = document.getElementById('mybg');

    // Theme music delay
    setTimeout(() => {
        themeMusic.play()
    }, 5000);

    console.log(`Ekran Boyutu: ${window.innerWidth} x ${window.innerHeight}`);
    
    // Damage message
    const dmgMessage = (dmg) => {
        const newTag = document.createElement("p");
        newTag.textContent = `-= ${dmg} damage inflicted =-`;
        
        // If there are already tags in the div, insert the new tag below them
        if (damageDiv.children.length > 0) {
            damageDiv.insertBefore(newTag, damageDiv.firstChild);
        } else {
            damageDiv.appendChild(newTag);
        }
        
        // Wait for 2 seconds, then remove the tag
        setTimeout(() => {
            damageDiv.removeChild(newTag);
        }, 4000);   
    };


    goBack.addEventListener('click', () => {
        window.history.back();
    })

    themeMusic.volume = 0.1;
    muteButton.addEventListener('click', () => {
        muteButton.style.display = "none";
        themeMusic.volume = 0;
        unMuteButton.style.display = "inline-block";
    });

    unMuteButton.addEventListener('click', () => {
        themeMusic.volume = 0.1;
        muteButton.style.display = "inline-block";
        unMuteButton.style.display = "none";
    });

    playAgainBtn.addEventListener('click', () => {
        playAgain();
    })

    gamespace.addEventListener('contextmenu', event => event.preventDefault());

    // AXE ATTACK
    gamespace.addEventListener('click', () => {
        checkDistance();
        axe.style.visibility = "visible";
        console.log("I WILL MAKE YOU SUFFER")
        if (direction === 'right'){
            axe.classList.add('animateR');
            setTimeout(() => {
                axe.classList.remove('animateR');
                axe.style.visibility = "hidden";
            }, 500);
        }
        else {
            axe.classList.add('animateL');
            setTimeout(() => {
                axe.classList.remove('animateL');
                axe.style.visibility = "hidden";
        }, 500);
        }
    });
    // Blade of Chaos attack
    gamespace.addEventListener('contextmenu', () => {
        checkDistance2();
        boc.style.visibility = "visible";
        console.log("I WILL MAKE YOU SUFFER")
        if (direction === 'right'){
            boc.classList.add('animateR');
            setTimeout(() => {
                boc.classList.remove('animateR');
                boc.style.visibility = "hidden";
            }, 300);
        }
        else {
            boc.classList.add('animateL');
            setTimeout(() => {
                boc.classList.remove('animateL');
                boc.style.visibility = "hidden";
        }, 300);
        }
        
    });
            


    const keys = {};

    const progressBar = document.querySelector('.progress-bar');


    const intervalId = setInterval(() => {
        const width = 100 - ((20 - enemyHealth) * 5);
        progressBar.style.width = `${width}%`;
        progressBar.setAttribute('aria-valuenow', enemyHealth);
    },50);


    let seconds = 0;
    let minutes = 0;

    let interval;

    const timer = document.getElementById("timer");

    function startTimer() {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
        minutes++;
        seconds = 0;
        }

        const m = minutes < 10 ? "0" + minutes : minutes;
        const s = seconds < 10 ? "0" + seconds : seconds;
        timer.innerText = `${m}:${s}`;
    }, 1000);
    }
    startTimer()
    function stopTimer() {
        clearInterval(interval);
    }
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const endGame = async() => {
        enemyHealth = 0;
        score.textContent = enemyHealth + " / 20" 
        //end game message
        const newTag = document.createElement("p");
        newTag.textContent = `-= Enemy slaughtered in ${seconds} seconds! =-`;
        
        // If there are already tags in the div, insert the new tag below them
        if (damageDiv.children.length > 0) {
            damageDiv.insertBefore(newTag, damageDiv.firstChild);
        } else {
            damageDiv.appendChild(newTag);
        }
        
        // Wait for 2 seconds, then remove the tag
        setTimeout(() => {
            damageDiv.removeChild(newTag);
        }, 4000);

        stopTimer();
        progressBar.style.width = "0%";
        //score.textContent = "20 / 20" 

        thor.style.transition = "all 1s"
        thor.style.opacity = 0;
        await wait(1000);
        thor.style.transition = "all 0s"
        thor.style.display = "none";
        thor.style.opacity = 1;

        //await wait(1000)
        character.style.transition = "all 1s";
        myAudio.src = "game/I'm The God of War Kratos Sound Effect.mp3"
        myAudio.play();
        playAgainBtn.style.display = "inline-block";
        character.style.width = "15vw"
        axe.style.width = "4vw"
        boc.style.width = "6vw"
        boo.style.width = "6vw"
    }
    const playAgain = () =>{
        character.style.transition = "all 0s";
        charge = 0;
        enemyHealth = 20;
        lock = 0;
        thor.style.display = "inline";
        character.style.width = "6vw"
        axe.style.width = "2vw"
        boc.style.width = "3vw"
        boo.style.width = "3vw"
        score.textContent = enemyHealth + " / 20" 
        playAgainBtn.style.display = "none";
        seconds = 0;
        minutes = 0;
        timer.innerText = "00:00"
        startTimer()
    }
    let lock = 0;
    const moveThor = async() => {
        const maxWidth = gamespace.offsetWidth - thor.offsetWidth;
        const maxHeight = gamespace.offsetHeight - thor.offsetHeight;
        const newLeft = Math.floor(Math.random() * maxWidth);
        const newTop = Math.floor(Math.random() * maxHeight);
        thor.style.transition = "all 1s"
        thor.style.opacity = 0;
        await wait(500);    
        thor.style.left = `${newLeft}px`;
        thor.style.top = `${newTop}px`;
        await wait(200);    
        thor.style.opacity = 1; 
        thor.style.transition = "all 0s"
        lock = 0
    }
    const hitsound = () => {
        myAudio.src = "game/axe.mp3";
        myAudio.play();
    } 
    function checkDistance() {
        // const characterRect = character.getBoundingClientRect();
        // const thorRect = thor.getBoundingClientRect();
        // const distance = Math.sqrt(
        //     (characterRect.x - thorRect.x) ** 2 + (characterRect.y - thorRect.y) ** 2
        // );
        if(lock === 0) {
            const characterRect = character.getBoundingClientRect();
            const thorRect = thor.getBoundingClientRect();
            const axeRect = axe.getBoundingClientRect();
            console.log("*** character: ", characterRect.x, characterRect.y, "enemy: ", thorRect.x, thorRect.y)
            /*console.log("*** axe: ", axeRect.x, axeRect.y)*/
            const distance = Math.abs(characterRect.x - thorRect.x);
            const heightDiff = Math.abs(characterRect.y - thorRect.y);
            if (distance <= 460 && heightDiff < 100) {
                if(direction === 'right'){
                    if(characterRect.x - thorRect.x <= 0){
                        hitsound();
                        enemyHealth -= 2;
                        dmgMessage(2);
                        lock = 1;
                        if(enemyHealth <= 0) { //game finished
                            endGame();
                        }
                        else{
                            setTimeout(() =>{
                                moveThor();
                            }, 350)
                        }
                        score.textContent = enemyHealth + " / 20" 
                    }
                }
                else if(direction === 'left'){
                    if(characterRect.x - thorRect.x >= 0){
                        hitsound();
                        enemyHealth -= 2;
                        dmgMessage(2);
                        lock = 1;
                        if(enemyHealth <= 0) { //game finished
                            endGame();
                        }
                        else{
                            setTimeout(() =>{
                                moveThor();
                            }, 350)
                        }
                        score.textContent = enemyHealth + " / 20" 
                    }
                }
            }
        }
    }   
    function checkDistance2() {
        // const characterRect = character.getBoundingClientRect();
        // const thorRect = thor.getBoundingClientRect();
        // const distance = Math.sqrt(
        //     (characterRect.x - thorRect.x) ** 2 + (characterRect.y - thorRect.y) ** 2
        // );
        if(lock === 0){
            const characterRect = character.getBoundingClientRect();
            const thorRect = thor.getBoundingClientRect();
            const distance = Math.abs(characterRect.x - thorRect.x);
            const heightDiff = Math.abs(characterRect.y - thorRect.y);
            if (distance <= 260 && heightDiff < 100) {
                if(direction === 'right'){
                    if(characterRect.x - thorRect.x <= 0){
                        hitsound();
                        dmgMessage(1);
                        enemyHealth -= 1;
                        lock = 1;
                        if(enemyHealth <= 0) { //game finished
                            endGame();
                        }
                        else{
                            setTimeout(() =>{
                                moveThor();
                            }, 100)
                        }                        
                    }
                    score.textContent = enemyHealth + " / 20" 
                }
                else if(direction === 'left'){
                    if(characterRect.x - thorRect.x >= 0){
                        hitsound();
                        dmgMessage(1);
                        enemyHealth -= 1;
                        lock = 1;
                        if(enemyHealth <= 0) { //game finished
                            endGame();
                        }
                        else{
                            setTimeout(() =>{
                                moveThor();
                            }, 100)
                        }
                        score.textContent = enemyHealth + " / 20" 
                    }
                }
            }
        }
        
    }   
    const checkDistance3 = async() => {
        // const characterRect = character.getBoundingClientRect();
        // const thorRect = thor.getBoundingClientRect();
        // const distance = Math.sqrt(
        //     (characterRect.x - thorRect.x) ** 2 + (characterRect.y - thorRect.y) ** 2
        // );
        if(lock === 0){
            const characterRect = character.getBoundingClientRect();
            const thorRect = thor.getBoundingClientRect();
            const heightDiff = Math.abs(characterRect.y - thorRect.y);
            if (heightDiff < 70) {
                if(direction === 'right'){
                    if(characterRect.x - thorRect.x <= 0){
                        myAudio.src = "game/rage.mp3";
                        myAudio.play();
                        await wait(500);

                        lock = 1;
                        dmgMessage(10);
                        enemyHealth -= 10;
                        if(enemyHealth <= 0) { //game finished
                            endGame();
                        }
                        else{
                            setTimeout(() =>{
                                moveThor();
                            }, 350)
                        }
                        score.textContent = enemyHealth + " / 20" 
                    }
                }
                else if(direction === 'left'){
                    if(characterRect.x - thorRect.x >= 0){
                        myAudio.src = "game/rage.mp3";
                        myAudio.play();
                        await wait(500);
                        lock = 1;
                        dmgMessage(10);
                        enemyHealth -= 10;
                        if(enemyHealth <= 0) { //game finished
                            endGame();
                        }
                        else{
                            setTimeout(() =>{
                                moveThor();
                            }, 350)
                        }
                        score.textContent = enemyHealth + " / 20" 
                    }
                }
            }
        }
       
    }   
    document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
    });

    document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
    });

    const specialSkill = async() =>{
        console.log(charge);
        if(charge === 0){
            boo.style.visibility = 'visible';
            charge += 1;
            mybody.style.background = "darkred"
        } else if(charge > 0) {
            if(direction === 'right'){
                await checkDistance3();
                character.style.transition = "all .5s ease"
                for (let i = 0; i < 50; i++){
                    character.style.left = `${Math.min(gamespace.offsetWidth - character.offsetWidth, character.offsetLeft + 1000)}px`;
                }
                character.style.transition = "all 0s ease"
                charge = -1;
                setTimeout(() => {
                    boo.style.visibility = 'hidden';
                }, 500)
                mybody.style.background = "linear-gradient(135deg, #add8e6, #ffffff, #ffe4e1)"

            } else if(direction === 'left'){
                await checkDistance3();
                character.style.transition = "all .5s ease"
                for (let i = 0; i < 50; i++){
                    character.style.left = `${Math.max(0, character.offsetLeft - 1000)}px`;
                }
                character.style.transition = "all 0s ease"
                charge = -1;
                setTimeout(() => {
                    boo.style.visibility = 'hidden';
                }, 500)
                mybody.style.background = "linear-gradient(135deg, #add8e6, #ffffff, #ffe4e1)"
            }
        }
    }

    let charge = 0;
    document.addEventListener('keypress', event => {
        if(event.key === 'q'){ // Special skill
            specialSkill();
        }
        
    })

    setInterval(() => {
    const speed = 3;
    //console.log(character.offsetLeft, character.offsetTop)
    if (keys['w'] || keys['ArrowUp']) {
        character.style.top = `${Math.max(0, character.offsetTop - speed)}px`;
    }
    if (keys['s'] || keys['ArrowDown']) {
        character.style.top = `${Math.min(gamespace.offsetHeight - character.offsetHeight + 50, character.offsetTop + speed)}px`;
    }
    if (keys['a'] || keys['ArrowLeft']) {
        direction = 'left';
        boo.style.transform = " translateX(-250%) translateY(-10%) rotate(-90deg)"
        axe.src = "game/axeL.png"
        boc.src = "game/bocL.png"
        kratos.src = "game/kratosL.png"
        character.style.left = `${Math.max(0, character.offsetLeft - speed)}px`;
    }
    if (keys['d'] || keys['ArrowRight']) {
        direction = 'right';
        boo.style.transform = " translateX(-70%) translateY(-10%) rotate(90deg)"
        axe.src = "game/axeR.png"
        boc.src = "game/bocR.png"
        kratos.src = "game/kratosR.png"
        character.style.left = `${Math.min(gamespace.offsetWidth - character.offsetWidth, character.offsetLeft + speed)}px`;
    }
    }, 10);
}


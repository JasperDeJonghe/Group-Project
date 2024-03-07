function onclick_Img_1 () {
    let clicked = document.getElementById(`img-inactive-1`)
    let change = document.getElementById(`img-active`)
    let title = document.querySelector('h3')
    let date = document.querySelector('h4')
    let text = document.querySelector('p')
    sessionStorage.setItem(`src_inac`, `${clicked.getAttribute('src')}`)
    sessionStorage.setItem(`src_ac`, `${change.getAttribute('src')}`)
    clicked.style.opacity = '0%'
    change.style.opacity = '0%'
    setTimeout(function(){
        clicked.src = sessionStorage.getItem(`src_ac`)
        change.src = sessionStorage.getItem(`src_inac`)
        sessionStorage.clear(`src_inac`, `src_ac`)
        clicked.style.opacity = '100%'
        change.style.opacity = '100%'
    },600)


    if (clicked.getAttribute('src') == 'https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/Python-Certificate.png?raw=true'){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
            document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Legend of <span style="color: #B8DAE7;">Python</span>
            </h3>
            <h4>
                23-10-2023
            </h4>
            <p>
                The project build to achieve this certificate was a combination of two different projects. The first project was building a GIF by using python and alternating images. The second project was a discord bot using the GIF and text to display my discord status when someone sends a message with my name in it or a message with me pinged. If im online it will send a meme from reddit and a text explaining that I will respond shortly, on idle it will send a meme as well and some text that I will respond in a minute. If im offline or on DND it will send the GIF made with python that displays a sleeping fox.
            </p>
            <a href="https://www.credential.net/5e7c7856-5e93-40bc-bd69-7f764d004ecb#gs.5ut97k">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        }, 600)

    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/JS-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins III: <span style="color: #B8DAE7;">JS</span>
            </h3>
            <h4>
                20-02-2024
            </h4>
            <p>
                The project build to achieve this certificate was a weather app build using the OpenWeather API, the bases of the project was build following the project guide on codedex. In addition to that a lot of features where added which includes a air quality indicator, information about the wind speed and direction, feels like temperature and humidity percentage. Besides that the forecast data for the upcoming 4 days was added, onclick on one of the days the air quality indicator, information about the wind speed and direction, feels like temperature and humidity percentage change to the forecast of that day.
            </p>
            <a href="https://www.credential.net/32629fd2-73b1-4839-8870-47628f911722">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/CSS-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins II: <span style="color: #B8DAE7;">CSS</span>
            </h3>
            <h4>
                03-12-2023
            </h4>
            <p>
                The project build to achieve this certificate was a mini personal website, it gave a little introduction to who I am. It also showed some of the projects I have build before using python and HTML, Lastly it tells the story of how I got into coding. 
            </p>
            <a href="https://www.credential.net/9b7fb016-f107-4644-9147-d3f9d1885d82#gs.5xfe2v">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/HTML-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins I: <span style="color: #B8DAE7;">HTML</span>
            </h3>
            <h4>
                08-11-2023
            </h4>
            <p>
                The project build to achieve this certificate was a website for a restaurant, the theme was inspired by a Dutch restaurant called 'Heide'. The website used quite some inline CSS and style tags to create this theme, the use of all this inline CSS made me realise the limits of this methode.
            </p>
            <a href="https://www.credential.net/dfc539bd-b29d-426d-8d07-6bc7203ae9f1#gs.5xnnh1">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }
}
function onclick_Img_2 () {
    let clicked = document.getElementById(`img-inactive-2`)
    let change = document.getElementById(`img-active`)
    let title = document.querySelector('h3')
    let date = document.querySelector('h4')
    let text = document.querySelector('p')
    sessionStorage.setItem(`src_inac`, `${clicked.getAttribute('src')}`)
    sessionStorage.setItem(`src_ac`, `${change.getAttribute('src')}`)
    clicked.style.opacity = '0%'
    change.style.opacity = '0%'
    setTimeout(function(){
        clicked.src = sessionStorage.getItem(`src_ac`)
        change.src = sessionStorage.getItem(`src_inac`)
        sessionStorage.clear(`src_inac`, `src_ac`)
        clicked.style.opacity = '100%'
        change.style.opacity = '100%'
    },600)


    if (clicked.getAttribute('src') == 'https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/Python-Certificate.png?raw=true'){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
            document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Legend of <span style="color: #B8DAE7;">Python</span>
            </h3>
            <h4>
                23-10-2023
            </h4>
            <p>
                The project build to achieve this certificate was a combination of two different projects. The first project was building a GIF by using python and alternating images. The second project was a discord bot using the GIF and text to display my discord status when someone sends a message with my name in it or a message with me pinged. If im online it will send a meme from reddit and a text explaining that I will respond shortly, on idle it will send a meme as well and some text that I will respond in a minute. If im offline or on DND it will send the GIF made with python that displays a sleeping fox.
            </p>
            <a href="https://www.credential.net/5e7c7856-5e93-40bc-bd69-7f764d004ecb#gs.5ut97k">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        }, 600)

    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/JS-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins III: <span style="color: #B8DAE7;">JS</span>
            </h3>
            <h4>
                20-02-2024
            </h4>
            <p>
                The project build to achieve this certificate was a weather app build using the OpenWeather API, the bases of the project was build following the project guide on codedex. In addition to that a lot of features where added which includes a air quality indicator, information about the wind speed and direction, feels like temperature and humidity percentage. Besides that the forecast data for the upcoming 4 days was added, onclick on one of the days the air quality indicator, information about the wind speed and direction, feels like temperature and humidity percentage change to the forecast of that day.
            </p>
            <a href="https://www.credential.net/32629fd2-73b1-4839-8870-47628f911722">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/CSS-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins II: <span style="color: #B8DAE7;">CSS</span>
            </h3>
            <h4>
                03-12-2023
            </h4>
            <p>
                The project build to achieve this certificate was a mini personal website, it gave a little introduction to who I am. It also showed some of the projects I have build before using python and HTML, Lastly it tells the story of how I got into coding. 
            </p>
            <a href="https://www.credential.net/9b7fb016-f107-4644-9147-d3f9d1885d82#gs.5xfe2v">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/HTML-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins I: <span style="color: #B8DAE7;">HTML</span>
            </h3>
            <h4>
                08-11-2023
            </h4>
            <p>
                The project build to achieve this certificate was a website for a restaurant, the theme was inspired by a Dutch restaurant called 'Heide'. The website used quite some inline CSS and style tags to create this theme, the use of all this inline CSS made me realise the limits of this methode.
            </p>
            <a href="https://www.credential.net/dfc539bd-b29d-426d-8d07-6bc7203ae9f1#gs.5xnnh1">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }
}
function onclick_Img_3 () {
    let clicked = document.getElementById(`img-inactive-3`)
    let change = document.getElementById(`img-active`)
    let title = document.querySelector('h3')
    let date = document.querySelector('h4')
    let text = document.querySelector('p')
    sessionStorage.setItem(`src_inac`, `${clicked.getAttribute('src')}`)
    sessionStorage.setItem(`src_ac`, `${change.getAttribute('src')}`)
    clicked.style.opacity = '0%'
    change.style.opacity = '0%'
    setTimeout(function(){
        clicked.src = sessionStorage.getItem(`src_ac`)
        change.src = sessionStorage.getItem(`src_inac`)
        sessionStorage.clear(`src_inac`, `src_ac`)
        clicked.style.opacity = '100%'
        change.style.opacity = '100%'
    },600)


    if (clicked.getAttribute('src') == 'https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/Python-Certificate.png?raw=true'){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
            document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Legend of <span style="color: #B8DAE7;">Python</span>
            </h3>
            <h4>
                23-10-2023
            </h4>
            <p>
                The project build to achieve this certificate was a combination of two different projects. The first project was building a GIF by using python and alternating images. The second project was a discord bot using the GIF and text to display my discord status when someone sends a message with my name in it or a message with me pinged. If im online it will send a meme from reddit and a text explaining that I will respond shortly, on idle it will send a meme as well and some text that I will respond in a minute. If im offline or on DND it will send the GIF made with python that displays a sleeping fox.
            </p>
            <a href="https://www.credential.net/5e7c7856-5e93-40bc-bd69-7f764d004ecb#gs.5ut97k">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        }, 600)

    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/JS-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins III: <span style="color: #B8DAE7;">JS</span>
            </h3>
            <h4>
                20-02-2024
            </h4>
            <p>
                The project build to achieve this certificate was a weather app build using the OpenWeather API, the bases of the project was build following the project guide on codedex. In addition to that a lot of features where added which includes a air quality indicator, information about the wind speed and direction, feels like temperature and humidity percentage. Besides that the forecast data for the upcoming 4 days was added, onclick on one of the days the air quality indicator, information about the wind speed and direction, feels like temperature and humidity percentage change to the forecast of that day.
            </p>
            <a href="https://www.credential.net/32629fd2-73b1-4839-8870-47628f911722">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/CSS-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins II: <span style="color: #B8DAE7;">CSS</span>
            </h3>
            <h4>
                03-12-2023
            </h4>
            <p>
                The project build to achieve this certificate was a mini personal website, it gave a little introduction to who I am. It also showed some of the projects I have build before using python and HTML, Lastly it tells the story of how I got into coding. 
            </p>
            <a href="https://www.credential.net/9b7fb016-f107-4644-9147-d3f9d1885d82#gs.5xfe2v">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }else if (clicked.getAttribute('src') == `https://github.com/VulpesLag0pus/Group-Project-Vulpes/blob/main/Vulpes/HTML-certificate.png?raw=true`){
        title.style.opacity = '0%'
        date.style.opacity = '0%'
        text.style.opacity = '0%'
        setTimeout(function(){
        document.getElementById(`description-active`).innerHTML = `
            <h3>
                The Origins I: <span style="color: #B8DAE7;">HTML</span>
            </h3>
            <h4>
                08-11-2023
            </h4>
            <p>
                The project build to achieve this certificate was a website for a restaurant, the theme was inspired by a Dutch restaurant called 'Heide'. The website used quite some inline CSS and style tags to create this theme, the use of all this inline CSS made me realise the limits of this methode.
            </p>
            <a href="https://www.credential.net/dfc539bd-b29d-426d-8d07-6bc7203ae9f1#gs.5xnnh1">
                <h2>
                    View Certificate
                </h2>
            </a>
            `
            title.style.opacity = '100%'
            date.style.opacity = '100%'
            text.style.opacity = '100%'
        },600)
    }
}
function throttle(func, limit) {
    let throttling = false;
    return function() {
        if (!throttling) {
            throttling = true;
            func.apply();
            setTimeout(() => {
                throttling = false;
            }, limit);
        }
    };
}
document.getElementById(`img-inactive-1`).addEventListener(`click`, throttle(function() {onclick_Img_1()}, 1100))
document.getElementById(`img-inactive-2`).addEventListener(`click`, throttle(function() {onclick_Img_2()}, 1100))
document.getElementById(`img-inactive-3`).addEventListener(`click`, throttle(function() {onclick_Img_3()}, 1100))

async function typeSentence(sentence, eleRef, delay, cursor) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      if (window.getComputedStyle(document.getElementById(cursor)).getPropertyValue('border-radius') == '0px'){
          return
      }
      await waitForMs(delay);
      document.getElementById(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
async function deleteSentence(eleRef, delay, cursor) {
    const sentence = document.getElementById(eleRef).textContent;
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      if (window.getComputedStyle(document.getElementById(cursor)).getPropertyValue('border-radius') == '0.1px'){
        return
      }
      await waitForMs(delay);
      letters.pop();
      document.getElementById(eleRef).innerText = letters.join("");
    }
  }
  
  
function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function run_Dot_0 (){
    if (document.getElementById(`Home`).textContent == ""){
        document.getElementById('typing-cursor-0').style.display = 'flex'
        typeSentence("Home", "Home", 50, 'typing-cursor-0')
    }
}
async function unrun_Dot_0(){
    await deleteSentence(`Home`, 50, 'typing-cursor-0')
    setTimeout(function(){
        document.getElementById('typing-cursor-0').style.display = 'none'
    },70)
}
async function run_Dot_1 (){
    if (document.getElementById('Certificates').textContent == ""){
        document.getElementById('typing-cursor-1').style.display = 'flex'
        typeSentence("Certificates", "Certificates", 30, 'typing-cursor-1')
    }
}
async function unrun_Dot_1(){
    await deleteSentence(`Certificates`, 30, 'typing-cursor-1')
    setTimeout(function(){
        document.getElementById('typing-cursor-1').style.display = 'none'
    },70)
}
async function run_Dot_2 (){
    if (document.getElementById('Music').textContent == ""){
        document.getElementById('typing-cursor-2').style.display = 'flex'
        typeSentence("Music", "Music", 50, 'typing-cursor-2')
    }
}
async function unrun_Dot_2(){
    await deleteSentence(`Music`, 50, 'typing-cursor-2')
    setTimeout(function(){
        document.getElementById('typing-cursor-2').style.display = 'none'
    },70)
}
async function run_Dot_3 (){
    if (document.getElementById('Sport').textContent == ""){
        document.getElementById('typing-cursor-3').style.display = 'flex'
        typeSentence("Sport", "Sport", 50, 'typing-cursor-3')
    }
}
async function unrun_Dot_3(){
    await deleteSentence(`Sport`, 50, 'typing-cursor-3')
    setTimeout(function(){
        document.getElementById('typing-cursor-3').style.display = 'none'
    },70)
    
}

function check (){
    let element_0 = document.getElementById('typing-cursor-0');
    let Display_0 = window.getComputedStyle(element_0).getPropertyValue('border-radius');
    let element_1 = document.getElementById('typing-cursor-1');
    let Display_1 = window.getComputedStyle(element_1).getPropertyValue('border-radius');
    let element_2 = document.getElementById('typing-cursor-2');
    let Display_2 = window.getComputedStyle(element_2).getPropertyValue('border-radius');
    let element_3 = document.getElementById('typing-cursor-3');
    let Display_3 = window.getComputedStyle(element_3).getPropertyValue('border-radius');
    console.log(Display_0)

    if (Display_0 == '0px'){
        unrun_Dot_0()
    }if(Display_0 == '0.1px'){
        run_Dot_0()
    }if(Display_1 == '0px'){
        unrun_Dot_1()
    }if(Display_1 == '0.1px'){
        run_Dot_1()
    }if(Display_2 == '0px'){
        unrun_Dot_2()
    }if(Display_2 == '0.1px'){
        run_Dot_2()
    }if(Display_3 == '0px'){
        unrun_Dot_3()
    }if(Display_3 == '0.1px'){
        run_Dot_3()
    }
    setTimeout(function(){
        check()
    },150)
}
check()
    
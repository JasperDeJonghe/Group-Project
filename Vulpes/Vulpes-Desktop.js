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
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
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
async function run_Name (){
    await typeSentence("Vulpes", "name", 150, 'images');
    await waitForMs(5000)
    await deleteSentence(`name`, 150, 'git')
    await typeSentence('Ties', "name", 150, 'images')
    await waitForMs(2500)
    await deleteSentence(`name`, 150, 'git')
    run_Name()
}
run_Name()
async function run_Dot_0 (){
    if (document.getElementById(`Home`).textContent == ""){
        document.getElementById('typing-cursor-0').style.display = 'flex'
        typeSentence("Home", "Home", 70, 'typing-cursor-0')
    }
}
async function unrun_Dot_0(){
    await deleteSentence(`Home`, 70, 'typing-cursor-0')
    setTimeout(function(){
        document.getElementById('typing-cursor-0').style.display = 'none'
    },70)
}
async function run_Dot_1 (){
    if (document.getElementById('Certificates').textContent == ""){
        document.getElementById('typing-cursor-1').style.display = 'flex'
        typeSentence("Certificates", "Certificates", 70, 'typing-cursor-1')
    }
}
async function unrun_Dot_1(){
    await deleteSentence(`Certificates`, 70, 'typing-cursor-1')
    setTimeout(function(){
        document.getElementById('typing-cursor-1').style.display = 'none'
    },70)
}
async function run_Dot_2 (){
    if (document.getElementById('Music').textContent == ""){
        document.getElementById('typing-cursor-2').style.display = 'flex'
        typeSentence("Music", "Music", 70, 'typing-cursor-2')
    }
}
async function unrun_Dot_2(){
    await deleteSentence(`Music`, 70, 'typing-cursor-2')
    setTimeout(function(){
        document.getElementById('typing-cursor-2').style.display = 'none'
    },70)
}
async function run_Dot_3 (){
    if (document.getElementById('Sport').textContent == ""){
        document.getElementById('typing-cursor-3').style.display = 'flex'
        typeSentence("Sport", "Sport", 70, 'typing-cursor-3')
    }
}
async function unrun_Dot_3(){
    await deleteSentence(`Sport`, 70, 'typing-cursor-3')
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

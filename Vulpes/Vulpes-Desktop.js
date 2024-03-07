async function typeSentence(sentence, eleRef, delay) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
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
      await waitForMs(delay);
      letters.pop();
      document.getElementById(eleRef).innerText = letters.join("");
    }
  }
async function run_Name (){
    await typeSentence("Vulpes", "name", 150);
    await waitForMs(5000)
    await deleteSentence(`name`, 150)
    await typeSentence('Ties', "name", 150)
    await waitForMs(2500)
    await deleteSentence(`name`, 150)
    run_Name()
}
run_Name()
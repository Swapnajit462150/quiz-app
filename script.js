const questions =[
    {
        'que':'Which of the folling is an inline elment in html ?',
        'a': 'h1',
        'b': 'a',
        'c': 'p',
        'd': 'li',
        'correct': 'b'
    },
    {
        'que':'Which of the folling is an inline elment in html ?',
        'a': 'h1',
        'b': 'p',
        'c': 'a',
        'd': 'li',
        'correct': 'c'
    },
    {
        'que':'Which of the folling is an inline elment in html ?',
        'a': 'a',
        'b': 'h1',
        'c': 'p',
        'd': 'li',
        'correct': 'a'
    }
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion =()=>{
    if(index === total){
      return  endQuiz()
    }
    reset();
    const data = questions[index]
    queBox.innerText = `${index+1}-${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz =()=>{
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer =()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
                
            }
        }
    )
    return answer;
}

 const reset =()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
 }

 const endQuiz=()=>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center"
    <h3> Test Completed...</h3>
    <h2> ${right} / ${total}  Corect.
    </div>
     `
 }
loadQuestion();
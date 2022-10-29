let input = document.querySelector("#inputTask")
let btn = document.querySelector("#addTask")
let ul = document.querySelector("#taskList")



btn.addEventListener('click' , ()=>{
    let li = document.createElement("li");
        li.innerHTML = input.value;
        li.classList.add(".txt");

        ul.append(li);
        // for complete the task
        let btn1 = document.createElement("button");
        btn1.innerHTML = ("✅");
        li.append(btn1);
        btn1.classList.add('btns');

        btn1.addEventListener('click', (ev)=>{
            li.classList.toggle("completed");
        });

        // delete the task 
        let btn2=document.createElement("button");
        li.append(btn2);
        btn2.innerHTML=("🗑️")
        btn2.classList.add('btns')

        btn2.addEventListener('click', (ev)=>{
            li.remove();
        })

        input.value = ""
})

document.body.addEventListener("keydown",(ev)=> {
    if(ev.key == "Enter"){
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.classList.add(".txt");

        ul.appendChild(li);
        // for complete the task


     let btn1 = document.createElement("button");
        btn1.innerHTML = ("✅");
        li.append(btn1);
        btn1.classList.add('btns');
        btn1.classList.add('btns1');

        btn1.addEventListener('click', (ev)=>{
            li.classList.toggle("completed");
        });


        // delete the task 
        let btn2=document.createElement("button");
        li.append(btn2);
        btn2.innerHTML='🗑️'
        btn2.classList.add('btns')

        btn2.addEventListener('click', (ev)=>{
            li.remove();
        })
        input.value = ""

    }
});
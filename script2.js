let input = document.querySelector("#inputTask")
let btn = document.querySelector("#addTask")
let ul = document.querySelector("#taskList")


// code for click function by button to press the add button and perform the task 
btn.addEventListener('click', () => {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add(".txt");
    ul.append(li);

    // for making the check button 

    let btn1 = document.createElement("button");
    btn1.innerHTML = ("✅");
    li.append(btn1);
    btn1.classList.add('btns');

    // for complete the task make the line through on task

    btn1.addEventListener('click', (ev) => {
        li.classList.toggle("completed");
    });

    // Adding the delete button

    let btn2 = document.createElement("button");
    li.append(btn2);
    btn2.innerHTML = ("🗑️")
    btn2.classList.add('btns')

    // for delete the task from the list

    btn2.addEventListener('click', (ev) => {
        li.remove();
    })

    // for clear the input and make this ready for next inserting new task

    input.value = ""
})

// same thing with the help of ("Enter Button")
document.body.addEventListener("keydown", (ev) => {
    if (ev.key == "Enter") {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.classList.add(".txt");

        ul.appendChild(li);

        // for making the check button 

        let btn1 = document.createElement("button");
        btn1.innerHTML = ("✅");
        li.append(btn1);
        btn1.classList.add('btns');

        // for complete the task make the line through on task

        btn1.addEventListener('click', (ev) => {
            li.classList.toggle("completed");
        });


        // Adding the delete button

        let btn2 = document.createElement("button");
        li.append(btn2);
        btn2.innerHTML = '🗑️'
        btn2.classList.add('btns')

        // for delete the task from the list

        btn2.addEventListener('click', (ev) => {
            li.remove();
        })

        // for clear the input and make this ready for next inserting new task

        input.value = ""

    }
});

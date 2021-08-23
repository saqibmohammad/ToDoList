// heading for day month year

let today = new Date();
document.getElementById("date").innerHTML = today.toDateString();

const timehour = new Date();
const timeminute = new Date(); 



//task
let myNodelist = document.getElementsByTagName("li");
let j;
for (j = 0; j < myNodelist.length; j++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[j].appendChild(span);
}

// close button
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

function addtask() {
    let taskadd = document.createElement("li");
    let inputvalue = document.getElementById("taskname").value;
    let text  = document.createTextNode(inputvalue);
    text.className = "testclass";
    let timeselect = document.getElementById("timesel").value;
    let text1 = document.createElement("span");
    text1.innerHTML = timeselect;
    text1.className = "timeclass";
    

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.style.marginRight = "20px";

    
    taskadd.appendChild(check);
    taskadd.appendChild(text1);
    taskadd.insertBefore(text , text1);
    if (timeselect === '') {
        let blanktime  = document.createTextNode(" ", timeselect);
        taskadd.appendChild(blanktime);
        document.getElementById("mylist").appendChild(taskadd);
      } else {
        document.getElementById("mylist").appendChild(taskadd);
      }
      document.getElementById("timesel").value = "";
    
    if (inputvalue === '') {
        let blank  = document.createTextNode("Blank Task", inputvalue);
        taskadd.appendChild(blank);
        document.getElementById("mylist").appendChild(taskadd);
      } else {
        document.getElementById("mylist").appendChild(taskadd);
      }
      document.getElementById("taskname").value = "";

     
    
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      span.style.paddingRight = "30px";
      span.style.position = "absolute";
      span.style.right = "0";
      span.style.fontSize = "20px"
      taskadd.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }
    
}







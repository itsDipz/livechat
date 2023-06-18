let test_dom_ele = document.createElement("div");
test_dom_ele.style.width = "200px";
test_dom_ele.style.height = "200px";
test_dom_ele.style.backgroundColor = "lime";

document.querySelector("body").appendChild(test_dom_ele);

test_dom_ele.addEventListener("click", ()=> {
    console.log("hello")
})
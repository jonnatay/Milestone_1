function mark(el) {
    if(el.style.border == "5px solid blue") {
        el.style.border = "none"; 
        work.style.border = "none";
        school.style.border = "none";
        home.style.border = "none";
    } else { 
        work.style.border = "none";
        school.style.border = "none";
        home.style.border = "none";
        el.style.border = "5px solid blue";
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  // AOS.init({
  //   // duration: 1200,
  // })
  AOS.init();

  function myFunction() {
    var element = document.querySelectorAll(".q-100");
    for (var i = 0; i < element.length; i++) {
    element[i].classList.add("w-full");
    }
    var element1 = document.querySelectorAll(".q-50");
    for (var i = 0; i < element1.length; i++) {
      element1[i].classList.add("w--50");
    }
    var element3 = document.querySelectorAll(".q-75");
    for (var i = 0; i < element3.length; i++) {
      element3[i].classList.add("w--75");
    }
    var element2 = document.querySelectorAll(".q-25");
    for (var i = 0; i < element2.length; i++) {
      element2[i].classList.add("w--25");
    }
 }
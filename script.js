var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader1").style.display = "none";
    document.getElementById("loader2").style.display = "none";
  document.getElementById("myDiv").style.display = "block";

}

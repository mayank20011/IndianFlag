const svgpath = document.querySelectorAll("#indianmap svg #surface1 path");


function defaultColor() {
  svgpath.forEach((path, index) => {
    path.style.cssText = path.style.cssText.replace(
      "fill: rgb(255, 255, 255);",
      "fill: rgb(209, 219, 221);"
    );
  });
}

let path;
function changeMap(e) {
  path = e.target;
  path.style.scale = "1.02";
  let stylestring = path.style.cssText;
  stylestring = stylestring.replace(
    "fill: rgb(209, 219, 221);",
    "fill: rgb(190, 227, 235);"
  );
  stylestring = stylestring.replace(
    "stroke: rgb(0, 0, 0)",
    "stroke: rgb(190, 227, 235)"
  );
  path.style.cssText = stylestring;
}

function normalMap(e) {
  path = e.target;
  path.style.scale = "1";
  let stylestring = path.style.cssText;
  stylestring = stylestring.replace(
    "fill: rgb(190, 227, 235);",
    "fill: rgb(209, 219, 221);"
  );
  stylestring = stylestring.replace(
    "stroke: rgb(190, 227, 235)",
    "stroke: rgb(0, 0, 0)"
  );
  path.style.cssText = stylestring;
}

function bringinfo(e) {
  const infodiv=document.querySelector(".infodiv");
  document.querySelector(".infodiv").innerHTML=`
  <h1>Wlcome to ${e.target.attributes[0].value}</h1>
  `
  document.querySelector(".infodiv").style.transform = "translateX(0%)";
}

function removeinfodiv() {
  document.querySelector(".infodiv").style.transform = "translateX(100%)";
}
function displayname(e)
{
   console.log(e.target.attributes[0]);
}
for (let i = 0; i < svgpath.length; i++) {
  path = svgpath[i];
  path.addEventListener("mouseover", changeMap);
  path.addEventListener("mouseover", displayname);
  path.addEventListener("mouseover", bringinfo);
  path.addEventListener("mouseout", normalMap);
  path.addEventListener("mouseout", removeinfodiv);
}

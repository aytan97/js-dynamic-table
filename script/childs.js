let tableRoot = document.querySelector("root");
let heading = document.createElement("h1");
let headerText = document.createTextNode("Dynamic Table View");
heading.appendChild(headerText);
tableRoot.appendChild(heading);

let tble = document.createElement("table");
tableRoot.appendChild(tble);

let tbleHeader = document.createElement("thead");
tble.appendChild(tbleHeader);

let tbleHead = document.createElement("tr");
tbleHeader.appendChild(tbleHead);

let tbleBody = document.createElement("tbody");
tble.appendChild(tbleBody);

let tableData = [
  {
    firstName: "Jhon",
    lastName: "Doe",
    age: 40,
    mail: "jhon.doe@example.com",
    address: "Usa",
    phone: "555-785-99-68",
    birthDate: "01.01.2000",
  },
  {
    firstName: "Dhon",
    lastName: "Doe",
    age: 42,
    mail: "jhon.doe@example.com",
    address: "Usa",
    phone: "555-785-99-68",
    birthDate: "01.01.2000",
  },
  {
    firstName: "Leon",
    lastName: "Doe",
    age: 43,
    mail: "jhon.doe@example.com",
    address: "Usa",
    phone: "555-785-99-68",
    birthDate: "01.01.2000",
  },
  {
    firstName: "Bill",
    lastName: "Doe",
    age: 44,
    mail: "jhon.doe@example.com",
    address: "Usa",
    phone: "555-785-99-68",
    birthDate: "01.01.2000",
  },
];

let tablehead = document.querySelector("thead tr");
let tablebody = document.querySelector("tbody");

if (tableData.length > 0) {
  for (let i = 0; i < Object.keys(tableData).length; i++) {
    let tbleHead = document.createElement("tr");
    tbleHead.classList.add("row", "text-break");
    tbleBody.appendChild(tbleHead);

    for (let k = 0; k < Object.keys(tableData[i]).length; k++) {
      if (tablehead.childNodes[k] === undefined) {
        let tbleHeadElements = document.createElement("th");

        if (k !== Object.values(tableData[i]).length - 1) {
          tbleHeadElements.classList.add("col", "d-none", "d-sm-block");
        } else {
          tbleHeadElements.classList.add("col", "d-none", "d-md-block");
        }

        let headElementText = document.createTextNode(
          `${Object.keys(tableData[i])[k]}`
        );
        tbleHeadElements.appendChild(headElementText);
        tablehead.appendChild(tbleHeadElements);
      }
    }
  }
}

if (tableData.length > 0) {
  for (let i = 0; i < Object.values(tableData).length; i++) {
    for (let k = 0; k < Object.values(tableData[i]).length; k++) {
      let tbleData = document.createElement("td");

      if (k !== Object.values(tableData[i]).length - 1) {
        tbleData.classList.add("col-12", "col-sm");
      } else {
        tbleData.classList.add("col", "d-sm-none", "d-md-block");
      }

      let tbleDataText = document.createTextNode(
        `${Object.values(tableData[i])[k]}`
      );
      
      tbleData.appendChild(tbleDataText);
      tablebody.childNodes[i].appendChild(tbleData);
    }
  }
}

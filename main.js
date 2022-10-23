
let names = ["Jace", "Jazz", "Jada", "Jack"]
let box = document.getElementById("box")

let kidsPairs = function(arr){
    let group = []
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let groups = [arr[i], arr[j]]
            group.push(groups)

        }
    }
    return group
}


function showPairs(tableData){
    let table = document.createElement("table")
    let tableBody = document.createElement("tbody")
    tableData.forEach(function(rowData) {
        let row = document.createElement("tr")

        rowData.forEach(function(cellData) {
            let cell = document.createElement("td")
            cell.appendChild(document.createTextNode(cellData))
            row.appendChild(cell)
        })
        tableBody.appendChild(row)
    })
    table.appendChild(tableBody)
    document.body.appendChild(table)
}

showPairs(kidsPairs(names))
console.log(kidsPairs(names))

let names = ["Jace", "Jazz", "Jada", "Jack"]

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


function showPairs(kids){
    let table = document.createElement("table")
    let tableBody = document.createElement("tbody")
    kids.forEach(function(kid) {
        let row = document.createElement("tr")

        kid.forEach(function(name) {
            let cell = document.createElement("td")
            cell.appendChild(document.createTextNode(name))
            row.appendChild(cell)
        })
        tableBody.appendChild(row)
    })
    table.appendChild(tableBody)
    document.body.appendChild(table)
}

showPairs(kidsPairs(names))

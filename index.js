((id, ignoreRowIdx, criteria, backgroundColor) => {
  Array
    .from(document.getElementById(id).rows)
    .filter((row, index) => !ignoreRowIdx.includes(index) && criteria(row))
    .forEach(row => row.style.backgroundColor = backgroundColor)
 })("timeTbl", [0], row => row.cells[3].innerText == "Individual" && row.cells[7].innerText == "Software", "yellow")

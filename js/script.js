//DOm button
let BtnIncome = document.getElementById('btnIncome');
let BtnExpense = document.getElementById('btnExpense');

//global variable
let transactions = {
    income: [
        {
            id: 1,
            transaksi: 'Gaji Bulanan',
            saldo: 5000000
        }
    ],
    expense: [
        {
            id: 1,
            transaksi : 'bayar tagihan',
            saldo: 2000000
        }
    ]
}
function incomeHandler(){
    //input
let namaValue = document.getElementById('nama').value;
let saldoValue = document.getElementById('saldo').value;
let id ;
if(transactions.income.length == 0){
id=1
} else {
    id = transactions.income[transactions.income.length - 1].id + 1
}
    let tmpObj = {
        id,
        transaksi: namaValue,
        saldo: saldoValue
    }
    transactions.income.push(tmpObj)
    console.log('incomeHandler')
    console.log(transactions)
    getTransactions()
    saldoCount()
    alert(`"${namaValue}" telah di tambahkan ke dalam income`)
}

function expenseHandler(){
    //input
let namaValue = document.getElementById('nama').value;
let saldoValue = document.getElementById('saldo').value;
let id ;
if(transactions.expense.length == 0){
id=1
}
else {
    id = transactions.expense[transactions.expense.length - 1].id + 1
}
    let tmpObj = {
        id,
        transaksi: namaValue,
        saldo: saldoValue
    }
    transactions.expense.push(tmpObj)
    console.log(transactions)
    console.log('expenseHandler')
    getTransactions()
    saldoCount()
    alert(`"${namaValue}" telah di tambahkan ke dalam expense`)
}
//get transactions 
//tbody table
function getTransactions() {
    //tbody table
let tBodyInc = document.getElementById('tBody-inc');
let tBodyExp = document.getElementById('tBody-exp');
tBodyInc.innerHTML = '';
tBodyExp.innerHTML = '';

transactions.income.forEach((inc) => {
    tBodyInc.innerHTML += `<tr>
    <td>${inc.id}</td>
    <td>${inc.transaksi}</td>
    <td>${inc.saldo}</td>
    </tr>`
})
transactions.expense.forEach((exp) => {
    tBodyExp.innerHTML += `<tr>
    <td>${exp.id}</td>
    <td>${exp.transaksi}</td>
    <td>${exp.saldo}</td>
    </tr>`
})
}

function saldoCount(){
    let totalIncome = 0
    let totalExpense = 0
    transactions.income.forEach((inc) => {
        totalIncome += +inc.saldo
    })
    transactions.expense.forEach((exp) => {
        totalExpense += +exp.saldo
    })
    let saldo = totalIncome - totalExpense
    let saldoValue = document.getElementById('saldo-value')
    saldoValue.innerHTML = saldo
    console.log(`total income: ${totalIncome}`)
    console.log(`total expense: ${totalExpense}`)
    console.log(`saldo: ${saldo}`)
}
//add event listener
BtnIncome.addEventListener('click', incomeHandler)
BtnExpense.addEventListener('click', expenseHandler)
getTransactions()
saldoCount()
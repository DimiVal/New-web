document.getElementById("showTable").innerHTML = "Table: ";
document.getElementById("myBtn").addEventListener("click", createTable);
document.getElementById("UserTable").addEventListener("click", createAlbumTable);

function createTable() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            createUserTable(myJson)
        })
}

function createUserTable(myUsers) {
    const col = [];
    for (let i = 0; i < myUsers.length; i++) {
        for (const key in myUsers[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    let table = document.createElement("table");

    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
        const th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let i = 0; i < myUsers.length; i++) {
        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            const tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myUsers[i][col[j]];
        }
    }
    let divContainer = document.getElementById("showTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function onRowClick(myUsers, callback) {
    var table = document.getElementById(myUsers),
        rows = table.getElementsByTagName("tr"),
        i;
    for (i = 0; i < rows.length; i++) {
        table.rows[i].onclick = function (row) {
            return function () {
                callback(row);
            };
        }(table.rows[i]);
    }
};

onRowClick("showTable", function (row) {
    var value = row.getElementsByTagName("td")[0].innerHTML;
    document.getElementById('click-response').innerHTML = value;

    function createTable() {
    fetch('https://jsonplaceholder.typicode.com/albums'    )
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            showAlbumTable(myJson)
        });
    }
});

function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("showTable");

    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
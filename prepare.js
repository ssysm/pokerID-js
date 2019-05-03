function generateTable(){
    pokerType.map((d,i)=>{
        tableContentElm.innerHTML +=`
            <tr>
                <td>${d}</td>
                <td id="${i}-counter">0</td>
                <td id="${i}-percent">0%</td>
            </tr>
        `;
    });
    tableContentElm.innerHTML+=`
        <tr>
            <td>Total</td>
            <td id="total-counter">0</td>
            <td id="total-percent">100%</td>
        </tr>
    `;
}

generateTable();
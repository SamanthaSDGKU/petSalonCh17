function displayTable(aPet){
    if(aPet.service==="shower"){
        aPet.price=20;
    }else if(aPet.service==="full"){
        aPet.price=40;
    }else if(aPet.service==="nails"){
        aPet.price=10;
    }else if(aPet.service==="hair"){
        aPet.price=15;
    }

    // add the type of pet

    
    var row=`
        <tr> 
            <td>${aPet.name} </td>
            <td>${aPet.age}</td>
            <td> ${aPet.gender}</td>
            <td> ${aPet.breed}</td>
            <td> ${aPet.service}</td>
            <td> ${aPet.owner}</td>
            <td> ${aPet.phone}</td>
            <td> $${aPet.price}</td>
        </tr>
    `;
    $('#pet-table').append(row);
    //document.getElementById('pet-table').innerHTML+=row;
    profitCalculation();

}
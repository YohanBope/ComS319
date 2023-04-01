/*
Author: Yohan Bopearatchy
ISU Netid : yohanb@iaste.edu
Date : March 29th, 2023
*/

export function UserCard(name, amout, married, points, address) {
    var ring = ({married} ? "Married" : "Single");
    return <div>
        <h1>{name}</h1>
        <p>💵{amout}</p>
        <p>{ring}</p>
        <ul>
            <li>{address[1]}</li>
            <li>{address[2]}</li>
            <li>{address[3]}</li>
        </ul>
    </div>

}
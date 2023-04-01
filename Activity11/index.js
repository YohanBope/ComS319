/*
Author: Yohan Bopearatchy
ISU Netid : yohanb@iaste.edu
Date : March 29th, 2023
*/

import React from "react";
import ReactDOM from "react-dom/client"
import { UserCard } from "./UserCard";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)
root.render(<div>
    <UserCard name="Elton John" />
    <UserCard amount={3000} />
    <UserCard married={true} />
    <UserCard points={[100, 101.1, 202, 2]} />
    <UserCard address={{ street: "123 Bellmont Rd.", city: "Ames", state: "Iowa" }} />

    <UserCard name="John Travolta" />
    <UserCard amount={3500} />
    <UserCard married={false} />
    <UserCard points={[1, 2, 3, 4]} />
    <UserCard address={{ street: "5010 Av Some", city: "Tempe", state: "AZ" }} />
</div>);

import React from "react";
import Profile from "./profil/profile";
import "./App.css";

function App() {
    const handleName = (name) => {
        alert(`Hi ${name} ! :D `);
    };

    return (
        <div className="App">
            <Profile
                FullName="mohamed aloui"
                Bio="mohamed aloui age 24 ans etudient aux go my code  "
                Profession="etudient"
                handleName={handleName}
            >
                <img width="300px" src={"/image1.jpg"} alt={"mohamed"} />
            </Profile>
        </div>
    );
}

export default App;

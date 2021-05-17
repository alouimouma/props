import React from "react";
import PropTypes from "prop-types";

const Profile = ({ FullName, Bio, Profession, children, handleName }) => {
    return (
        <div>
            <div>
                <h1> This is {FullName} </h1>
                <span className="image1"> {children} </span>
            </div>
            <div>
                <h4>
                    <span style={{ color: "red" }}> FullName:</span>

                    <b>
                        <i>{FullName}</i>
                    </b>
                </h4>
            </div>
            <div>
                <h4 style={{ color: "red" }}>Bio:</h4>
                <p>
                    <i>{Bio} </i>
                </p>
            </div>
            <div>
                <h4>
                    <span style={{ color: "red" }}> Profession:</span>
                    <i> {Profession} </i>
                </h4>
            </div>
            <button onClick={() => handleName(FullName)}>Click Me </button>
        </div>
    );
};
Profile.propTypes = {
    FullName: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Profession: PropTypes.string.isRequired,
};

Profile.defaultProps = {
    FullName: "mohamed",
    Bio: "this is mouma",
    Profession: "comptable",
};

export default Profile;

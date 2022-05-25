import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Hello, world!</h1>
                <hr className="my-4" />
                <Link className="btn btn-primary btn-lg" to="/login" role='button'>Login</Link>
            </div>
        </div>
    );
};

export default Home;
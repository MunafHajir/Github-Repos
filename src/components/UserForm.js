import React from 'react';

const UserForm = (props) => {

    return (
        <div className="box-container">
            <div className="box">
                <form onSubmit = {props.getUser}> 
                    <input placeholder = "Enter Username" style = {{margin:"20px auto", display:"block"}} type="text" name="username" />
                    <button className="button btnPush btnBlueGreen">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
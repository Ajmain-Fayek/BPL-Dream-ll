import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Msg = ({ closeToast, toastProps }) => (
    <div>
        Lorem ipsum dolor {toastProps.position}
        <button>Retry</button>
        <button onClick={closeToast}>Close</button>
    </div>
);

function Toast() {
    const displayMsg = () => {
        toast(<Msg />);
        // toast(Msg) would also work
    };


        <div>
            <button onClick={displayMsg}>Click me</button>
            <ToastContainer />
        </div>

}

export default Toast
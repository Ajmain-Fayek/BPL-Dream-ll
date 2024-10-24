import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center p-2">
            <h1 className="font-bold font-sora btn btn-lg btn-primary">
                Hello World
            </h1>
        </div>
    );
}

export default App;

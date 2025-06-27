import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
    return (
        <div className="flex-center h-dvh w-dvw">
            {/* a spinner */}
            <Loader2 className="size-24 animate-spin stroke-red-400 lg:size-64" />
            {/* <h1>Loading...</h1> */}
        </div>
    );
};

export default loading;

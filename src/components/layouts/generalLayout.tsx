import React from "react";

type GeneralLayoutProps = {children: any[]}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
    return (
        <>
        <div>
            {children[0 as keyof typeof children]}
        </div>
        <div>
            {children[1 as keyof typeof children]}
        </div>
        <div>
            {children[2 as keyof typeof children]}
        </div>
        <div>
            {children[3 as keyof typeof children]}
        </div>
        </>
    )
}


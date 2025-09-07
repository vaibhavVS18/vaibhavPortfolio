import React, {useState, useEffect} from "react";

const Footer = ()=>{
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = "Designed By V@ibh@V Sharma !";

    useEffect(()=>{
        let timeout;

        if(!isDeleting && text.length < fullText.length){
            // forward type
            timeout = setTimeout(()=>{
                setText(fullText.slice(0, text.length + 1));
            }, 110);
        }
        else if(!isDeleting && text.length===fullText.length){
            // pause a full text
            timeout = setTimeout(()=>{
                setIsDeleting(true);
            }, 1400);
        }
        else if(isDeleting && text.length > 0){
            // deleting back
            timeout = setTimeout(()=>{
                setText(fullText.slice(0, text.length-1));
            }, 75);
        }
        else if(isDeleting && text.length==0){
            // re typing
            setIsDeleting(false);
        }

        return ()=> clearTimeout(timeout);
    }, [text, isDeleting, fullText]);


    return (
        <div className="w-full flex justify-center items-center py-6">
            <p className="text-blue-200 font-mono text-lg border-r-2 border-white-500 animate-pulse pr-1">
                {text}
            </p>
        </div>
    );

};

export default Footer;
import React, { useEffect, useRef } from 'react';

const SubstackWidget = () => {
    useEffect(() => {
        // Define the CustomSubstackWidget on the window object
        window.CustomSubstackWidget = {
          substackUrl: "kojimena.substack.com",
          placeholder: "example@gmail.com",
          buttonText: "Subscribe",
          theme: "custom",
          colors: {
            primary: "#FFFFFF",
            input: "#055FB9",
            email: "#FFFFFF",
            text: "#000000",
          },
        };

        window.SubstackFeedWidget = {
            substackUrl: "kojimena.substack.com",
            posts: 3,
        };
    
        // Create a new script element
        const script = document.createElement('script');
        const script2 = document.createElement('script');
    
        // Set the source of the script to the Substack widget script
        script.src = "https://substackapi.com/widget.js";
        script.async = true;

        script2.src = "https://substackapi.com/embeds/feed.js";
        script2.async = true;
    
        // Append the script to the body
        document.body.appendChild(script);
        document.body.appendChild(script2);
    
        // Cleanup function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(script);
          document.body.removeChild(script2);
        }
      }, []);
    
      return (
        <div className='flex flex-col justify-center items-center px-10 gap-4'>
            <div id="substack-feed-embed"></div>
            <div id="custom-substack-embed"></div>
        </div>
      );
};

export default SubstackWidget;

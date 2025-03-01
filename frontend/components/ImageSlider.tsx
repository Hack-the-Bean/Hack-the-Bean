import React, { useEffect } from "react";
import "juxtapose"; 

export default function ImageSlider({ leftImageSrc, rightImageSrc }) {
    useEffect(() => {
        new juxtaposejs.JXSlider('#juxtapose', 
            [
                {
                    src: leftImageSrc,
                    label: 'Before'
                },
                {
                    src: rightImageSrc,
                    label: 'After'
                }
            ],
            {
                animate: true,
                showLabels: true,
                showCredits: false,
                startingPosition: "50%",
                makeResponsive: true
            });
    })

    return (
        <>
            <div id="juxtapose"></div>
        </>
    );
};
import React, { useRef, useState } from 'react';
import { StyleSheet, css } from "aphrodite";


function Box(props) {
    // const ourMediaQuery = useMediaQuery('(min-width:400px)');

    const [clicked,setCliked] = useState(0);


    const styles = StyleSheet.create({


        box: {
            display: 'flex',
            height: '20vw',
            width: '20vw',
            textAlign: 'center',
            lineHeight: '3vw',
            backgroundColor: props.colorCode,
            

            color: 'white',
            fontWeight: '600',
            justifyContent: 'center',
            alignItems: 'center',
            
        },


       

    });


    function clickHandle() {
        setCliked(1-clicked)
    }

    return (

        <div className={css(styles.box)}
        onClick={clickHandle}>
        
        
           {props.colorName}
           <br />
           { clicked == 1 ?  props.colorCode.toUpperCase() : <> </>}
        </div>

    );
};
export default Box;
import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from "aphrodite";
import { useState } from "react";
import Box from './components/box';
function App() {
  const styles = StyleSheet.create({


    page: {
   
      
      position: 'relative',
      left: '10vw',
     
      display: 'flex',

    

    },
    container: {
 
      display: 'grid',
    
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      
    }
  })



  const colors = [

    { name: "cerulean", code: "#98B2D1" },

    { name: "fuchia rose", code: "#c03a68" },

    { name: "true red", code: "#BF1932" },

    { name: "aqua sky", code: "#71bcbd" },

    { name: "tigerlily", code: "#dd4d33" },

    { name: "blue turquoise", code: "#49a7a4" },

    { name: "sand dollar", code: "#dac7b6" },

    { name: "chili pepper", code: "#8f172a" },

    { name: "blue iris", code: "#4b4b8b" },

    { name: "mimosa", code: "#eab44f" },

    { name: "turqoise", code: "#3caca0" },

    { name: "honeysuckle", code: "#cd4360" },

    
  ]

  const [stateColors, setStateColors] = useState(colors);
  
  function click() {
    console.log('Hello!');
  }
  
  
  return (
    <div className={css(styles.page)}>

      <div className={css(styles.container)}>

        {colors.map((item, groupIndex) => (

          <Box
        
            key= {groupIndex}
            colorName={item.name}
            colorCode={item.code}
          />
           




        ))}
      </div>

    </div>
  );
}

export default App;

import React from 'react'
import {Bar} from 'react-chartjs-2' ;
import { Chart as ChartJS } from 'chart.js/auto';
function Bars({dates,total,counts}) {   
    console.log(dates,total,counts)
  
    
  return (<div>  
    
  <Bar 
   data={{ 
    labels:dates,
    datasets:[
      {
      label:"sale Rs" ,
      data:total, 
      backgroundColor:[ 
        "grey", 
        "yellow", 
        "orange",
        "red",
      ], 
      borderRadius:"5px",
      }, 
      
    ],
      
    }
  } 
  options={ { 
    responsive:true, 
    plugins:{ 
      legend:{ 
         position:"top"
      }, 
      title:{ 
       display:true, 
       text:"sale Amount"
      }
    }
  }

  }
  /> 
  
  </div>
   
  )
}

export default Bars
import React from 'react'
import {Line} from 'react-chartjs-2' ;
import { Chart as ChartJS } from 'chart.js/auto';
function Lines({dates,total,counts}) {   
    console.log(dates,total,counts)
  
    
  return (<div>  
    
  <Line
   data={{ 
    labels:dates,
    datasets:[
      
      {
        label:"count " ,
        data:counts, 
        backgroundColor:[ 
          "blue", 
          "blue", 
          "blue",
          "blue",
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
       text:"sale count"
      }
    }
  }

  }
  /> 
  
  </div>
   
  )
}

export default Lines
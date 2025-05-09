import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
import ".//CSS/TaxBar.css";
function TaxBar()
{
//    const [stdudentSubject, setStudentsubject]= useState([]);
//    const [studentMarks, setStudentMarks]= useState([]);

//    useEffect( ()=>{
//        const sSubject=[];
//        const sMarks=[];
//        const getStudentdata= async()=>{
//        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
//        const resData= await reqData.json();       
//        for(let i=0; i< resData.length; i++)
//        {
//         sSubject.push(resData[i].subject);
//         sMarks.push(parseInt(resData[i].marks));
//        }
//        setStudentsubject(sSubject);
//        setStudentMarks(sMarks);
//         //console.log(resData); 
//        }

//     getStudentdata();

//    },[]);

    return(
        <React.Fragment>
            <div className="tax-container">

                <Chart 
                type="pie"
                width={300}
                height={300}

                series={ [30,70] }                

                options={{
                        title:{ text:"Tax"
                        } , 
                       noData:{text:"Empty Data"},    
                       labels: ["Tax Paid", "Total Tax"],
                       colors:["Brown","Gray"]              
                                        
                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default TaxBar;
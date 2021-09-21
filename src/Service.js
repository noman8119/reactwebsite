import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service=()=>{
    return(
        <>
       <div className="my-5 mx-auto text-center">
  <h1>Our Services</h1>
</div>
    <div className="container-fluid pb-4">
<div className="row">
  <div className="col-10 mx-auto">
<div className="row gy-4">
{

Sdata.map((val)=>{
return(
    <Card key={val.id} imgsrc={val.imgsrc} title={val.title} />
)
})    
}



</div>
  </div>

</div>
   </div>
        </>
    )
}
export default Service;
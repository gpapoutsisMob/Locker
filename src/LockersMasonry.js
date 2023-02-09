import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import LockerItem from "./LockerItem";
import { useState, useEffect } from "react";
import { List } from "@mui/material";
import { data } from './data'
const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,

  pt: 2,
  px: 4,
  pb: 3,
};


export default function LockersMasonry() {

  const [lockers, setLockers] = useState(data)

  // function getLockers() {

  //   console.log("fgsdkgsdfglhdl")

  //   const myHeaders = new Headers({
  //     "Content-Type": "text/plain",
  //     // Authorization:
  //     //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzcyYjMwYmZjNTYxODkxZDQ1ZjhiMDBmMzgxOTIyZDMxNGU2ZWU0YzJmYjBmZjMxMjVlM2QxYTczMzdkNWE0M2VkOTk3ODk1MTc1MTU2OWIiLCJpYXQiOjE2NDMyMTMzNzUsIm5iZiI6MTY0MzIxMzM3NSwiZXhwIjoyMTE2NTk4OTc0LCJzdWIiOiIzMCIsInNjb3BlcyI6W119.rP6UnRnekj764_DsA_d9Tv1QIWayBb9DIaQtMB8im7DasuOoQS0anf4nlX_CgdPpex2ygM5rrolHJiYcXrW9IvsBWR7nNh6DgW6ZXiYTI4TditJUaTO1IoNG7wEUDG1V7SHijMCXAXQr_6_p3_xyeJ2CPaewxIkIev4uduQazLwFZmT0DOsWYCk2BH7n-Zp1OIGuMpKstbkO_O-n3QzznoT-oKd0vMSEAWMXjnYupFIrd5mf0gVZix7dMjal94sWnpz7HU-jvDENgDHLHpsInf50kD3Vffab8df3KrDvC8xmQZ4fhLmkQ01385GlL0EeMkHFSmg-IhSAyucIH0fvq4lqqofvN6wGqp7ZCUxk8S26xNBEtPkJlY_s5p_CSx9wYNsYMKVYD-LBPZyTvfrOlSYAdL21zSDxQDAbP0320W95MBs2EaEsnkk1f1P1i6Z7mZ649QuhtPlLXgqwAFaNzWXNRxtCSwviEmcNW5WyghtyU8qDUg32CV9rngH4NKalkg639AzkhiWRJKAtzClGdvBPFADtj8PyKEoOe1clL7V8Lhg4diXZH5oCrztT_dusmq81iYyUBRtudRPk_LNR-McxotNEupvXMwuInLh8Pw4Ql09tOF-_sAmYFtYPh8mbI97VqWOc-bN9fJgEXl-IDheQ-VWSY7l2M5bxgjjdiYE"
  //   });

  //   return fetch("http://mbt01-erp-01/locker/LockersParcels", {
  //     method: "GET",
  //     headers: myHeaders
  //   })
  //     .then((response) => {
  //       if (response.status === 200){
  //         return response.clone().json();
  //       } else {          
  //         throw new Error("Something went wrong on api server!");
  //       }
  //     })
  //     .then((response) => {
  //       setLockers(response)
  //       return lockers
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // React.useEffect(() => {
  //    getLockers();
  // }, []);
  
  return (
    <>
      <Box sx={{ width: 600, alignContent: "center" }}>
        <Masonry columns={3} spacing={1}>
          {
            lockers?.map((item, index) => (
            <LockerItem
              key={parseInt(item.parcelNumber)}
              height={(item.height === 37.0000000000 ) ? 170 : (item.height === 18.0000000000 ) ? 80 : 35}
              title={item.parcelNumber.toString}
              parcelId={item.parcelId}   
              parcelNumber={item.parcelNumber}  
              lockerState={item.lockerState}
              lockerStatus={item.lockerStatus} 
            />
          ))}
        </Masonry>
      </Box>
    </>
  );
}

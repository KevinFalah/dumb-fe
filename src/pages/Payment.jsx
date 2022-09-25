import React, {useContext, useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import {useMutation, useQuery} from 'react-query'
import {API} from '../config/api'
import Loading from '../components/Loading'
import {RiAttachmentFill} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../context/UserContext'

function Payment() {

  const title = "Be Premium";
  document.title = "Dumbflix | " + title;

  const [loading, setIsLoading] = useState(false)

  const [state] = useContext(UserContext);
  console.log(state);

  let Navigate = useNavigate();


// useEffect(() => {
//   //change this to the script source you want to load, for example this is snap.js sandbox env
//   const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
//   //change this according to your client-key
//   const myMidtransClientKey = "SB-Mid-client-xJ2Vxf8-vRImEHYf";

//   let scriptTag = document.createElement("script");
//   scriptTag.src = midtransScriptUrl;
//   // optional if you want to set script attribute
//   // for example snap.js have data-client-key attribute
//   scriptTag.setAttribute("data-client-key", myMidtransClientKey);

//   document.body.appendChild(scriptTag);
//   return () => {
//     document.body.removeChild(scriptTag);
//   };
// }, []);

// const handleBuy = useMutation(async (e) => {
//   try {
//     e.preventDefault();

//     const config = {
//       headers: {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${localStorage.token}`
//         },
//       },
//     };

//     const response = await API.post("/transaction", config);
//     console.log("ini responnse", response);

//     // Create variabel for store token payment from response here ...
//     const token = response.data.data.token;
//     console.log('testingggg : ', state.payload.token)

//     // Init Snap for display payment page with token here ...
//     window.snap.pay(token, {
//       onSuccess: function (result) {
//         /* You may add your own implementation here */
//         navigate("/profile");
//       },
//       onPending: function (result) {
//         /* You may add your own implementation here */
//         navigate("/payment");
//       },
//       onError: function (result) {
//         /* You may add your own implementation here */
//       },
//       onClose: function () {
//         /* You may add your own implementation here */
//         alert("You closed the popup without finishing the payment");
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// useEffect(() => {
//   setIsLoading(true)

//   setTimeout(() => {
//     setIsLoading(false)
//   },1500)

//   return;
// }, [])



  let { data: user, refetch} = useQuery(
    "userCache",
    async () => {
      try {
        const config = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        };
        const response = await API.get("/check-auth", config);
        return response.data.data;
      } catch (error) {
        console.log(error)
      }
  
    }
  );

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])



useEffect(() => {
  //change this to the script source you want to load, for example this is snap.js sandbox env
  const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
  //change this according to your client-key
  // const myMidtransClientKey = "SB-Mid-client-aAfwA9NGkcUy4r0-";
  const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

  let scriptTag = document.createElement("script");
  scriptTag.src = midtransScriptUrl;
  // optional if you want to set script attribute
  // for example snap.js have data-client-key attribute
  scriptTag.setAttribute("data-client-key", myMidtransClientKey);

  document.body.appendChild(scriptTag);
  return () => {
    document.body.removeChild(scriptTag);
  };

}, []);


const handleBuy = useMutation(async () => {
  try {
    const data = {
      userId: user?.ID,
    };
    const body = JSON.stringify(data);
    const config = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        "Content-type": "application/json",
      },
      body,
    };

    // Insert transaction data
    const response = await API.post("/transaction", config);
    console.log("transaction", response);
    console.log("ini config : ", config)
    const token = response.data.data.token;

    window.snap.pay(token, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        console.log(result);
        Navigate("/profile");
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        console.log(result);
        Navigate("/profile");
      },
      onError: function (result) {
        /* You may add your own implementation here */
        console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        alert("you closed the popup without finishing the payment");
      },
    });
  } catch (error) {}
});



  if(loading) {
    return <Loading />
  }
  return (
    
    <div className="container-fluid sectionPayment">
      <div className="text-center text-light">
        <h1 className="fs-1 fw-bold mb-5">Premium</h1>
        <p className="pPayment">
        Pay Now and enjoy streaming the latest movies from{" "}
          <span className="text-danger fw-bold">DUMBFLIX</span>
        </p>

        <Form style={{width:"60%", margin: "20px auto"}}>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="labelInputFile rounded">Attache proof of transfer <span><RiAttachmentFill style={{fontSize: "30px"}}/></span></Form.Label>
            <Form.Control type="file" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={() => handleBuy.mutate()} className="border-0 btnSubmitPayment py-2 fw-bold">
            Subscribe Here
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Payment;

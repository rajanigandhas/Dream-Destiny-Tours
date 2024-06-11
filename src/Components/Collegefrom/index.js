
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { Card } from "antd";
import { Upload, Button, Icon, Input, Form } from "antd";
import './collegeform.css';
import img1 from "../../images/ourtour.jpg"
import phn from "../../images/call.png"
import home from "../../images/home.png"
import social from "../../images/social1.png"
import mail from "../../images/mail.png"



import {
    fromsaveByApi
} from "../Helper/collegefrom";
const { TextArea } = Input;

const Collegefrom = () => {
  const [loading, setLoading] = useState(false);
  const [orderdata, setOrderdata] = useState(null);
  const [form] = Form.useForm();
  let { id } = useParams();
  const navigate = useNavigate();
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
    let payloadData = {
      ...values,
    };
    setLoading(true);
    fromsaveByApi(payloadData)
      .then(
        async (res) => {
          console.log(" success");
          // alert('Success');
          swal("Feedback", "successfully sent", "success");
          // console.log("res", res);
          // navigate("/")
          setLoading(false);
        },
        (err) => {
          // console.log("error");
          setLoading(false);
          swal("College", "invalid ", "error");
        }
      )
      .catch();
  };

  return (
    <>

      <div className='container-fliud'>
        <div className="contact1">
          <img src={img1} className="img " alt="..." />
          <h1>Contact Us</h1>
          <h2> <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Contact Us</a></li>
            </ol>
             </nav>
          </h2>
          <div cont1>
          <div class="container">
  <div class="row">
    <div class="col">

  <div class="row row-cols-2">
    <div class="col">
    <div class="card " style={{width: '11rem', height:'13rem'}}>
      <img src={phn} class="card-img-top-1" style={{width:'70%', marginLeft:'auto', marginRight:'auto'}}  alt="..."/>
      <div class="card-body">
      <h6 class="card-title">+91 8956789480</h6>
      <h6 class="card-title">+91 9768492068</h6>
    
      </div>
    </div>
    </div>
    <div class="col">
    <div class="card " style={{width: '11rem', height:'13rem'}}>
      <img src={home} class="card-img-top-1" style={{width:'70%', marginLeft:'auto', marginRight:'auto'}}  alt="..."/>
      <div class="card-body">
        <h6 class="card-title">4730 Crystal Springs Dr, Los Angeles, CA 90027</h6>
        
      </div>
    </div>
    </div>
    <div class="col">
    <div class="card " style={{width: '11rem', height:'13rem'}}>
      <img src={mail} class="card-img-top-1"style={{width:'70%', marginLeft:'auto', marginRight:'auto'}}  alt="..."/>
      <div class="card-body">
        <h6 class="card-title">ddtravel@.org info@dd.org</h6>
          
      </div>
    </div>
    </div>
    <div class="col"><div class="card " style={{width: '11rem', height:'13rem'}}>
      <img src={social} class="card-img-top-1" style={{paddingTop:'15px',width:'80%', marginLeft:'auto', marginRight:'auto'}} alt="..."/>
      <div class="card-body">
      <h6 class="card-title">www.insta.com/</h6>
      <h6 class="card-title">www.twitter.com/</h6>
      <h6 class="card-title">www.facebook.com/</h6>
    
      </div>
    </div></div>
  </div>


    </div>


    <div class="col">
    <div item lg={12} sm={24} xs={12}></div>
      <Card style={{ width: 500 ,backgroundColor:' rgb(177, 174, 172)'}} className="text-center m-5">
        <div className="driver-create-card ">
          <div className="title-main">
            <h5>
             
              <span className=" ribbon">Get in touch</span>
             
            </h5>
          </div>
          <hr className="MuiDivider-root MuiDivider-fullWidth css-1wnin34-MuiDivider-root"></hr>
          
          <div item lg={12} sm={24} xs={12}>
          <Form
            name="basic"
            initialValues={orderdata}
            onFinish={onFinish}
            autoComplete="off"
            form={form}
          >
            <div item xs={12} container spacing={2}>
              <div item lg={4} sm={6} xs={12}>
                <Form.Item
                  name="name"
                  id="outlined-basic"
                  label=" Name "
                  variant="outlined"
                  type="text"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your Name!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>
              <div item lg={3} sm={6} xs={12}>
                <Form.Item
                  name="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your email!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>
              <div item lg={3} sm={6} xs={12}>
                <Form.Item
                  name="message"
                  id="outlined-basic"
                  variant="outlined"
                  label="Message"
                  type="text"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your message!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>

              <div item lg={12} sm={12} xs={12} className="edit-button">
                <Form.Item>
                  <Button
                    type="dark"
                    htmlType="submit"
                    className="btn btn-dark m-3 button-hov-add-to-list btn-sm "
                    style={{width:'155px', textAlign:'justify', paddingTop:'0%',backgroundColor:'black',color:'white'}}
                    loading={loading}
                    // disabled={!email || email === ''}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
          </div>
        </div>
      </Card>


    </div>
    
  </div>
</div>


{/* <div class="item">
    <div className="imgcontact" ><img src={home}/></div>
    <span class="caption">Tab</span>
</div> */}


          </div>
          



        </div>
      </div>


      
      
      


      <br></br>
      {/* <div item lg={12} sm={24} xs={12}></div>
      <Card style={{ width: 1000 }} className="text-center m-5">
        <div className="driver-create-card ">
          <div className="title-main">
            <h5>
             
              <span className=" ribbon">College Form Create</span>
             
            </h5>
          </div>
          <hr className="MuiDivider-root MuiDivider-fullWidth css-1wnin34-MuiDivider-root"></hr>
          
          <div item lg={12} sm={24} xs={12}>
          <Form
            name="basic"
            initialValues={orderdata}
            onFinish={onFinish}
            autoComplete="off"
            form={form}
          >
            <div item xs={12} container spacing={2}>
              <div item lg={4} sm={6} xs={12}>
                <Form.Item
                  name="name"
                  id="outlined-basic"
                  label=" Name *"
                  variant="outlined"
                  type="text"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your Name!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>
              <div item lg={3} sm={6} xs={12}>
                <Form.Item
                  name="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your email!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>
              <div item lg={3} sm={6} xs={12}>
                <Form.Item
                  name="message"
                  id="outlined-basic"
                  variant="outlined"
                  label="Message"
                  type="text"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your message!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>

              <div item lg={12} sm={12} xs={12} className="edit-button">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn btn-primary m-2 button-hov-add-to-list btn-sm rounded-pill"
                    loading={loading}
                    // disabled={!email || email === ''}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
          </div>
        </div>
      </Card> */}
    </>
  );
};

export default Collegefrom;
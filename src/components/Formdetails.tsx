import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { MdOutlineMailLock } from 'react-icons/md';

const Formdetails: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setaddress] = useState<string>('');
  const [dateOfBirth, setdateOfBirth] = useState<string>("");
  const [married, setMarried] = useState<string>("")
  const [car, setCar] = useState<string>("")
  const [pet, setPet] = useState<string>("")
  const [occupation, setOccupation] = useState<string>("")
  const [document, setDocument] = useState<string>("")
  const [staying, setStaying] = useState<string>("")
  const [aggrement, setAggremant] = useState<string>("")
  const [movingIn, setMovingIn] = useState<string>("")
  const [security, setSecurity] = useState<string>("")
  const [paying, setPaying] = useState<string>("")
  const [ApplicationFee, setApplicationFee] = useState<string>("")
  const [nowPayment, setNowPayment] = useState<string>("")
  const [question, setQuestion] = useState<string>("")
  const [signature, setSignature] = useState<string>("")


  const schema = yup.object({
    name: yup.string().required('Field is required'),
    gender: yup.string().required('Field is required'),
    email: yup.string().email().required('Field is required'),
    phoneNumber: yup.number().required('Field is required'),
    address: yup.string().required('Field is required'),
    dateOfBirth: yup.string().required('Field is required'),
    married: yup.string().required("Field is required"),
    car: yup.string().required("Filed is required"),
    pet: yup.string().required("Field is required"),
    occupation: yup.string().required("Field is required"),
    document: yup.string().required("Field is required"),
    staying: yup.string().required("Field is required"),
    aggrement: yup.string().required("Field is required"),
    movingIn: yup.string().required("Field is required"),
    security: yup.string().required("Field is required"),
    paying: yup.string().required("Field is required"),
    ApplicationFee: yup.string().required("Field is required"),
    nowPayment: yup.string().required("Field is required"),
    question: yup.string().required("Field is required"),
    signature: yup.string().required("Field is required")
  })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const Fetch = async (e: any) => {
    e.preventDefault();

    try {
      await schema.validate({
        name,
        gender,
        email,
        phoneNumber,
        address,
        dateOfBirth,
        married,
        car,
        pet,
        occupation,
        document,
        staying,
        aggrement,
        movingIn,
        security,
        paying,
        ApplicationFee,
        nowPayment,
        question,
        signature
      });

      await axios.post(`https://formchi.onrender.com/app/router/postmessage`, {
        name,
        gender,
        email,
        phoneNumber,
        address,
        dateOfBirth,
        married,
        car,
        pet,
        occupation,
        document,
        staying,
        aggrement,
        movingIn,
        security,
        paying,
        ApplicationFee,
        nowPayment,
        question,
        signature
      });

      Swal.fire({
        icon: 'success',
        title: 'Email Sent',
        timer: 3000,
      });

    } catch (error) {
        console.log(error)
      Swal.fire({
        icon: 'error',
        title: "error"
      });
    }
  };

  return (
    <Container>
      <Wrapper onSubmit={Fetch}>
        <First>
          <Top></Top>
          <h2>Rental Application Form</h2>
          <Line></Line>
          <Below>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginLeft: '18px', fontWeight: '500', color: '#4c4d4e', marginTop: '10px' }}>
                okwolig60@gmail.com
              </div>
              <div style={{ marginLeft: '18px', marginTop: '1px', fontSize: '20px', color: '#5F6368', display: 'flex', alignItems: 'center' }}>
                <MdOutlineMailLock />
                <p>Not shared</p>
              </div>
            </div>
          </Below>
          <Line2></Line2>
          <Text>* Indicates required question</Text>
        </First>

        <Second>
          <p>Name <span>*</span></p>
          <input
            {...register('name')}
            type="text"
            onChange={(e) => {
              setName(e.target.value)
            }}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Gender ? <span>*</span></p>
          <input
            {...register('gender')}
            type="text"
            onChange={(e) => setGender(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

         <Second>
          <p>E-Mail <span>*</span></p>
          <input
            {...register('email')}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Mobile number <span>*</span></p>
          <input
            {...register('phoneNumber')}
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Address <span>*</span></p>
          <input
            {...register('address')}
            type="text"
            onChange={(e) => setaddress(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Date of birth <span>*</span></p>
          <input
            {...register('dateOfBirth')}
            type="text"
            onChange={(e) =>setdateOfBirth(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Married <span>*</span></p>
      <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex"}}>
        <Radio
          type="radio"
          value="Yes"
          checked={married === "Yes"} // Step 3: Check if this radio is selected
          onChange={(e) => setMarried(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Yes
      </label>
      
        <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          type="radio"
          value="No"
          checked={married === "No"} // Step 3: Check if this radio is selected
          onChange={(e) => setMarried(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        No
      </label>
        </Second>

        <Second>
          <p>Do you have a car <span>*</span></p>
      <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex"}}>
        <Radio
          type="radio"
          value="Yes"
          checked={car === "Yes"} // Step 3: Check if this radio is selected
          onChange={(e) => setCar(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Yes
      </label>
      
        <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          type="radio"
          value="No"
          checked={car === "No"} // Step 3: Check if this radio is selected
          onChange={(e) => setCar(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        No
      </label>
        </Second>

        <Second>
          <p>Do you have a pet <span>*</span></p>
      <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex"}}>
        <Radio
          type="radio"
          value="Yes"
          checked={pet === "Yes"} // Step 3: Check if this radio is selected
          onChange={(e) => setPet(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Yes
      </label>
      
        <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          type="radio"
          value="No"
          checked={pet === "No"} // Step 3: Check if this radio is selected
          onChange={(e) => setPet(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        No
      </label>
        </Second>

        <Second>
          <p>What’s your occupation <span>*</span></p>
          <input
            {...register('occupation')}
            type="text"
            onChange={(e) => setOccupation(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>How soon do you want the keys and the documents <span>*</span></p>
          <input
            {...register('document')}
            type="text"
            onChange={(e) => setDocument(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>When would you like to start staying <span>*</span></p>
          <input
            {...register('staying')}
            type="text"
            onChange={(e) => setStaying(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>How long lease agreement are you looking for <span>*</span></p>
          <input
            {...register('aggrement')}
            type="text"
            onChange={(e) => setAggremant(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>How soon do you intend moving in <span>*</span></p>
          <input
            {...register('movingIn')}
            type="text"
            onChange={(e) => setMovingIn(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>How soon are you paying for the security deposit to start preparing your paperwork and get your name signed on the lease agreement and have the keys so you can move in soon as possible you want <span>*</span></p>
          <input
            {...register('security')}
            type="text"
            onChange={(e) => setSecurity(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>How soon are you paying for the rent and have the keys <span>*</span></p>
          <input
            {...register('paying')}
            type="text"
            onChange={(e) => setPaying(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Application fee of $70 <span>*</span></p>
      <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "20px"}}>
        <Radio
          {...register('ApplicationFee')}
          type="radio"
          value="Zelle"
          checked={ApplicationFee === "Zelle"} // Step 3: Check if this radio is selected
          onChange={(e) => setApplicationFee(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Zelle
      </label>
      
        <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          {...register('ApplicationFee')}
          type="radio"
          value="Cashapp"
          checked={ApplicationFee === "Cashapp"} // Step 3: Check if this radio is selected
          onChange={(e) => setApplicationFee(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Cashapp
          </label>
          
          <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          {...register('ApplicationFee')}
          type="radio"
          value="Venmo"
          checked={ApplicationFee === "Venmo"} // Step 3: Check if this radio is selected
          onChange={(e) => setApplicationFee(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Venmo
          </label>
          
          <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          {...register('ApplicationFee')}
          type="radio"
          value="Chime"
          checked={ApplicationFee === "Chime"} // Step 3: Check if this radio is selected
          onChange={(e) => setApplicationFee(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Chime
      </label>

          <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          {...register('ApplicationFee')}
          type="radio"
          value="Apple Pay"
          checked={ApplicationFee === "Apple Pay"} // Step 3: Check if this radio is selected
          onChange={(e) => setApplicationFee(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        Apple Pay
      </label>

          <label style={{justifyContent: "flex-start", alignItems: "center", display: "flex", marginTop: "15px"}}>
        <Radio
          {...register('ApplicationFee')}
          type="radio"
          value="PayPal"
          checked={ApplicationFee === "PayPal"} // Step 3: Check if this radio is selected
          onChange={(e) => setApplicationFee(e.target.value)}
          style={{height: "20px", width: "20px", marginRight: "12px"}}
        />
        PayPal
      </label>
        </Second>

        <Second>
          <p>Are you willing to pay for the application fee now and get approved for the house so your name can be secured immediately and so that the approval letter of the property can be sent to you <span>*</span></p>
          <input
            {...register('nowPayment')}
            type="text"
            onChange={(e) => setNowPayment(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Type your questions here <span>*</span></p>
          <input
            {...register('question')}
            type="text"
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Second>
          <p>Signature/ Date <span>*</span></p>
          <input
            {...register('signature')}
            type="text"
            onChange={(e) => setSignature(e.target.value)}
            placeholder='Your answer'
          />
        </Second>

        <Last>
          <Button bg='#7349BD' cp="pointer" type='submit' cl='#fff'>
            Submit
          </Button>
          <Clear>
            Clear form
          </Clear>
        </Last>
        <P>Never submit passwords through Google Forms.</P>
        <Pl>This content is neither created nor endorsed by Google. <span>Report Abuse</span> - <span>Terms of Service</span> - <span>Privacy Policy</span></Pl>
        <Pe><span>Google</span> Forms</Pe>
      </Wrapper>
    </Container>
  );
};

export default Formdetails;
const Pe = styled.div`
  color: #6B696F;
  font-size: 22px;
  width: 100%;
  display: flex;
  justify-content: center;
  span{
    font-weight: 500;
  }
`
const Pl = styled.p`
  color: #6B696F;
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: center;
  span{
    text-decoration: underline;
    margin-right: 5px;
    margin-left: 5px;
  }
`
const P = styled.p`
  color: #6B696F;
  font-size: 13px;
`
const Clear = styled.div`
  color: #7349BD;
  cursor: pointer;
  font-weight: 500;
`
const Radio = styled.input`
  margin-right: 100px;
  height: 20px;
`

const Below = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Line2 = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8bfff;
  margin-top: 2px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8bfff;
  margin-top: 13px;
`;

const Button = styled.button<{ bg: string; cp: string; cl: string }>`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => props.cp};
  border: none;
  border-radius: 4px;
`;

const Last = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  p {
    font-size: 12px;
    margin-top: 8px;
  }
`;

const Second = styled.div`
  display: flex;
  border: #d8bfff;
  width: 100%;
  transition: border-color 0.3s;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  padding-top: 8px;
  padding-bottom: 30px;
  margin-top: 15px;
  input {
    width: 300px;
    height: 40px;
    border-bottom: 1px solid #808388;
    outline: none;
    margin-left: 18px;
    border-top: none;
    border-left: none;
    border-right: none;
    ::placeholder {
      font-size: 15px;
    }
    &:focus {
      border-bottom: 2px solid #673AB7;
    }
  }
  p {
    margin-left: 18px;
    width: 95%;
    span {
      color: #D93025;
    }
  }
`;

const Text = styled.div`
  color: #D93025;
  margin-top: 10px;
  font-size: 14px;
  margin-left: 18px;
`;

const Top = styled.div`
  width: 100%;
  height: 15px;
  background-color: #673AB7;
  margin-top: -4px;
`;

const First = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 22px;
  border: 1px solid #d8bfff;
  h2 {
    margin-left: 18px;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 0px;
    margin-top: 12px;
  }
  p {
    font-size: 14px;
    margin-left: 18px;
    margin-top: 15px;
  }
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 14px;
  height: 100%;
  padding-top: 12px;
  @media screen and (max-width: 768px) {
    width: 65%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #F0EBF8;
  flex-direction: column;
  align-items: center;
`;

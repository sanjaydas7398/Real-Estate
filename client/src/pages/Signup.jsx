import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const navigate = useNavigate()
const [formdata,setFormData] = useState({
  username: '',
  email: '',
  password: ''
})
const[error,setError] = useState(null);
const[loading,setLoading] = useState(false)

  const handlechange = (e)=>{
       setFormData({
        ...formdata,
        [e.target.id]: e.target.value
       })
  }

   const handleSubmit = async(e)=>{
     e.preventDefault();

     try{
      setLoading(true)
      const res = await fetch('/api/auth/signup', 
       {
         method:'POST',
         headers:{
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(formdata)
       }
         
      )
      const data = await res.json();
      console.log(data);

      
  //     if(data.success === false){
  //       setLoading(false)
  //       setError(null);
  //       navigate('/')
  //       return
  //    }
  //    console.log("Error state updated:", error.message)
  //    setLoading(false)
  //   }catch(error){
  //      setLoading(false);
  //      setError(error.message)
  //   }
  // }
    
    // Handle non-successful responses
    if (!res.ok) {
      setError(data.message || 'An error occurred');
      setLoading(false);
      return;
    }

    // User created successfully
    setLoading(false);
    navigate('/'); // Adjust to your intended route after signup
  } catch (error) {
    setLoading(false);
    setError('An error occurred: ' + (error.message || 'Unexpected error'));
  }
}


  //  console.log("Error Message",error.message)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handlechange} />
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handlechange} />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handlechange} />

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...': 'Sign Up'}</button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/signin"}>
        <spna className="text-blue-700">Sign in</spna></Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
const navigate = useNavigate()
const [formdata,setFormData] = useState({
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
      const res = await fetch('/api/auth/signin', 
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

  if (!res.ok) {
    setError(data.message || 'An error occurred');
    setLoading(false);
    return;
  }
  setLoading(false);
  navigate('/'); 
} catch (error) {
  setLoading(false);
  setError('An error occurred: ' + (error.message || 'Unexpected error'));
}
}


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handlechange} />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handlechange} />

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...': 'Sign In'}</button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={"/signup"}>
        <spna className="text-blue-700">Sign up</spna></Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
};

export default Signin;



export default function Login() {
  
  return (
    <form >
        <br />
        <br />
      <label>Username:
      <input 
        name="username" 
      />
      </label>
      <br />
      <label>Password:
        <input           
          name="password" 
          
        />
        </label><br />
        
        <br />
        <br /><div className='submitbtn'>
        <input type="submit" className='btn btn-border'/></div>
    </form>
  )
}


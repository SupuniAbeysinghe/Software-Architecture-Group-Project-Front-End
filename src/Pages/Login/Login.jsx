

export default function Login() {
  
  return (
    <form >
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
        <br />
        <br />
        <input type="submit" className='btn btn-border'/>
    </form>
  )
}


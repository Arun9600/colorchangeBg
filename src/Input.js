const Input = ({color,setColor}) => {

    return (

        <>
          <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="Color">Color Name</label>
              <input type="text" id="color" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)}/>
          </form>
        </>
    )
}

export default Input
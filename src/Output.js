const Output = ({color}) => {

    return(
    <>
    <div className="box">
        <div className="colorBox" style={{backgroundColor:color}}>
                {color ? color : "Input is Empty"}
            </div>
        </div>
    </>
)

}

export default Output
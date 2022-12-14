// import Test from "./Test"
import PropTypes from 'prop-types';
let Content=({name,Bio,Profession,handleAlert,handleName,show,children})=>{
// let Content=(props)=>{
    // console.log(props)
    return(
        <div>
            
            {/* <h2>Content component</h2>
            <h3>My name is : {props.name}</h3>
            <h4>My age is : {props.age}</h4>
            <ul>
                {
                    props.pays.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h4>{props.trophe.nbrT}</h4>
            <h5>{props.trophe.obj.cp}</h5> */}

            {/* <Test name={props.name}/> */}
            {
                children
            }
            <h2>Content component</h2>
            <h3>My name is : {name}</h3>
            <h4>My Bio is ; {Bio} </h4>
        
            <h4>I am Studying : {Profession} </h4>
            <button onClick={handleAlert}>Hello</button>
            <button onClick={()=>handleName("20 years old")}>Name</button>
       
           


        </div>
    )
}


Content.defaultProps={
    name : "Mahmoud"
}

Content.propTypes = {
    
   age: PropTypes.number
}


export default Content
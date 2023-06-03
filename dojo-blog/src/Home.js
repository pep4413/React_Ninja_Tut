import { useState } from 'react'

const Home = () => {
    // let name = 'Patrick'
    const [name, setName] = useState('Patrick')
    const [age, setAge] = useState(44)

    const handleClick = () => {
        setName("Luigi")
        setAge(22)
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
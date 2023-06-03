import { useState } from 'react'

const Home = () => {
    // let name = 'Patrick'
    const [name, setName] = useState('Patrick')
    const [age, setAge] = useState(44)
    const [clickCount, setClickCount] = useState(true)

    const handleClick = () => {
        if (clickCount) {
            setName("Luigi")
            setAge(22)
            setClickCount(false)
        } else {
            setName("Patrick")
            setAge(44)
            setClickCount(true)
        }
        console.log(clickCount)
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
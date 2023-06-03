const Home = () => {
    const handleClick = (e) => {
        console.log('Hello Ninjas', e)
    }

    const handleClickAgain = (name, e) => {
        console.log(`hello ${name}`, e.screenX)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Patrick', e)}>Click Me Again</button>
        </div>
     );
}
 
export default Home;
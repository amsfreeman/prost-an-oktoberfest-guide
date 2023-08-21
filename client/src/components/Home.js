import oktoberfest1 from '.././assets/oktoberfest1.jpg'

function Home() {
    return(
        <div className='home-detail-container'>
            <h4>Welcome to the Oktoberfest Guide!</h4>
            <p>Here you can learn more about Oktoberfest, see all the awesome Beer Tents, and login to see the Tents that you have visited.</p>
            <img className='home-image' src={oktoberfest1} alt="Oktoberfest"/>
        </div>
    )
}

export default Home
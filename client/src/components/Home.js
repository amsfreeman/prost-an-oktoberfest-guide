import oktoberfest1 from '.././assets/oktoberfest1.jpg'

function Home() {
    return(
        <>
            <h1>Prost! An Oktoberfest Guide</h1>
            <h4>Welcome to the Oktoberfest Guide!</h4>
            <p>Here you can learn more about Oktoberfest, see all the awesome Beer Tents, and login to see the Tents that you have visited.</p>
            <div>
                <img src={oktoberfest1} alt="Image of Oktoberfest"/>
            </div>
        </>
    )
}

export default Home
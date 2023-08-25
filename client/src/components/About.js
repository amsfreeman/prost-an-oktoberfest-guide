import oktoberfest6 from "../assets/oktoberfest6.JPG"
import oktoberfest7 from "../assets/oktoberfest7.JPG"
import oktoberfest8 from "../assets/oktoberfest8.jpeg"
import oktoberfest9 from "../assets/oktoberfest9.JPG"

function About() {
    return(
        <div className="about-layout-container">
            <div className='about-left-section'>
                <img src={oktoberfest6} 
                alt="Oktoberfest" 
                className='about-left-image'
                />
                <h6 className='about-left-image-text'>Oktoberfest at night</h6>
                <img src={oktoberfest8}
                alt="Oktoberfest"
                className="about-left-image"
                />
                <h6 className='about-left-image-text'>View of Oktoberfest from the Riesenrad (similar to a Ferris Wheel) on a weekday afternoon</h6>
            </div>
            <div className='about-center-section'>
                <h4 className='about-heading'>A brief Oktoberfest learning moment!</h4>
                <h6 className='about-1'>Oktoberfest is a beer festival that happens yearly in Munich, Germany. Oktoberfest's first year was 1810, when it originated as a wedding festival for Crown Prince Ludwig and Princess Therese of Saxe-Hildburghausen[1]. The original dates were in October, but as mentioned on the official Oktoberfest website, it was later moved to earlier in September, as least partially due to the better weather in September[2].</h6>
                <h6 className='about-2'>Oktoberfest has happened every year since 1810, but has been cancelled roughly 26 times, including 1813, 1854, 1866, 1870, 1873, 1914-1920, 1923-1924, 1939-1948, and 2020-2021.</h6>
                <h6 className='about-3'>Oktoberfest is marked by its 14 large tents, which you can see on the Tents page. In addition, Oktoberfest has a series of small tents, attractions, and amusement park style rides.</h6>
                <h6 className='about-4'>In addition, since 2010 there has been Oide Wiesen, a section of Oktoberfest designed to look more traditional. There is a 4 euro entrace fee for people older than 14, but after 9pm, it is free[4]. Once inside there are cheaper traditional rides, and a few large tents.</h6>
                <h6 className='about-5'>Whether it's your first time at Oktoberfest or you are a long time visitor, feel free to look around and leave a visit!</h6>
                <h6 className='sources-header'>Sources:</h6>
                <p className="sources">- [1] Author Unknown. "Oktoberfest." Wikipedia. https://en.wikipedia.org/wiki/Oktoberfest (accessed August 22, 2023).</p>
                <p className="sources">- [2] Author Unknown. "The 188th Oktoberfest in 2023 will take place from September 16 to October 3
                    ." Oktoberfest.de. "https://www.oktoberfest.de/en/information/when-is-oktoberfest" (accessed August 23, 2023).</p>
                <p className="sources">- [3] Author Unknown. "Has Oktoberfest ever been cancelled?" Oktoberfest Tours. "https://www.oktoberfesttours.travel/2020/04/21/has-oktoberfest-ever-been-cancelled/" (accessed August 23, 2023).</p>
                <p className="sources">- [4] Author Unknown. "The Old Oktoberfest (Oide Wiesn)." Destination Munich. "https://www.destination-munich.com/the-old-oktoberfest-oide-wiesn.html#:~:text=The%20Oide%20Wiesn%20first%20became,very%20first%20Oktoberfest%20in%201810.&text=But%20just%20like%20the%20Eiffel,organisers%20decided%20to%20keep%20it." (accessed August 23, 2023). </p>        
            </div>
            <div className='about-right-section'>
                <img src={oktoberfest7} 
                alt="Oktoberfest" 
                className='about-right-image'
                />
                <h6 className='about-right-image-text'>Oide Wiesn on a rainy day</h6>
                <img src={oktoberfest9}
                alt="Oktoberfest"
                className="about-right-image"
                />
                <h6 className='about-right-image-text'>View of the Bavaria Statue at night</h6>
            </div>
        </div>
    )
}

export default About
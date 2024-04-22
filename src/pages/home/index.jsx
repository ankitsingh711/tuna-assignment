import Food1 from '../../assets/png/home_page.png'
import Food2 from '../../assets/png/food_home_2.png';
import Food3 from '../../assets/png/food_home_3.png';
import AboutImg from '../../assets/png/about_home_img.png';
import Curatted1 from '../../assets/png/japanese-food-sushi-sashimi.png';
import Curatted2 from '../../assets/png/bagel-sandwich.png';
import Curatted3 from '../../assets/png/indian-traditional-dish-with-rice-lemon-tomato-coriander-leaf-cutlery-wooden-tray.png';
import Curatted4 from '../../assets/png/cheese-mayyonaise-salad-salted-peppered-tasty-inside-white-plate-brown-wood-desk.png';
import Curatted5 from '../../assets/png/delicious-cookies-with-glass-milk.png';
import Curatted6 from '../../assets/png/pexels-alisha-mishra-579430-1346215.png';
import JohnDoe from '../../assets/svg/john_doe.svg';
import Card from '../../components/cards';
import Button from '../../components/button';

const Home = () => {
    return (
        <div className="main__container">
            <div className="top_menu_section">
                <Card imgLink={Food1} text="Very Berry Healthy Summer Smoothie"/>
                <Card imgLink={Food2} text="Carrot and Ginger Soup"/>
                <Card imgLink={Food3} text="Loaded mixed berries Minitart"/>
            </div>

            <div className='about_us_section'>
                <div className='about_img_section'>
                    <img src={AboutImg} alt="about_img" />
                </div>
                <div className='about_text_section'>
                    <h2>About Us</h2>
                    <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span> <br />
                    <div className='read_more_btn'><button>READ MORE</button></div>
                </div>
            </div>

            <div className='curated_collection'>
                <div>
                    <img src={Curatted1} alt="curated_img" />
                    <div>
                        <h3>Sushi Combos For Your Next Party</h3>
                    </div>
                    <Button text="150 Recipes" id={1}/>
                </div>
                <div>
                    <img src={Curatted2} alt="curated_img" />
                    <div>
                        <h3>Everything Bagel</h3>
                    </div>
                    <Button text="150 Recipes" id={2}/>
                </div>
                <div>
                    <img src={Curatted3} alt="curated_img" />
                    <div>
                        <h3>Biriyani Combos</h3>
                    </div>
                    <Button text="150 Recipes" id={3}/>
                </div>
                <div>
                    <img src={Curatted4} alt="curated_img" />
                    <div>
                        <h3>Dinner Recipe Ideas</h3>
                    </div>
                    <Button text="150 Recipes" id={4}/>
                </div>
                <div>
                    <img src={Curatted5} alt="curated_img" />
                    <div>
                        <h3>The Ultimate Cookie Frenzy</h3>
                    </div>
                    <Button text="150 Recipes" id={5}/>
                </div>
                <div>
                    <img src={Curatted6} alt="curated_img" />
                    <div>
                        <h3>For the Love of Donuts</h3>
                    </div>
                    <Button text="150 Recipes" id={6}/>
                </div>
            </div>

            <div className='recipes'>
                <div className='recipes_1'>
                    <h2>Latest Recipes</h2>
                    <div>
                        <img src={Curatted4} alt="" />
                        <div className='recipes_text_section'>
                            <h3>Pumpkin Marshmallow Pie</h3>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
                        </div>
                    </div>
                    <div>
                        <img src={Curatted4} alt="currated_4" />
                        <div className='recipes_text_section'>
                            <h3>Pumpkin Marshmallow Pie</h3>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
                        </div>
                        <div className='recipes_bottom'>
                            <div style={{display: "flex"}}>
                                <img src={JohnDoe} alt="john_doe" />&nbsp;
                                <span>John Doe</span>
                            </div>
                            <div>Yesterday</div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='recipes_2'>
                    <h2>Fresh Recipes</h2>
                    <div>
                        <img src={Curatted3} alt="" />
                        <span>Pumpkin Marshmallow Pie</span>
                    </div>
                    <div>
                        <img src={Curatted4} alt="" />
                        <span>Pumpkin Marshmallow Pie</span>
                    </div>
                    <div>
                        <img src={Curatted1} alt="" />
                        <span>Pumpkin Marshmallow Pie</span>
                    </div>
                    <div>
                        <img src={Curatted2} alt="" />
                        <span>Pumpkin Marshmallow Pie</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
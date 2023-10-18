import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }
//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 
async componentDidMount() {
    // API call
    const data = await fetch("https://api.github.com/users/RakeshBudhlakoti");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
  }

  componentDidUpdate() {
  //console.log("component Did Update");
  }

  componentWillUnmount() { // removing from html
    //console.log("component Will Unmount");
  }

  render() {
    const { name, location,avatar_url,bio } = this.state.userInfo;
    const teamMembers = [
      {
        name: name,
        title: "Founder",
        imageSrc: avatar_url,
        description: bio,
      },
    ];

    return (
      <div>
        <div className="about-us-container">
          <h1>About Us</h1>
          <p>
            Welcome to FoodVillage, your one-stop destination for delicious and
            convenient food delivery. Our mission is to connect people with
            their favorite restaurants and bring the best dining experiences to
            their doorsteps.
          </p>
          <p>
            At FoodVillage, we are passionate about food and committed to
            ensuring that our customers have access to a wide variety of
            culinary delights. We partner with the finest restaurants in the
            city to provide you with a diverse menu of options to choose from.
          </p>
          <p>
            We take pride in our quick and reliable delivery service, ensuring
            that your food arrives hot and fresh. Customer satisfaction is our
            top priority, and we work tirelessly to make your dining experience
            exceptional.
          </p>
          <p>
            Explore our menu, place your order, and let us take care of the
            rest. Thank you for choosing FoodVillage, and we look forward to
            serving you.
          </p>
          <h1>Team Members</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="p-4">
                    <div className="bg-white rounded-lg shadow-md">
                      <img
                        src="restaurant-image.jpg"
                        alt="Restaurant Image"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h2 className="text-lg font-semibold">
                          Restaurant Name
                        </h2>
                        <p className="text-gray-500">Price: $20</p>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★ 4.5</span>
                          <span className="text-gray-500 ml-2">
                            (500+ ratings)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        <div className="team-cards-container">
          {teamMembers.map((member, index) => (
            <UserClass key={index} {...member} />
          ))}
        </div>
      </div>
    );
  }
}

export default About;

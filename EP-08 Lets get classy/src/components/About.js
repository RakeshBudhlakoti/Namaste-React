import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      title: "Founder",
      imageSrc: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      title: "Designer",
      imageSrc: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bob Johnson",
      title: "Developer",
      imageSrc: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      name: "Sara Brown",
      title: "Marketing",
      imageSrc: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
      name: "Mike Wilson",
      title: "Sales",
      imageSrc: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
  ];

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to FoodVillage, your one-stop destination for delicious and
        convenient food delivery. Our mission is to connect people with their
        favorite restaurants and bring the best dining experiences to their
        doorsteps.
      </p>
      <p>
        At FoodVillage, we are passionate about food and committed to ensuring
        that our customers have access to a wide variety of culinary delights.
        We partner with the finest restaurants in the city to provide you with a
        diverse menu of options to choose from.
      </p>
      <p>
        We take pride in our quick and reliable delivery service, ensuring that
        your food arrives hot and fresh. Customer satisfaction is our top
        priority, and we work tirelessly to make your dining experience
        exceptional.
      </p>
      <p>
        Explore our menu, place your order, and let us take care of the rest.
        Thank you for choosing FoodVillage, and we look forward to serving you.
      </p>

      <h1>Team Members</h1>

      <div className="team-cards-container">
        {/** Functional Component */}
        {teamMembers.map((member, index) => (
          <User key={index} {...member} />
        ))}
        {/** Class Based Component */}
        {teamMembers.map((member, index) => (
          <UserClass key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default About;

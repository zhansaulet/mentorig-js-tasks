const apiUrl = "https://jsonplaceholder.typicode.com/users";
const usersData = fetchData();

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Could not fetch any data");
    }

    const data = await response.json();

    // Task 1 only id and username
    const filteredUsers = data.map((user) => ({
      name: user.name,
      email: user.email,
    }));
    console.log("Only user names and emails: ", filteredUsers);

    // Task 2 only emails
    const emailsArr = filteredUsers.map((user) => user.email);
    console.log("Only users' emails: ", emailsArr);

    // Task 3 user with id = 9
    const user9 = data.filter((user) => user.id === 9);
    console.log("Only the user with id 9: ", user9);

    // Task 4 all users from 'Lebsackbury'
    const usersFromLebsackbury = data.filter(
      (user) => user.address.city == "Lebsackbury"
    );
    console.log("Only users from Lebsackbury: ", usersFromLebsackbury);

    // Task 5 first 5 users
    const firstFiveUsers = data.filter((user) => user.id <= 5);
    console.log("Only first five users: ", firstFiveUsers);

    // Task 6 reverse users
    const reversedUsersData = data.reverse();
    console.log("Reversed data: ", reversedUsersData);

    // Task 7
    const usersLength = data.length;
    console.log("The number of users: ", usersLength);

    // Task 8
    const websites = data.filter((user) => user.website.includes(".com"));
    console.log("Users with website ending with .com: ", websites);

    // Task 9
    const usernames = data.filter((user) => user.username.length >= 12);
    console.log("Users with long usernames: ", usernames);

    // Task 10
    const usernamesLowercase = data.map((user) => user.username.toLowerCase());
    console.log("A list of lowercase usernames: ", usernamesLowercase);
  } catch (error) {
    console.log(error);
  }
}

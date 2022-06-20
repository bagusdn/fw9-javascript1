let biodata = {
    name: "Bagus Dwi Nugraha",
    email: "bagusdwi26@gmail.com",
    hobby: ["Swimming","Gaming","Soccer"],
  };
  let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    ...biodata,
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  // Spread
  console.log(data);
  
  console.log("++++++++");
  // Destructuring
  let { address } = data;
  let { street,  city } = address;
  console.log(`${street},${city}`);
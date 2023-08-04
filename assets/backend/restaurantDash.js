const LastDeliveries = document.querySelector(".LastDel");
const LastOrders = document.querySelector(".lastOrd");
const TopDeliveries = document.querySelector(".topDel");

function getClients(data = clients, list = LastDeliveries) {
  list.innerHTML = "";
  data.forEach((el) => {
    list.innerHTML += `
      <div class="d-flex align-items-center mb-5">
      <div class="me-3">
        <img src="http://localhost:5000/${
          el.image
        }" class="img-fluid rounded-pill avatar-50" alt="" />
      </div>
      <div class="flex-grow-1">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h6 class="heading-title fw-bolder">${el.name}</h6>
          <h6 class="heading-title">${el.createdAt.split("T")[0]}</h6>
        </div>

      </div>
    </div>
          `;
  });
}

function getClients2(data = clients, list = LastOrders) {
  list.innerHTML = "";
  data.forEach((el) => {
    list.innerHTML += `
    <div class="d-flex justify-content-between align-items-center mb-5">
    <div class="d-flex align-items-center">
      <img src="http://localhost:5000/${
        el.userId[0].image
      }" class="img-fluid rounded-pill avatar-50" alt="1" />
      <div class="ms-3">
        <h6 class="heading-title fw-bolder mb-2">
          ${el.userId[0].fullname}
        </h6>
        <p class="mb-0">${el.createdAt.split("T")[0]}</p>
      </div>
    </div>
    <h6 class="heading-title">${el.totalPrice}$</h6>
  </div>
          `;
  });
}

function getClients3(data = clients, list = TopDeliveries) {
  list.innerHTML = "";
  data.forEach((el) => {
    list.innerHTML += `
    <tr>
    <td>
      <div class="d-flex align-items-center">
        <img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
          src="http://localhost:5000/${el.image}" alt="profile" />
        <p class="mb-0">${el.name}</p>
      </div>
    </td>
    <td>${el.settedLocation}</td>
    <td>${el.email}</td>
    <td>${el.balance}</td>
  </tr>

            `;
  });
}

const skip = 1;
const limit = 5;
const Deliveries = () => {
  fetch(`http://localhost:5000/api/restaurant/${skip}/${limit}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data) {
        getClients(data, LastDeliveries);
      }
    })
    .catch((err) => console.log(err));
};

const Orders = () => {
  fetch(`http://localhost:5000/api/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data) {
        data = data.reverse().splice(0, 5);
        getClients2(data, LastOrders);
      }
    })
    .catch((err) => console.log(err));
};

const TopDelivery = () => {
  fetch(`http://localhost:5000/api/restaurant/${skip}/${limit}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data) {
        data.forEach((item) => {
          fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${
              item.location.split(" ")[0]
            }+${
              item.location.split(" ")[1]
            }&key=87f526f534114673b84ec3e7d9b3adda`,
            {
              method: "GET",
            }
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              let settedLocation =
                data.results[0].components.state +
                " , " +
                data.results[0].components.country;
              console.log(item);
              item.settedLocation = settedLocation ;
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(item);
          setTimeout(() => {
            getClients3(data, TopDeliveries);
          }, 500);
        });
      }
    })
    .catch((err) => console.log(err));
};

Deliveries();
Orders();
TopDelivery();

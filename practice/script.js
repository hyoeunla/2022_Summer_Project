fetch(
  "http://openapi.foodsafetykorea.go.kr/api/add638aaa6f6417cb9a4/COOKRCP01/json/1/1/RCP_NM=쿠키"
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

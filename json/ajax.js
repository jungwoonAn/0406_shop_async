document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response_p = await fetch("https://jungwoonan.github.io/0406_shop_async/json/product.json");
    if (!response_p.ok) throw new Error("상품 데이터를 불러오는 데 실패했습니다.");
    const response_h = await fetch("https://jungwoonan.github.io/0406_shop_async/json/hit.json");
    if (!response_h.ok) throw new Error("히트트 데이터를 불러오는 데 실패했습니다.");

    const data_p = await response_p.json();
    const data_h = await response_h.json();

    if (data_p.length > 0) {
      data_p.forEach((item, i) => {
        const box = document.querySelectorAll("#product .box")[i];
        box.innerHTML += `
          <a href="#">
            <img src='${item.img_url}'/>
            <h4>${item.title}</h4>
            <span>${item.price}</span>
          </a>
        `;
      });
    }

    if (data_h.length > 0) {
      data_h.forEach((item, i) => {
        const box = document.querySelectorAll("#hit .box")[i];
        box.innerHTML += `
          <a href="#">
            <img src='${item.img_url}'/>
            <h4>${item.title}</h4>
            <span>${item.price}</span>
          </a>
        `;
      });
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
});
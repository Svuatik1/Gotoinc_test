const DESCRIPTION_OBJECT = {
  description: `
    <div class='description'>
      The ASICS GEL-KAYANO 14 is a classic running shoe designed for stability and support.
      Featuring advanced GEL technology in the midsole, this model offers superior shock absorption,
      making it suitable for long runs. The retro style pays homage to the original 2008 design,
      combining both performance and streetwear appeal. Its durable rubber outsole, supportive structure,
      and breathable mesh upper make it ideal for runners who overpronate, ensuring comfort and balance
      during intense runs.
    </div>
  `,
  details: `
    <table class='details'>
      <tr><td>Brand</td><td>ASICS</td></tr>
      <tr><td>Model</td><td>ASICS GEL-KAYANO 14</td></tr>
      <tr><td>Type</td><td>Running Shoe</td></tr>
      <tr><td>Cushioning</td><td>GEL technologie</td></tr>
      <tr><td>Weight</td><td>11.5 oz (men's size 9)</td></tr>
    </table>
  `,
  shipping: `
    <table class='shipping'>
      <tr><td>ASICS Official Store:</td><td>$160</td></tr>
      <tr><td>Amazon:</td><td>$140-$160 (varies by size)</td></tr>
      <tr><td>Foot Locker:</td><td>$150</td></tr>
      <tr><td>Zappos:</td><td>$155 (Free shipping options)</td></tr>
    </table>
  `,
  sizeguide: `
    <div class='size-guide'>
      <h5>How to measure shoe size?</h5>
      <div class='size-guide__content'>
        <div>
          <p>Follow the simple steps below to determine your shoe size. Make sure you do this during
          or at the end of day to ensure the right size (feet typically swell during the day).</p>
          <ol>
            <li>Put a piece of blank paper under your feet. Stand up straight and have your heel
            lightly touching against the wall.</li>
            <li>Have someone mark the end of the longest toe and the back of your heel on the sheet
            with a pen or pencil. Afterwards measure the length of your feet from heel to toe.</li>
            <li>Repeat the steps for your other foot and compare it with our size chart below.</li>
          </ol>
        </div>
        <div class='img-container'>
          <img src='/assets/foot-image.png' alt='foot-image'>
        </div>
      </div>
    </div>
  `,
};

const SIZE_TABLE = {
  UK: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
  US: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14],
  EU: [
    37.5, 38, 38.5, 39, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45,
  ],
  CM: [
    23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30,
  ],
};

const INTERNATIONAL_SIZE_TABLE = [
  { text: "UK", key: "UK" },
  { text: "US", key: "US" },
  { text: "EU", key: "EU" },
  { text: "Foot lengh (cm)", key: "CM" },
];

const descrButtons = document.querySelectorAll(".description-button");
const imgCards = document.querySelectorAll(".img-card");
const diffShoesLooks = document.querySelectorAll(".diff-shoes-look");
const activeDescrButton = document.querySelector(".description-button--active");
const descrContentArea = document.querySelector(".description-content");
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const currentMainSize = document.getElementById("current-size");
const sizeChartsDiv = document.querySelector(".size-charts");
const internationalSizeDiv = document.querySelector(".size-table");

const createInterTabel = (inter = "UK") => {
  sizeChartsDiv.innerHTML = "";
  SIZE_TABLE[inter].forEach((size, i) => {
    const sizeBtn = document.createElement("div");
    sizeBtn.classList.add("size");
    if (i === 0) sizeBtn.classList.add("selected");
    sizeBtn.textContent = size;
    sizeChartsDiv.appendChild(sizeBtn);
  });

  const sizeCharts = document.querySelectorAll(".size");
  sizeCharts.forEach((item) => {
    item.addEventListener("click", () => {
      sizeCharts.forEach((item) => item.classList.remove("selected"));
      item.classList.add("selected");
      currentMainSize.textContent = `${item.textContent} ${inter}`;
    });
  });
};

createInterTabel();

INTERNATIONAL_SIZE_TABLE.forEach((internationalSize, i) => {
  const interLi = document.createElement("li");
  if (i === 0) interLi.classList.add("selected");
  interLi.textContent = internationalSize.text;
  internationalSizeDiv.appendChild(interLi);
});

const internationalSizeTypes = document.querySelectorAll(".size-table > li");

descrButtons.forEach((button) => {
  button.addEventListener("click", () => {
    descrButtons.forEach((button) =>
      button.classList.remove("description-button--active")
    );
    button.classList.add("description-button--active");
    const key = button.textContent.toLowerCase().replace(/\s+/g, "");
    descrContentArea.innerHTML = DESCRIPTION_OBJECT[key];
  });
});

internationalSizeTypes.forEach((item) => {
  item.addEventListener("click", () => {
    internationalSizeTypes.forEach((item) => item.classList.remove("selected"));
    item.classList.add("selected");
    item.textContent === "Foot lengh (cm)"
      ? createInterTabel("CM")
      : createInterTabel(item.textContent);

    const selectedSize = document.querySelector(".size-charts > .selected");
    currentMainSize.textContent = `${selectedSize.textContent} ${item.textContent}`;
  });
});

imgCards.forEach((card) => {
  card.addEventListener("click", () => {
    imgCards.forEach((card) => card.classList.remove("selected"));
    card.classList.add("selected");
  });
});

diffShoesLooks.forEach((look) => {
  look.addEventListener("click", () => {
    diffShoesLooks.forEach((look) => look.classList.remove("selected"));
    look.classList.add("selected");
  });
});

openModalBtn.onclick = () => {
  modal.style.display = "block";
};

closeModalBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

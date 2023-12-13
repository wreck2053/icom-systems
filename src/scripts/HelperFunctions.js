export function numericSort(a, b) {
  const regex = /(\d+)/;
  const aNumber = parseInt(a.match(regex)[0], 10);
  const bNumber = parseInt(b.match(regex)[0], 10);
  return aNumber - bNumber;
}

export function shuffleList(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

export const imagesContext = require.context(
  "../assets/images",
  false,
  /\.jpg$/
);

export function homePageData(data, brands) {
  for (let id in data) {
    data[id].Image = imagesContext("./" + id + ".jpg");
    data[id].ID = id;
  }

  const productData = Object.values(data);
  const brandNames = Object.values(brands);

  shuffleList(productData);
  shuffleList(brandNames);

  return [productData, brandNames];
}

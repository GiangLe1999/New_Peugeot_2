export const makeBold = (item: any, keyword: any) => {
  let re = new RegExp(keyword, "gi");
  let matchArr = item?.match(re);
  let newStr = item;
  if (matchArr?.length) {
    newStr = item.replace(
      re,
      "<span style='font-weight:800; color:#e30020'>" + matchArr[0] + "</span>"
    );
  }

  return newStr;
};

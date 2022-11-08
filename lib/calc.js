export const Calc2 = async (info) => {
  const countA1pf = info.filter((item) => item.tipocd === "A1PF");
  const countA3pf = info.filter((item) => item.tipocd === "A3PF");
  const countA1pj = info.filter((item) => item.tipocd === "A1PJ");
  const countA3pj = info.filter((item) => item.tipocd === "A3PJ");
  const A1mes = countA1pf.length + countA1pj.length;
  const A3mes = countA3pf.length + countA3pj.length;
 
  const obj = {
    A1: A1mes,
    A3: A3mes
  };
  if (!obj) {
    throw new Error("Deu ruim contador 3");
  } else {
    return obj;
  }
};

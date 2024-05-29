export async function getCountries(){
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags", {
    method: "GET",
  });
  if(!response.ok) {
    throw new Error("Произошла ошибка");
  } 
  const res = response.json();
  return res;
}

export async function getCountry(currentName){
  const response = await fetch(`https://restcountries.com/v3.1/name/${currentName}`, {
    method: "GET",
  });
  if(!response.ok) {
    throw new Error("Произошла ошибка, пожалйста, перезагрузите главную страницу");
  } 
  const res = response.json();
  return res;
}
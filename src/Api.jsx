const host ="...";

export async function name(){
  const response = await fetch(`${host}/`);
  if(response.status === 404) {
    throw new Error(" не найден");
  }
  if(response.status === 500) {
    throw new Error("Сервер сломался");
  } 
  if(!navigator.onLine) {
    throw new Error("Отсутствует интернет соединение");
  }
  const res = response.json();
  return res;
}
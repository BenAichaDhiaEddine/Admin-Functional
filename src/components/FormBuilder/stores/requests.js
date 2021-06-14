import fetch from 'isomorphic-fetch';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  OPTIONS: '',
};

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  }).then(response => response);
}


export function put(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  }).then(response => response);
}

export function get(url) {
  let  res=fetch(url, {
     method: 'GET',
     headers,
   }).then(response => response.json()).then((res) => {return res.data[1].sections[0].task_data;})
   console.log(res);
 
   return res;
 }

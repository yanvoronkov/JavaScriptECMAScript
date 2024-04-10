// const token = 'jMNb5TMk0jTErubbXsMG7cjA5DDdQ87ctm1UedE9';
// const url = 'https://api.nasa.gov/planetary/apod?api_key=' + token + '&count=10';

// const getData = async (url) => {
// 	try {
// 		const res = await fetch(url);
// 		const data = await res.json();
// 		return data;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

// (async () => {
// 	const body = document.querySelector('body');
// 	const result = await getData(url);
// 	if (result && result.length) {
// 		result.forEach(element => {
// 			body.insertAdjacentHTML('beforeend', `<figure><img src="${element.url}"> 
//       <figcaption>${element.explanation}</figcaption>
//       </figure>`);
// 		});
// 	} else {
// 		console.log('No results found');
// 	}
// })();


// Задача 1

// Необходимо получить список всех пользователей с помощью бесплатного API(https://jsonplaceholder.typicode.com/users)
// и отобразить их на странице. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
// ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ - Пользователь должен иметь возможность удалить любого пользователя из списка.
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage.

// const url = 'https://jsonplaceholder.typicode.com/users';

// const getData = async (url) => {
// 	try {
// 		const res = await fetch(url);
// 		const data = await res.json();
// 		localStorage.setItem('users', JSON.stringify(data));
// 		return data;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };
// const renderData = (data) => {
// 	const body = document.querySelector('body');
// 	if (data && data.length) {
// 		data.forEach(element => {
// 			body.insertAdjacentHTML('beforeend', `<p>${element.name} | ${element.email} | ${element.phone}</p> <button class = "btn">Удалить</button><br />`);
// 		});
// 	} else {
// 		console.log('No results found');
// 	}
// };
// (async () => {
// 	const result = await getData(url);
// 	renderData(result);
// })();


// document.addEventListener('click', function (e) {
// 	if (e.target.classList.contains('btn')) {
// 		const userElement = e.target.previousElementSibling;
// 		const userName = userElement.textContent.split(' | ')[0];
// 		const users = JSON.parse(localStorage.getItem('users'));
// 		const updatedUsers = users.filter(user => user.name !== userName);
// 		localStorage.setItem('users', JSON.stringify(updatedUsers));
// 		userElement.remove();
// 		e.target.remove();
// 	}
// });

// Задача 2 
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ 
//с интервалом в 3 секунды.

const url = 'https://dog.ceo/api/breeds/image/random';
async function fetchDogImage() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		const image = new Image();
		image.src = data.message;
		document.body.appendChild(image);
	} catch (error) {
		console.log(error);
	}
}


function displayDogImages() {
	for (let i = 0; i < 10; i++) {
		setTimeout(fetchDogImage, i * 3000);
	}
}

displayDogImages();


















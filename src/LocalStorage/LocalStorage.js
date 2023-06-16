export const getLocalStorageData = key => {
	const storageData = window.localStorage.getItem('kurs');
	if (!storageData) {
		return null;
	}
	if (key) {
		return JSON.parse(storageData)[key];
	}
	return JSON.parse(storageData);
};

export const setLocalStorageData = (key, data) => {
	const storageData = getLocalStorageData();
	if (!storageData) {
		return window.localStorage.setItem('kurs', JSON.stringify({ [key]: data }));
	}
	storageData[key] = data;
	window.localStorage.setItem('kurs', JSON.stringify(storageData));
};

export function getIdUser() {
	if (getLocalStorageData('token')) {
		let token = getLocalStorageData('token');
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		return JSON.parse(jsonPayload).id_user;
	}
}

export function getLoginUser() {
	if (getLocalStorageData('token')) {
		let token = getLocalStorageData('token');
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		return JSON.parse(jsonPayload).login;
	}
}
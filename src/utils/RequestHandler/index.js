import { BACKEND_URL } from "../constants";
import requests from "./requestRoutes.json";
// import { ENVIRONMENT, BASEURL_DEVELOPMENT, BASEURL_PRODUCTION } from "../constants";
// const BaseURL = 'http://localhost:5051/api'
// const BaseURL = 'http://d9899481a25a.ngrok.io/api'
// const BaseURL = 'https://dev.tribeworld.org/api'
// const BaseURL = "https://tribeworld.org/api";
// ENVIRONMENT === "PRODUCTION" ? BASEURL_PRODUCTION : BASEURL_DEVELOPMENT;
const BaseURL = BACKEND_URL;

export async function requestHandler(type, reqData, routeAppends) {
	let _auth = localStorage.getItem("auth");
	let auth = {};
	if (_auth) {
		let { token } = JSON.parse(_auth);
		auth = { Authorization: "bearer " + token };
	}

	let { req, route } = _setupRequest(type, reqData, routeAppends, auth);
	return new Promise((resolve, reject) => {
		fetch(BaseURL + route, { ...req, cache: "no-cache" })
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				console.log("ERROR FROM REQUEST", error);
				reject(error);
			});
	});
}

function _setupRequest(type, reqData, routeAppends, auth) {
	let req = null;
	let route = null;
	if (!requests[type]) {
		console.log("Route not found", type);
	}
	if (requests[type].method === "GET" || requests[type].method === "DELETE") {
		req = {
			method: requests[type].method,
			headers: { ...auth },
		};
		route = requests[type].route;
		if (reqData && Object.keys(reqData).length) {
			route =
				route + "?" + new URLSearchParams({ ...reqData }).toString();
		}
	} else if (requests[type].method === "POST") {
		if (!reqData) reqData = {};
		req = {
			method: requests[type].method,
			headers: { ...auth },
			body:
				reqData.constructor.name === "FormData"
					? reqData
					: JSON.stringify({ ...reqData }),
		};
		if (reqData.constructor.name !== "FormData") {
			req.headers["Content-Type"] = "application/json";
		}
		route = requests[type].route;
	} else if (requests[type].method === "PUT") {
		if (!reqData) reqData = {};
		req = {
			method: requests[type].method,
			headers: { ...auth },
			body:
				reqData.constructor.name === "FormData"
					? reqData
					: JSON.stringify({ ...reqData }),
		};
		if (reqData.constructor.name !== "FormData") {
			req.headers["Content-Type"] = "application/json";
		}
		route = requests[type].route;
		if (routeAppends) route += "/" + routeAppends;
	}
	return { req, route };
}

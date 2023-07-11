const fetchSuggestionFromChatGPT = () =>
	fetch("/api/suggestion", { method: "GET", cache: "no-store" }).then((res) =>
		res.json()
	);

export default fetchSuggestionFromChatGPT;

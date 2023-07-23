"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { FormEvent, useState } from "react";
import useSWR from "swr";

const PromptInput = () => {
	const [input, setInput] = useState("");
	const {
		data: suggestion,
		isLoading,
		mutate,
		isValidating,
	} = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
		revalidateOnFocus: false,
	});
	const loading = isLoading || isValidating;

	const submitPrompt = async (useSuggestion?: boolean) => {
		const inputPrompt = input;

		setInput("");

		// p is the prompt to send to API
		const p = useSuggestion ? suggestion : inputPrompt;
		const res = await fetch("/api/generateImage", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt: p }),
		});

		const data = await res.json();
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await submitPrompt();
	};

	return (
		<div className="m-10">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x"
			>
				<textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={
						loading
							? "ChatGPT is thinking of a suggestion..."
							: suggestion || "Enter a prompt..."
					}
					className="flex-1 p-4 outline-none"
				/>
				<button
					type="submit"
					disabled={!input}
					className={`p-4 font-bold ${
						input
							? "bg-violet-500 text-white transition-colors duration-200"
							: "text-gray-300 cursor-not-allowed"
					}`}
				>
					Generate
				</button>
				<button
					type="button"
					onClick={() => submitPrompt(true)}
					className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
				>
					Use Suggestion
				</button>
				<button
					type="button"
					className="p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md lg:rounded-r-md lg:rounded-bl-none font-bold"
					onClick={mutate}
				>
					New Suggestion
				</button>
			</form>

			{input && (
				<p className="italic pt-2 pl-2 font-light">
					Suggestion:{" "}
					<span className="text-violet-500">
						{loading ? "ChatGPT is thinking..." : suggestion}
					</span>
				</p>
			)}
		</div>
	);
};

export default PromptInput;

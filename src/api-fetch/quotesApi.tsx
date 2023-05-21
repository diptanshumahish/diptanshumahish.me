"use client";
import { QuoteType } from "@/types";
import axios from "axios";

const baseUrl: string = "https://api.quotable.io/quotes/random?maxLength=50";

const defaultQuote: QuoteType[] = [{
  _id: "nullAPI",
  author: "Confucis",
  authorSlug: "",
  content: "Let the beauty of what you love be what you do",
  dateAdded: "",
  dateModified: "",
  length: 45,
  tags: [],
}];
const apiCall = async (): Promise<QuoteType[]> => {
  try {
    const response = await axios.get<QuoteType[]>(baseUrl);
    return response.data;
  } catch (error) {
    // Handle error or return a default value
    console.error("Error occurred while fetching data:", error);
    return defaultQuote;
  }
};

export { apiCall, defaultQuote };

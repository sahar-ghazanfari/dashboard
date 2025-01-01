import axios from "axios";

const API_KEY = "YOUR_YANDEX_API_KEY"; // کلید API خود را وارد کنید
const URL = "https://translate.api.cloud.yandex.net/translate/v2/translate";

// تابعی برای ترجمه متون
export const translateText = async (text, lang) => {
  try {
    const response = await axios.post(
      URL,
      {
        targetLanguageCode: lang,
        texts: [text],
      },
      {
        headers: {
          Authorization: `Api-Key ${API_KEY}`,
        },
      }
    );
    return response.data.translations[0].text;
  } catch (error) {
    console.error("Error translating text:", error);
    return text;
  }
};

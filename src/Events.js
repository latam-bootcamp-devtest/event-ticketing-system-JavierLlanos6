export const searchArtist = async ({ search, type }) => {
  console.log("search and type", search, type);
  if (search === "") return [];

  try {
    const response = await fetch(
      `https://goldfish-app-fbulw.ondigitalocean.app/`
    );

    const json = await response.json();

    console.log("API Response:", json);
    const artist = json.results || [];
    console.log("try to error");

    return artist?.map((artists) => ({
      name: artists.eventName,
      song: artists.eventDate,
      image: artists.eventImage,
      price: artists.ticketPrice,
    }));
  } catch (e) {
    console.error("Error searching artist:", e);
    throw new Error("Error searching artist");
  }
};

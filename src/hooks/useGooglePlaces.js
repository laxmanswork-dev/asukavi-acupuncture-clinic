import { useEffect, useState } from "react";

const DEFAULTS = { rating: 5.0, reviewCount: 9 };

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

let scriptLoadingPromise = null;

function loadGoogleMapsScript() {
  if (window.google?.maps?.places) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

// Queries the Google Place Details API (client-side Places library) for the
// clinic's live rating. Falls back to DEFAULTS whenever the key/Place ID are
// missing, the script fails to load, or the API errors/exceeds quota.
export function useGooglePlaces() {
  const [rating, setRating] = useState(DEFAULTS.rating);
  const [reviewCount, setReviewCount] = useState(DEFAULTS.reviewCount);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!API_KEY || !PLACE_ID) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    loadGoogleMapsScript()
      .then(() => {
        if (cancelled) return;
        const service = new window.google.maps.places.PlacesService(
          document.createElement("div")
        );
        service.getDetails(
          { placeId: PLACE_ID, fields: ["rating", "user_ratings_total"] },
          (place, status) => {
            if (cancelled) return;
            if (
              status === window.google.maps.places.PlacesServiceStatus.OK &&
              place?.rating
            ) {
              setRating(place.rating);
              setReviewCount(place.user_ratings_total ?? DEFAULTS.reviewCount);
            }
            setIsLoading(false);
          }
        );
      })
      .catch(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { rating, reviewCount, isLoading };
}

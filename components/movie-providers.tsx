"use client";

import { useState, useEffect } from "react";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-providers.module.css";

export async function getProviders(id) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default function Providers({ id }) {
  const [providers, setProviders] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("KR");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProviders(id);
        setProviders(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setError("Error fetching data");
      }
    }

    fetchData();
  }, [id]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const rentProviders = providers[selectedCountry]?.rent;
  const buyProviders = providers[selectedCountry]?.buy;

  return (
    <div className={styles.container}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>Providers</h2>
        <select value={selectedCountry} onChange={handleCountryChange}>
          {Object.keys(providers).map((code, index) => (
            <option key={index} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
      {(rentProviders && rentProviders.length > 0) ||
      (buyProviders && buyProviders.length > 0) ? (
        <div>
          {rentProviders && rentProviders.length > 0 && (
            <>
              <h3 className={styles.type_payment}>Rent</h3>
              <div className={styles.img_area}>
                {rentProviders.map((provider, index) => (
                  <div key={index}>
                    <img
                      src={`${provider.logo_path}`}
                      alt={`logo_${provider.provider_name}`}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          {buyProviders && buyProviders.length > 0 && (
            <>
              <h3 className={styles.type_payment}>Buy</h3>
              <div className={styles.img_area}>
                {buyProviders.map((provider, index) => (
                  <div key={index}>
                    <img
                      src={`${provider.logo_path}`}
                      alt={`logo_${provider.provider_name}`}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <p style={{ fontSize: 30 }}>Doesn't have any providers</p>
      )}
    </div>
  );
}

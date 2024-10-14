# Brew Buddy 🍺

## Overview

Brew Buddy is your ultimate companion for discovering amazing breweries! This web application allows users to search for breweries by city, state, or country, save their favorite breweries, and explore detailed information about each establishment.

## Features

- **Easy Search**: Find breweries by city, state, or country with just a few clicks.
- **Favorites**: Save your favorite breweries for quick access anytime.
- **Detailed Info**: Get comprehensive information about each brewery, including type, location, contact details, and website.
- **Interactive Map**: View your favorite breweries on an interactive map.
- **Responsive Design**: Enjoy a seamless experience across desktop and mobile devices.

## Tech Stack

- React.js
- React Router for navigation
- Mapbox GL for map integration
- Bulma CSS framework for styling
- React Toastify for notifications

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/brew-buddy.git
   ```

2. Install dependencies:
   ```
   cd brew-buddy
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Mapbox access token:
   ```
   VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Usage

1. **Home Page**: Start your journey by clicking "Start Exploring" or use the navigation menu.
2. **Search**: Use the search page to find breweries by city, state, or country.
3. **Favorites**: Save breweries to your favorites list for quick access.
4. **About**: Learn more about the Brew Buddy project and its creators.

## Detailed Feature Breakdown

### Search Functionality

The search feature in Brew Buddy is implemented in the `Search.jsx` component. Here's how it works:

1. **User Input**: Users can search for breweries by city, state, or country using separate input fields.

2. **API Integration**: When a search is initiated, the application makes a request to the Open Brewery DB API.

3. **Pagination**: Search results are paginated, displaying 9 breweries per page for better user experience and performance.

4. **State Management**: The component uses React's `useState` hook to manage the search terms, loading state, and current page.

5. **Error Handling**: The search function includes error handling to manage API request failures and display appropriate messages to the user.

Example of the search function:

```javascript
const handleCitySearch = async () => {
  if (!citySearchTerm.trim()) return;
  setLoading(true);
  await onSearch({ city: citySearchTerm.trim() });
  setCitySearchTerm('');
  setLoading(false);
};
```

### Mapbox API Integration

Mapbox is used in the `Favourites.jsx` component to display an interactive map of saved breweries. Here's how it's implemented:

1. **Initialization**: The map is initialized in a `useEffect` hook when the component mounts.

2. **Marker Creation**: For each favorite brewery with latitude and longitude data, a marker is added to the map.

3. **Popups**: Each marker has an associated popup that displays the brewery name on hover.

4. **Navigation Controls**: The map includes navigation controls for zooming and panning.

Example of Mapbox integration:

```javascript
useEffect(() => {
  if (favourites.length > 0 && mapRef.current) {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-98.35, 39.5],
      zoom: 4,
    });

    map.addControl(new mapboxgl.NavigationControl());

    favourites.forEach((brewery) => {
      if (brewery.latitude && brewery.longitude) {
        const marker = new mapboxgl.Marker()
          .setLngLat([brewery.longitude, brewery.latitude])
          .addTo(map);

        // Popup configuration
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
          closeOnClick: false,
        }).setText(brewery.name);

        marker.setPopup(popup);
        marker.getElement().addEventListener("mouseenter", () => popup.addTo(map));
        marker.getElement().addEventListener("mouseleave", () => popup.remove());
      }
    });

    return () => map.remove();
  }
}, [favourites]);
```

### Styling

Brew Buddy uses a combination of Bulma CSS framework and custom CSS for styling:

1. **Bulma Integration**: Bulma classes are used throughout the components for responsive layout and pre-styled elements. For example:

   ```html
   <div className="container mt-5">
     <div className="columns is-multiline">
       <!-- Content here -->
     </div>
   </div>
   ```

2. **Custom CSS**: Custom styles are defined in component-specific CSS files (e.g., `Home.css`, `Search.css`) for unique styling needs.

3. **Animations**: CSS animations are used to enhance the user experience, particularly on the home page:

   ```css
   .fade-in {
     opacity: 0;
     animation: fadeIn 1s ease-in forwards;
   }

   @keyframes fadeIn {
     from { opacity: 0; }
     to { opacity: 1; }
   }
   ```

4. **Responsive Design**: The combination of Bulma's responsive classes and custom media queries ensures the application looks great on various screen sizes.

5. **Theme**: A consistent color scheme is maintained throughout the application, with primary colors defined in the CSS variables.

By leveraging Bulma for the core styling and adding custom CSS for specific needs, Brew Buddy achieves a polished, responsive, and visually appealing design.

## API

Brew Buddy uses the [Open Brewery DB API](https://www.openbrewerydb.org/) to fetch brewery data.

## Contributing

We welcome contributions to Brew Buddy! Please feel free to submit issues, fork the repository and send pull requests!

## License

This project is licensed under the MIT License.

## Creators

- Esosa - GitHub: [Esosa-web](https://github.com/Esosa-web)
- Will - GitHub: [WS-Bit](https://github.com/WS-Bit)

## Acknowledgments

- Thanks to General Assembly for the project inspiration.
- Shoutout to all the breweries out there keeping our mugs full!

Cheers! 🍻
# food-bridge-backend

Design & Develop a Backend System for Delivery/Dining Food Portal like Swiggy or Zomato. The 
business idea is to bridge the gap between service providers (Food Outlets/Restaurants) and service 
receivers (Consumers - Users).
• Service Receivers(Consumers) can place their food orders or book dining. They can
avail all these services via placing an order through the Mobile App / Portal. 
• Create a Login forthe application with pre-defined users and aftersuccessful login, user 
can start search based on below criteria:
o Search should have all input parameters as Area Code (Like Sector 29), Food & 
Restaurant search.
o Once Search istriggered afterspecifying the search parameters, it will display the 
search results.
o Users can mark restaurants as favorite for empty search result it should come at top.
• Next Step, User can add in-stock items & place order for a restaurant.
• User should be able to fetch restaurant-related details, such as managing restaurant profiles, 
operating hours, and location information.
• For Delivery – User should be able to fetch food items offered by restaurants, including their 
prices, descriptions, and availability & category.
• For Dining – Select restaurant, date, time slot & no. of people. 
• When an orderis placed, order invoice will be generated at the backend system and then
various background validation happens in the system with respect to availability & 
payment confirmation… so on and so forth. Based on validation status, order status will 
be updated in the system.
• The consumer will also get a notification with respect to the order confirmation and
service provider details & Food outlet will also get the Detailed Description for customer 
& Other details (ex- Address, Contact Number of Consumer & order details).
• In case of any failure (eg; payment failure, order rejected by provider), consumer will
receive notification for order cancelled. I want to use dotnet core web api

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/food-bridge-backend.git
cd food-bridge-backend
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

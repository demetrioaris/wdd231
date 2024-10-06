// Function to fetch event data from the JSON file
export async function getEvents() {
    try {
        const response = await fetch("data/events.json"); // Replace with actual path
        const data = await response.json();
        return data.events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}

// Function to display only the next 3 events in the HTML element with ID 'events-list'
export async function displayEvents() {
    const events = await getEvents();
    const eventsContainer = document.getElementById("events-list");

    // Clear any existing content
    eventsContainer.innerHTML = "";

    if (events.length === 0) {
        eventsContainer.innerHTML = "<p>No upcoming events at this time.</p>";
        return;
    }

    // Sort events by date (ascending order, closest events first)
    events.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Limit the displayed events to the next 3
    const nextEvents = events.slice(0, 3);

    // Loop through the next 3 events and create HTML to display
    nextEvents.forEach((event) => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");

        eventElement.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${new Date(event.date).toDateString()}</p>
        `;

        // Append each event to the events container
        eventsContainer.appendChild(eventElement);
    });
}

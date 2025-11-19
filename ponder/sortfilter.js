// -------------------------------------------------------
// DATA
// -------------------------------------------------------

// Activity 1 list
const simpleList = [
  "banana",
  "Apple",
  "cherry",
  "blueberry",
  "Elderberry"
];

// Activity 3 — list of objects
const hikes = [
  {
    name: "Teton Canyon",
    description: "Beautiful forest trail",
    distance: 3.3,
    difficulty: "easy",
    tags: ["forest", "idaho", "scenic"]
  },
  {
    name: "Wind Caves",
    description: "Steep but rewarding",
    distance: 4.0,
    difficulty: "moderate",
    tags: ["wind", "caves", "utah", "mountain"]
  },
  {
    name: "Darby Canyon",
    description: "Hike to the stunning Darby Wind Caves",
    distance: 5.1,
    difficulty: "moderate",
    tags: ["darby", "wind", "caves", "idaho"]
  }
];

// -------------------------------------------------------
// Activity 1 — Sorting Strings
// -------------------------------------------------------

document.getElementById("sortStringsBtn").addEventListener("click", () => {
  // Default sort (case-sensitive!)
  const defaultSorted = [...simpleList].sort();

  // Custom compare function — case-insensitive alphabetical
  const customSorted = [...simpleList].sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  const output = document.getElementById("stringResults");
  output.innerHTML = `
    <li><strong>Default Sort:</strong> ${defaultSorted.join(", ")}</li>
    <li><strong>Custom (case-insensitive) Sort:</strong> ${customSorted.join(", ")}</li>
  `;
});

// -------------------------------------------------------
// Activity 2 — Filtering Strings
// -------------------------------------------------------

function searchList(list, query) {
  const q = query.toLowerCase();
  return list.filter(item => item.toLowerCase().includes(q));
}

document.getElementById("filterStringsBtn").addEventListener("click", () => {
  const query = document.getElementById("stringQuery").value;
  const filtered = searchList(simpleList, query);

  const output = document.getElementById("filterResults");
  output.innerHTML = filtered.map(i => `<li>${i}</li>`).join("");
});

// -------------------------------------------------------
// Activity 3 — Sorting + Filtering Objects
// -------------------------------------------------------

function searchHikes(hikes, query) {
  const q = query.toLowerCase();

  const filtered = hikes.filter(hike => {
    const inName = hike.name.toLowerCase().includes(q);
    const inDesc = hike.description.toLowerCase().includes(q);

    // search inside tags (array of strings)
    const inTags = hike.tags.find(tag => tag.toLowerCase().includes(q));

    return inName || inDesc || inTags;
  });

  // Sort by distance (ascending)
  filtered.sort((a, b) => a.distance - b.distance);

  return filtered;
}

document.getElementById("filterHikesBtn").addEventListener("click", () => {
  const query = document.getElementById("hikeQuery").value;
  const results = searchHikes(hikes, query);

  const output = document.getElementById("hikeResults");
  output.innerHTML = results
    .map(
      h => `<li><strong>${h.name}</strong> — ${h.description} (${h.distance} miles)</li>`
    )
    .join("");
});

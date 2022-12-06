var category_filters = [
  "PRACTITIONER/PROFESSIONAL/ACADEMICIAN",
  "RESEARCH SCHOLAR",
  "UG/PG",
];
var track_filters = [
  "ICT & Emerging Technologies for Societal Well-Being",
  "Yoga, Yagya & Ayurveda",
  "Social Work Profession & Yoga ,Yagya, Ayurveda",
  "Health, Rural, Cultural & Spiritual Tourism",
];

document.querySelectorAll("input[type='checkbox']").forEach((c) => {
  c.addEventListener("change", (e) => {
    const filter_key = e.target.name;
    const filter_value = e.target.value;
    if (c.checked) {
      if (filter_key === "category") {
        if (!category_filters.includes(filter_value)) {
          category_filters.push(filter_value);
        }
      } else if (filter_key === "track") {
        if (!track_filters.includes(filter_value)) {
          track_filters.push(filter_value);
        }
      }
      getAll().then(async (data) => {
        const filtered_data = await getFilteredDataBy(
          category_filters,
          track_filters,
          data
        );
        document.querySelector(
          "#counter"
        ).innerText = `(${filtered_data.length})`;
        filtered_data.forEach((paper) => {
          addPaper(paper);
        });
      });
    } else {
      if (filter_key === "category") {
        category_filters = category_filters.filter((value) => {
          return value != filter_value;
        });
      } else if (filter_key === "track") {
        track_filters = track_filters.filter((value) => {
          return value != filter_value;
        });
      }
      getAll().then(async (data) => {
        const filtered_data = await getFilteredDataBy(
          category_filters,
          track_filters,
          data
        );
        document.querySelector(
          "#counter"
        ).innerText = `(${filtered_data.length})`;
        filtered_data.forEach((paper) => {
          addPaper(paper);
        });
      });
    }
  });
});

const search_form = document.querySelector("#search-form");
search_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const search_field = search_form.elements["search-field"].value;
  const search_value = search_form.elements["search-value"].value;
  let search_results = await searchBy(search_field, search_value);
  await search_results.data.forEach((i) => {
    addPaper(i.item);
  });
});

document.querySelector("#input-search").addEventListener("focus", async (e) => {
  e.target.value = await navigator.clipboard.readText().trim();
});

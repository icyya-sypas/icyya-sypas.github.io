const API =
  "https://script.google.com/macros/s/AKfycbzJn4oaMEkwwT5gy_5oPm_pZFzQlDj6km0d0TNQYnMI9kdoVCZMbv5bOh8xG6z1cXE/exec";

const fetchWithAbort = async (resource, options = {}) => {
  if (window.controller) {
    window.controller.abort();
  }
  window.controller = new AbortController();
  window.signal = window.controller.signal;
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  return response;
};

const getAll = async () => {
  document.querySelector("#counter").innerText = `(Loading...)`;
  document.querySelector("#results").innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: transparent display: block"
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      >
      <circle cx="18" cy="50" r="4" fill="#93dbe9">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="27" cy="61.31370849898476" r="4" fill="#689cc5">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.125s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="36" cy="66" r="4" fill="#5e6fa3">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.25s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="45" cy="61.31370849898476" r="4" fill="#3b4368">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.375s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="54" cy="50" r="4" fill="#93dbe9">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.5s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="63" cy="38.68629150101524" r="4" fill="#689cc5">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.625s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="72" cy="34" r="4" fill="#5e6fa3">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.75s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="81" cy="38.68629150101523" r="4" fill="#3b4368">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.875s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      </svg>`;
  try {
    const res = await fetchWithAbort(API);
    if (res.status === 200) {
      const data = await res.json();
      document.querySelector("#results").innerHTML = "";
      document.querySelector("#counter").innerText = `(${data.data.length})`;
      return data.data;
    } else {
      document.querySelector("#counter").innerText = `(0)`;
      return { data: [] };
    }
  } catch (err) {
    return err;
  }
};

const searchBy = async (key, value) => {
  document.querySelector("#counter").innerText = `(Loading...)`;
  document.querySelector("#results").innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: transparent display: block"
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      >
      <circle cx="18" cy="50" r="4" fill="#93dbe9">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="27" cy="61.31370849898476" r="4" fill="#689cc5">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.125s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="36" cy="66" r="4" fill="#5e6fa3">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.25s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="45" cy="61.31370849898476" r="4" fill="#3b4368">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.375s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="54" cy="50" r="4" fill="#93dbe9">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.5s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="63" cy="38.68629150101524" r="4" fill="#689cc5">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.625s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="72" cy="34" r="4" fill="#5e6fa3">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.75s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="81" cy="38.68629150101523" r="4" fill="#3b4368">
        <animate
          attributeName="cy"
          values="34;66;34"
          times="0;0.5;1"
          dur="1s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          begin="-0.875s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      </svg>`;
  try {
    const res = await fetchWithAbort(API);
    if (res.status === 200) {
      const data = await res.json();
      document.querySelector("#results").innerHTML = "";
      if (key === "all") {
        const keys = ["reg_no", "full_name", "title", "email", "mobile"];
        const options = {
          isCaseSensitive: false,
          includeScore: true,
          shouldSort: true,
          // includeMatches: true,
          findAllMatches: true,
          minMatchCharLength: value.length,
          // location: 0,
          // threshold: 0.6,
          // distance: 100,
          // useExtendedSearch: false,
          // ignoreLocation: false,
          // ignoreFieldNorm: false,
          // fieldNormWeight: 1,
          keys: keys,
        };
        console.log(options, value);
        const fuse = new Fuse(data.data, options);
        const search_results_all = fuse.search(value);
        document.querySelector(
          "#counter"
        ).innerText = `(${search_results_all.length})`;
        return { data: search_results_all };
      } else {
        const keys = [key];
        const options = {
          isCaseSensitive: false,
          includeScore: true,
          shouldSort: true,
          // includeMatches: true,
          findAllMatches: true,
          minMatchCharLength: value.length,
          // location: 0,
          // threshold: 0.6,
          // distance: 100,
          // useExtendedSearch: false,
          // ignoreLocation: false,
          // ignoreFieldNorm: false,
          // fieldNormWeight: 1,
          keys: [key],
        };
        console.log(options, value);
        const fuse = new Fuse(data.data, options);
        const search_results_single = fuse.search(value);
        document.querySelector(
          "#counter"
        ).innerText = `(${search_results_single.length})`;
        return { data: search_results_single };
      }
    } else {
      document.querySelector("#counter").innerText = `(0)`;
      return { data: [] };
    }
  } catch (err) {
    return err;
  }
};

const getFilteredDataBy = (category_filters, track_filters, data) => {
  if (category_filters.length > 0 && track_filters.length > 0) {
    return data.filter((el) => {
      if (
        category_filters.includes(el.category) &&
        track_filters.includes(el.track)
      ) {
        return true;
      }
    });
  }
};

const addPaper = (paper) => {
  const outer_html = `
  <a class="result-title">
  <div class="reg-no">
    <span class="result-section-title">REGISTRATION NUMBER:</span>
    <span>${paper.reg_no ? paper.reg_no : "N/A"}</span>
  </div>  
  <span>${paper.paper_title ? paper.paper_title : "N/A"}</span>
  <div class="author">
    <span class="result-section-title">by</span>
    <span>${paper.full_name.trim()}</span>
  </div>   
  </a> 
  <div class='col'>
  <div class="venue">
    <span class="result-section-title">VENUE:</span>
    <span>${paper.venue ? paper.venue : "N/A"}</span>
  </div>
  <div class="time">
    <span class="result-section-title">TIME:</span>
    <span>${paper.time ? paper.time : "N/A"}</span>
  </div>   
  </div>
  <div>
    <span class="result-section-title">UNIVERSITY:</span>
    <span>${paper.university ? paper.university : "N/A"}</span>
  </div>
  <div class="category">
    <span class="result-section-title">CATEGORY:</span>
    <span>${paper.category ? paper.category : "N/A"}</span>
  </div>
  <div class="track">
    <span class="result-section-title">TRACK: </span>
    <span>${paper.track ? paper.track : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">UNIVERSITY:</span>
    <span>${paper.university ? paper.university : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">TECHNICAL SESSION:</span>
    <span>${paper.technical_session ? paper.technical_session : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">EMAIL:</span>
    <span>${paper.email ? paper.email : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">MOBILE:</span>
    <span>${paper.mobile ? paper.mobile : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">MODE OF PRESENTATION:</span>
    <span>${paper.m_o_p ? paper.m_o_p : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">CERTIFICATE ISSUED TO:</span>
    <span>${
      paper.certificate_issed_to ? paper.certificate_issed_to : "N/A"
    }</span>
  </div>
  <div>
    <span class="result-section-title">KIT BAG ISSUED TO:</span>
    <span>${paper.kit_bag_issued_to ? paper.kit_bag_issued_to : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">REMARKS:</span>
    <span>${paper.remarks ? paper.remarks : "N/A"}</span>
  </div>
  <div>
    <span class="result-section-title">PAPER:</span>
    <span>${paper.paper ? paper.paper : "N/A"}</span>
  </div>`;
  const tmp_element = document.createElement("article");
  tmp_element.className = "result-item";
  tmp_element.innerHTML = outer_html;
  document.querySelector("#results").appendChild(tmp_element);
};

window.onload = () => {
  getAll()
    .then((data) => {
      data.forEach((paper) => {
        addPaper(paper);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

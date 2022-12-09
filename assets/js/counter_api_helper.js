const API =
  "https://script.google.com/macros/s/AKfycbyP_XSJHyNV9gdXfwrQRxGFBPWsV-nxqvO-W5ADoGCG2Fxw3W4ZTw_rADgZzCjzFtaBwg/exec";

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

const getFormattedDate = (n) => {
  var d = [n.getDate(), n.getMonth() + 1, n.getFullYear()];
  return d.join("/");
};

const addPaper = (row) => {
  const date = new Date(row.day);
  const outer_html = `
  <span class='reg-no'>Registration no: ${row.reg_no}</span>
  <br/>
  <h2>${row.paper_title}</h2>
  <section class='author'>By  -  <i>${row.full_name}</i></section>
  <br/>
  <section class='four-cols'>
    <div class='col'>
      <span class='col-title'>Day</span>
      <span class='col-body'>${getFormattedDate(date)}</span>
    </div>
    <div class='col'>
      <span class='col-title'>Time</span>
      <span class='col-body'>${row.time}</span>
    </div>
    <div class='col'>
      <span class='col-title'>Venue</span>
      <span class='col-body'>${row.venue}</span>
    </div>
    <div class='col'>
      <span class='col-title'>Tech. Session</span>
      <span class='col-body'>${row.technical_session}</span>
    </div>
  </section>
  <section class='three-cols'>
    <div class='col'>
      <span class='col-title'>Track</span>
      <span class='col-body'>${row.track}</span>
    </div>
    <div class='col'>
      <span class='col-title'>Category</span>
      <span class='col-body'>${row.category}</span>
    </div>
    <div class='col' style='background:${
      row.m_o_p === "ONLINE" ? "#ff6262" : "#50cc50"
    }'>
      <span class='col-title'>Presentation Mode</span>
      <span class='col-body'>${row.m_o_p}</span>
    </div>
  </section>  
  `;
  const tmp_element = document.createElement("article");
  tmp_element.className = "schedule-item";
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

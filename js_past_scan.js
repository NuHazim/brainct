const scans = [
    "past_scan1", "past_scan2", "past_scan3", "past_scan4",
    "past_scan5", "past_scan6", "past_scan7", "past_scan8",
    "past_scan9", "past_scan10", "past_scan11", "past_scan12",
    "past_scan13", "past_scan14", "past_scan15", "past_scan16"
];

const scanNames = [
    "Glenolabral articular disruption (GLAD) lesion",
    "Intracranial epidural abscess",
    "Prostatic abscess",
    "Lung adenocarcinoma presenting as pure ground-glass nodule",
    "Pantothenate kinase-associated neurodegeneration (PKAN)",
    "Zebra spleen",
    "Breast within a breast appearance",
    "Epiphrenic diverticulum",
    "Tubal block with IVP-like appearance",
    "Lymphocytic hypophysitis - parasellar T2 dark sign",
    "Choledocholithiasis (MRCP)",
    "Spondylolisthesis - grade II",
    "Split atlas with atlantoaxial synostosis",
    "Osteopoikilosis",
    "Epidural extramedullary hematopoiesis",
    "Fahr syndrome"
];

const itemsPerPage = 8;
let currentPage = 1;

const container = document.getElementById("scan-container");
const paginationContainer = document.getElementById("pagination-container");

function displayImages(page) {
    container.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const pageScans = scans.slice(start, end);
    const pageScanNames = scanNames.slice(start, end);

    pageScans.forEach((scan, index) => {
        const col = document.createElement("div");
        col.className = "scan-item";
        col.innerHTML = `
            <img src="img/${scan}.png" alt="${pageScanNames[index]}">
            <p>${pageScanNames[index]}</p>
        `;
        container.appendChild(col);
    });
}

function setupPagination(totalItems, itemsPerPage) {
    paginationContainer.innerHTML = "";
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        if (i === currentPage) button.classList.add("active");

        button.addEventListener("click", () => {
            currentPage = i;
            displayImages(currentPage);
            setupPagination(scans.length, itemsPerPage);
        });

        paginationContainer.appendChild(button);
    }
}

displayImages(currentPage);
setupPagination(scans.length, itemsPerPage);

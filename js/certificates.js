// Dynamically load certificates from the certificates folder
$(document).ready(function () {
  // List of certificate image files in the images/Certificates folder
  const certificateFiles = [
    "ICASF.png",
    "QPAIN.png",
    "ICTOB.PNG",
    "CISCO.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
  ];

  // Build certificates array from folder files
  const certificates = certificateFiles.map((filename) => ({
    type: "image",
    src: "images/Certificates/" + filename,
    alt: "Certificate " + filename.replace(/\.[^/.]+$/, ""),
  }));

  const slidesContainer = $("#certificateSlides");
  const indicatorsContainer = $("#certificateIndicators");

  // Clear existing content
  slidesContainer.empty();
  indicatorsContainer.empty();

  // Generate slides and indicators
  certificates.forEach((cert, index) => {
    const isActive = index === 0 ? "active" : "";

    let slideContent = "";
    if (cert.type === "iframe") {
      slideContent = `
        <div class="carousel-item ${isActive}">
          <div class="certificate-slide">
            <iframe src="${cert.src}" allowfullscreen></iframe>
          </div>
        </div>
      `;
    } else if (cert.type === "image") {
      slideContent = `
        <div class="carousel-item ${isActive}">
          <div class="certificate-slide">
            <img src="${cert.src}" alt="${
        cert.alt || "Certificate"
      }" class="d-block w-100" style="object-fit: contain; height: 70vh;">
          </div>
        </div>
      `;
    }

    slidesContainer.append(slideContent);

    // Add indicator
    indicatorsContainer.append(`
      <li data-target="#certificatesCarousel" data-slide-to="${index}" class="${isActive}"></li>
    `);
  });

  // Initialize carousel
  $("#certificatesCarousel").carousel({
    interval: false,
    wrap: true,
  });
});

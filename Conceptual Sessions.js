var busObject = {
  vehicle: "bus",
  imageUrl:
    "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  farePerKilo: 3,
  description:
    "Nonumy eirmod sea no sadipscing sed ea, sit gubergren clita at diam, dolor lorem ea accusam lorem amet dolor sit ut, ipsum aliquyam nonumy rebum dolore dolores. Amet sea sadipscing.",
};
var carObject = {
  vehicle: "car",
  imageUrl:
    "https://images.unsplash.com/photo-1605557626697-2e87166d88f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  farePerKilo: 3,
  description:
    "Nonumy eirmod sea no sadipscing sed ea, sit gubergren clita at diam, dolor lorem ea accusam lorem amet dolor sit ut, ipsum aliquyam nonumy rebum dolore dolores. Amet sea sadipscing.",
};
var bikeObject = {
  vehicle: "bike",
  imageUrl:
    "https://images.unsplash.com/photo-1568802951974-fb4cc491a229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  farePerKilo: 3,
  description:
    "Nonumy eirmod sea no sadipscing sed ea, sit gubergren clita at diam, dolor lorem ea accusam lorem amet dolor sit ut, ipsum aliquyam nonumy rebum dolore dolores. Amet sea sadipscing.",
};

function displayServices(service) {
  const mainSection = document.getElementById("main-section");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card mb-3" mx-auto style="max-width: 800px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${service.imageUrl}"
                class="img-fluid rounded-start h-100"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
                <p class="card-text">
                  ${service.description}
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>`;

  mainSection.appendChild(div);
}
displayServices(busObject);
displayServices(carObject);
displayServices(bikeObject);

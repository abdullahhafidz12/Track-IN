const inventory = [
  {name:"Rice Cooker", meta:"Dibeli oleh Yusuf • 12 Agst", price:"Rp 450.000"},
  {name:"Kipas Angin", meta:"Dibeli oleh Bagus • 15 Agst", price:"Rp 300.000"},
  {name:"Galon", meta:"Dibeli oleh Andi • 18 Agst", price:"Rp 20.000"}
];

const inventoryList = document.getElementById("inventoryList");
const modal = document.getElementById("cardModal");
const toast = document.getElementById("toast");
let toastTimer;

function renderInventory(){
  inventoryList.innerHTML = inventory.map(item => `
    <div class="item">
      <div><h4>${item.name}</h4><p>${item.meta}</p></div>
      <strong>${item.price}</strong>
    </div>
  `).join("");
}

function showToast(message){
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function openModal(){ modal.classList.remove("hidden"); }
function closeModal(){ modal.classList.add("hidden"); }

document.getElementById("addCardBtn").addEventListener("click", openModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("cancelModal").addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if(e.target === modal) closeModal();
});

document.getElementById("saveModal").addEventListener("click", () => {
  document.querySelectorAll(".widget-options input").forEach(input => {
    const key = input.dataset.key;
    const widget = document.querySelector(`[data-widget="${key}"]`);
    if(widget) widget.style.display = input.checked ? "" : "none";
  });
  closeModal();
  showToast("Pengaturan card berhasil disimpan.");
});

document.querySelectorAll("[data-toast]").forEach(btn => {
  btn.addEventListener("click", () => showToast(btn.dataset.toast));
});

document.getElementById("catatanBtn").addEventListener("click", () => {
  showToast("Menu Catatan dipilih.");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(x => x.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("periodSelect").addEventListener("change", e => {
  showToast(`Periode ${e.target.value} dipilih.`);
});

renderInventory();

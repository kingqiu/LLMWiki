/**
 * LLM Wiki — Bilingual Toggle
 * Shows/hides Chinese translations (.zh-trans elements) on each page.
 * State is persisted in localStorage and survives SPA navigation.
 */

const STORAGE_KEY = "llm-wiki-bilingual"

function getBilingualState(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) return stored === "true"
  // Default: off
  return false
}

function setBilingualState(enabled: boolean) {
  localStorage.setItem(STORAGE_KEY, String(enabled))
}

function applyBilingualState(enabled: boolean) {
  const translations = document.querySelectorAll<HTMLElement>(".zh-trans")
  translations.forEach((el) => {
    el.style.display = enabled ? "block" : "none"
  })
  const btn = document.getElementById("bilingual-toggle")
  if (btn) {
    btn.setAttribute("aria-pressed", String(enabled))
    btn.title = enabled ? "Hide Chinese translation" : "Show Chinese translation"
    btn.innerHTML = enabled ? "中" : "中"
    btn.classList.toggle("active", enabled)
  }
}

function createToggleButton() {
  if (document.getElementById("bilingual-toggle")) return

  const btn = document.createElement("button")
  btn.id = "bilingual-toggle"
  btn.className = "bilingual-toggle"
  btn.innerHTML = "中"
  btn.title = "Show Chinese translation"
  btn.setAttribute("aria-pressed", "false")
  btn.setAttribute("aria-label", "Toggle Chinese translation")

  btn.addEventListener("click", () => {
    const current = getBilingualState()
    const next = !current
    setBilingualState(next)
    applyBilingualState(next)
  })

  document.body.appendChild(btn)
}

document.addEventListener("nav", () => {
  createToggleButton()
  applyBilingualState(getBilingualState())
})

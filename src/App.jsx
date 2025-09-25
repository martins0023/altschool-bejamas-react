// File: src/App.jsx
import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Featured from './components/Featured'
import SidebarFilters from './components/SidebarFilters'
import MobileFilterPanel from './components/MobileFilterPanel'
import ProductGrid from './components/ProductGrid'
import Pagination from './components/Pagination'
import { cartImage1, cartImage2, cartImage3, cartImage4, filter } from './assets'
import { Filter } from 'lucide-react'

const productsSeed = [
  { id: 1, category: 'People', title: 'Red Bench', price: '$3.89', image: cartImage1, badge: 'Best Seller' },
  { id: 2, category: 'Food', title: 'Egg Balloon', price: '$93.89', image: cartImage2 },
  { id: 3, category: 'Food', title: 'Egg Balloon', price: '$93.89', image: cartImage3 },
  { id: 4, category: 'Fashion', title: 'Egg Balloon', price: '$93.89', image: cartImage1 },
  { id: 5, category: 'Food', title: 'Egg Balloon', price: '$93.89', image: cartImage4 },
  { id: 6, category: 'Food', title: 'Egg Balloon', price: '$93.89', image: cartImage2 }
]
console.log(cartImage1, cartImage2)

export default function App() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [featuredOpen, setFeaturedOpen] = useState(false)
  const [products] = useState(productsSeed)
  const mobileRef = useRef(null)
  const featuredRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (mobileFilterOpen) {
        const panel = mobileRef.current
        const toggleBtn = document.querySelector('.menu-toggle')
        if (panel && !panel.contains(e.target) && toggleBtn && !toggleBtn.contains(e.target)) {
          setMobileFilterOpen(false)
        }
      }
      if (featuredOpen) {
        const featuredEl = featuredRef.current
        const image = document.querySelector('.featured-image')
        const overlay = document.querySelector('.image-overlay')
        if (featuredEl && !featuredEl.contains(e.target) && image && !image.contains(e.target) && overlay && !overlay.contains(e.target)) {
          setFeaturedOpen(false)
        }
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [mobileFilterOpen, featuredOpen])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768 && mobileFilterOpen) setMobileFilterOpen(false)
      if (window.innerWidth > 1024 && featuredOpen) setFeaturedOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileFilterOpen, featuredOpen])

  function toggleMobileFilter() { setMobileFilterOpen(v => !v) }
  function toggleFeaturedSidebar() { setFeaturedOpen(v => !v) }

  function clearMobileSelection() {
    const panel = mobileRef.current
    if (!panel) return
    panel.querySelectorAll('input[type="checkbox"]').forEach(i => i.checked = false)
    console.log('Mobile selection cleared')
  }

  function saveMobileSelection() {
    setMobileFilterOpen(false)
    console.log('Mobile selection saved')
  }

  function handleAddToCart(e) {
    const btn = e.currentTarget
    const original = btn.textContent
    btn.textContent = 'ADDED!'
    btn.style.background = '#28a745'
    setTimeout(() => {
      btn.textContent = original
      btn.style.background = ''
    }, 1300)
  }

  return (
    <div className="main-wrapper min-h-screen bg-white">
      <Header mobileFilterOpen={mobileFilterOpen} toggleMobileFilter={toggleMobileFilter} />

      <main className="main-content container">
        <Featured featuredOpen={featuredOpen} setFeaturedOpen={setFeaturedOpen} />

        <div className="store-section">
          <SidebarFilters />

          <MobileFilterPanel ref={mobileRef} open={mobileFilterOpen} onClose={() => setMobileFilterOpen(false)} onClear={clearMobileSelection} onSave={saveMobileSelection} />

          <section className="content-area">
            <div className="content-header">
              <h2 className="section-title">Photography <span className="dimmed">/ Premium Photos</span></h2>
              <div className="sort-controls">
                <button className="" aria-expanded={mobileFilterOpen} aria-label="Open filters" onClick={toggleMobileFilter}>
                  <img src={filter} className="filter-image" alt="filter" />
                  {/* <Filter className="text-black w-5 h-5"/> */}
                </button>
                <span className="sort-label">Sort By</span>
                <select className="sort-select" aria-label="Sort by">
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
            </div>

            <ProductGrid products={products} handleAddToCart={handleAddToCart} />

            <Pagination />
          </section>
        </div>
      </main>
    </div>
  )
}